# adsgpt

Base de proyecto Astro con TypeScript estricto, Sass, componentes organizados con Atomic Design e internacionalización preparada para crecer.

## Requisitos

- Node.js 22.12 o superior
- pnpm

## Comandos

```sh
pnpm install
pnpm dev
pnpm build
pnpm preview
pnpm astro -- --help
```

La página raíz redirige a español, inglés o portugués según la preferencia guardada y el idioma del navegador. Las páginas de prueba de Lotties se retiraron de las rutas públicas.

## Idiomas

El sitio incluye español (`es`), inglés (`en`) y portugués de Brasil (`pt`).
La configuración compartida vive en `src/i18n/config.ts`; las equivalencias
de rutas están en `src/i18n/routes.ts`. El selector conserva la página actual
al cambiar de idioma.

| Página | Español | Inglés | Portugués |
| --- | --- | --- | --- |
| Inicio | `/es/` | `/en/` | `/pt/` |
| Sobre nosotros | `/es/sobre-nosotros/` | `/en/about-us/` | `/pt/sobre-nos/` |
| Privacidad | `/es/privacidad/` | `/en/privacy/` | `/pt/privacidade/` |
| Términos | `/es/terminos/` | `/en/terms/` | `/pt/termos/` |

Los textos del sitio, metadatos y etiquetas de accesibilidad se traducen en
`src/data/` y `src/i18n/ui.ts`. Los recursos gráficos y las animaciones
comparten sus archivos originales; los textos convertidos a trazados o
incluidos en imágenes requieren versiones gráficas por idioma.

## Estructura

- `src/components/`: átomos, moléculas y organismos.
- `src/data/`: contenido tipado por idioma.
- `src/i18n/`: configuración de locales.
- `src/layouts/`: layouts compartidos.
- `src/pages/`: rutas de Astro.
- `src/styles/`: configuración Sass, tokens y bases globales.
- `integrations/viewport-toolbar/`: indicador de breakpoint para la toolbar de desarrollo de Astro.

## Estilos y responsive

`global.scss` carga tokens y base una sola vez. Los componentes cargan su SCSS desde un bloque scoped. La configuración Sass se inyecta automáticamente mediante `config/scss.ts`.

Los breakpoints y consultas responsive tienen una única fuente en `config/breakpoints.ts`, disponible desde TypeScript y mediante mixins Sass (`m`, `l`, `xl`, `xxl`, `xxxl`, rangos exclusivos y combinados). Los tokens `--breakpoint-*` se generan desde esa fuente y alimentan la toolbar.

`.global-inner` ofrece el contenedor compartido. Sus variables son `--layout-content-max-width`, `--layout-gutter` y `--global-item-gap`. El foco de teclado se define globalmente en `base/focus.scss`.

La estructura global sigue la base de Wortise:

```text
src/styles/
├── config/   # index.scss, responsive.scss; no emite CSS
├── base/     # index.scss, reset.scss, fonts.scss, focus.scss, base.scss, layout.scss
├── tokens/   # index.scss, colors.scss, spacing.scss, radius.scss, typography.scss, layout.scss
└── global.scss
```

Los colores, radios y familias separan primitivas de aliases semánticos. `colors.scss` reúne la paleta y sus roles; los valores de AdsGPT se conservan. `fonts.scss` registra Host Grotesk como única familia, con fuentes variables locales WOFF2 para pesos 300–800, normal y cursiva, y subconjuntos latin y latin-ext. La licencia OFL se incluye junto a los archivos en `src/assets/fonts/host-grotesk/`.

## Recursos de producción

`public/lotties/v6.0/` contiene únicamente los JSON activos en `global`, `es`, `pt` y `en`, junto con sus imágenes compartidas. La documentación y los manifiestos viven en [docs/lotties/](docs/lotties/README.md), fuera de los archivos públicos. Los iconos inline y su licencia están en `src/assets/icons/`.

Las versiones históricas y los recursos retirados pueden recuperarse desde Git; el commit `5af79ae` conserva el estado anterior a la limpieza. El resumen de la limpieza está en [docs/production-cleanup.md](docs/production-cleanup.md).
