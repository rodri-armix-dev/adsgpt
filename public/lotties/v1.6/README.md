# Launch animation

Lossless external-image copy of `../optimized-v2/lanza.json`, used by the home hero and launch step in both languages. Original files remain unchanged.

`report.json` records the original SHA-256 and each extracted WebP hash. Image files are byte-identical to their original embedded payloads; composition dimensions, frame rate, duration, layers, masks and keyframes are unchanged. Asset paths are relative to `lanza.json` so deployment under `/adsgpt/` works without rewriting JSON.

The JSON shrinks from 1,830,257 to 40,724 bytes. JSON plus images totals 1,382,802 bytes (24.4% smaller before HTTP compression). This removes base64 overhead and permits independent image caching; it does not reduce SVG nodes or promise a particular PageSpeed score.

Validated using the existing dev server: compared original/copy at 0%, 50% and 99% progress with the same lottie-web renderer, checked mobile image selection and browser errors.
