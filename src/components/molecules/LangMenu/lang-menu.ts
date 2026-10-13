import { initializeNavigationDisclosure } from '../../../scripts/navigation-disclosure';

function initializeLangMenus() {
	for (const menu of document.querySelectorAll<HTMLElement>('[data-lang-menu]')) {
		const toggle = menu.querySelector<HTMLButtonElement>('.lang-menu__toggle');
		const list = menu.querySelector<HTMLUListElement>('.lang-menu__list');
		if (toggle && list) initializeNavigationDisclosure(menu, toggle, list);
	}
}

initializeLangMenus();
document.addEventListener('astro:page-load', initializeLangMenus);
