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


// 'was' and 'studied' feels wrong. what am i doing now? why should people care where i went to school or what i used to be?

// bryan is 

/// a technologist with a background in
// a technologist of emerging media

// a technologist working in the fields of games, interactive exhibits, etc.


module.exports = {
	data: [
		{
			name: 'is',
			index: 0,
			options: [
				{ 
					text: 'a technologist', 
					target: 1, 
					postText: '👨‍💻 at museum design firm Gallagher and Associates in New York,',
					image: 'http://bryan-ma.com/content/front-img/5.jpg',
				},
				{ 
					text: 'an artist', 
					target: 2, 
					postText: 'interested in', 
				},
				{ 
					text: 'an educator', 
					target: 3, 
					postText: 'at Parsons School of Design, teaching',
				},
				{
					text: 'a former',
					target: 6,
					postText: null,
				},
			]
		},
		{
			name: 'a technologist',
			index: 1,
			options: [
				{ 
					text: 'working with', 
					target: 4, 
					postText: 'technologies such as',
				},
				{ 
					text: 'working on', 
					target: 5, 
					postText: 'interactive exhibits and installations like',
				},
			]
		},
		{
			name: 'an artist',
			index: 2,
			options: [
				{ 
					text: 'computational aesthetics', 
					target: null, 
					postText: null,
				},
				{
					text: 'playful systems',
					target: null,
					postText: null,
				},
				{ 
					text: 'the absurd',
					target: null, 
					postText: null,
				},
			]
		},
		{
			name: 'an educator',
			index: 3,
			options: [
				{ 
					text: 'generative design and computational art', 
					target: null, 
					postText: null 
				},
				{ 
					text: 'experimental, playful, and expressive interfaces', 
					target: null, 
					postText: null 
				},
				{ 
					text: 'game design and development', 
					target: null, 
					postText: null 
				},
			]
		},
		{
			name: 'working with',
			index: 4,
			options: [
				{ 
					text: 'C++ frameworks', 
					target: null, 
					postText: 'like Cinder and OpenFrameworks',
				},
				{ 
					text: 'full stack web',
					target: null, 
					postText: 'especially React and Node',
				},
				{ 
					text: 'augmented reality', 
					target: null, 
					postText: 'like ARKit and ARCore',
				},
				{ 
					text: 'Unity and Unreal', 
					target: null, 
					postText: 'for immersive environments in VR',
				},
			]
		},
		{
			name: 'working on',
			index: 5,
			options: [
				{ 
					text: 'Johnson and Johnson heritage museum', 
					target: null, 
					postText: null 
				},
				{ 
					text: 'Best Friends Animal Society', 
					target: null, 
					postText: null, 
				},
				{ 
					text: 'Illinois Holocaust Museum', 
					target: null, 
					postText: null 
				},
			]
		},
		{
			name: 'a former',
			index: 6,
			options: [
				{ 
					text: 'video game industry designer and producer', 
					target: null,
					postText: 'launching games for console, PC, and mobile platforms',
				},
				{ 
					text: 'Eyebeam project resident', 
					target: null, 
					postText: null,
				},
			]
		}
	]
};