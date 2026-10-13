import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { breakpoints, mediaQueries } from '../../../../config/breakpoints';

gsap.registerPlugin(ScrollTrigger);

// Comportamiento touch: el scroll selecciona un índice, sin capturar gestos.
const SLIDE_SCROLL_MULTIPLIER = 1.0;
const EXIT_SCROLL_MULTIPLIER = 1.1;
const SLIDE_TRANSITION_DURATION = 0.5;
// Comportamiento desktop: la timeline sigue el scroll continuo.
const DESKTOP_HOLD_DISTANCE = 0.6;
const DESKTOP_SCRUB_DURATION = 0.2;
const KEYBOARD_DURATION = 0.75;
// Visibilidad por ancho: S, M, L, XL, XXL. No depende de la capacidad táctil.
const LOTTIE_VISIBILITY = [0.5, 0.5, 0.9, 0.9, 0.9] as const;
const breakpointWidths = Object.values(breakpoints);

function getLottieThreshold() {
	const width = document.documentElement.clientWidth;
	const range = breakpointWidths.reduce((current, minimum, index) => width >= minimum ? index : current, 0);
	return LOTTIE_VISIBILITY[range];
}

// Base Native: reproducción independiente del scroll y una medición común del teléfono.
function bindLottiePlayback(scene: HTMLElement, animations: HTMLElement[], reduced: boolean, touch: boolean, signal: AbortSignal) {
	const players = animations.map(animation => animation.querySelector('lottie-animation'));
	let playing = -1;
	let current = 0;
	let direction = 1;
	let near = false;
	let transitioning = false;
	let frame = 0;
	let threshold = getLottieThreshold();
	let viewportWidth = document.documentElement.clientWidth;
	let viewportHeight = document.documentElement.clientHeight;
	const pause = () => {
		if (playing < 0) return;
		players[playing]?.pause?.();
		playing = -1;
	};
	const prepare = (index: number, nextDirection = direction) => {
		current = index;
		direction = nextDirection;
		if (signal.aborted || !near) return;
		for (const player of [players[index], players[index + direction]]) {
			player?.prepare?.();
			if (reduced) {
				player?.setLoop?.(false);
				player?.setProgress?.(1);
			}
		}
	};
	const measure = () => {
		frame = 0;
		if (signal.aborted) return;
		if (!near || document.hidden || (touch && transitioning)) {
			pause();
			return;
		}
		const bounds = animations[0]?.parentElement?.getBoundingClientRect();
		if (!bounds) return;
		const sceneRect = scene.getBoundingClientRect();
		const left = Math.max(bounds.left, sceneRect.left);
		const right = Math.min(bounds.right, sceneRect.right);
		const top = Math.max(bounds.top, sceneRect.top);
		const bottom = Math.min(bounds.bottom, sceneRect.bottom);
		const area = Math.max(0, right - left) * Math.max(0, bottom - top);
		let candidate = -1;
		if (area && !document.hidden) {
			candidate = animations.findIndex(animation => {
				if (getComputedStyle(animation).visibility === 'hidden') return false;
				const rect = animation.getBoundingClientRect();
				const width = Math.max(0, Math.min(rect.right, right, viewportWidth) - Math.max(rect.left, left, 0));
				const height = Math.max(0, Math.min(rect.bottom, bottom, viewportHeight) - Math.max(rect.top, top, 0));
				return width * height / area >= threshold;
			});
		}
		if (candidate === playing || (candidate >= 0 && !players[candidate]?.play)) return;
		pause();
		playing = candidate;
		if (candidate < 0) return;
		const player = players[candidate];
		player?.prepare?.();
		player?.setLoop?.(!reduced);
		player?.setProgress?.(reduced ? 1 : 0);
		if (!reduced) player?.play?.();
	};
	// ScrollTrigger and native scroll may request the same check during one frame.
	const update = () => {
		if (!frame && !signal.aborted) frame = requestAnimationFrame(measure);
	};
	const setTransitioning = (moving: boolean) => {
		if (transitioning === moving) return;
		transitioning = moving;
		if (touch && moving) pause();
		update();
	};
	const resize = () => {
		threshold = getLottieThreshold();
		viewportWidth = document.documentElement.clientWidth;
		viewportHeight = document.documentElement.clientHeight;
		update();
	};
	const proximity = new IntersectionObserver(([entry]) => {
		near = entry.isIntersecting;
		prepare(current);
		update();
	}, { rootMargin: '400px 0px' });
	proximity.observe(scene);
	window.addEventListener('scroll', update, { passive: true, signal });
	window.addEventListener('resize', resize, { passive: true, signal });
	document.addEventListener('visibilitychange', update, { signal });
	void customElements.whenDefined('lottie-animation').then(() => { prepare(current); update(); });
	signal.addEventListener('abort', () => {
		proximity.disconnect();
		cancelAnimationFrame(frame);
		players.forEach(player => player?.pause?.());
	}, { once: true });
	return { prepare, update, setTransitioning };
}

class ScrollPanelsUnified extends HTMLElement {
	private media?: ReturnType<typeof gsap.matchMedia>;

	connectedCallback() {
		if (this.media) return;
		const scene = this.querySelector<HTMLElement>('.scroll-panels-unified__scene');
		const steps = Array.from(this.querySelectorAll<HTMLElement>('[data-step]'));
		if (!scene || steps.length < 2) return;
		// Seleccionar el control una sola vez; el ancho sigue siendo una decisión de CSS.
		const touch = window.matchMedia('(hover: none), (pointer: coarse)').matches
			|| 'ontouchstart' in window || navigator.maxTouchPoints > 0;
		this.dataset.input = touch ? 'touch' : 'desktop';
		const styles = getComputedStyle(this);
		const backgrounds = steps.map(step => step.dataset.context === 'dark'
			? styles.getPropertyValue('--scroll-panels-dark-background').trim() : styles.backgroundColor);
		this.media = gsap.matchMedia();
		this.media.add({ reduced: '(prefers-reduced-motion: reduce)', motion: '(prefers-reduced-motion: no-preference)', mobile: mediaQueries.osm }, context => {
			return this.initializeMotion(context, scene, steps, backgrounds, touch, !!context.conditions?.reduced, !!context.conditions?.mobile);
		});
	}

	disconnectedCallback() {
		// Cancelar transiciones CSS antes de restaurar estilos y permitir un remonte limpio.
		delete this.dataset.input;
		this.media?.revert();
		this.media = undefined;
	}

	private initializeMotion(context: gsap.Context, scene: HTMLElement, steps: HTMLElement[], backgrounds: string[], touch: boolean, reduced: boolean, sticky: boolean) {
		this.dataset.pinning = sticky ? 'sticky' : 'fixed';
		const abort = new AbortController();
		const animations = Array.from(this.querySelectorAll<HTMLElement>('[data-animation-step]'));
		const layers = [...steps, ...animations];
		const container = animations[0]?.parentElement;
		const playback = bindLottiePlayback(scene, animations, reduced, touch, abort.signal);
		const hold = touch ? 0 : DESKTOP_HOLD_DISTANCE;
		const panelDistance = hold + 1;
		const totalDistance = (steps.length - 1) * panelDistance + hold;
		let active = -1;
		let appearanceIndex = 0;
		let tween: gsap.core.Tween | undefined;
		let target: number | undefined;
		let restoring = false;
		let refreshIndex: number | undefined;
		let refreshProgress: number | undefined;
		let trigger: ScrollTrigger | undefined;

		// Registrar los estilos originales antes de que refresh invalide la timeline.
		// El pin ya restaura el scroll: evitar que Chrome lo compense otra vez al cambiar su altura.
		gsap.set(document.documentElement, { overflowAnchor: 'none' });
		gsap.set(this, { backgroundColor: backgrounds[0], '--scroll-panels-unified-border-color': '#d1d1d1' });
		if (touch) gsap.set(this, { '--scroll-panels-unified-transition-duration': `${SLIDE_TRANSITION_DURATION}s` });
		gsap.set(layers, {
			translate: (_, layer) => getComputedStyle(layer).translate,
			visibility: (_, layer) => getComputedStyle(layer).visibility,
		});
		const within = () => !!trigger && window.scrollY >= trigger.start && window.scrollY <= trigger.end;
		const layerIndex = (layer: HTMLElement) => Number(layer.dataset.step ?? layer.dataset.animationStep);
		// Touch escribe el destino una vez por índice; CSS interpola los colores.
		const setPanelAppearance = context.add('setPanelAppearance', (index: number) => {
			if (index === appearanceIndex) return;
			appearanceIndex = index;
			gsap.set(this, {
				backgroundColor: backgrounds[index],
				'--scroll-panels-unified-border-color': steps[index].dataset.context === 'dark' ? '#fff' : '#d1d1d1',
			});
		});
		// Preparar el color del fondo y las capas móviles; conservar el pin sin transform hints.
		const prepareLayers = (first?: number, last = first) => {
			const moving = !reduced && first !== undefined && within();
			this.toggleAttribute('data-transitioning', moving);
			container?.toggleAttribute('data-transitioning', moving);
			playback.setTransitioning(moving);
			layers.forEach(layer => layer.toggleAttribute('data-animating', moving && layerIndex(layer) >= first! && layerIndex(layer) <= last!));
		};
		const confirmPanel = context.add('confirmPanel', (index: number) => {
			if (index === active) return;
			active = index;
			this.dataset.activePanel = String(index);
			layers.forEach(layer => {
				const hidden = layerIndex(layer) !== index;
				layer.inert = hidden;
				layer.setAttribute('aria-hidden', String(hidden));
			});
			if (reduced) {
				gsap.set(layers, { visibility: (_, layer) => layerIndex(layer) === index ? 'visible' : 'hidden' });
			}
			if (touch || reduced) setPanelAppearance(index);
		});
		const cancelTransition = () => {
			tween?.kill();
			tween = undefined;
			target = undefined;
			prepareLayers();
		};

		// Una sola descripción de las animaciones; cada modo decide cómo recorrerla.
		const createPanelTimeline = () => {
			if (reduced) return;
			const panels = gsap.timeline({
				paused: true,
				defaults: { duration: 1, ease: touch ? 'none' : 'power2.inOut' },
				onUpdate: () => {
					if (!touch && trigger) updateDesktop(trigger);
					else {
						if (!within()) prepareLayers();
						playback.update();
					}
				},
			});
			steps.slice(1).forEach((step, i) => {
				const start = i * panelDistance + hold;
				panels.to(steps[i], { translate: '0 -100%' }, start)
					.to(step, { translate: '0 0%' }, start);
				if (!touch) {
					panels.to(this, {
						backgroundColor: backgrounds[i + 1],
						'--scroll-panels-unified-border-color': step.dataset.context === 'dark' ? '#fff' : '#d1d1d1',
					}, start);
				}
				if (animations[i] && animations[i + 1]) {
					panels.set(animations[i + 1], { visibility: 'visible' }, start)
						.to(animations[i], { translate: '0 -100%' }, start)
						.to(animations[i + 1], { translate: '0 0%' }, start)
						.set(animations[i], { visibility: 'hidden' }, start + 1);
				}
			});
			if (hold) panels.to({}, { duration: hold }, (steps.length - 1) * panelDistance);
			return panels;
		};

		// Touch conserva el cambio por índice y permite interrumpir desde el frame actual.
		const transitionNative = (index: number) => {
			if (target === index || (!tween && active === index && (reduced || timeline?.time() === index))) return;
			cancelTransition();
			setPanelAppearance(index);
			playback.prepare(index, Math.sign(index - (timeline?.time() ?? active)) || 1);
			if (!timeline || Math.abs(timeline.time() - index) < 0.005) {
				timeline?.time(index);
				confirmPanel(index);
				playback.update();
				return;
			}
			prepareLayers(Math.min(Math.floor(timeline.time()), index), Math.max(Math.ceil(timeline.time()), index));
			target = index;
			tween = timeline.tweenTo(index, {
				duration: SLIDE_TRANSITION_DURATION,
				ease: 'power2.out',
				onComplete: () => {
					tween = undefined;
					target = undefined;
					confirmPanel(index);
					prepareLayers();
					playback.update();
				},
			});
		};
		const slideScrollDistance = () => scene.clientHeight * SLIDE_SCROLL_MULTIPLIER;
		const nativeScrollDistance = () => slideScrollDistance() * (steps.length - 1) + scene.clientHeight * EXIT_SCROLL_MULTIPLIER + 2;
		const desktopScrollDistance = () => scene.clientHeight * totalDistance + 2;
		const resizeStickyTrack = () => {
			if (!sticky) return;
			const styles = getComputedStyle(scene);
			const sceneHeight = scene.offsetHeight + parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
			gsap.set(this, { '--scroll-panels-unified-track-height': `${sceneHeight + (touch ? nativeScrollDistance() : desktopScrollDistance())}px` });
		};
		const updateNative = (self: ScrollTrigger) => {
			if (restoring) return;
			const distance = self.progress * (self.end - self.start);
			transitionNative(Math.min(steps.length - 1, Math.round(distance / slideScrollDistance())));
			if (!within()) prepareLayers();
		};
		const commitNative = (index: number) => {
			cancelTransition();
			restoring = true;
			window.scrollTo({ top: trigger!.start + Math.max(1, index * slideScrollDistance()), behavior: 'instant' });
			ScrollTrigger.update();
			timeline?.time(index);
			confirmPanel(index);
			restoring = false;
			playback.prepare(index);
			playback.update();
		};
		const pinOptions = {
			force3D: false,
			trigger: this,
			pin: scene,
			start: () => Math.round(this.getBoundingClientRect().top + window.scrollY),
			invalidateOnRefresh: true,
		};
		const initializeNative = () => ScrollTrigger.create({
			...pinOptions,
			pin: sticky ? false : scene,
			end: () => `+=${nativeScrollDistance()}`,
			onUpdate: updateNative,
			onRefreshInit: () => {
				cancelTransition();
				resizeStickyTrack();
				refreshIndex = within() ? active : undefined;
				restoring = refreshIndex !== undefined;
			},
			onRefresh: () => {
				if (trigger && refreshIndex !== undefined) commitNative(refreshIndex);
				else {
					restoring = false;
					if (trigger) updateNative(trigger);
				}
				refreshIndex = undefined;
			},
		});

		// Desktop lee el frame suavizado, manteniendo su progreso continuo al recalcular.
		const updateDesktop = (self: ScrollTrigger) => {
			if (restoring) return;
			const position = timeline?.time() ?? self.progress * totalDistance;
			const index = Math.min(steps.length - 1, Math.floor(position / panelDistance));
			confirmPanel(index);
			if (index < steps.length - 1 && position - index * panelDistance > hold) prepareLayers(index, index + 1);
			else prepareLayers();
			playback.prepare(index, self.direction);
			playback.update();
		};
		const initializeDesktop = () => {
			window.addEventListener('keydown', event => {
				if (!within() || event.ctrlKey || event.metaKey || event.altKey) return;
				if (event.target instanceof Element && event.target.closest('input, textarea, select, button, a, [contenteditable="true"], [data-scroll-panels-ignore]')) return;
				const direction = ['ArrowDown', 'PageDown'].includes(event.key) || (event.key === ' ' && !event.shiftKey) ? 1
					: ['ArrowUp', 'PageUp'].includes(event.key) || (event.key === ' ' && event.shiftKey) ? -1 : 0;
				const next = active + direction;
				if (!direction || next < 0 || next >= steps.length) return;
				event.preventDefault();
				if (tween?.isActive() || event.repeat) return;
				cancelTransition();
				playback.prepare(next, direction);
				const scroll = { y: window.scrollY };
				tween = gsap.to(scroll, {
					y: Math.max(trigger!.start + 1, Math.min(trigger!.end - 1, trigger!.start + (next * panelDistance + hold / 2) * (trigger!.end - trigger!.start) / totalDistance)),
					duration: reduced ? 0 : KEYBOARD_DURATION,
					ease: 'power2.inOut',
					onUpdate: () => {
						window.scrollTo({ top: scroll.y, behavior: 'instant' });
						ScrollTrigger.update();
					},
					onComplete: () => { tween = undefined; updateDesktop(trigger!); },
				});
			}, { signal: abort.signal });
			return ScrollTrigger.create({
				...pinOptions,
				pin: sticky ? false : scene,
				animation: timeline,
				scrub: reduced ? false : DESKTOP_SCRUB_DURATION,
				end: () => `+=${desktopScrollDistance()}`,
				onUpdate: updateDesktop,
				onToggle: updateDesktop,
				onRefreshInit: () => {
					cancelTransition();
					resizeStickyTrack();
					refreshProgress = within() ? trigger!.progress : undefined;
					restoring = refreshProgress !== undefined;
				},
				onRefresh: self => {
					if (refreshProgress !== undefined) {
						window.scrollTo({ top: self.start + refreshProgress * (self.end - self.start), behavior: 'instant' });
						ScrollTrigger.update();
					}
					restoring = false;
					refreshProgress = undefined;
					updateDesktop(self);
				},
			});
		};

		// Estado inicial, timeline, reserva sticky o pin y medidas finales.
		confirmPanel(0);
		const timeline = createPanelTimeline();
		resizeStickyTrack();
		trigger = touch ? initializeNative() : initializeDesktop();
		if (scene.parentElement?.classList.contains('pin-spacer')) scene.parentElement.style.backgroundColor = 'inherit';
		if (touch) updateNative(trigger);
		else updateDesktop(trigger);
		// El loader espera las fuentes; terminar la medición antes de permitir el scroll al ancla.
		ScrollTrigger.refresh();
		return () => {
			abort.abort();
			cancelTransition();
			delete this.dataset.pinning;
		};
	}
}

if (!customElements.get('scroll-panels-unified')) customElements.define('scroll-panels-unified', ScrollPanelsUnified);
