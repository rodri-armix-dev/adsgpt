import { initializeNavigationDisclosure } from '../../../scripts/navigation-disclosure';
import { getDeviceStore } from './device';

const initialized = new WeakSet<HTMLElement>();

function initializeDownloadMenus() {
	for (const menu of document.querySelectorAll<HTMLElement>('[data-download-menu]')) {
		if (initialized.has(menu)) continue;
		const toggle = menu.querySelector<HTMLButtonElement>('button');
		const panel = menu.querySelector<HTMLElement>('.download-menu__panel');
		if (!toggle || !panel) continue;
		initialized.add(menu);
		const store = getDeviceStore(navigator.userAgent, navigator.maxTouchPoints);
		const destination = store ? menu.querySelector<HTMLAnchorElement>(`[data-store="${store}"]`) : null;
		if (destination) {
			toggle.removeAttribute('aria-expanded');
			toggle.removeAttribute('aria-controls');
			toggle.setAttribute('aria-label', destination.getAttribute('aria-label') ?? toggle.textContent ?? '');
			toggle.addEventListener('click', () => {
				menu.dispatchEvent(new CustomEvent('adsgpt:navigation-open', { bubbles: true }));
				window.location.assign(destination.href);
			});
		} else {
			initializeNavigationDisclosure(menu, toggle, panel);
		}
	}
}

initializeDownloadMenus();
document.addEventListener('astro:page-load', initializeDownloadMenus);
