Template.postEdit.events(
	{ 

	'submit form': function(e) {
    
    	console.log('Printing e:');

	    e.preventDefault();
		
		var currentPostId = this._id;
		
		var postProperties = {
			url: $(e.target).find('[name=url]').val(), title: $(e.target).find('[name=title]').val()
			}
		console.log('eUrl:'+$(e.target).find('[name=url]').val());
		console.log('eTitle:'+$(e.target).find('[name=title]').val());

		Posts.update(currentPostId, {$set: postProperties}, function(error) { 
			console.log('Printing e:'+e);
			console.log ('url:'+postProperties.url);
			console.log('title:'+postProperties.title);
			console.log('eUrl2:'+$(e.target).find('[name=url]').val());
			console.log('eTitle2:'+$(e.target).find('[name=title]').val());
			if (error) {
	        	// display the error to the user
				alert(error.reason);
			} else {
				Router.go('postPage', {_id: currentPostId});
			}
		});
	},

	'click .delete': function(e) { 
	
		e.preventDefault();
		
		if (confirm("Delete this post?")) { 
			var currentPostId = this._id;
			Posts.remove(currentPostId);
			Router.go('postsList');
			} 
		}
});