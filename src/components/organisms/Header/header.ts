import { hideMenuPanel, showMenuPanel } from '../../../scripts/menu-animation';
import { mediaQueries } from '../../../../config/breakpoints';

const initialized = new WeakSet<HTMLElement>();

function initializeHeaders() {
	for (const header of document.querySelectorAll<HTMLElement>('[data-mobile-header]')) {
		if (initialized.has(header)) continue;
		const shell = header.querySelector<HTMLElement>('.header__shell');
		const panel = header.querySelector<HTMLElement>('.header__panel');
		const toggle = header.querySelector<HTMLButtonElement>('.header__menu-toggle');
		const backdrop = header.querySelector<HTMLElement>('.header__backdrop');
		if (!shell || !panel || !toggle || !backdrop) continue;
		initialized.add(header);
		const desktop = matchMedia(mediaQueries.l);
		let opened = false;
		let previousOverflow = '';
		const inertElements = new Map<HTMLElement, boolean>();

		const focusableElements = () => Array.from(shell.querySelectorAll<HTMLElement>('a[href], button:not(:disabled), [tabindex="0"]')).filter((element) => element.getClientRects().length > 0 && element.getAttribute('aria-disabled') !== 'true');

		const close = (restoreFocus = true, immediate = false) => {
			if (!opened) {
				if (immediate) hideMenuPanel(panel, true);
				return;
			}
			opened = false;
			hideMenuPanel(panel, immediate);
			backdrop.hidden = true;
			header.classList.remove('header--open');
			toggle.setAttribute('aria-expanded', 'false');
			toggle.setAttribute('aria-label', toggle.dataset.openLabel ?? '');
			shell.removeAttribute('role');
			shell.removeAttribute('aria-modal');
			shell.removeAttribute('aria-label');
			document.documentElement.style.overflow = previousOverflow;
			for (const [element, wasInert] of inertElements) element.inert = wasInert;
			inertElements.clear();
			if (restoreFocus) {
				if (desktop.matches) header.querySelector<HTMLAnchorElement>('.header__logo a')?.focus({ preventScroll: true });
				else toggle.focus({ preventScroll: true });
			}
		};

		const open = () => {
			if (opened || desktop.matches) return;
			header.dispatchEvent(new CustomEvent('adsgpt:navigation-open', { bubbles: true }));
			opened = true;
			showMenuPanel(panel);
			backdrop.hidden = false;
			header.classList.add('header--open');
			toggle.setAttribute('aria-expanded', 'true');
			toggle.setAttribute('aria-label', toggle.dataset.closeLabel ?? '');
			shell.setAttribute('role', 'dialog');
			shell.setAttribute('aria-modal', 'true');
			shell.setAttribute('aria-label', shell.dataset.dialogLabel ?? '');
			previousOverflow = document.documentElement.style.overflow;
			document.documentElement.style.overflow = 'hidden';
			for (const element of document.body.children) {
				if (!(element instanceof HTMLElement) || element.contains(header) || element.tagName === 'SCRIPT') continue;
				inertElements.set(element, element.inert);
				element.inert = true;
			}
			panel.querySelector<HTMLAnchorElement>('a[href]')?.focus({ preventScroll: true });
		};

		header.addEventListener('adsgpt:navigation-close', () => close(false));
		header.addEventListener('adsgpt:navigation-open', (event) => {
			if (event.target !== header) close(false);
			for (const disclosure of header.querySelectorAll<HTMLElement>('[data-navigation-disclosure]')) {
				if (disclosure !== event.target) disclosure.dispatchEvent(new CustomEvent('adsgpt:navigation-close'));
			}
		});

		toggle.addEventListener('click', () => opened ? close() : open());
		backdrop.addEventListener('click', () => close());
		shell.addEventListener('click', (event) => {
			if (event.target instanceof Element && event.target.closest('a[href]')) close();
		});
		shell.addEventListener('keydown', (event) => {
			if (!opened) return;
			if (event.key === 'Escape') {
				event.preventDefault();
				close();
			} else if (event.key === 'Tab') {
				const elements = focusableElements();
				const first = elements[0];
				const last = elements.at(-1);
				if (event.shiftKey && document.activeElement === first) {
					event.preventDefault();
					last?.focus();
				} else if (!event.shiftKey && document.activeElement === last) {
					event.preventDefault();
					first?.focus();
				}
			}
		});
		desktop.addEventListener('change', () => { if (desktop.matches) close(true, true); });
		document.addEventListener('astro:before-swap', () => close(false, true));
	}
}

initializeHeaders();
document.addEventListener('astro:page-load', initializeHeaders);
