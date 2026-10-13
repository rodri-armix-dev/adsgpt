import { hideMenuPanel, showMenuPanel } from './menu-animation';

const controllers = new WeakMap<HTMLElement, { close: (restoreFocus?: boolean, immediate?: boolean) => void; updatePosition: () => void }>();

function updatePositions() {
	for (const menu of document.querySelectorAll<HTMLElement>('[data-navigation-disclosure]')) {
		controllers.get(menu)?.updatePosition();
	}
}

const anchorObserver = new ResizeObserver(updatePositions);

export function initializeNavigationDisclosure(menu: HTMLElement, toggle: HTMLButtonElement, panel: HTMLElement) {
	if (controllers.has(menu)) return;
	let expanded = !panel.hidden;
	const anchor = menu.closest<HTMLElement>('[data-navigation-bar]') ?? menu;

	const updatePosition = () => {
		if (!expanded) return;
		menu.style.setProperty('--navigation-disclosure-anchor-bottom', `${anchor.getBoundingClientRect().bottom - menu.getBoundingClientRect().top}px`);
		const panelTop = menu.getBoundingClientRect().top + parseFloat(getComputedStyle(panel).top);
		menu.style.setProperty('--navigation-disclosure-panel-top', `${panelTop}px`);
	};

	const setExpanded = (isExpanded: boolean, immediate = false) => {
		expanded = isExpanded;
		if (expanded) showMenuPanel(panel);
		else hideMenuPanel(panel, immediate);
		toggle.setAttribute('aria-expanded', String(expanded));
		const label = expanded ? toggle.dataset.closeLabel : toggle.dataset.openLabel;
		if (label) toggle.setAttribute('aria-label', label);
		if (expanded) {
			menu.dispatchEvent(new CustomEvent('adsgpt:navigation-open', { bubbles: true }));
			updatePosition();
		}
	};

	const close = (restoreFocus = false, immediate = false) => {
		const wasOpen = expanded;
		setExpanded(false, immediate);
		if (wasOpen && restoreFocus) toggle.focus({ preventScroll: true });
	};

	controllers.set(menu, { close, updatePosition });
	anchorObserver.observe(anchor);
	if (!panel.hidden) updatePosition();
	menu.addEventListener('adsgpt:navigation-close', () => close());
	toggle.addEventListener('click', () => setExpanded(!expanded));
	menu.addEventListener('keydown', (event) => {
		if (event.key === 'Escape' && expanded) {
			event.preventDefault();
			event.stopPropagation();
			close(true);
		} else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
			const links = Array.from(panel.querySelectorAll<HTMLAnchorElement>('a[href]')).filter((link) => link.getAttribute('aria-disabled') !== 'true');
			if (!links.length) return;
			event.preventDefault();
			if (!expanded) setExpanded(true);
			const index = links.findIndex((link) => link === document.activeElement);
			const next = event.key === 'ArrowDown' ? (index + 1) % links.length : (index < 0 ? links.length - 1 : (index - 1 + links.length) % links.length);
			links[next]?.focus();
		}
	});
	panel.addEventListener('click', (event) => {
		if (event.target instanceof Element && event.target.closest('a[href]')) close(true);
	});
	menu.addEventListener('focusout', (event) => {
		if (!(event.relatedTarget instanceof Node) || !menu.contains(event.relatedTarget)) close();
	});
}

document.addEventListener('click', (event) => {
	if (!(event.target instanceof Node)) return;
	for (const menu of document.querySelectorAll<HTMLElement>('[data-navigation-disclosure]')) {
		if (!menu.contains(event.target)) controllers.get(menu)?.close();
	}
});

window.addEventListener('resize', updatePositions);
document.addEventListener('astro:before-swap', () => {
	for (const menu of document.querySelectorAll<HTMLElement>('[data-navigation-disclosure]')) controllers.get(menu)?.close(false, true);
	anchorObserver.disconnect();
});
