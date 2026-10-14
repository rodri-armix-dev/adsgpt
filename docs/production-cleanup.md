# Limpieza de producción — 14/10/2026

Se conservaron las páginas de inicio, presentación, privacidad y términos en español, inglés y portugués, y la redirección de idioma en la raíz. Se retiraron `/es/revision-lotties/` y `/es/probar-lotties/`, sus tres componentes exclusivos y `src/data/lottie-review.ts`. `fflate` solo se utilizaba para abrir archivos dotLottie en el probador: se retiró de package.json y del lockfile con pnpm.

## Archivos públicos

Solo `public/lotties/v6.0/` permanece activo: 24 JSON y 368 imágenes compartidas. Se retiraron 25 carpetas de versiones anteriores y `public/lotties-drive/`. La documentación y los manifiestos se trasladaron a `docs/lotties/`, y los SVG importados para renderizar iconos inline junto con su licencia se trasladaron a `src/assets/icons/`. No se modificaron bytes de animaciones, imágenes activas ni SVG.

Se eliminaron 28 imágenes sin referencias en el código de producción: PNG anteriores de marcas y fondos, capturas de CardsGrid, hero, favicon PNG y marco PNG. Se conservaron los WebP activos, las capturas de CardsSnap referenciadas por los datos, el favicon SVG, las fuentes y sus licencias.

El tamaño de archivos de `public` bajó de **413.47 MB** a **26.54 MB**, una reducción de **386.92 MB**. Son tamaños de archivos sin comprimir; no representan una reducción de descarga del home ni una medición de CPU.

## Comprobaciones

- Integridad SHA-256 de los 24 JSON y las 368 imágenes activas contra el manifiesto v6.0.
- Las 495 referencias de imágenes de los JSON resuelven dentro de v6.0/images.
- Las 12 páginas de producción responden 200 en el servidor dev existente; las páginas de prueba y muestras de rutas históricas/metadata retiradas responden 404.
- Los 24 JSON se sirven por HTTP con sus bytes originales; se comprobaron recursos JPG, PNG y WebP representativos.
- No hay imports de los componentes eliminados ni de fflate en src; Icon compila desde src/assets/icons.
- No se ejecutó build, benchmark, commit ni push.

## Historial y desarrollo

El commit `5af79ae` conserva el estado anterior a la limpieza; se pueden recuperar desde Git las versiones y recursos históricos versionados. Los manifiestos históricos registran rutas y hashes anteriores, no garantizan que esas rutas sigan publicadas.

Se eliminó el `dist/` generado antes de esta limpieza. El servidor dev del usuario permanece funcionando en el mismo puerto. Las herramientas en scripts/, los informes en reports/, la toolbar de desarrollo, las cachés y node_modules son recursos locales de trabajo, no recursos públicos del sitio. No se eliminaron porque sirven al desarrollo y no forman parte de las páginas de producción. `extracted-assets/` queda como material local sin borrar y se excluye de Git.

## Imágenes sin uso retiradas

- `public/hero.png`
- `public/favicon.png`
- `public/cards-grid/cards-grid-01.png`
- `public/cards-grid/cards-grid-02.png`
- `public/cards-grid/cards-grid-03.png`
- `public/cards-grid/cards-grid-04.png`
- `public/brands/spotify.png`
- `public/brands/toyota-marquee.png`
- `public/brands/mcdonalds-marquee.png`
- `public/brands/spotify-marquee.png`
- `public/brands/hbo.png`
- `public/brands/mcdonalds.png`
- `public/brands/hbo-marquee.png`
- `public/brands/apple-marquee.png`
- `public/brands/visa-marquee.png`
- `public/brands/visa.png`
- `public/brands/microsoft.png`
- `public/brands/toyota.png`
- `public/brands/apple.png`
- `public/brands/amazon-marquee.png`
- `public/brands/microsoft-marquee.png`
- `public/brands/amazon.png`
- `public/phone-mockup/device.png`
- `public/pricing/princing-bg-01.png`
- `public/pricing/princing-bg-03.png`
- `public/pricing/princing-bg-02.png`
- `public/pricing/princing-bg-04.png`
- `public/banner-cta/banner-cta-bg.png`
