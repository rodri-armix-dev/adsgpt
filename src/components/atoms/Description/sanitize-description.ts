import { sanitizeRichText } from '../../../lib/sanitize-rich-text';

export function sanitizeDescription(html: string): string {
	return sanitizeRichText(html);
}
