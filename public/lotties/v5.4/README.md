# Entrega 5, revisión 4 — Correcciones de localización

Se corrigen doce archivos (seis por idioma): Hero, Dile tu objetivo desktop y mobile, Conecta, Describe y Crea. Las bases son las variantes localizadas v5.2 y Crea v5.3; los contenidos traducidos proceden de v5.0. Se conservan todas las revisiones anteriores, español y los globales v4.9. Lanza y optimiza y Lanza continúan en v5.2.

## Cambios

- Documentos nativos: se recuperan dimensiones, interlineado y estilo locales por texto **y tiempo del documento**, conservando los keyframes del documento español. Esto respeta también las cajas que cambian durante una ampliación, en lugar de reutilizar la primera medida para todos los estados.
- Se transfieren los selectores de caracteres y el kerning de cada traducción, conservando las curvas optimizadas de los animadores coincidentes. Describe dejaba visibles caracteres fuera del selector de opacidad español, superpuestos sobre la paleta. Los selectores locales eliminan esa superposición.
- Hero conserva su título en dos líneas y Create sin cortar; se adaptan las flechas de los botones y las anclas de sus contenedores al ancho local. Se ajusta el ancla de la fila de etiquetas sin reemplazar su trayectoria española.
- Dile tu objetivo sustituye los trazados de texto y cursor por los de cada idioma en su única capa animada. En mobile se recupera además la posición animada local de esa capa: el desplazamiento horizontal depende de la longitud de las frases y no puede reutilizar el español. Se mantienen las composiciones reducidas y los atlas existentes.
- Crea sustituye card_brand, que contiene el encabezado y título dentro de la imagen, por los recursos entregados en EN/PT. Conserva la densidad española equivalente, sin ampliar, y usa WebP sin pérdida para las letras y la transparencia (PNG si fuera menor). Las fotografías comunes no se recomprimen.

## Recursos y preservación

Los recursos existentes usan rutas relativas a sus versiones actuales. Solo se añaden las dos imágenes de card_brand. report.json y versions.json registran hashes de salida, fuente localizada y revisión anterior. No se cambian interfaces, componentes, FPS, duración, lienzo ni cantidad de capas. Se conservan el Hero sin marco integrado, el indicador negro en primer plano, el ajuste inferior de Conecta y el saludo portugués con emoji restaurado de v5.1.

## Validación

Se comprobaron referencias, padres, hashes anteriores, tamaño del lienzo, FPS/duración y correspondencia de todos los documentos nativos por tiempo. Se renderizaron las doce variantes contra v5.0 con lottie-web del proyecto y Chrome headless: cinco cuadros por archivo y cinco momentos adicionales de escritura por cada Dile, 80 pares de cuadros distintos. Se revisaron los problemas detectados de idioma, recorte, salto de línea, flechas y superposición. Los recursos se resolvieron y no se registraron errores JS. Las capturas y resultados están en reports/lottie-localization-v5.4/.

La comparación no cubre todos los frames ni Safari en un teléfono físico. Los largos textos portugueses de Dile mobile siguen el desplazamiento y recorte intencional de su original. El marco ausente, las simplificaciones y las trayectorias generales españolas son diferencias autorizadas; no se afirma igualdad absoluta de píxeles con v5.0. No se ejecutaron build, benchmarks, commit ni push.

Generador local: scripts/correct-lotties-v5.4.cjs. Se detiene si la revisión ya existe. La publicación en home.ts y el manifiesto se realiza tras la revisión de las capturas.
