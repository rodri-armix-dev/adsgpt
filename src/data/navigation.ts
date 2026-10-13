import { isLocale } from '../i18n/config';

export interface LanguageItem {
	code: string;
	label: string;
	href: string;
	available: boolean;
}

export const langMenuData = [
	{
		code: 'es',
		label: 'Español',
		href: '/es/',
		available: isLocale('es'),
	},
	{
		code: 'en',
		label: 'English',
		href: '/en/',
		available: isLocale('en'),
	},
	{
		code: 'pt',
		label: 'Português',
		href: '/pt/',
		available: isLocale('pt'),
	},
] satisfies LanguageItem[];
