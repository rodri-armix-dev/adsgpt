import type { ComponentProps } from 'astro/types';
import type { Locale } from '../../i18n/config';
import type StoreBadge from '../../components/atoms/StoreBadge/StoreBadge.astro';
import appStoreBadge from '../../assets/app-store-badge.svg';
import googlePlayBadge from '../../assets/google-play-badge.svg';

export const storesData = {
	es: [
		{
			store: "apple",
			href: "https://apps.apple.com/app/id6752355271",
			image: appStoreBadge,
			label: "Descargar AdsGPT en App Store"
		},
		{
			store: "google-play",
			href: "https://play.google.com/store/apps/details?id=com.adsgpt.wortise",
			image: googlePlayBadge,
			label: "Descargar AdsGPT en Google Play"
		}
	],
	en: [
		{
			store: "apple",
			href: "https://apps.apple.com/app/id6752355271",
			image: appStoreBadge,
			label: "Download AdsGPT on the App Store"
		},
		{
			store: "google-play",
			href: "https://play.google.com/store/apps/details?id=com.adsgpt.wortise",
			image: googlePlayBadge,
			label: "Download AdsGPT on Google Play"
		}
	],
	pt: [
		{
			store: "apple",
			href: "https://apps.apple.com/app/id6752355271",
			image: appStoreBadge,
			label: "Baixar AdsGPT na App Store"
		},
		{
			store: "google-play",
			href: "https://play.google.com/store/apps/details?id=com.adsgpt.wortise",
			image: googlePlayBadge,
			label: "Baixar AdsGPT no Google Play"
		}
	]
} satisfies Record<Locale, ComponentProps<typeof StoreBadge>[]>;
