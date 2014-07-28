Template.postSubmit.events({
	'submit form': function(e) {
		e.preventDefault();

		var post = {
			url: $(e.target).find('[name=url]').val(),
			title: $(e.target).find('[name=title]').val(),
			message: $(e.target).find('[name=message]').val()
		}

		// arg1: method tocall
		// arg2: object
		// arg3: callback when the method completes
		Meteor.call('post', post, function(error,id){
			if (error) {
				throwError(error.reason);
			 	//return alert(error.reason);
			 	if (error.error === 302) 
			 		Router.go('postPage', {_id: error.details})
			 } else {
				console.log("PostPage ->>: id:" + id);
				Router.go('postPage',{_id: id});
			}
		});
	}
});