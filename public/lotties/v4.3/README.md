# Entrega 4, revisión 3 — Imágenes externas

Origen: las diez animaciones activas del home, procedentes de v4.1 y v4.2. Fecha: 13/10/2026. Las versiones anteriores se conservan.

Se extrajeron 177 referencias de imágenes a 175 archivos únicos bajo images/. Los nombres contienen el SHA-256 completo de sus bytes; dos referencias idénticas reutilizan archivos. Cada JSON resuelve sus imágenes mediante u: images/, p: nombre y e: 0, relativos a su propia ruta. No hace falta cambiar el reproductor ni usar un servidor externo.

Los bytes, formatos, resolución y transparencia de las imágenes permanecen idénticos a las versiones previas. Se verificaron contra cada imagen embebida. Todos los demás campos del JSON se conservaron, incluidas dimensiones, geometría, capas, máscaras, keyframes, duración y FPS. Se mantiene el dimensionado Retina para S, XL y XXL de la revisión anterior; M y L siguen excluidos de ese cálculo.

| Animación | JSON embebido anterior | JSON externo |
| --- | --- | --- |
| hero | 4.43 MB | 364.8 KB |
| conecta-tus-redes | 3.61 MB | 3575.1 KB |
| dile-tu-objetivo | 0.69 MB | 635.6 KB |
| dile-tu-objetivo-mobile | 0.73 MB | 690.0 KB |
| tu-marca-en-cada-formato | 3.67 MB | 5.0 KB |
| lanza-y-optimiza | 0.81 MB | 792.2 KB |
| conecta | 1.36 MB | 1298.6 KB |
| describe | 0.62 MB | 421.7 KB |
| crea | 4.83 MB | 940.3 KB |
| lanza | 7.76 MB | 41.7 KB |

Peso de todos los JSON: 8.77 MB. Peso de las 175 imágenes: 14.79 MB. Total sin comprimir: 28.51 MB → 23.55 MB (17.4 % menos). Estos totales excluyen documentación e informes.

Estimación de transporte con gzip local: 15.95 MB → 15.83 MB (0.7 % menos), contando cada imagen única una vez y usando el menor peso entre su binario y gzip. No representa una medición del hosting ni incluye cabeceras HTTP. No se modificó la configuración de caché o compresión del servidor. Externalizar permite cachear las imágenes por separado; no implementa carga por fotograma ni reduce nodos SVG.

report.json registra los orígenes, referencias compartidas, hashes y tamaños. visual-validation.json contiene comparaciones de cinco cuadros por animación a densidad 2× con el mismo lottie-web SVG, cargando JSON e imágenes mediante las rutas reales del servidor dev. Se tolera únicamente el redondeo de rasterización de hasta 2/255 por canal.
