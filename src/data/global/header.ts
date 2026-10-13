import type { ComponentProps } from 'astro/types';
import type { Locale } from '../../i18n/config';
import type Header from '../../components/organisms/Header/Header.astro';

export const headerData = {
	es: {
		logo: {
			href: "/es/"
		},
		menu: {
			items: [
				{
					id: "about",
					label: "Sobre nosotros",
					href: "/es/sobre-nosotros"
				},
				{
					id: "pricing",
					label: "Planes",
					href: "/es/#pricing"
				},
				{
					id: "documentation",
					label: "Documentación",
					href: "https://docs.adsgpt.dev/"
				}
			]
		},
		login: {
			label: "Ingresar",
			variant: "secondary",
			href: "https://dashboard.adsgpt.dev/auth",
			target: "_blank"
		},
		download: {
			label: "Descargar"
		}
	},
	en: {
		logo: {
			href: "/en/"
		},
		menu: {
			items: [
				{
					id: "about",
					label: "About us",
					href: "/en/about-us/"
				},
				{
					id: "pricing",
					label: "Plans",
					href: "/en/#pricing"
				},
				{
					id: "documentation",
					label: "Documentation",
					href: "https://docs.adsgpt.dev/"
				}
			]
		},
		login: {
			label: "Log in",
			variant: "secondary",
			href: "https://dashboard.adsgpt.dev/auth",
			target: "_blank"
		},
		download: {
			label: "Download"
		}
	},
	pt: {
		logo: {
			href: "/pt/"
		},
		menu: {
			items: [
				{
					id: "about",
					label: "Sobre nós",
					href: "/pt/sobre-nos/"
				},
				{
					id: "pricing",
					label: "Planos",
					href: "/pt/#pricing"
				},
				{
					id: "documentation",
					label: "Documentação",
					href: "https://docs.adsgpt.dev/"
				}
			]
		},
		login: {
			label: "Entrar",
			variant: "secondary",
			href: "https://dashboard.adsgpt.dev/auth",
			target: "_blank"
		},
		download: {
			label: "Baixar"
		}
	},
} satisfies Record<Locale, ComponentProps<typeof Header>>;
