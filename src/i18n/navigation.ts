import { langMenuData, type LanguageItem } from '../data/navigation';
import { defaultLocale, isLocale, type Locale } from './config';
import { getPageFromSlug, getPagePath } from './routes';

const normalizePath = (path: string) => `${path.replace(/\/+$/, '')}/`;

function removeBasePath(pathname: string, basePath: string): string {
	const base = normalizePath(basePath);
	return pathname.startsWith(base) ? `/${pathname.slice(base.length)}` : pathname;
}

export function getLocaleFromPath(pathname: string, basePath = '/'): Locale {
	const [locale] = removeBasePath(pathname, basePath).split('/').filter(Boolean);
	return isLocale(locale) ? locale : defaultLocale;
}

export function getLanguageItems(pathname: string, basePath = '/'): LanguageItem[] {
	const base = normalizePath(basePath);
	const currentPath = normalizePath(removeBasePath(pathname, base));
	const [locale, ...segments] = currentPath.split('/').filter(Boolean);
	const slug = segments.join('/');
	const page = isLocale(locale) ? getPageFromSlug(locale, slug) : undefined;

	return langMenuData.map((item) => ({
		...item,
		href: currentPath.startsWith(`/${item.code}/`)
			? `${base}${currentPath.slice(1)}`
			: isLocale(item.code) ? `${base}${getPagePath(item.code, page ?? 'home').slice(1)}` : item.href,
	}));
}
