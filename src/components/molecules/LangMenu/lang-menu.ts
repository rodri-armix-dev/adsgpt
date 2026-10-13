import { initializeNavigationDisclosure } from '../../../scripts/navigation-disclosure';
import { isLocale, localeCookieName } from '../../../i18n/config';

document.addEventListener('click', (event) => {
	if (!(event.target instanceof Element)) return;

	const link = event.target.closest<HTMLAnchorElement>('.lang-menu__link');
	const locale = link?.hreflang;
	if (!isLocale(locale)) return;

	const secure = location.protocol === 'https:' ? '; Secure' : '';
	document.cookie = `${localeCookieName}=${locale}; Path=${import.meta.env.BASE_URL}; Max-Age=31536000; SameSite=Lax${secure}`;
});

function initializeLangMenus() {
	for (const menu of document.querySelectorAll<HTMLElement>('[data-lang-menu]')) {
		const toggle = menu.querySelector<HTMLButtonElement>('.lang-menu__toggle');
		const list = menu.querySelector<HTMLUListElement>('.lang-menu__list');
		if (toggle && list) initializeNavigationDisclosure(menu, toggle, list);
	}
}

initializeLangMenus();
document.addEventListener('astro:page-load', initializeLangMenus);
