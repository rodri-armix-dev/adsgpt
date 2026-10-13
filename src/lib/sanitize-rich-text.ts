import sanitizeHtml from 'sanitize-html';

export function sanitizeRichText(html: string, { headings = false }: { headings?: boolean } = {}): string {
	return sanitizeHtml(html, {
		allowedTags: [
			...(headings ? ['h2', 'h3'] : []),
			'p', 'br', 'strong', 'b', 'em', 'i', 'u', 's', 'del',
			'a', 'ul', 'ol', 'li', 'blockquote', 'span', 'sup', 'sub', 'code',
		],
		allowedAttributes: {
			a: ['href', 'title', { name: 'target', values: ['_blank', '_self'] }, 'rel'],
			ol: ['start'],
		},
		allowedSchemes: ['http', 'https', 'mailto', 'tel'],
		allowProtocolRelative: false,
		transformTags: {
			a: (tagName, attribs) => ({
				tagName,
				attribs: {
					...attribs,
					...(attribs.target === '_blank' ? { rel: 'noopener noreferrer' } : {}),
				},
			}),
		},
	});
}
