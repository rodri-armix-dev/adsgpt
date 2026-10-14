# Entrega 5, revisión 2 — Localización sobre las bases españolas optimizadas

Se crean ocho variantes por idioma: Hero, Dile tu objetivo desktop y móvil, Lanza y optimiza, Conecta, Describe, Crea y Lanza. Conecta tus redes y Tu marca en cada formato conservan sus archivos globales v4.9. Las bases españolas y las entregas v5.0/v5.1 se conservan sin modificaciones.

## Correspondencia y movimiento

Se parte de las revisiones españolas activas (v4.8/v4.9/v4.10). La entrega española original v4.0 sirve como puente entre jerarquías: se emparejan composiciones por su capa de uso y capas por nombre/función y tipo, con índice dentro de la composición para los textos renombrados. Los ids de imágenes de cada exportación no se consideran equivalentes. Cada uso de una imagen puede tener una variante localizada distinta. Se conserva el grafo español simplificado y sus intervalos, curvas de movimiento, FPS, duración y máscaras. Las diferencias de posición y ancla de contenidos locales ajustan los textos sin sustituir las trayectorias españolas.

Se transfieren los documentos nativos traducidos, incluidos todos los documentos de los números consolidados, y los glifos necesarios. También se transfieren los trazados estáticos traducidos y los ajustes estáticos de sus contenedores. Describe portugués convierte únicamente su saludo trazado y el emoji corregido de v5.1 en una imagen WebP sin pérdida. No se rasterizan elementos animados.

Dile tu objetivo reconstruye las capas de etiquetas a partir del puente original y sus posiciones traducidas. Mantiene las capas no rasterizadas de la base española y vuelve a componer atlas WebP sin pérdida, sin cortar etiquetas, con límites de 2048×4096. Por diferencias de longitud, algunas variantes requieren de una a dos capas de imagen más que español.

| Idioma | Lottie | Capas entrega → resultado | Capas base ES | Máscaras entrega → resultado |
| --- | --- | --- | --- | --- |
| en | hero | 291 → 205 | 205 | 39 → 39 |
| pt | hero | 291 → 205 | 205 | 39 → 39 |
| en | dile-tu-objetivo | 273 → 66 | 64 | 3 → 3 |
| pt | dile-tu-objetivo | 273 → 64 | 64 | 3 → 3 |
| en | dile-tu-objetivo-mobile | 273 → 52 | 52 | 3 → 3 |
| pt | dile-tu-objetivo-mobile | 273 → 53 | 52 | 3 → 3 |
| en | lanza-y-optimiza | 263 → 100 | 100 | 125 → 5 |
| pt | lanza-y-optimiza | 263 → 100 | 100 | 125 → 5 |
| en | conecta | 240 → 169 | 169 | 37 → 37 |
| pt | conecta | 240 → 169 | 169 | 37 → 37 |
| en | describe | 116 → 88 | 88 | 13 → 10 |
| pt | describe | 117 → 88 | 88 | 14 → 10 |
| en | crea | 56 → 46 | 46 | 16 → 16 |
| pt | crea | 56 → 46 | 46 | 16 → 16 |
| en | lanza | 77 → 52 | 52 | 15 → 15 |
| pt | lanza | 77 → 52 | 52 | 15 → 15 |

## Recursos y optimización

Los recursos comunes usan rutas relativas hacia los archivos españoles existentes; sus JPEG/WebP optimizados se reutilizan sin recomprimir ni duplicar. Las imágenes nuevas de esta entrega contienen interfaz o texto y utilizan WebP sin pérdida, conservando el original si resulta menor. Se hereda la densidad del recurso español equivalente, con reducción proporcional sin ampliar imágenes. Las etiquetas de los atlas conservan la densidad nativa del patrón español. Se comparten archivos localizados idénticos mediante nombres SHA-256 en images/. No se incorporan nuevas fotografías que requieran JPEG o WebP con pérdida.

Se conservan el Hero sin marco integrado, el orden del indicador negro y el oscurecimiento inferior de Conecta v4.10. Los formatos numéricos y las traducciones se toman tal como fueron entregados.

## Comprobaciones

Se comprobaron las correspondencias, referencias de imágenes y composiciones, padres, ids únicos, glifos, canvas, duración/FPS y hashes de las fuentes. report.json registra fuentes, conversiones, conteos y recursos compartidos. No se ejecutó build, benchmark ni validación visual; la revisión visual queda a cargo del usuario. No se afirma una mejora de CPU.

Generador: scripts/localize-lotties-v5.2.cjs. Por defecto publica la revisión y actualiza las referencias; --stage-only genera solo artefactos temporales. Se detiene si la revisión ya existe y no sobrescribe versiones conservadas.

## Tamaño de los JSON

Esta comparación cuenta solo los JSON: las fuentes v5.0 incluyen imágenes embebidas y los resultados v5.2 las referencian externamente. El saludo corregido de v5.1 también tiene un recurso externo. No representa por sí sola el ahorro total de descarga.

| Idioma | Lottie | JSON traducido → resultado |
| --- | --- | --- |
| en | hero | 7668.0 → 348.5 kB |
| pt | hero | 7684.5 → 361.7 kB |
| en | dile-tu-objetivo | 574.9 → 594.7 kB |
| pt | dile-tu-objetivo | 972.0 → 594.0 kB |
| en | dile-tu-objetivo-mobile | 583.3 → 642.5 kB |
| pt | dile-tu-objetivo-mobile | 792.5 → 642.9 kB |
| en | lanza-y-optimiza | 847.5 → 581.9 kB |
| pt | lanza-y-optimiza | 849.1 → 578.8 kB |
| en | conecta | 1446.1 → 1127.8 kB |
| pt | conecta | 1491.4 → 1131.5 kB |
| en | describe | 735.5 → 337.7 kB |
| pt | describe | 818.4 → 353.9 kB |
| en | crea | 8402.3 → 940.8 kB |
| pt | crea | 8404.6 → 937.9 kB |
| en | lanza | 14159.6 → 36.9 kB |
| pt | lanza | 14159.6 → 36.9 kB |

Los resultados suman 9.25 MB de JSON, 1.57 MB de imágenes nuevas y reutilizan 3.61 MB de imágenes españolas mediante sus URLs existentes.
