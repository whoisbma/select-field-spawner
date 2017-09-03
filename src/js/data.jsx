/*
option data model:
	text
	target
	postText
	postImage
	postLink
	post..what?
	video?
	gif?
	some special behavior for certain kinds of elements?
	inputField prompt?
*/
// what happens when a single option has more than one kind of thing? 
// add a plus button for more info? more stuff to follow?


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
				{ text: 'a technologist', target: 2, postText: 'at museum design firm Gallagher and Associates in New York,' },
				{ text: 'an artist', target: 3, postText: null },
				{ text: 'an educator', target: 4, postText: 'at Parsons School of Design, teaching'},
			]
		},
		{
			name: 'a technologist',
			index: 2,
			options: [
				{ text: 'working with', target: 5, postText: 'full stack web and native technologies such as' },
				{ text: 'working on', target: 6, postText: 'interactive exhibits and installations like' },
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
				{ text: 'generative design and computational art', target: null, postText: null },
				{ text: 'experimental, playful, and expressive interfaces', target: null, postText: null },
				{ text: 'game design and development', target: null, postText: null },
			]
		},
		{
			name: 'working with',
			index: 5,
			options: [
				{ text: 'Cinder and OpenFrameworks', target: null, postText: null },
				{ text: 'the React stack', target: null, postText: null },
				{ text: 'ARKit and ARCore', target: null, postText: null },
				{ text: 'Unity and Unreal', target: null, postText: null },
			]
		},
		{
			name: 'working on',
			index: 6,
			options: [
				{ text: 'Johnson and Johnson heritage museum', target: null, postText: null },
				{ text: 'Best Friends Animal Society', target: null, postText: null },
				{ text: 'Illinois Holocaust Museum', target: null, postText: null },
			]
		},
	]
};