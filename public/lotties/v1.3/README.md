# CardsSnap optimized animations

Home uses these copies in Spanish and English. Originals remain unchanged.
Embedded PNGs were converted to smaller lossless WebP at their original
resolution with decoded RGBA pixels verified byte for byte. Exporter names were
removed; these files have no expressions. All keyframes, geometry, masks,
layers, easing, dimensions, duration and FPS are preserved.

| File | Original bytes | Optimized bytes | Reduction |
| --- | ---: | ---: | ---: |
| conecta.json | 1319834 | 1286790 | 2.5% |
| describe.json | 553120 | 520062 | 6.0% |
| crea.json | 1987146 | 1495049 | 24.8% |

Total: 3860100 → 3301901 bytes, saving 558199 bytes (14.5%).

Original hashes are recorded in report.json. Validation restored original image
sources and stripped only exporter names, then confirmed full JSON equality.
The project's lottie-web rendered both versions at 0%, 13%, 50%, 87% and 99.9%
progress; generated SVG geometry matched at every sample. Image sources were
excluded from SVG string comparison because their formats differ; the decoded
pixels were verified separately. No layers or SVG geometry were simplified.

Runtime checks passed on the existing development server at 390px and 1440px:
no CardsSnap players initialize at the top of the page; current and next players
prepare near the scene; each of the four steps plays alone when active, in both
scroll directions; leaving the scene pauses all players; resizing and reduced
motion preserve playback control. No JavaScript errors were observed.
