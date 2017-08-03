module.exports ={
	arrayData: [
		{
			name: 'start',
			index: 0,
			options: [
				{	text: 'is', target: 1 },
			]
		},
		{
			name: 'is',
			index: 1,
			options: [
				{ text: 'a technologist', target: 2 },
				{ text: 'a programmer', target: null },
				{ text: 'an artist', target: 3 },
				{ text: 'an educator', target: null }
			]
		},
		{
			name: 'a technologist',
			index: 2,
			options: [
				{ text: 'working at', target: null },
				{ text: 'working on', target: null },
				{ text: 'working in', target: null },
			]
		},
		{
			name: 'an artist',
			index: 3,
			options: [
				{ text: 'who sometimes shows work publicly', target: 4 },
				{ text: 'interested in computational aesthetics', target: 4 },
				{ text: 'working across disciplines', target: 4 },
			]
		},
		{
			name: 'and',
			index: 4,
			options: [
				{ text: 'and', target: 0 },
			]
		}
	]
} 