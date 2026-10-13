# Lotties optimized v2

Home uses these copies in both languages, including the mobile objective source and other uses of lanza. Originals and v1 copies remain unchanged. The development gallery continues to show originals.

All keyframes, easing, spatial tangents, geometry, masks, layers, dimensions, duration and FPS are preserved. Only safe nm/mn metadata is removed (no expressions in these files), and embedded PNGs are converted to smaller lossless WebP at their original dimensions. No resolution reduction or lossy compression is applied.

| File | Original bytes | V2 bytes | Reduction | Keyframes preserved |
| --- | ---: | ---: | ---: | ---: |
| lanza.json | 2863180 | 1830257 | 36.1% | 192/192 |
| conecta-tus-redes.json | 3602248 | 3582686 | 0.5% | 52890/52890 |
| dile-tu-objetivo.json | 704194 | 666234 | 5.4% | 4990/4990 |
| dile-tu-objetivo-mobile.json | 751565 | 718159 | 4.4% | 5760/5760 |
| tu-marca-en-cada-formato.json | 1077711 | 743702 | 31.0% | 2/2 |
| lanza-y-optimiza.json | 811212 | 792766 | 2.3% | 6402/6402 |

Total: 9810110 → 8333804 bytes (15.0% smaller, uncompressed).

Generation checked decoded RGBA image pixels byte for byte. Original SHA-256 hashes are stored in report.json. Validation confirmed that the full animation JSON is identical after restoring image sources and removing metadata from the originals. Chrome with the project's lottie-web compared generated SVG geometry at 0%, 13%, 50%, 87% and 99.9% progress for all six files, without JavaScript errors. This reduces file size; it does not reduce SVG node counts or guarantee better playback performance.

The existing dev server at localhost:4321 was checked in Spanish and English at 1440px and 390px. All active v2 sources loaded successfully, the correct objective source was selected per viewport, playback advanced, and no JavaScript errors were reported.
