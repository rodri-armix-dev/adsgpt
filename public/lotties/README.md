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

La numeración de las revisiones históricas de `v1` registra las carpetas existentes al organizar este archivo; no reconstruye fechas de entrega desconocidas.

## Versiones activas

- Hero: `v3.0/hero.json`.
- Conecta tus redes: `v1.2/conecta-tus-redes.json`.
- Dile tu objetivo desktop: `v3.0/dile-tu-objetivo.json`.
- Dile tu objetivo móvil: `v2.0/dile-tu-objetivo-mobile.json`.
- Tu marca, en cada formato: `v1.2/tu-marca-en-cada-formato.json`.
- Lanza y optimiza: `v3.0/lanza-y-optimiza.json`.
- Panel Conecta: `v2.0/conecta.json`.
- Panel Describe: `v1.3/describe.json`.
- Panel Crea: `v1.3/crea.json`.
- Panel Lanza: `v1.6/lanza.json`.

`versions.json` registra la ruta anterior y el SHA-256 de cada archivo trasladado para comprobar su conservación. Las revisiones futuras deben añadir sus propios registros sin eliminar las entradas históricas.
