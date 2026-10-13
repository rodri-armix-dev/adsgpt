# Entrega 4, revisión 9 — Interpolación y recortes

Se simplificaron secuencias numéricas con interpolación lineal y un error máximo de 0,1 unidades locales por eje respecto de los segmentos de origen. Los easing no lineales, holds y tangentes espaciales se conservan. Se eliminaron máscaras aditivas estáticas únicamente cuando la envolvente de la geometría, incluidos controles Bézier y márgenes de trazo, queda dentro del rectángulo interior del recorte con 1 unidad de margen. Los recortes que afectan contenido se conservan. Se buscaron grupos de imágenes estáticas contiguas compatibles en todas las composiciones, conservando orden y transformaciones.

| Lottie | Capas | Keyframes numéricos | Versión activa |
| --- | --- | --- | --- |
| hero | 205 → 205 | 733 → 722 | v4.9 |
| conecta-tus-redes | 114 → 114 | 50240 → 30814 | v4.9 |
| dile-tu-objetivo | 64 → 64 | 4990 → 4990 | v4.8 |
| dile-tu-objetivo-mobile | 52 → 52 | 5760 → 5760 | v4.8 |
| tu-marca-en-cada-formato | 17 → 9 | 2 → 2 | v4.9 |
| lanza-y-optimiza | 100 → 100 | 3688 → 3274 | v4.9 |
| conecta | 169 → 169 | 7273 → 5446 | v4.9 |
| describe | 88 → 88 | 2108 → 1570 | v4.9 |
| crea | 46 → 46 | 1752 → 1748 | v4.9 |
| lanza | 52 → 52 | 192 → 192 | v4.8 |

Se conservan revisiones anteriores, tamaño, duración, FPS, estilos numéricos, marco programado y orden del indicador de presupuesto. No se realizaron comprobaciones visuales ni benchmarks, por solicitud del usuario.
