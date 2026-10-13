import catalog from '../../public/lotties-drive/catalogo.json';

export const reviewFolders = {
	originales: 'Originales',
	nuevos: 'Nuevos',
	'parte-3': 'Parte 3',
	'nuevos/dotlottie': 'Nuevos · dotLottie',
};

// Maximum rendered media widths in CardsGrid at its 1584px content limit:
// 24px gaps, 464:235:533 tracks, 2px card borders and 78px optimize inset.
const gridWidth = 1584 - 24 * 2;
const trackTotal = 464 + 235 + 533;
const reviewSizes = {
	connect: gridWidth * 464 / trackTotal - 2,
	objective: gridWidth * (235 + 533) / trackTotal + 24 - 2,
	formats: gridWidth * (464 + 235) / trackTotal + 24 - 2,
	optimize: gridWidth * 533 / trackTotal - 2 - 78,
	phone: 510,
	mobile: 350,
};

function presentation(name: string) {
	if (name.startsWith('Conecta tus redes')) return { family: 'Conecta tus redes', width: reviewSizes.connect, usage: 'Tarjeta Conecta tus redes' };
	if (name.startsWith('Dile tu objetivo mobile')) return { family: 'Dile tu objetivo móvil', width: reviewSizes.mobile, usage: 'Tarjeta Dile tu objetivo · móvil' };
	if (name.startsWith('Dile tu objetivo')) return { family: 'Dile tu objetivo', width: reviewSizes.objective, usage: 'Tarjeta Dile tu objetivo · desktop' };
	if (name.startsWith('Tu marca')) return { family: 'Tu marca, en cada formato', width: reviewSizes.formats, usage: 'Tarjeta Tu marca, en cada formato' };
	if (name.startsWith('Lanza y optimiza')) return { family: 'Lanza y optimiza', width: reviewSizes.optimize, usage: 'Tarjeta Lanza y optimiza' };
	const family = name.startsWith('Hero') ? 'Hero' : name.startsWith('Conecta') ? 'Conecta' : name.startsWith('Describe') ? 'Describe' : name.startsWith('Crea') ? 'Crea' : 'Lanza';
	return { family, width: reviewSizes.phone, usage: family === 'Hero' ? 'Teléfono del Hero' : `Teléfono del panel ${family}` };
}

export const lottieReviewFiles = catalog.files.map(file => {
	const view = presentation(file.name);
	return {
		...file,
		...view,
		compositionWidth: file.width,
		compositionHeight: file.height,
		previewWidth: view.width,
		previewHeight: view.width * file.height / file.width,
		folder: file.relativePath.slice(0, file.relativePath.lastIndexOf('/')),
		format: file.name.endsWith('.lottie') ? 'dotlottie' : 'json',
	};
}).sort((a, b) => Date.parse(b.modifiedTime) - Date.parse(a.modifiedTime));

export const reviewLocations = [...new Set(lottieReviewFiles.map(file => file.usage))].sort();
export const reviewSourceFolder = catalog.sourceFolder;
export type LottieReviewFile = (typeof lottieReviewFiles)[number];
