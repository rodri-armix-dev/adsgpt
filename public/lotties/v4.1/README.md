# Entrega 4, revisión 1 — Optimización sin pérdida

Origen: ../v4.0, conservado sin modificaciones. Fecha: 13/10/2026.

Se convirtieron 177 imágenes PNG a WebP sin pérdida, conservando dimensiones y transparencia. Se verificó la igualdad de los píxeles RGBA decodificados. Se eliminaron metadatos nm/mn (sin expresiones que dependan de ellos) y se minificaron los JSON.

No se simplificaron keyframes ni se modificaron capas, máscaras, geometría, duración o FPS. La estructura completa coincide con el original al excluir nombres y formato de imágenes.

| Archivo | Original | Optimizado | Ahorro |
| --- | --- | --- | --- |
| hero | 7.64 MB | 4.99 MB | 34.6 % |
| conecta-tus-redes | 3.66 MB | 3.61 MB | 1.2 % |
| dile-tu-objetivo | 0.80 MB | 0.69 MB | 13.0 % |
| dile-tu-objetivo-mobile | 0.80 MB | 0.73 MB | 9.1 % |
| tu-marca-en-cada-formato | 6.79 MB | 3.85 MB | 43.3 % |
| lanza-y-optimiza | 0.84 MB | 0.81 MB | 3.8 % |
| conecta | 1.46 MB | 1.37 MB | 6.6 % |
| describe | 0.74 MB | 0.62 MB | 15.9 % |
| crea | 8.31 MB | 5.25 MB | 36.8 % |
| lanza | 14.03 MB | 8.33 MB | 40.6 % |

Total sin comprimir: 45,07 MB → 30,26 MB; ahorro de 14,80 MB (32,8 %). Estimación con gzip local: 28,29 MB → 17,26 MB (39,0 %); no representa una medición del hosting.

Validación visual: originales y copias en Chrome con el mismo lottie-web SVG, tamaños y cinco posiciones de progreso por archivo (0, 15, 50, 85 y 100 %). Se observaron pequeñas diferencias de rasterización entre PNG y WebP; las imágenes fuente conservan sus píxeles y no se observaron cambios de diseño o movimiento.

report.json registra tamaños, conversiones, keyframes y hashes de los originales. Esta revisión reduce el peso de los assets; no reduce capas ni nodos SVG. El ajuste del encaje de Conecta se conserva en ScrollPanelsUnified.
