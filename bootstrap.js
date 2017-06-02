// This is a comment

// think of a 'class' as a template
class Post {

	// the order of the items in the constructor is the order
	// in which data will be assigned

	constructor(
				title,
				link,
				author,
				img,
				body){
					this.title = title;
					this.link = link;
					this.author = author;
					this.img = img;
					this.body = body;
	}
}

const app = new Vue({

	// this is the HTML element that the app will operate from
	el: '#root',

	// this is the data elements that feed the app
	data: {

		// this is what the search is looking for
		// the default value is an empty string
		keyword: '',

		// this is an array of items that will be
		// interpreted by the Post class
		postlist: [
			// constructed Post item
			new Post(
				'California', 		// this is the TITLE place in the class
				'http://www.heleninwonderlust.co.uk/2014/03/ultimate-california-road-trip-itinerary-las-vegas/',	// this is the LINK place in the class
				'Helen',			// this is the AUTHOR place in the class
				'Unknown.jpeg',	// this is the IMAGE place in the class
				'' // this is the BODY place in the class
				),

			new Post(
				'Africa Safari',
				'http://www.heleninwonderlust.co.uk/2014/08/tips-for-women-travelling-alone-in-africa/',
				'Helen',
				'images.jpeg', // this is a local image in the same folder as the js script
				'What makes a desert beautiful is that somewhere it hides a well...'
				),

			new Post(
				'Paris',
				'http://thetravelhack.com/france/travel-journal-ooh-la-la-falling-love-paris/',
				'THETRAVELHACK',
				'1.jpg',
				'Paris is always a good idea...'
				),

			new Post(
				'Greece',
				'http://www.nomadicmatt.com/travel-guides/greece-travel-tips/',
				'Nomadic Matt',
				'2.jpeg',
				'Collect moments not things...'
				),

			new Post(
				'Tokyo',
				'http://www.nomadicmatt.com/travel-guides/japan-travel-tips/tokyo/',
				'Nomadic Matt',
				'3.jpg',
				''
				)
		]
	},

	// computed properties are functions
	// that work on the data they receive
	computed: {

		// this defines the search function
		filterlist(){

			// filterlist object
			// returns a filter funtion over the constructed post
			return this.postlist.filter((post)=>{

				// of an inculded array of title-toLowerCase matching any keyword-toLowerCase returned
				return post.title.toLowerCase().includes(this.keyword.toLowerCase());
			});
		}
	}

});



