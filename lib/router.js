Router.configure({
	layoutTemplate: 'mainlayout',
	loadingTemplate: 'loading',
	waitOn: function() {
	  console.log('running waitOn');
	  return Meteor.subscribe('posts');
	}
});

Router.map(function(){
	console.log('mapping routes');
	console.log("Post:" +this.params);
	this.route('postsList',{path:'/'});
	this.route('postPage', {
		path:'/posts/:_id',
		data: function(){
			console.log("Id :"+this.params._id);
			return Posts.findOne(this.params._id);
			}
		});
	this.route('postEdit', {
		path: '/posts/:_id/edit',
		data: function() { return Posts.findOne(this.params._id); }
		});

	this.route('postSubmit', {path:'/submit'});
});

var requireLogin = function(){
	if (! Meteor.user()) {
		if ( Meteor.loggingIn())
			this.render('this.loadingTemplate');
		else
			this.render('accessDenied');
		pause();
		}
	}

//Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
Router.onBeforeAction(function() { clearErrors() });
