import type { AnimationItem } from 'lottie-web';

class LottiePlayground extends HTMLElement {
	private player?: AnimationItem;
	private urls: string[] = [];
	private revision = 0;
	private controller?: AbortController;

	connectedCallback() {
		if (this.controller) return;
		this.controller = new AbortController();
		const options = { signal: this.controller.signal };
		const fileInput = this.querySelector<HTMLInputElement>('[data-file]')!;
		const imagesInput = this.querySelector<HTMLInputElement>('[data-images]')!;
		const animationSelect = this.querySelector<HTMLSelectElement>('[data-animation]')!;
		const location = this.querySelector<HTMLSelectElement>('[data-location]')!;
		const canvas = this.querySelector<HTMLElement>('[data-canvas]')!;
		const progress = this.querySelector<HTMLInputElement>('[data-progress]')!;
		const loop = this.querySelector<HTMLInputElement>('[data-loop]')!;
		const message = this.querySelector<HTMLElement>('[data-message]')!;
		const metadata = this.querySelector<HTMLElement>('[data-metadata]')!;
		let file: File | undefined;
		let archive: Record<string, Uint8Array> = {};
		let compositions: string[] = [];
		let width = 510;
		let height = 1;
		const setEnabled = (enabled: boolean) => {
			for (const button of this.querySelectorAll<HTMLButtonElement>('[data-action] button')) button.disabled = !enabled;
			progress.disabled = !enabled;
		};
		const resize = () => {
			const testWidth = location.value === 'original' ? width : Number(location.value);
			canvas.style.width = `${testWidth}px`;
			canvas.style.aspectRatio = `${width} / ${height}`;
			this.querySelector<HTMLElement>('[data-size]')!.textContent = `Tamaño de prueba: ${Math.round(testWidth)} × ${Math.round(testWidth * height / width)} px. Si no cabe, desplaza el área horizontalmente.`;
		};
		const status = () => { message.textContent = this.player?.isPaused ? 'Pausado' : 'Reproduciendo'; };
		const render = async () => {
			if (!file) return;
			const revision = ++this.revision;
			this.clear();
			setEnabled(false);
			progress.value = '0';
			message.textContent = 'Preparando animación…';
			metadata.textContent = '';
			try {
				const composition = compositions[Number(animationSelect.value) || 0];
				const json = composition ? new TextDecoder().decode(archive[composition]) : await file.text();
				if (revision !== this.revision || !this.isConnected) return;
				const data = JSON.parse(json);
				if (!(data.w > 0 && data.h > 0 && data.fr > 0 && data.op > data.ip && Array.isArray(data.layers))) throw new Error('El archivo no contiene una animación Lottie válida.');
				const images = Array.from(imagesInput.files ?? []);
				for (const asset of data.assets ?? []) {
					if (!asset.p || String(asset.p).startsWith('data:image/')) continue;
					const path = `${asset.u ?? ''}${asset.p}`.replace(/^\.\//, '');
					const basename = String(asset.p).split('/').pop();
					const archivePath = Object.keys(archive).find(key => key === path || key === `images/${basename}` || key === `i/${basename}`);
					const image = images.find(item => item.name === basename);
					const extension = String(basename).split('.').pop()?.toLowerCase();
					const mime = ({ png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp', gif: 'image/gif' } as Record<string, string>)[extension ?? ''];
					if (!mime || (!archivePath && !image)) throw new Error(`Falta la imagen ${basename}. Selecciónala en “Imágenes externas del JSON”.`);
					const blob = image ?? new Blob([archive[archivePath!].slice().buffer as ArrayBuffer], { type: mime });
					const url = URL.createObjectURL(blob);
					this.urls.push(url);
					asset.u = '';
					asset.p = url;
					asset.e = 1;
				}
				// Use installed fallback fonts rather than requesting remote font files.
				for (const font of data.fonts?.list ?? []) font.fPath = '';
				const { default: lottie } = await import('lottie-web/build/player/lottie_svg');
				if (revision !== this.revision || !this.isConnected) return;
				width = data.w;
				height = data.h;
				resize();
				const date = new Intl.DateTimeFormat('es-AR', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'America/Mendoza' }).format(file.lastModified);
				metadata.textContent = `${file.name}${composition ? ` · ${composition}` : ''} · ${width} × ${height} px · ${data.fr} fps · ${((data.op - data.ip) / data.fr).toFixed(1)} s · ${(file.size / 1048576).toFixed(1)} MB · Modificado: ${date} (Mendoza)`;
				const player = lottie.loadAnimation({ container: canvas, renderer: 'svg', autoplay: false, loop: loop.checked, animationData: data });
				this.player = player;
				player.addEventListener('DOMLoaded', () => {
					if (this.player !== player) return;
					setEnabled(true);
					status();
				});
				player.addEventListener('enterFrame', () => { progress.value = String(Math.round(player.currentFrame / Math.max(1, player.totalFrames - 1) * 1000)); });
				player.addEventListener('complete', status);
				player.addEventListener('data_failed', () => { setEnabled(false); message.textContent = 'No se pudo reproducir la animación. Revisa el archivo.'; });
			} catch (error) {
				if (revision !== this.revision) return;
				this.clear();
				message.textContent = error instanceof SyntaxError ? 'El JSON no es válido. Revisa la exportación del archivo.' : error instanceof Error ? error.message : 'No se pudo abrir el archivo.';
			}
		};
		const load = async (selected?: File) => {
			if (!selected) return;
			const revision = ++this.revision;
			this.clear();
			setEnabled(false);
			metadata.textContent = '';
			file = undefined;
			archive = {};
			compositions = [];
			animationSelect.replaceChildren();
			this.querySelector<HTMLElement>('[data-animation-field]')!.hidden = true;
			try {
				if (!/\.(json|lottie)$/i.test(selected.name)) throw new Error('Selecciona un archivo .json o .lottie.');
				if (selected.size > 50 * 1048576) throw new Error('El archivo supera los 50 MB. Prueba una copia más liviana.');
				message.textContent = 'Abriendo archivo…';
				if (/\.lottie$/i.test(selected.name)) {
					const { unzipSync } = await import('fflate');
					const bytes = new Uint8Array(await selected.arrayBuffer());
					if (revision !== this.revision) return;
					let expanded = 0;
					archive = unzipSync(bytes, { filter: entry => {
						expanded += entry.originalSize;
						if (expanded > 200 * 1048576) throw new Error('El contenido del dotLottie supera los 200 MB.');
						return /\.(json|png|jpe?g|webp|gif)$/i.test(entry.name);
					} });
					compositions = Object.keys(archive).filter(key => /^(animations|a)\/.*\.json$/i.test(key));
					if (!compositions.length) throw new Error('El dotLottie no contiene animaciones compatibles.');
					compositions.forEach((name, index) => animationSelect.add(new Option(name, String(index))));
					this.querySelector<HTMLElement>('[data-animation-field]')!.hidden = compositions.length < 2;
				}
				if (revision !== this.revision) return;
				file = selected;
				await render();
			} catch (error) {
				if (revision === this.revision) message.textContent = error instanceof SyntaxError ? 'El JSON no es válido. Revisa la exportación del archivo.' : error instanceof Error ? error.message : 'No se pudo abrir el archivo.';
			}
		};
		fileInput.addEventListener('change', () => { void load(fileInput.files?.[0]); }, options);
		imagesInput.addEventListener('change', () => { void render(); }, options);
		animationSelect.addEventListener('change', () => { void render(); }, options);
		location.addEventListener('change', resize, options);
		this.querySelector<HTMLSelectElement>('[data-background]')!.addEventListener('change', event => {
			this.querySelector<HTMLElement>('[data-stage]')!.dataset.background = (event.target as HTMLSelectElement).value;
		}, options);
		loop.addEventListener('change', () => { this.player?.setLoop(loop.checked); }, options);
		for (const action of ['play', 'pause', 'restart']) this.querySelector(`[data-action="${action}"] button`)!.addEventListener('click', () => {
			if (action === 'play') {
				if (this.player && this.player.currentFrame >= this.player.totalFrames - 1) this.player.goToAndStop(0, true);
				this.player?.play();
			} else if (action === 'pause') this.player?.pause();
			else this.player?.goToAndStop(0, true);
			status();
		}, options);
		progress.addEventListener('input', () => { this.player?.goToAndStop(Number(progress.value) / 1000 * Math.max(0, this.player.totalFrames - 1), true); status(); }, options);
		const drop = this.querySelector<HTMLElement>('[data-drop]')!;
		drop.addEventListener('dragover', event => { event.preventDefault(); drop.dataset.dragging = 'true'; }, options);
		drop.addEventListener('dragleave', () => { delete drop.dataset.dragging; }, options);
		drop.addEventListener('drop', event => {
			event.preventDefault();
			delete drop.dataset.dragging;
			fileInput.value = '';
			void load(event.dataTransfer?.files[0]);
		}, options);
		document.addEventListener('visibilitychange', () => { if (document.hidden) { this.player?.pause(); if (this.player) status(); } }, options);
	}

	private clear() {
		this.player?.destroy();
		this.player = undefined;
		for (const url of this.urls) URL.revokeObjectURL(url);
		this.urls = [];
	}

	disconnectedCallback() {
		this.revision++;
		this.controller?.abort();
		this.controller = undefined;
		this.clear();
	}
}

if (!customElements.get('lottie-playground')) customElements.define('lottie-playground', LottiePlayground);
