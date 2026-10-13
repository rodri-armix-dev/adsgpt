import type { ComponentProps } from 'astro/types';
import type { Locale } from '../../i18n/config';
import type Footer from '../../components/organisms/Footer/Footer.astro';

export const footerData = {
	es: {
		brand: {
			logo: {
				href: "/es/"
			},
			description: "<p>Creemos que las grandes ideas merecen ser vistas. Publicidad simple, inteligente y verdaderamente tuya.</p>"
		},
		legal: {
			label: "Información legal",
			items: [
				{
					label: "Privacidad",
					href: "/es/privacidad"
				},
				{
					label: "Términos",
					href: "/es/terminos"
				},
				{
					label: "Wortise",
					href: "https://wortise.com/",
					external: true
				}
			]
		},
		credit: "Construido por WORTISE, impulsado por IA.",
		copyright: {
			text: "© 2025 Todos los derechos reservados."
		}
	},
	en: {
		brand: {
			logo: {
				href: "/en/"
			},
			description: "<p>We believe great ideas deserve to be seen. Simple, intelligent advertising that is truly yours.</p>"
		},
		legal: {
			label: "Legal information",
			items: [
				{
					label: "Privacy",
					href: "/en/privacy/"
				},
				{
					label: "Terms",
					href: "/en/terms/"
				},
				{
					label: "Wortise",
					href: "https://wortise.com/",
					external: true
				}
			]
		},
		credit: "Built by WORTISE, powered by AI.",
		copyright: {
			text: "© 2025 All rights reserved."
		}
	},
	pt: {
		brand: {
			logo: {
				href: "/pt/"
			},
			description: "<p>Acreditamos que grandes ideias merecem ser vistas. Publicidade simples, inteligente e verdadeiramente sua.</p>"
		},
		legal: {
			label: "Informações legais",
			items: [
				{
					label: "Privacidade",
					href: "/pt/privacidade/"
				},
				{
					label: "Termos",
					href: "/pt/termos/"
				},
				{
					label: "Wortise",
					href: "https://wortise.com/",
					external: true
				}
			]
		},
		credit: "Criado pela WORTISE, impulsionado por IA.",
		copyright: {
			text: "© 2025 Todos os direitos reservados."
		}
	},
} satisfies Record<Locale, Omit<ComponentProps<typeof Footer>, 'locale'>>;
