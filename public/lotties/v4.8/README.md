# Entrega 4, revisión 8 — Estructura de reproducción

Fecha: 13/10/2026. Se conservan las versiones de origen registradas en report.json.

Se simplificaron keyframes numéricos exclusivamente lineales con error máximo de 0,01 unidades por eje y se convirtieron animaciones constantes en propiedades estáticas. Se eliminaron nodos auxiliares de traslación estática, trasladando sus valores a los hijos y conservando sus jerarquías restantes. Se agruparon textos numéricos con estilos y transformaciones idénticos: cada grupo utiliza una capa de texto con documentos animados y visibilidad discreta, siguiendo los fotogramas enteros del archivo que utiliza el reproductor actual. Se conservaron los grupos con estilos distintos.

En las dos variantes de Dile tu objetivo se rasterizaron conjuntos contiguos de imágenes estáticas que se desplazan juntas en atlas WebP sin pérdida, con ancho máximo de 2048px por recurso. Los atlas conservan el espacio local de las capas, su densidad nativa, parentesco, intervalos y movimiento del bloque; no se cortan imágenes entre tiles. Esta composición puede presentar pequeñas diferencias de rasterización. Se conservan las máscaras y elementos dinámicos. Se eliminaron recursos que dejaron de estar referenciados.

| Lottie | Capas totales | Keyframes numéricos | Versión activa |
| --- | --- | --- | --- |
| hero | 290 → 205 | 733 → 733 | v4.8 |
| conecta-tus-redes | 160 → 114 | 53005 → 50240 | v4.8 |
| dile-tu-objetivo | 273 → 64 | 4990 → 4990 | v4.8 |
| dile-tu-objetivo-mobile | 273 → 52 | 5760 → 5760 | v4.8 |
| tu-marca-en-cada-formato | 17 → 17 | 2 → 2 | v4.4 |
| lanza-y-optimiza | 263 → 100 | 6402 → 3688 | v4.8 |
| conecta | 240 → 169 | 7905 → 7273 | v4.8 |
| describe | 116 → 88 | 2699 → 2108 | v4.8 |
| crea | 56 → 46 | 1752 → 1752 | v4.8 |
| lanza | 77 → 52 | 192 → 192 | v4.8 |

No se modificaron los FPS, la duración, el tamaño de composición, las imágenes comprimidas por el usuario ni el ajuste del indicador de presupuesto en primer plano. Los JSON sin mejoras estructurales conservan su versión activa anterior. Estos cambios reducen elementos/properties gestionados; no se realizó un benchmark de CPU o FPS. La revisión visual queda a cargo del usuario según su solicitud.
