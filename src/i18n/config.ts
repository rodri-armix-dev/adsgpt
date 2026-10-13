export const locales = ['es', 'en', 'pt'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

export const localeCookieName = 'site_locale';

export function isLocale(value: string | undefined): value is Locale {
	return locales.some((locale) => locale === value);
}
