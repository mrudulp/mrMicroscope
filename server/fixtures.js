if(Posts.find().count()==0) {
	
	Posts.insert({
		title:"Introduction to Telescope",
		author:"Sacha Grief",
		url:"http://sachagrief.com/introducing-Telescope"
	});
	
	Posts.insert({
		title: 'Meteor',
		author: 'Tom Coleman',
		url: 'http://meteor.com'
		});

	Posts.insert({
		title: 'The Meteor Book',
		author: 'Tom Coleman',
		url: 'http://themeteorbook.com'
		});

}