# Versionado de Lotties

Formato: `v<entrega>.<revisión>`.

- El primer número identifica una entrega recibida. Una entrega nueva aumenta ese número y comienza en `.0`.
- El segundo número identifica una modificación local del archivo: optimización, ajustes de capas, conversión de recursos u otros cambios. Cada revisión se conserva en otra carpeta; nunca se sobrescribe el original `.0`.
- Los ajustes del reproductor, CSS o marco del teléfono no cambian la versión del JSON si sus bytes permanecen intactos.
- Las rutas activas se seleccionan en `src/data/pages/home.ts`; cada animación puede usar una versión distinta.

## Entregas y variantes conservadas

| Versión | Procedencia anterior |
| --- | --- |
| `v1.0` | JSON originales de la base anterior, en la raíz de `public/lotties` |
| `v1.1` | `optimized/` |
| `v1.2` | `optimized-v2/` |
| `v1.3` | `optimized-snap/` |
| `v1.4` | `conecta-static-text/` |
| `v1.5` | `conecta-progressive/` |
| `v1.6` | `launch-external/`, incluido su JSON y todas sus imágenes WebP |
| `v2.0` | `Nuevos-20261013T153253Z-1-001.zip`, recibido el 13/10/2026; cuatro JSON y diez alternativas dotLottie |
| `v3.0` | `drive-download-20261013T155857Z-1-001.zip`, recibido el 13/10/2026; Hero, Dile tu objetivo desktop y Lanza y optimiza |
| `v4.0` | Carpeta de Drive `1JbnYSfUQa6iDvcDWMDXsQAdZWU2RjbHe`, recibida el 13/10/2026; diez JSON originales |
| `v4.1` | Optimización sin pérdida de `v4.0`: WebP, limpieza de metadatos y minificación; keyframes intactos |
| `v4.2` | Imágenes ajustadas para Retina 2× + 5 % según uso real en S, XL y XXL; M y L excluidos del dimensionado |
| `v4.3` | Imágenes externas con bytes idénticos; diez JSON y 175 imágenes únicas compartidas |
| `v4.4` | JPG calidad 92 para fotos opacas y WebP con pérdida calidad 92 para fotos transparentes; revisión visual a cargo del usuario |
| `v4.5` | Hero sin capa de marco integrada; el marco lo aporta PhoneMockup |
| `v4.6` | Hero con cuatro JPG comprimidos suministrados por el usuario |
| `v4.7` | Lanza y optimiza: indicador negro de presupuesto por delante del borde de la tarjeta |
| `v4.8` | Reestructuración para reproducción: keyframes lineales, capas auxiliares, textos numéricos y atlas estáticos |
| `v4.9` | Simplificación adicional de keyframes lineales (0,1 unidades), máscaras redundantes y grupos estáticos |
| `v4.10` | Panel Conecta: oscurecimiento ajustado al borde inferior del marco |
| `v5.0` | `drive-download-20261014T135913Z-1-001.zip`, recibido el 14/10/2026; veinte JSON originales en inglés y portugués |
| `v5.1` | Describe portugués: emoji recuperado de la imagen inglesa en lugar del cuadrado negro |
| `v6.0` | Base activa consolidada por petición del usuario: global, es, pt, en e images; recursos sin recomprimir |
| `v5.4` | Corrección de textos animados, documentos por estado, selectores, cajas, flechas e imágenes con texto EN/PT |
| `v5.3` | Crea inglés y portugués: ancho de texto localizado para evitar saltos de línea en el botón |
| `v5.2` | Inglés y portugués sobre las bases españolas optimizadas; textos, glifos, imágenes y atlas localizados, con recursos comunes reutilizados |

La numeración de las revisiones históricas de `v1` registra las carpetas existentes al organizar este archivo; no reconstruye fechas de entrega desconocidas.

## Versiones activas

Todos los Lotties activos están reunidos en `v6.0/`. Conecta tus redes, Tu marca en cada formato y Lanza se comparten desde `global/`. Cada idioma tiene sus siete variantes en `es/`, `pt/` o `en/`, y todos los recursos viven en `images/`.

La lista completa de archivos, asignaciones y procedencia está en [v6.0/README.md](v6.0/README.md) y [v6.0/manifest.json](v6.0/manifest.json). Esta consolidación es una nueva base ordenada solicitada por el usuario, sin una nueva entrega externa ni cambios de contenido.

`versions.json` registra la ruta anterior o el enlace de origen y el SHA-256 de cada archivo para comprobar su conservación. Las revisiones futuras deben añadir sus propios registros sin eliminar las entradas históricas.
