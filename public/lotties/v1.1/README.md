# Optimized hero and grid animations

Original JSON files remain unchanged in the parent directory. These optimized
copies are retained for optional reuse. Home data now uses the optimized-v2 copies
for the hero and the four grid cards, including the objective mobile source.
The gallery also uses the originals.

## Changes

- Embedded PNG images become WebP lossless at their original dimensions, only when
  the WebP is smaller. Decoded RGBA pixels were compared byte for byte.
- Layer names (`nm`) and exporter match names (`mn`) are removed. These six
  animations contain no expressions that depend on those names.
- Numeric keyframes with linear easing are simplified with a maximum error of
  0.01 in the property's units. Nonlinear easing, hold frames, spatial tangents,
  and vector path animations are preserved. Frame rate, duration, dimensions,
  layers, authored masks, and image placement are unchanged.

## File sizes

Bytes below are uncompressed JSON sizes, not HTTP compression estimates.

| File | Original bytes | Optimized bytes | Reduction |
| --- | ---: | ---: | ---: |
| lanza.json | 2,863,180 | 1,830,257 | 36.1% |
| conecta-tus-redes.json | 3,602,248 | 3,079,447 | 14.5% |
| dile-tu-objetivo.json | 704,194 | 666,234 | 5.4% |
| dile-tu-objetivo-mobile.json | 751,565 | 718,159 | 4.4% |
| tu-marca-en-cada-formato.json | 1,077,711 | 743,702 | 31.0% |
| lanza-y-optimiza.json | 811,212 | 788,678 | 2.8% |

## Verification

All six original hashes were checked after generation. Animation dimensions and
timing were compared; simplified properties were checked at every original
keyframe against the 0.01 error bound. Original and optimized SVG renders were
compared in Chrome at 0%, 13%, 50%, 87%, and 99.9% progress, with no JavaScript
errors. Minor subpixel rasterization differences occur between PNG and WebP
rendering and the bounded curve simplification.

This pass reduces asset size and some keyframe processing. It does not redesign
layer-heavy animations, change the shared player, or require server compression.
