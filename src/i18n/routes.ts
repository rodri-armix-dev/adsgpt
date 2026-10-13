import type { Locale } from './config';

export const pageSlugs = {
	home: { es: '', en: '', pt: '' },
	about: { es: 'sobre-nosotros', en: 'about-us', pt: 'sobre-nos' },
	privacy: { es: 'privacidad', en: 'privacy', pt: 'privacidade' },
	terms: { es: 'terminos', en: 'terms', pt: 'termos' },
	ui: { es: 'ui', en: 'ui', pt: 'ui' },
	lotties: { es: 'lotties', en: 'lotties', pt: 'lotties' },
} as const satisfies Record<string, Record<Locale, string>>;

export type Page = keyof typeof pageSlugs;

export function getPageFromSlug(locale: Locale, slug: string): Page | undefined {
	return (Object.keys(pageSlugs) as Page[]).find((page) => pageSlugs[page][locale] === slug);
}

export function getPagePath(locale: Locale, page: Page): string {
	const slug = pageSlugs[page][locale];
	return `/${locale}/${slug ? `${slug}/` : ''}`;
}
