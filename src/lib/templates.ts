const templates = {
    'profile': [],
    'package': [
		{
			id: 1,
			name: 'Title and Description',
			markdown: `## Used B

This project is used by the following companies:

- Company 1
- Company 2`
		},
		{ id: 2, name: 'Description', markdown: '2222' },
		{ id: 3, name: 'Paragraph', markdown: '33333' },
		{ id: 4, name: 'Attribution (Not Required)', markdown: '44444' },
		{ id: 5, name: 'Title', markdown: '55555' },
		{ id: 6, name: 'Description', markdown: '' },
		{ id: 7, name: 'Paragraph', markdown: '' },
		{ id: 8, name: 'Attribution (Not Required)', markdown: '' },
		{ id: 9, name: 'Title', markdown: '' },
		{ id: 10, name: 'Description', markdown: '' }
	],
    'empty': [
		{
			id: 1,
			name: 'Title and Description',
			markdown: `# Title

This project is awesome!

`
		}
	]
}

export default templates;