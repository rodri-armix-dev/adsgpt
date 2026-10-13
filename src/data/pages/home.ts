import type { ComponentProps } from 'astro/types';
import type { Locale } from '../../i18n/config';
import type Hero from '../../components/organisms/Hero/Hero.astro';
import type BrandsMarquee from '../../components/organisms/BrandsMarquee/BrandsMarquee.astro';
import type CardsGrid from '../../components/organisms/CardsGrid/CardsGrid.astro';
import type ScrollPanelsUnified from '../../components/organisms/ScrollPanelsUnified/ScrollPanelsUnified.astro';
import type Pricing from '../../components/organisms/Pricing/Pricing.astro';
import type BannerCTA from '../../components/organisms/BannerCTA/BannerCTA.astro';
import { storesData } from '../global/stores';

export interface HomeData {
	meta: { title: string; description?: string };
	hero: ComponentProps<typeof Hero>;
	brandsMarquee: ComponentProps<typeof BrandsMarquee>;
	cardsGrid: ComponentProps<typeof CardsGrid>;
	scrollPanels: ComponentProps<typeof ScrollPanelsUnified>;
	pricing: ComponentProps<typeof Pricing>;
	bannerCTA: ComponentProps<typeof BannerCTA>;
}

export const homeData = {
	es: {
		meta: {
			title: "AdsGPT | Publicidad con inteligencia artificial",
			description: "Creá, lanzá y optimizá campañas publicitarias con IA en Google, Instagram y más. Con AdsGPT, vos elegís cuánto invertir."
		},
		hero: {
			stores: storesData.es,
			heading: "Di qué quieres vender. Nosotros te traemos clientes.",
			description: "<p>Escribe \"quiero vender más empanadas\" y AdsGPT arma tus anuncios, creativos y videos en Google, Instagram y más. Tu eliges cuánto gastar.</p>",
			phone: {
				src: "/lotties/launch-external/lanza.json",
				ariaLabel: "AdsGPT en un teléfono: ejemplos de anuncios creados para tu marca."
			}
		},
		brandsMarquee: {
			brands: [
				{
					src: "/brands/hbo-marquee.webp",
					alt: "HBO",
					width: 92,
					height: 38,
					mobileWidth: 56,
					mobileHeight: 23
				},
				{
					src: "/brands/mcdonalds-marquee.webp",
					alt: "McDonald’s",
					width: 54,
					height: 54,
					mobileWidth: 31,
					mobileHeight: 31
				},
				{
					src: "/brands/visa-marquee.webp",
					alt: "Visa",
					width: 91.867,
					height: 29.765,
					mobileWidth: 56,
					mobileHeight: 18
				},
				{
					src: "/brands/spotify-marquee.webp",
					alt: "Spotify",
					width: 49.947,
					height: 50,
					mobileWidth: 30,
					mobileHeight: 30
				},
				{
					src: "/brands/apple-marquee.webp",
					alt: "Apple",
					width: 41,
					height: 50,
					mobileWidth: 24,
					mobileHeight: 30
				},
				{
					src: "/brands/toyota-marquee.webp",
					alt: "Toyota",
					width: 71,
					height: 72,
					mobileWidth: 40,
					mobileHeight: 40
				},
				{
					src: "/brands/amazon-marquee.webp",
					alt: "Amazon",
					width: 65,
					height: 65,
					mobileWidth: 30,
					mobileHeight: 30
				},
				{
					src: "/brands/microsoft-marquee.webp",
					alt: "Microsoft",
					width: 49,
					height: 48,
					mobileWidth: 30,
					mobileHeight: 30
				}
			],
			description: "<p>Confiado por <strong>20,000+</strong> apps, alcanzando por <strong>500M</strong> usuarios</p>"
		},
		cardsGrid: {
			items: [
				{
					heading: "Conecta tus redes",
					description: "<p>Google, Meta, OpenAI, Wortise, X, TikTok, LinkedIn y más. Todo en AdsGPT.</p>",
					variant: "connect",
					animation: {
						src: "/lotties/optimized-v2/conecta-tus-redes.json",
						ariaLabel: "Integraciones con plataformas de publicidad e inteligencia artificial."
					}
				},
				{
					heading: "Dile tu objetivo",
					description: "<p>AdsGPT elige cómo, dónde y con qué tipo de campaña hacerlo.</p>",
					variant: "objective",
					animation: {
						src: "/lotties/optimized-v2/dile-tu-objetivo.json",
						responsiveSrc: { osm: "/lotties/optimized-v2/dile-tu-objetivo-mobile.json" },
						ariaLabel: "Campo para describir el objetivo de tu campaña en AdsGPT."
					}
				},
				{
					heading: "Tu marca, en cada formato",
					description: "<p>Genera múltiples variantes de imagen, video, interactivos y jugables con la identidad de tu negocio.</p>",
					variant: "formats",
					animation: {
						src: "/lotties/optimized-v2/tu-marca-en-cada-formato.json",
						ariaLabel: "Ejemplos de creatividades publicitarias en distintos formatos."
					}
				},
				{
					heading: "Lanza y optimiza",
					description: "<p>Compara resultados y redistribuye presupuesto hacia donde mejor funciona.</p>",
					variant: "optimize",
					animation: {
						src: "/lotties/optimized-v2/lanza-y-optimiza.json",
						ariaLabel: "Controles de presupuesto y métricas de alcance de una campaña."
					}
				}
			]
		},
		scrollPanels: {
			items: [
				{
					number: "01",
					lottieSrc: "/lotties/conecta-progressive/conecta.json",
					lottieProgressiveLoad: true,
					heading: "Conecta",
					descriptionLeft: "<p>Enlaza tus redes de publicidad y gestiónalas de un solo lugar.</p>",
					image: {
						src: "/cards-snap/cards-snap-01.png",
						alt: "Pantalla de integraciones publicitarias de AdsGPT en un teléfono.",
						width: 450,
						height: 690
					},
					descriptionRight: "<ul><li>Conecta tus plataformas</li><li>Gestiona todo en un lugar</li><li>Centraliza datos y campañas</li></ul>",
					context: "light"
				},
				{
					number: "02",
					lottieSrc: "/lotties/optimized-snap/describe.json",
					heading: "Describe",
					descriptionLeft: "<p>Dinos qué quieres promocionar. Escribe una frase corta, pega una URL o sube tu producto.</p>",
					image: {
						src: "/cards-snap/cards-snap-02.png",
						alt: "Pantalla de integraciones publicitarias de AdsGPT en un teléfono.",
						width: 450,
						height: 690
					},
					descriptionRight: "<ul><li>Define el objetivo en segundos</li><li>Agrega producto, link o imagen</li><li>AdsGPT interpreta el contexto</li></ul>",
					context: "dark"
				},
				{
					number: "03",
					lottieSrc: "/lotties/optimized-snap/crea.json",
					heading: "Crea",
					descriptionLeft: "<p>AdsGPT transforma tu idea en una campaña completa: visual, copy y audiencia, todo alineado.</p>",
					image: {
						src: "/cards-snap/cards-snap-03.png",
						alt: "Pantalla de integraciones publicitarias de AdsGPT en un teléfono.",
						width: 450,
						height: 690
					},
					descriptionRight: "<ul><li>Creatividades listas para publicar</li><li>Mensajes adaptados a cada canal</li><li>Audiencia sugerida por IA</li></ul>",
					context: "light"
				},
				{
					number: "04",
					lottieSrc: "/lotties/launch-external/lanza.json",
					heading: "Lanza",
					descriptionLeft: "<p>Revisa los detalles, ajusta lo que quieras y lanza. La optimización continúa automáticamente.</p>",
					image: {
						src: "/cards-snap/cards-snap-04.png",
						alt: "Pantalla de integraciones publicitarias de AdsGPT en un teléfono.",
						width: 450,
						height: 690
					},
					descriptionRight: "<ul><li>Publicación multicanal</li><li>Métricas en tiempo real</li><li>Optimización continua</li></ul>",
					context: "dark"
				}
			]
		},
		pricing: {
			items: [
				{
					id: "hobby",
					heading: "Hobby",
					description: "<p>Para empezar a crear y promocionar tus ideas.</p>",
					background: "/pricing/princing-bg-01.webp",
					monthlyPrice: 12.99,
					features: [
						{
							label: "Campañas ilimitadas",
							icon: "rocket"
						},
						{
							label: "1.000 créditos de IA al mes",
							icon: "star"
						},
						{
							label: "1 Marca",
							icon: "tag"
						},
						{
							label: "1 Usuario",
							icon: "user"
						}
					],
					benefits: [
						"Creación de imagenes y videos con marca de agua",
						"Reportes avanzados",
						"Exportar imagenes"
					],
					currency: "USD",
					pricePeriod: "/mes"
				},
				{
					id: "pro",
					heading: "Pro",
					description: "<p>Para creadores que quieren llevar sus campañas más lejos.</p>",
					background: "/pricing/princing-bg-02.webp",
					monthlyPrice: 59.99,
					features: [
						{
							label: "Campañas ilimitadas",
							icon: "rocket"
						},
						{
							label: "5.000 créditos de IA al mes",
							icon: "star"
						},
						{
							label: "3 Marcas",
							icon: "tag"
						},
						{
							label: "5 Usuarios",
							icon: "user"
						},
						{
							label: "2 Equipos",
							icon: "users"
						}
					],
					benefits: [
						"Creación de imagenes y videos",
						"Exportar imagenes y videos"
					],
					benefitsHeading: "Todo en el plan Hobby",
					currency: "USD",
					pricePeriod: "/mes"
				},
				{
					id: "negocios",
					heading: "Negocios",
					description: "<p>Para equipos que gestionan múltiples marcas y campañas.</p>",
					background: "/pricing/princing-bg-03.webp",
					monthlyPrice: 179.99,
					features: [
						{
							label: "Campañas ilimitadas",
							icon: "rocket"
						},
						{
							label: "15.000 créditos de IA al mes",
							icon: "star"
						},
						{
							label: "10 Marcas",
							icon: "tag"
						},
						{
							label: "10 Usuarios",
							icon: "user"
						},
						{
							label: "5 Equipos",
							icon: "users"
						}
					],
					benefits: [
						"Seguimiento de conversiones avanzado",
						"Automatizaciones",
						"Soporte prioritario"
					],
					benefitsHeading: "Todo en el plan Pro",
					currency: "USD",
					pricePeriod: "/mes"
				},
				{
					id: "agencia",
					heading: "Agencia",
					description: "<p>Para agencias que trabajan con múltiples clientes a escala.</p>",
					background: "/pricing/princing-bg-04.webp",
					monthlyPrice: 599.99,
					features: [
						{
							label: "Campañas ilimitadas",
							icon: "rocket"
						},
						{
							label: "50.000 créditos de IA al mes",
							icon: "star"
						},
						{
							label: "25 Marcas",
							icon: "tag"
						},
						{
							label: "25 Usuarios",
							icon: "user"
						},
						{
							label: "Equipos ilimitados",
							icon: "users"
						}
					],
					benefits: [
						"Onboarding asistido",
						"Informes de marca blanca"
					],
					benefitsHeading: "Todo en el plan Negocios",
					currency: "USD",
					pricePeriod: "/mes"
				}
			],
			heading: "Conoce nuestros planes",
			annualDiscount: 20,
			billingLabels: {
				legend: "Período de facturación",
				monthly: "Mensual",
				annual: "Anual",
				discountSuffix: "%off"
			}
		},
		bannerCTA: {
			stores: storesData.es,
			pill: {
				label: "Descargá la app",
				icon: "star-filled"
			},
			heading: "Lleva el futuro de la publicidad contigo",
			description: "<p>AdsGPT ya está disponible en Google Play y App Store. Descárgala ahora y comienza a crear, lanzar y monitorear tus campañas fácilmente, cuando y donde quieras.</p>",
		}
	},
	en: {
		meta: {
			title: "AdsGPT | AI-powered advertising",
			description: "Create, launch and optimize AI-powered ad campaigns on Google, Instagram and more. With AdsGPT, you choose how much to spend."
		},
		hero: {
			stores: storesData.en,
			heading: "Tell us what you want to sell. We bring you customers.",
			description: "<p>Type \"I want to sell more empanadas\" and AdsGPT creates your ads, ad creatives and videos for Google, Instagram and more. You choose how much to spend.</p>",
			phone: {
				src: "/lotties/launch-external/lanza.json",
				ariaLabel: "AdsGPT on a phone: examples of ads created for your brand."
			}
		},
		brandsMarquee: {
			brands: [
				{
					src: "/brands/hbo-marquee.webp",
					alt: "HBO",
					width: 92,
					height: 38,
					mobileWidth: 56,
					mobileHeight: 23
				},
				{
					src: "/brands/mcdonalds-marquee.webp",
					alt: "McDonald’s",
					width: 54,
					height: 54,
					mobileWidth: 31,
					mobileHeight: 31
				},
				{
					src: "/brands/visa-marquee.webp",
					alt: "Visa",
					width: 91.867,
					height: 29.765,
					mobileWidth: 56,
					mobileHeight: 18
				},
				{
					src: "/brands/spotify-marquee.webp",
					alt: "Spotify",
					width: 49.947,
					height: 50,
					mobileWidth: 30,
					mobileHeight: 30
				},
				{
					src: "/brands/apple-marquee.webp",
					alt: "Apple",
					width: 41,
					height: 50,
					mobileWidth: 24,
					mobileHeight: 30
				},
				{
					src: "/brands/toyota-marquee.webp",
					alt: "Toyota",
					width: 71,
					height: 72,
					mobileWidth: 40,
					mobileHeight: 40
				},
				{
					src: "/brands/amazon-marquee.webp",
					alt: "Amazon",
					width: 65,
					height: 65,
					mobileWidth: 30,
					mobileHeight: 30
				},
				{
					src: "/brands/microsoft-marquee.webp",
					alt: "Microsoft",
					width: 49,
					height: 48,
					mobileWidth: 30,
					mobileHeight: 30
				}
			],
			description: "<p>Trusted by <strong>20,000+</strong> apps, reaching <strong>500M</strong> users</p>"
		},
		cardsGrid: {
			items: [
				{
					heading: "Connect your networks",
					description: "<p>Google, Meta, OpenAI, Wortise, X, TikTok, LinkedIn and more. All in AdsGPT.</p>",
					variant: "connect",
					animation: {
						src: "/lotties/optimized-v2/conecta-tus-redes.json",
						ariaLabel: "Integrations with advertising and artificial intelligence platforms."
					}
				},
				{
					heading: "Tell us your goal",
					description: "<p>AdsGPT chooses how, where and which type of campaign to use.</p>",
					variant: "objective",
					animation: {
						src: "/lotties/optimized-v2/dile-tu-objetivo.json",
						responsiveSrc: { osm: "/lotties/optimized-v2/dile-tu-objetivo-mobile.json" },
						ariaLabel: "A field to describe your campaign goal in AdsGPT."
					}
				},
				{
					heading: "Your brand, in every format",
					description: "<p>Generate multiple image, video, interactive and playable variations that reflect your brand identity.</p>",
					variant: "formats",
					animation: {
						src: "/lotties/optimized-v2/tu-marca-en-cada-formato.json",
						ariaLabel: "Examples of advertising creatives in different formats."
					}
				},
				{
					heading: "Launch and optimize",
					description: "<p>Compare results and shift your budget toward what works best.</p>",
					variant: "optimize",
					animation: {
						src: "/lotties/optimized-v2/lanza-y-optimiza.json",
						ariaLabel: "Campaign budget controls and reach metrics."
					}
				}
			]
		},
		scrollPanels: {
			items: [
				{
					number: "01",
					lottieSrc: "/lotties/conecta-progressive/conecta.json",
					lottieProgressiveLoad: true,
					heading: "Connect",
					descriptionLeft: "<p>Link your advertising networks and manage them all in one place.</p>",
					image: {
						src: "/cards-snap/cards-snap-01.png",
						alt: "AdsGPT advertising integrations on a phone screen.",
						width: 450,
						height: 690
					},
					descriptionRight: "<ul><li>Connect your platforms</li><li>Manage everything in one place</li><li>Centralize data and campaigns</li></ul>",
					context: "light"
				},
				{
					number: "02",
					lottieSrc: "/lotties/optimized-snap/describe.json",
					heading: "Describe",
					descriptionLeft: "<p>Tell us what you want to promote. Write a short sentence, paste a URL or upload your product.</p>",
					image: {
						src: "/cards-snap/cards-snap-02.png",
						alt: "AdsGPT advertising integrations on a phone screen.",
						width: 450,
						height: 690
					},
					descriptionRight: "<ul><li>Define your goal in seconds</li><li>Add a product, link or image</li><li>AdsGPT understands the context</li></ul>",
					context: "dark"
				},
				{
					number: "03",
					lottieSrc: "/lotties/optimized-snap/crea.json",
					heading: "Create",
					descriptionLeft: "<p>AdsGPT turns your idea into a complete campaign: visuals, copy and audience, all aligned.</p>",
					image: {
						src: "/cards-snap/cards-snap-03.png",
						alt: "AdsGPT advertising integrations on a phone screen.",
						width: 450,
						height: 690
					},
					descriptionRight: "<ul><li>Creatives ready to publish</li><li>Messages tailored to each channel</li><li>AI-suggested audiences</li></ul>",
					context: "light"
				},
				{
					number: "04",
					lottieSrc: "/lotties/launch-external/lanza.json",
					heading: "Launch",
					descriptionLeft: "<p>Review the details, make any adjustments and launch. Optimization continues automatically.</p>",
					image: {
						src: "/cards-snap/cards-snap-04.png",
						alt: "AdsGPT advertising integrations on a phone screen.",
						width: 450,
						height: 690
					},
					descriptionRight: "<ul><li>Multichannel publishing</li><li>Real-time metrics</li><li>Continuous optimization</li></ul>",
					context: "dark"
				}
			]
		},
		pricing: {
			items: [
				{
					id: "hobby",
					heading: "Hobby",
					description: "<p>Start creating and promoting your ideas.</p>",
					background: "/pricing/princing-bg-01.webp",
					monthlyPrice: 12.99,
					features: [
						{
							label: "Unlimited campaigns",
							icon: "rocket"
						},
						{
							label: "1,000 AI credits per month",
							icon: "star"
						},
						{
							label: "1 Brand",
							icon: "tag"
						},
						{
							label: "1 User",
							icon: "user"
						}
					],
					benefits: [
						"Create images and videos with a watermark",
						"Advanced reports",
						"Export images"
					],
					currency: "USD",
					pricePeriod: "/month"
				},
				{
					id: "pro",
					heading: "Pro",
					description: "<p>For creators who want to take their campaigns further.</p>",
					background: "/pricing/princing-bg-02.webp",
					monthlyPrice: 59.99,
					features: [
						{
							label: "Unlimited campaigns",
							icon: "rocket"
						},
						{
							label: "5,000 AI credits per month",
							icon: "star"
						},
						{
							label: "3 Brands",
							icon: "tag"
						},
						{
							label: "5 Users",
							icon: "user"
						},
						{
							label: "2 Teams",
							icon: "users"
						}
					],
					benefits: [
						"Create images and videos",
						"Export images and videos"
					],
					benefitsHeading: "Everything in Hobby",
					currency: "USD",
					pricePeriod: "/month"
				},
				{
					id: "negocios",
					heading: "Business",
					description: "<p>For teams managing multiple brands and campaigns.</p>",
					background: "/pricing/princing-bg-03.webp",
					monthlyPrice: 179.99,
					features: [
						{
							label: "Unlimited campaigns",
							icon: "rocket"
						},
						{
							label: "15,000 AI credits per month",
							icon: "star"
						},
						{
							label: "10 Brands",
							icon: "tag"
						},
						{
							label: "10 Users",
							icon: "user"
						},
						{
							label: "5 Teams",
							icon: "users"
						}
					],
					benefits: [
						"Advanced conversion tracking",
						"Automations",
						"Priority support"
					],
					benefitsHeading: "Everything in Pro",
					currency: "USD",
					pricePeriod: "/month"
				},
				{
					id: "agencia",
					heading: "Agency",
					description: "<p>For agencies working with multiple clients at scale.</p>",
					background: "/pricing/princing-bg-04.webp",
					monthlyPrice: 599.99,
					features: [
						{
							label: "Unlimited campaigns",
							icon: "rocket"
						},
						{
							label: "50,000 AI credits per month",
							icon: "star"
						},
						{
							label: "25 Brands",
							icon: "tag"
						},
						{
							label: "25 Users",
							icon: "user"
						},
						{
							label: "Unlimited teams",
							icon: "users"
						}
					],
					benefits: [
						"Assisted onboarding",
						"White-label reports"
					],
					benefitsHeading: "Everything in Business",
					currency: "USD",
					pricePeriod: "/month"
				}
			],
			heading: "Explore our plans",
			annualDiscount: 20,
			billingLabels: {
				legend: "Billing period",
				monthly: "Monthly",
				annual: "Annual",
				discountSuffix: "%off"
			}
		},
		bannerCTA: {
			stores: storesData.en,
			pill: {
				label: "Download the app",
				icon: "star-filled"
			},
			heading: "Take the future of advertising with you",
			description: "<p>AdsGPT is now available on Google Play and the App Store. Download it and start creating, launching and monitoring your campaigns easily, anytime, anywhere.</p>",
		}
	},
	pt: {
		meta: {
			title: "AdsGPT | Publicidade com inteligência artificial",
			description: "Crie, lance e otimize campanhas publicitárias com IA no Google, Instagram e muito mais. Com o AdsGPT, você escolhe quanto investir."
		},
		hero: {
			stores: storesData.pt,
			heading: "Diga o que você quer vender. Nós trazemos os clientes.",
			description: "<p>Escreva \"quero vender mais empanadas\" e o AdsGPT cria seus anúncios, peças publicitárias e vídeos no Google, Instagram e muito mais. Você escolhe quanto gastar.</p>",
			phone: {
				src: "/lotties/launch-external/lanza.json",
				ariaLabel: "AdsGPT em um celular: exemplos de anúncios criados para sua marca."
			}
		},
		brandsMarquee: {
			brands: [
				{
					src: "/brands/hbo-marquee.webp",
					alt: "HBO",
					width: 92,
					height: 38,
					mobileWidth: 56,
					mobileHeight: 23
				},
				{
					src: "/brands/mcdonalds-marquee.webp",
					alt: "McDonald’s",
					width: 54,
					height: 54,
					mobileWidth: 31,
					mobileHeight: 31
				},
				{
					src: "/brands/visa-marquee.webp",
					alt: "Visa",
					width: 91.867,
					height: 29.765,
					mobileWidth: 56,
					mobileHeight: 18
				},
				{
					src: "/brands/spotify-marquee.webp",
					alt: "Spotify",
					width: 49.947,
					height: 50,
					mobileWidth: 30,
					mobileHeight: 30
				},
				{
					src: "/brands/apple-marquee.webp",
					alt: "Apple",
					width: 41,
					height: 50,
					mobileWidth: 24,
					mobileHeight: 30
				},
				{
					src: "/brands/toyota-marquee.webp",
					alt: "Toyota",
					width: 71,
					height: 72,
					mobileWidth: 40,
					mobileHeight: 40
				},
				{
					src: "/brands/amazon-marquee.webp",
					alt: "Amazon",
					width: 65,
					height: 65,
					mobileWidth: 30,
					mobileHeight: 30
				},
				{
					src: "/brands/microsoft-marquee.webp",
					alt: "Microsoft",
					width: 49,
					height: 48,
					mobileWidth: 30,
					mobileHeight: 30
				}
			],
			description: "<p>Mais de <strong>20.000</strong> apps confiam em nós, alcançando <strong>500M</strong> de usuários</p>"
		},
		cardsGrid: {
			items: [
				{
					heading: "Conecte suas redes",
					description: "<p>Google, Meta, OpenAI, Wortise, X, TikTok, LinkedIn e muito mais. Tudo no AdsGPT.</p>",
					variant: "connect",
					animation: {
						src: "/lotties/optimized-v2/conecta-tus-redes.json",
						ariaLabel: "Integrações com plataformas de publicidade e inteligência artificial."
					}
				},
				{
					heading: "Diga qual é seu objetivo",
					description: "<p>O AdsGPT escolhe como, onde e com qual tipo de campanha alcançar seu objetivo.</p>",
					variant: "objective",
					animation: {
						src: "/lotties/optimized-v2/dile-tu-objetivo.json",
						responsiveSrc: { osm: "/lotties/optimized-v2/dile-tu-objetivo-mobile.json" },
						ariaLabel: "Campo para descrever o objetivo da sua campanha no AdsGPT."
					}
				},
				{
					heading: "Sua marca em todos os formatos",
					description: "<p>Gere diversas versões de imagens, vídeos, anúncios interativos e jogáveis com a identidade da sua marca.</p>",
					variant: "formats",
					animation: {
						src: "/lotties/optimized-v2/tu-marca-en-cada-formato.json",
						ariaLabel: "Exemplos de peças publicitárias em diferentes formatos."
					}
				},
				{
					heading: "Lance e otimize",
					description: "<p>Compare resultados e redistribua o orçamento para o que funciona melhor.</p>",
					variant: "optimize",
					animation: {
						src: "/lotties/optimized-v2/lanza-y-optimiza.json",
						ariaLabel: "Controles de orçamento e métricas de alcance de uma campanha."
					}
				}
			]
		},
		scrollPanels: {
			items: [
				{
					number: "01",
					lottieSrc: "/lotties/conecta-progressive/conecta.json",
					lottieProgressiveLoad: true,
					heading: "Conecte",
					descriptionLeft: "<p>Vincule suas redes de publicidade e gerencie todas em um só lugar.</p>",
					image: {
						src: "/cards-snap/cards-snap-01.png",
						alt: "Integrações publicitárias do AdsGPT na tela de um celular.",
						width: 450,
						height: 690
					},
					descriptionRight: "<ul><li>Conecte suas plataformas</li><li>Gerencie tudo em um só lugar</li><li>Centralize dados e campanhas</li></ul>",
					context: "light"
				},
				{
					number: "02",
					lottieSrc: "/lotties/optimized-snap/describe.json",
					heading: "Descreva",
					descriptionLeft: "<p>Diga o que você quer promover. Escreva uma frase curta, cole uma URL ou envie seu produto.</p>",
					image: {
						src: "/cards-snap/cards-snap-02.png",
						alt: "Integrações publicitárias do AdsGPT na tela de um celular.",
						width: 450,
						height: 690
					},
					descriptionRight: "<ul><li>Defina o objetivo em segundos</li><li>Adicione um produto, link ou imagem</li><li>O AdsGPT entende o contexto</li></ul>",
					context: "dark"
				},
				{
					number: "03",
					lottieSrc: "/lotties/optimized-snap/crea.json",
					heading: "Crie",
					descriptionLeft: "<p>O AdsGPT transforma sua ideia em uma campanha completa: visual, texto e público, tudo alinhado.</p>",
					image: {
						src: "/cards-snap/cards-snap-03.png",
						alt: "Integrações publicitárias do AdsGPT na tela de um celular.",
						width: 450,
						height: 690
					},
					descriptionRight: "<ul><li>Peças prontas para publicar</li><li>Mensagens adaptadas a cada canal</li><li>Público sugerido por IA</li></ul>",
					context: "light"
				},
				{
					number: "04",
					lottieSrc: "/lotties/launch-external/lanza.json",
					heading: "Lance",
					descriptionLeft: "<p>Revise os detalhes, ajuste o que quiser e lance. A otimização continua automaticamente.</p>",
					image: {
						src: "/cards-snap/cards-snap-04.png",
						alt: "Integrações publicitárias do AdsGPT na tela de um celular.",
						width: 450,
						height: 690
					},
					descriptionRight: "<ul><li>Publicação em vários canais</li><li>Métricas em tempo real</li><li>Otimização contínua</li></ul>",
					context: "dark"
				}
			]
		},
		pricing: {
			items: [
				{
					id: "hobby",
					heading: "Hobby",
					description: "<p>Para começar a criar e promover suas ideias.</p>",
					background: "/pricing/princing-bg-01.webp",
					monthlyPrice: 12.99,
					features: [
						{
							label: "Campanhas ilimitadas",
							icon: "rocket"
						},
						{
							label: "1.000 créditos de IA por mês",
							icon: "star"
						},
						{
							label: "1 Marca",
							icon: "tag"
						},
						{
							label: "1 Usuário",
							icon: "user"
						}
					],
					benefits: [
						"Criação de imagens e vídeos com marca d’água",
						"Relatórios avançados",
						"Exportar imagens"
					],
					currency: "USD",
					pricePeriod: "/mês"
				},
				{
					id: "pro",
					heading: "Pro",
					description: "<p>Para criadores que querem levar suas campanhas mais longe.</p>",
					background: "/pricing/princing-bg-02.webp",
					monthlyPrice: 59.99,
					features: [
						{
							label: "Campanhas ilimitadas",
							icon: "rocket"
						},
						{
							label: "5.000 créditos de IA por mês",
							icon: "star"
						},
						{
							label: "3 Marcas",
							icon: "tag"
						},
						{
							label: "5 Usuários",
							icon: "user"
						},
						{
							label: "2 Equipes",
							icon: "users"
						}
					],
					benefits: [
						"Criação de imagens e vídeos",
						"Exportar imagens e vídeos"
					],
					benefitsHeading: "Tudo do plano Hobby",
					currency: "USD",
					pricePeriod: "/mês"
				},
				{
					id: "negocios",
					heading: "Negócios",
					description: "<p>Para equipes que gerenciam várias marcas e campanhas.</p>",
					background: "/pricing/princing-bg-03.webp",
					monthlyPrice: 179.99,
					features: [
						{
							label: "Campanhas ilimitadas",
							icon: "rocket"
						},
						{
							label: "15.000 créditos de IA por mês",
							icon: "star"
						},
						{
							label: "10 Marcas",
							icon: "tag"
						},
						{
							label: "10 Usuários",
							icon: "user"
						},
						{
							label: "5 Equipes",
							icon: "users"
						}
					],
					benefits: [
						"Acompanhamento avançado de conversões",
						"Automações",
						"Suporte prioritário"
					],
					benefitsHeading: "Tudo do plano Pro",
					currency: "USD",
					pricePeriod: "/mês"
				},
				{
					id: "agencia",
					heading: "Agência",
					description: "<p>Para agências que atendem vários clientes em escala.</p>",
					background: "/pricing/princing-bg-04.webp",
					monthlyPrice: 599.99,
					features: [
						{
							label: "Campanhas ilimitadas",
							icon: "rocket"
						},
						{
							label: "50.000 créditos de IA por mês",
							icon: "star"
						},
						{
							label: "25 Marcas",
							icon: "tag"
						},
						{
							label: "25 Usuários",
							icon: "user"
						},
						{
							label: "Equipes ilimitadas",
							icon: "users"
						}
					],
					benefits: [
						"Configuração inicial assistida",
						"Relatórios com a sua marca"
					],
					benefitsHeading: "Tudo do plano Negócios",
					currency: "USD",
					pricePeriod: "/mês"
				}
			],
			heading: "Conheça nossos planos",
			annualDiscount: 20,
			billingLabels: {
				legend: "Período de cobrança",
				monthly: "Mensal",
				annual: "Anual",
				discountSuffix: "% de desconto"
			}
		},
		bannerCTA: {
			stores: storesData.pt,
			pill: {
				label: "Baixe o app",
				icon: "star-filled"
			},
			heading: "Leve o futuro da publicidade com você",
			description: "<p>O AdsGPT já está disponível no Google Play e na App Store. Baixe agora e comece a criar, lançar e acompanhar suas campanhas com facilidade, quando e onde quiser.</p>",
		}
	},
} satisfies Record<Locale, HomeData>;
