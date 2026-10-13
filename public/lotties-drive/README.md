# Lotties originales de Google Drive

Copia local de [AdsGPT lotties](https://drive.google.com/drive/folders/1v6JPAGZQaOjPcWceFA-ukkv_j8M5HgX2).

Esta carpeta es el archivo de fuentes para revisar y comparar animaciones. No reemplaza los Lotties versionados ni cambia las animaciones activas del sitio.

## Organización

- `originales/`: archivos ubicados directamente en la carpeta principal de Drive.
- `nuevos/`: archivos de la subcarpeta `Nuevos`.
- `nuevos/dotlottie/`: las diez alternativas del otro formato.
- `parte-3/`: archivos de la subcarpeta `Parte 3`.

Los nombres de archivo y sus bytes se conservan tal como se descargaron. Los nombres de carpetas locales se simplificaron; `catalogo.json` conserva la ubicación relativa exacta en Drive.

## Catálogo

`catalogo.json` registra para cada archivo su ID y enlace de Drive, nombre original, carpeta de origen, fechas de creación y modificación, ruta relativa local, URL pública, tamaño, SHA-256, dimensiones, fotogramas por segundo y duración.

Las fechas del catálogo están en UTC. Para mostrarlas en la página de revisión, convertirlas a la zona horaria del usuario. La fecha de modificación original también se conserva en el archivo local.

No sobrescribir una copia existente si el archivo remoto cambia. Conservar la revisión anterior y registrar la nueva antes de actualizar el catálogo.

## Página de revisión

`/es/revision-lotties/` muestra los 27 archivos pausados, con controles individuales y filtros por ubicación en el diseño, carpeta y formato. Cada archivo tiene un `reviewNumber` fijo en el catálogo para indicar cuál usar; también se puede buscar por ese número. La página no cambia los Lotties activos del sitio.

Las diez alternativas dotLottie conservan sus originales. `previews/v2.2/` contiene las copias de reproducción activas, con las imágenes originales y rutas relativas `images/`, que el reproductor resuelve desde la ubicación del JSON. `previews/v2.1/` conserva la primera conversión, cuya ruta absoluta de imágenes se concatenaba dos veces en lottie-web. `previewUrl` y `previewVersion` relacionan cada copia activa con su fuente en el catálogo.
