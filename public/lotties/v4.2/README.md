# Entrega 4, revisión 2 — Imágenes dimensionadas para Retina

Origen: v4.1, conservado sin modificaciones junto a v4.0. Fecha: 13/10/2026.

Se dimensionaron 29 imágenes para el tamaño máximo renderizado de los rangos S, XL y XXL, con densidad 2× y margen del 5 % (objetivo 2,1×). M y L se excluyeron del cálculo por solicitud del usuario; el layout no se modificó. Esta revisión no garantiza densidad 2× en esos dos rangos excluidos ni resolución nativa 3×.

La medición utiliza el renderer SVG actual de lottie-web, tamaños reales del home, transformaciones anidadas y escalas de cada imagen. Se recorrieron 41.552 posiciones, a intervalos de medio cuadro. Las capas inactivas no se usan para medir; no se descuenta el recorte del teléfono ni el de las máscaras. Se conservaron imágenes cuando redimensionar no reducía el peso o no admitían una reducción de resolución de al menos el 5 %. Se conservaron archivos completos cuando el ahorro era inferior a 1 KB.

El redimensionado usa Lanczos3 y WebP sin pérdida después del remuestreo. Cambia los píxeles al reducir resolución. Se conservan las dimensiones declaradas del viewport SVG de cada imagen (asset.w/h), proporciones de composición, capas, máscaras, keyframes, duración y FPS. No se agrandan imágenes.

| Archivo | v4.1 | Activo | Ahorro adicional | Versión activa |
| --- | --- | --- | --- | --- |
| hero | 4.99 MB | 4.43 MB | 11.3 % | v4.2 |
| conecta-tus-redes | 3.61 MB | 3.61 MB | 0.0 % | v4.1 |
| dile-tu-objetivo-mobile | 0.73 MB | 0.73 MB | 0.0 % | v4.1 |
| tu-marca-en-cada-formato | 3.85 MB | 3.67 MB | 4.7 % | v4.2 |
| lanza-y-optimiza | 0.81 MB | 0.81 MB | 0.2 % | v4.2 |
| conecta | 1.37 MB | 1.36 MB | 0.4 % | v4.2 |
| describe | 0.62 MB | 0.62 MB | 1.3 % | v4.2 |
| crea | 5.25 MB | 4.83 MB | 8.2 % | v4.2 |
| lanza | 8.33 MB | 7.76 MB | 6.8 % | v4.2 |
| dile-tu-objetivo | 0.69 MB | 0.69 MB | 0.0 % | v4.1 |

Total activo: 30.26 MB → 28.51 MB; 1.76 MB menos (5.8 % adicional).

Se compararon 35 cuadros a densidad 2×, cinco posiciones de progreso por archivo modificado. Las capturas se alinearon a píxeles físicos. Se revisaron fotografías, texto, logos y encaje. Hay diferencias de remuestreo esperadas; la geometría y todos los campos del JSON salvo los bytes de las imágenes son idénticos a v4.1.

measurements.json contiene los tamaños CSS medidos y máximos por imagen. report.json registra resoluciones, decisiones de conservación, pesos y hashes. visual-validation.json registra diferencias de las capturas Retina.
