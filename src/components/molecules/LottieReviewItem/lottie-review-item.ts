class LottieReviewItem extends HTMLElement {
	connectedCallback() {
		const player = this.querySelector<HTMLElement & { play(): void; pause(): void; prepare(): void; setProgress(value: number): void; progress: number; playing: boolean; ready: boolean }>('lottie-animation');
		const status = this.querySelector<HTMLElement>('[data-state]');
		const progress = this.querySelector<HTMLInputElement>('[data-progress]');
		if (!player || !status || !progress || this.dataset.initialized) return;
		this.dataset.initialized = 'true';
		let failed = false;
		const update = () => {
			status.textContent = failed ? 'No se pudo cargar' : player.playing ? 'Reproduciendo' : 'Pausado';
			progress.value = String(Math.round(player.progress * 1000));
		};
		const action = (name: string, callback: () => void) => this.querySelector(`[data-action="${name}"] button`)?.addEventListener('click', () => {
			player.prepare();
			callback();
			update();
		});
		action('play', () => { player.play(); });
		action('pause', () => { player.pause(); });
		action('restart', () => { player.setProgress(0); });
		progress.addEventListener('input', () => {
			player.prepare();
			player.setProgress(Number(progress.value) / 1000);
			update();
		});
		for (const event of ['lottie:ready', 'lottie:state', 'lottie:progress']) player.addEventListener(event, update);
		player.addEventListener('lottie:error', () => { failed = true; update(); });
	}
}

if (!customElements.get('lottie-review-item')) customElements.define('lottie-review-item', LottieReviewItem);
