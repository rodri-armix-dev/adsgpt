import { existsSync, readFileSync } from 'node:fs';
import { dirname, extname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import type { Importer } from 'sass';

const sourceDirectory = fileURLToPath(new URL('../src/', import.meta.url));
const configDirectory = resolve(sourceDirectory, 'styles/config');
const configEntry = resolve(configDirectory, 'index.scss');
const modulePrefix = 'project-scss:';

// Route local Sass modules through the importer so co-located styles also
// receive the config. Vite's additionalData alone only covers entrypoints.
export function prepareScss(source: string, filename: string): string {
	const localModules = source.replace(
		/(@(?:use|forward)\s+)(['"])([^'"]+)\2/g,
		(statement, directive, quote, specifier) => {
			if (/^(?:[a-z][a-z\d+.-]*:|\/)/i.test(specifier)) return statement;
			const candidate = resolve(dirname(filename), specifier);
			const path = extname(candidate) ? candidate : `${candidate}.scss`;
			if (!path.startsWith(sourceDirectory) || !existsSync(path)) return statement;
			return `${directive}${quote}${modulePrefix}${path}${quote}`;
		},
	);

	if (filename.startsWith(configDirectory)) return localModules;
	return `@use '${modulePrefix}${configEntry}' as *;\n${localModules}`;
}

export const projectScssImporter: Importer<'sync'> = {
	canonicalize(url) {
		if (!url.startsWith(modulePrefix)) return null;
		return pathToFileURL(url.slice(modulePrefix.length));
	},
	load(url) {
		const filename = fileURLToPath(url);
		return {
			contents: prepareScss(readFileSync(filename, 'utf8'), filename),
			syntax: 'scss',
			sourceMapUrl: url,
		};
	},
};
