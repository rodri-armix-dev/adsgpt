import { defaultLocale, isLocale, type Locale } from './config';

export const uiText = {
	es: {
		selectLanguage: 'Seleccionar idioma',
		openLanguage: 'Abrir selector de idioma. Idioma actual: {label}',
		closeLanguage: 'Cerrar selector de idioma. Idioma actual: {label}',
		unavailableLanguage: '{label}, no disponible',
		downloadApp: 'Descargar AdsGPT',
		trustedBrands: 'Marcas que confían en nosotros',
		features: 'Qué puedes hacer con AdsGPT',
		howItWorks: 'Cómo funciona AdsGPT',
		planFeatures: 'Capacidades del plan {label}',
		planBenefits: 'Beneficios del plan {label}',
		mainNavigation: 'Navegación principal',
		openMenu: 'Abrir menú',
		closeMenu: 'Cerrar menú',
		language: 'Idioma',
		openSubmenu: 'Abrir submenú de {label}',
		closeSubmenu: 'Cerrar submenú de {label}',
		home: 'adsgpt, inicio',
		skipContent: 'Saltar al contenido',
	},
	en: {
		selectLanguage: 'Select language',
		openLanguage: 'Open language selector. Current language: {label}',
		closeLanguage: 'Close language selector. Current language: {label}',
		unavailableLanguage: '{label}, unavailable',
		downloadApp: 'Download AdsGPT',
		trustedBrands: 'Brands that trust us',
		features: 'What you can do with AdsGPT',
		howItWorks: 'How AdsGPT works',
		planFeatures: '{label} plan capabilities',
		planBenefits: '{label} plan benefits',
		mainNavigation: 'Main navigation',
		openMenu: 'Open menu',
		closeMenu: 'Close menu',
		language: 'Language',
		openSubmenu: 'Open {label} submenu',
		closeSubmenu: 'Close {label} submenu',
		home: 'adsgpt, home',
		skipContent: 'Skip to content',
	},
	pt: {
		selectLanguage: 'Selecionar idioma',
		openLanguage: 'Abrir seletor de idioma. Idioma atual: {label}',
		closeLanguage: 'Fechar seletor de idioma. Idioma atual: {label}',
		unavailableLanguage: '{label}, indisponível',
		downloadApp: 'Baixar AdsGPT',
		trustedBrands: 'Marcas que confiam em nós',
		features: 'O que você pode fazer com o AdsGPT',
		howItWorks: 'Como o AdsGPT funciona',
		planFeatures: 'Recursos do plano {label}',
		planBenefits: 'Benefícios do plano {label}',
		mainNavigation: 'Navegação principal',
		openMenu: 'Abrir menu',
		closeMenu: 'Fechar menu',
		language: 'Idioma',
		openSubmenu: 'Abrir submenu de {label}',
		closeSubmenu: 'Fechar submenu de {label}',
		home: 'adsgpt, início',
		skipContent: 'Pular para o conteúdo',
	},
} satisfies Record<Locale, Record<string, string>>;

export function getUiText(locale: string | undefined) {
	return uiText[isLocale(locale) ? locale : defaultLocale];
}

export function formatLabel(template: string, label: string): string {
	return template.replace('{label}', label);
}
