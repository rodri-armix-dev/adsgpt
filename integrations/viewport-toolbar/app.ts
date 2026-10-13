import { defineToolbarApp } from 'astro/toolbar';
import toolbarStyles from './viewport-toolbar.scss?inline';

const APP_ID = 'armix:viewport';

const breakpointTokens = [
	{ label: 'S', property: '--breakpoint-s' },
	{ label: 'M', property: '--breakpoint-m' },
	{ label: 'L', property: '--breakpoint-l' },
	{ label: 'XL', property: '--breakpoint-xl' },
	{ label: 'XXL', property: '--breakpoint-xxl' },
] as const;

type Breakpoint = {
	label: (typeof breakpointTokens)[number]['label'];
	min: number;
	max?: number;
};

function readBreakpoints(): Breakpoint[] {
	const styles = getComputedStyle(document.documentElement);
	const layoutMin = Number.parseFloat(styles.getPropertyValue('--layout-min-width'));
	const breakpoints = breakpointTokens.map(({ label, property }) => ({
		label,
		min: Number.parseFloat(styles.getPropertyValue(property)),
	}));

	if (!Number.isFinite(layoutMin) || breakpoints.some(({ min }) => !Number.isFinite(min))) {
		throw new Error('No se pudieron leer los tokens globales --breakpoint-*');
	}

	return breakpoints.map((breakpoint, index) => {
		const next = breakpoints[index + 1];

		return {
			...breakpoint,
			min: index === 0 ? layoutMin : breakpoint.min,
			max: next ? next.min - 1 : undefined,
		};
	});
}

function getCurrentBreakpoint(width: number, breakpoints: Breakpoint[]): Breakpoint {
	return (
		breakpoints.findLast(({ min }) => width >= min) ?? breakpoints[0]
	);
}

function getToolbarButton(): HTMLButtonElement | null {
	const toolbar = document.querySelector('astro-dev-toolbar');

	return (
		toolbar?.shadowRoot?.querySelector<HTMLButtonElement>(
			`[data-app-id="${APP_ID}"]`,
		) ?? null
	);
}

function updateToolbarIcon(button: HTMLButtonElement, label: string): void {
	const iconLabel = button.querySelector<SVGTextElement>(
		'[data-viewport-breakpoint]',
	);
	const icon = iconLabel?.ownerSVGElement;
	const iconWrapper = icon?.parentElement;
	const iconWidth = Math.max(18, label.length * 7 + 4);

	if (!iconLabel || !icon || !iconWrapper) {
		return;
	}

	iconLabel.textContent = label;
	iconLabel.setAttribute('x', String(iconWidth / 2));
	icon.setAttribute('viewBox', `0 0 ${iconWidth} 20`);
	icon.style.width = `${iconWidth}px`;
	iconWrapper.style.maxWidth = 'none';
	button.style.width = 'auto';
	button.style.minWidth = '44px';
	button.style.paddingInline = '8px';
}

function formatRange({ min, max }: Breakpoint): string {
	return max === undefined ? `${min}+` : `${min}–${max}`;
}

export default defineToolbarApp({
	init(_canvas, app) {
		let expanded = false;
		let frameId = 0;
		let displayedRange = '';
		const style = document.createElement('style');
		style.textContent = toolbarStyles;
		const actions = document.createElement('div');
		actions.className = 'viewport-toolbar';
		actions.hidden = true;
		actions.setAttribute('role', 'group');
		actions.setAttribute('aria-label', 'Copiar extremos del rango responsive');
		actions.innerHTML = `
			<button class="viewport-toolbar__button" type="button" data-edge="min"></button>
			<button class="viewport-toolbar__button" type="button" data-edge="max"></button>
			<span class="viewport-toolbar__status" role="status" aria-live="polite"></span>
		`;
		const status = actions.querySelector<HTMLElement>('[role="status"]')!;
		const edgeButtons = actions.querySelectorAll<HTMLButtonElement>('button');

		for (const button of edgeButtons) {
			button.addEventListener('click', async () => {
				const value = button.dataset.width;
				if (!value) return;
				try {
					await navigator.clipboard.writeText(value);
					status.textContent = `${value} px copiados. Pegalos en el ancho de Firefox.`;
					if (button.dataset.width === value) button.textContent = `✓ ${value}`;
				} catch {
					status.textContent = `No se pudo copiar. Ingresá ${value} en el ancho de Firefox.`;
				}
			});
		}

		const update = () => {
			frameId = 0;

			try {
				const breakpoints = readBreakpoints();
				const current = getCurrentBreakpoint(window.innerWidth, breakpoints);
				const range = formatRange(current);
				const button = getToolbarButton();
				const tooltip = button?.querySelector<HTMLElement>('.item-tooltip');
				const accessibleLabel = `Breakpoint ${current.label}, ${range} px`;
				actions.hidden = !expanded;
				if (displayedRange !== accessibleLabel) {
					displayedRange = accessibleLabel;
					status.textContent = '';
				}
				for (const edgeButton of edgeButtons) {
					const isMin = edgeButton.dataset.edge === 'min';
					const width = isMin ? current.min : current.max;
					edgeButton.disabled = width === undefined;
					edgeButton.textContent = width === undefined ? 'Sin máximo' : `${width} px`;
					edgeButton.title = width === undefined ? 'Este rango no tiene máximo' : `Copiar ${width} para pegar en Firefox`;
					edgeButton.dataset.width = width === undefined ? '' : String(width);
					edgeButton.setAttribute('aria-label', width === undefined ? 'Este rango no tiene máximo' : `Copiar ancho ${isMin ? 'mínimo' : 'máximo'}: ${width} píxeles`);
				}

				if (button) {
					const root = button.getRootNode();
					if (root instanceof ShadowRoot && !style.isConnected) root.append(style);
					if (button.nextElementSibling !== actions) button.after(actions);
					updateToolbarIcon(button, current.label);
					button.setAttribute('aria-expanded', String(expanded));
					button.setAttribute('aria-label', accessibleLabel);
				}

				if (tooltip) {
					tooltip.textContent = accessibleLabel;
				}
			} catch (error) {
				for (const edgeButton of edgeButtons) edgeButton.disabled = true;
				status.textContent = 'No se pudieron leer los tamaños del proyecto.';
				const button = getToolbarButton();

				if (button) {
					updateToolbarIcon(button, '?');
					button.setAttribute('aria-label', error instanceof Error ? error.message : 'Tokens no disponibles');
				}
			}
		};

		const scheduleUpdate = () => {
			if (frameId !== 0) {
				cancelAnimationFrame(frameId);
			}

			frameId = requestAnimationFrame(update);
		};

		app.onToggled(({ state }) => {
			expanded = state;
			update();
		});

		update();
		window.addEventListener('resize', scheduleUpdate, { passive: true });
		document.addEventListener('astro:after-swap', scheduleUpdate);

		if (import.meta.hot) {
			import.meta.hot.on('vite:afterUpdate', scheduleUpdate);
			import.meta.hot.dispose(() => {
				cancelAnimationFrame(frameId);
				window.removeEventListener('resize', scheduleUpdate);
				document.removeEventListener('astro:after-swap', scheduleUpdate);
				style.remove();
				actions.remove();
			});
		}
	},
});
