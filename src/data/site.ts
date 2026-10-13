import type { ComponentProps } from 'astro/types';
import type { Locale } from '../i18n/config';
import type Header from '../components/organisms/Header/Header.astro';
import type Footer from '../components/organisms/Footer/Footer.astro';
import { headerData } from './global/header';
import { footerData } from './global/footer';

export interface SiteData {
	header: ComponentProps<typeof Header>;
	footer: Omit<ComponentProps<typeof Footer>, 'locale'>;
}

// Replace this local source with a WordPress adapter when the CMS is connected.
export async function getSiteData(locale: Locale): Promise<SiteData> {
	return {
		header: headerData[locale],
		footer: footerData[locale],
	};
}
