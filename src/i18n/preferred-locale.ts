import { defaultLocale, isLocale, type Locale } from './config';

export function getPreferredLocale(acceptLanguage: string | null, savedLocale?: string): Locale {
	if (isLocale(savedLocale)) return savedLocale;

	const preferences = (acceptLanguage ?? '').split(',').map((preference) => {
		const [language = '', ...parameters] = preference.trim().split(';');
		const qualityParameter = parameters.find((parameter) => parameter.trim().startsWith('q='));
		const quality = qualityParameter === undefined ? 1 : Number(qualityParameter.trim().slice(2));

		return { locale: language.toLowerCase().split('-')[0], quality };
	});

	const match = preferences
		.filter(({ locale, quality }) => isLocale(locale) && quality > 0 && quality <= 1)
		.sort((first, second) => second.quality - first.quality)
		.find(({ locale }) => isLocale(locale));

	return match && isLocale(match.locale) ? match.locale : defaultLocale;
}
