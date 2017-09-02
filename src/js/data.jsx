module.exports = {
	data: [
		{
			name: 'start',
			index: 0,
			options: [
				{	text: 'is', target: 1, postText: null },
				{ text: 'was', target: null, postText: null },
				{ text: 'studied', target: null, postText: null },
				{ text: 'likes', target: null, postText: null },
			]
		},
		{
			name: 'is',
			index: 1,
			options: [
				{ text: 'a technologist', target: 2, postText: 'at museum design firm Gallagher and Associates,' },
				{ text: 'an artist', target: 3, postText: null },
				{ text: 'an educator', target: 4, postText: 'at Parsons School of Design, teaching'},
			]
		},
		{
			name: 'a technologist',
			index: 2,
			options: [
				{ text: 'working on', target: null, postText: null },
				{ text: 'working with', target: null, postText: 'full stack native technologies such as' },
			]
		},
		{
			name: 'an artist',
			index: 3,
			options: [
				{ text: 'interested in computational aesthetics', target: null, postText: null },
				{ text: 'working across disciplines', target: null, postText: null },
			]
		},
		{
			name: 'an educator',
			index: 4,
			options: [
				{ text: 'Processing', target: null, postText: null },
				{ text: 'Javascript', target: null, postText: null },
				{ text: 'P5.js', target: null, postText: null },
				{ text: 'Node.js', target: null, postText: null },
				{ text: 'C++', target: null, postText: null },
				{ text: 'OpenFrameworks', target: null, postText: null },
				{ text: 'generative design', target: null, postText: null },
				{ text: 'computational art', target: null, postText: null },
				{ text: 'expressive interfaces', target: null, postText: null },
				{ text: 'game design and development', target: null, postText: null },
			]
		},
	]
};