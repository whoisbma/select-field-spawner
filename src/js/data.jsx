module.exports = {
	arrayData: [
		{
			name: 'start',
			index: 0,
			options: [
				{	text: 'is', target: 1 },
				{ text: 'was', target: null },
				{ text: 'studied', target: null },
				{ text: 'likes', target: null },
			]
		},
		{
			name: 'is',
			index: 1,
			options: [
				{ text: 'a technologist', target: 2 },
				{ text: 'an artist', target: 3 },
				{ text: 'an educator', target: 4 },

			]
		},
		{
			name: 'a technologist',
			index: 2,
			options: [
				{ text: 'working at', target: null },
				{ text: 'working on', target: null },
				{ text: 'working with', target: null },
			]
		},
		{
			name: 'an artist',
			index: 3,
			options: [
				{ text: 'interested in computational aesthetics', target: null },
				{ text: 'working across disciplines', target: null },
			]
		},
		{
			name: 'an educator',
			index: 4,
			options: [
				{ text: 'at Parsons School of Design', target: 5 },
			]
		},
		{
			name: 'at Parsons School of Design',
			index: 5,
			options: [
				{ text: 'teaching classes in', target: 6 },
				{ text: 'teaching classes about', target: 7 },
			],
		},
		{
			name: 'teaching classes in',
			index: 6,
			options: [
				{ text: 'Processing', target: null },
				{ text: 'Javascript', target: null },
				{ text: 'P5.js', target: null },
				{ text: 'Node.js', target: null },
				{ text: 'C++', target: null },
				{ text: 'OpenFrameworks', target: null },
			]
		},
		{
			name: 'teaching classes about',
			index: 7,
			options: [
				{ text: 'generative design', target: null },
				{ text: 'computational art', target: null },
				{ text: 'expressive interfaces', target: null },
				{ text: 'game design and development', target: null },
			]
		},
	]
};