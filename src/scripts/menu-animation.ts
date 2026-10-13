const pendingClosures = new WeakMap<HTMLElement, () => void>();

export function showMenuPanel(panel: HTMLElement) {
	pendingClosures.get(panel)?.();
	panel.removeAttribute('data-animation-state');
	panel.hidden = false;
	panel.inert = false;
}

export function hideMenuPanel(panel: HTMLElement, immediate = false) {
	if (immediate || matchMedia('(prefers-reduced-motion: reduce)').matches) {
		pendingClosures.get(panel)?.();
		panel.removeAttribute('data-animation-state');
		panel.hidden = true;
		panel.inert = false;
		return;
	}
	if (panel.hidden || pendingClosures.has(panel)) return;

	const currentStyle = getComputedStyle(panel);
	panel.style.setProperty('--menu-animation-exit-opacity', currentStyle.opacity);
	panel.style.setProperty('--menu-animation-exit-transform', currentStyle.transform);
	let timeout = 0;

	const cleanup = () => {
		window.clearTimeout(timeout);
		panel.removeEventListener('animationend', onAnimationEnd);
		panel.removeEventListener('animationcancel', onAnimationEnd);
		panel.style.removeProperty('--menu-animation-exit-opacity');
		panel.style.removeProperty('--menu-animation-exit-transform');
		pendingClosures.delete(panel);
	};
	const finish = () => {
		cleanup();
		panel.hidden = true;
		panel.inert = false;
		panel.removeAttribute('data-animation-state');
	};
	const onAnimationEnd = (event: AnimationEvent) => {
		if (event.target === panel && event.animationName === 'menu-exit') finish();
	};

	pendingClosures.set(panel, cleanup);
	panel.addEventListener('animationend', onAnimationEnd);
	panel.addEventListener('animationcancel', onAnimationEnd);
	panel.inert = true;
	panel.dataset.animationState = 'closing';
	const exitStyle = getComputedStyle(panel);
	const milliseconds = (value: string) => parseFloat(value) * (value.endsWith('ms') ? 1 : 1000);
	const duration = milliseconds(exitStyle.animationDuration) + milliseconds(exitStyle.animationDelay);
	if (exitStyle.animationName === 'none' || duration <= 0) finish();
	else timeout = window.setTimeout(finish, duration + 50);
}
