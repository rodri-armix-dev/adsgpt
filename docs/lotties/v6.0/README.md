# v6.0 — Base activa consolidada

Se crea v6.0 por petición explícita del usuario como punto de partida ordenado, a partir de las versiones activas optimizadas y corregidas. No representa una nueva entrega externa. Las versiones anteriores quedan conservadas en el historial de Git (commit previo a la limpieza: `5af79ae`).

```text
v6.0/
├── global/  # Redes, Formatos y Lanza compartidos por los tres idiomas
├── es/      # Siete variantes españolas, incluido Dile mobile
├── pt/      # Siete variantes portuguesas, incluido Dile mobile
├── en/      # Siete variantes inglesas, incluido Dile mobile
└── images/  # Recursos compartidos, deduplicados por SHA-256
```

Contiene 24 JSON y 368 imágenes únicas. Cada JSON utiliza `../images/`; no depende de recursos de otras versiones. Las imágenes conservan exactamente sus bytes, resolución, formato y compresión. La consolidación solo modifica rutas de imágenes en los JSON; se mantienen textos, capas, máscaras, keyframes, FPS, duración y todas las correcciones activas. No se recomprime ningún recurso.

## Procedencia

| Archivo v6.0 | Fuente activa anterior |
| --- | --- |
| `global/conecta-tus-redes.json` | `v4.9/conecta-tus-redes.json` |
| `global/tu-marca-en-cada-formato.json` | `v4.9/tu-marca-en-cada-formato.json` |
| `global/lanza.json` | `v4.8/lanza.json` |
| `es/hero.json` | `v4.9/hero.json` |
| `es/dile-tu-objetivo.json` | `v4.8/dile-tu-objetivo.json` |
| `es/dile-tu-objetivo-mobile.json` | `v4.8/dile-tu-objetivo-mobile.json` |
| `es/lanza-y-optimiza.json` | `v4.9/lanza-y-optimiza.json` |
| `es/conecta.json` | `v4.10/conecta.json` |
| `es/describe.json` | `v4.9/describe.json` |
| `es/crea.json` | `v4.9/crea.json` |
| `pt/hero.json` | `v5.4/pt/hero.json` |
| `pt/dile-tu-objetivo.json` | `v5.4/pt/dile-tu-objetivo.json` |
| `pt/dile-tu-objetivo-mobile.json` | `v5.4/pt/dile-tu-objetivo-mobile.json` |
| `pt/lanza-y-optimiza.json` | `v5.2/pt/lanza-y-optimiza.json` |
| `pt/conecta.json` | `v5.4/pt/conecta.json` |
| `pt/describe.json` | `v5.4/pt/describe.json` |
| `pt/crea.json` | `v5.4/pt/crea.json` |
| `en/hero.json` | `v5.4/en/hero.json` |
| `en/dile-tu-objetivo.json` | `v5.4/en/dile-tu-objetivo.json` |
| `en/dile-tu-objetivo-mobile.json` | `v5.4/en/dile-tu-objetivo-mobile.json` |
| `en/lanza-y-optimiza.json` | `v5.2/en/lanza-y-optimiza.json` |
| `en/conecta.json` | `v5.4/en/conecta.json` |
| `en/describe.json` | `v5.4/en/describe.json` |
| `en/crea.json` | `v5.4/en/crea.json` |

## Asignación y validación

`src/data/pages/home.ts` usa v6.0 para sus 30 referencias, incluidas las variantes móviles. `docs/lotties/v6.0/manifest.json` registra la asignación por idioma, los hashes, los tamaños y la procedencia de cada JSON e imagen; `docs/lotties/versions.json` mantiene el registro histórico.

Se comprobó la igualdad estructural de cada animación sustituyendo las rutas por el hash de sus imágenes, la identidad de todos los bytes de recursos y la resolución local de las referencias. No se ejecutaron build, benchmarks, commit ni push. No se repitió la validación visual porque los contenidos no cambian.

Los manifiestos y documentos se alojan fuera de `public` desde la limpieza de producción. Todos los archivos listados en Procedencia pertenecen al historial previo; los activos están en `public/lotties/v6.0/`.
