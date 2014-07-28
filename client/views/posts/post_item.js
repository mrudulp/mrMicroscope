Template.postItem.helpers({
	ownPost: function() {
		console.log("userId: "+ Meteor.userId());
		return this.userId == Meteor.userId(); 
	},
	domain: function(){
		console.log("userId: "+ Meteor.userId());
		console.log("userId: "+ this);
		var a = document.createElement('a');
		a.href = this.url;
		return a.hostname;
	}
});