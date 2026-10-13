import type { ComponentProps } from 'astro/types';
import type AboutContent from '../../components/organisms/AboutContent/AboutContent.astro';
import type ManifestoCTA from '../../components/organisms/ManifestoCTA/ManifestoCTA.astro';
import { storesData } from '../global/stores';
import type { Locale } from '../../i18n/config';

export interface AboutData {
	meta: { title: string; description: string };
	content: ComponentProps<typeof AboutContent>;
	manifesto: ComponentProps<typeof ManifestoCTA>;
}

const spanishAbout = {
	meta: {
		title: 'Sobre nosotros | AdsGPT',
		description: 'Conoce la historia de AdsGPT: desarrolladores, diseñadores y entusiastas que hacen la publicidad más simple e inclusiva.',
	},
	content: {
		pill: { label: 'Nuestra historia', variant: 'light' },
		title: 'Quiénes somos',
		subtitle: 'Desarrolladores, diseñadores y entusiastas',
		statistics: [
			{ value: '20.000+', label: 'apps y juegos' },
			{ value: '500M', label: 'usuarios alcanzados' },
			{ value: '2016', label: 'Fundación' },
			{ value: 'LATAM', label: 'Plataforma líder' },
		],
		paragraphs: [
			'AdsGPT nació de Wortise, una empresa creada en 2016 con una misión simple: ayudar a los desarrolladores de aplicaciones y juegos a monetizar de una manera más inteligente y significativa. Lo que comenzó como una pequeña herramienta interna para mejorar el rendimiento de los anuncios y ejecutar campañas locales pronto se convirtió en una de las principales plataformas de monetización de América Latina. Hoy en día, más de 20,000 aplicaciones y juegos utilizan la tecnología de Wortise, conectando con más de medio billón de personas en todo el mundo.',
			'En 2025, inspirados por el crecimiento de la inteligencia artificial y nuestra creencia de que la tecnología debe ser accesible para todos, lanzamos AdsGPT. Nuestro objetivo es hacer que la publicidad sea más simple e inclusiva, para que cualquiera — desde creadores independientes hasta empresas en crecimiento — pueda lanzar campañas fácilmente. La IA de la plataforma se encarga de todo, desde definir la audiencia adecuada hasta crear los anuncios y optimizar su rendimiento, para que los usuarios puedan centrarse en lo que realmente importa: sus ideas.',
		],
	},
	manifesto: {
		lines: [
			{ text: 'Nacido de la', emphasis: 'innovación.' },
			{ text: 'Construido para', emphasis: 'creadores.' },
			{ text: 'Impulsado por', emphasis: 'inteligencia.' },
		],
		stores: storesData.es,
	},
} satisfies AboutData;

export const aboutData = {
	es: spanishAbout,
	en: {
		meta: {
			title: 'About us | AdsGPT',
			description: 'Discover the story of AdsGPT: developers, designers and enthusiasts making advertising simpler and more inclusive.',
		},
		content: {
			pill: { label: 'Our story', variant: 'light' },
			title: 'Who we are',
			subtitle: 'Developers, designers and enthusiasts',
			statistics: [
				{ value: '20,000+', label: 'apps and games' },
				{ value: '500M', label: 'users reached' },
				{ value: '2016', label: 'Founded' },
				{ value: 'LATAM', label: 'Leading platform' },
			],
			paragraphs: [
				'AdsGPT grew out of Wortise, a company founded in 2016 with a simple mission: to help app and game developers monetize in a smarter, more meaningful way. What began as a small internal tool to improve ad performance and run local campaigns soon became one of Latin America’s leading monetization platforms. Today, more than 20,000 apps and games use Wortise technology, connecting with more than half a billion people worldwide.',
				'In 2025, inspired by the growth of artificial intelligence and our belief that technology should be accessible to everyone, we launched AdsGPT. Our goal is to make advertising simpler and more inclusive, so that anyone — from independent creators to growing businesses — can launch campaigns easily. The platform’s AI handles everything, from identifying the right audience to creating ads and optimizing their performance, so users can focus on what really matters: their ideas.',
			],
		},
		manifesto: {
			lines: [
				{ text: 'Born from', emphasis: 'innovation.' },
				{ text: 'Built for', emphasis: 'creators.' },
				{ text: 'Powered by', emphasis: 'intelligence.' },
			],
			stores: storesData.en,
		},
	},
	pt: {
		meta: {
			title: 'Sobre nós | AdsGPT',
			description: 'Conheça a história do AdsGPT: desenvolvedores, designers e entusiastas que tornam a publicidade mais simples e inclusiva.',
		},
		content: {
			pill: { label: 'Nossa história', variant: 'light' },
			title: 'Quem somos',
			subtitle: 'Desenvolvedores, designers e entusiastas',
			statistics: [
				{ value: '20.000+', label: 'apps e jogos' },
				{ value: '500M', label: 'usuários alcançados' },
				{ value: '2016', label: 'Fundação' },
				{ value: 'LATAM', label: 'Plataforma líder' },
			],
			paragraphs: [
				'O AdsGPT nasceu da Wortise, uma empresa fundada em 2016 com uma missão simples: ajudar desenvolvedores de aplicativos e jogos a monetizar de forma mais inteligente e significativa. O que começou como uma pequena ferramenta interna para melhorar o desempenho dos anúncios e executar campanhas locais logo se tornou uma das principais plataformas de monetização da América Latina. Hoje, mais de 20.000 aplicativos e jogos utilizam a tecnologia da Wortise, conectando-se com mais de meio bilhão de pessoas em todo o mundo.',
				'Em 2025, inspirados pelo crescimento da inteligência artificial e pela nossa convicção de que a tecnologia deve ser acessível a todos, lançamos o AdsGPT. Nosso objetivo é tornar a publicidade mais simples e inclusiva, para que qualquer pessoa — de criadores independentes a empresas em crescimento — possa lançar campanhas com facilidade. A IA da plataforma cuida de tudo, desde definir o público certo até criar os anúncios e otimizar seu desempenho, para que os usuários possam se concentrar no que realmente importa: suas ideias.',
			],
		},
		manifesto: {
			lines: [
				{ text: 'Nascido da', emphasis: 'inovação.' },
				{ text: 'Criado para', emphasis: 'criadores.' },
				{ text: 'Impulsionado por', emphasis: 'inteligência.' },
			],
			stores: storesData.pt,
		},
	},
} satisfies Record<Locale, AboutData>;
