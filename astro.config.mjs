// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import { defaultLocale, locales } from './src/i18n/config.ts';
import { sharedBreakpointsImporter } from './config/breakpoints.ts';
import { prepareScss, projectScssImporter } from './config/scss.ts';
import viewportToolbar from './integrations/viewport-toolbar/integration.ts';

// https://astro.build/config
export default defineConfig({
	adapter: vercel(),
	integrations: [viewportToolbar()],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: prepareScss,
					importers: [sharedBreakpointsImporter, projectScssImporter],
				},
			},
		},
	},
	i18n: {
		defaultLocale,
		// Shared locale configuration includes Spanish, English and Portuguese.
		locales: [...locales],
		routing: {
			prefixDefaultLocale: true,
		},
	},
});
