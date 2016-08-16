angular
	.module('app')
	.config(['$routeProvider', '$locationProvider', RouterConfig]);

function RouterConfig($routeProvider, $locationProvider) {

	// define routes
	$routeProvider

		// main page
		.when('/', {
			title: 'Home',
			template: '<home-page user="$resolve.user"></home-page>',
			resolve: {
				user: function() {
					return {
						name: 'Chris Sevilleja',
						username: 'sevilayha',
						email: 'chris@scotch.io'
					};
				}
			}
		})

		// about page
		.when('/about', {
			title: 'About',
			template: '<about-page></about-page>'
		})

		// contact page
		.when('/contact', {
			title: 'Contact',
			template: '<contact-page></contact-page>'
		})

		// users profile page
		.when('/@:username', {
			template: '<profile-page user="$resolve.user"></profile-page>',
			resolve: {
				title: function($route) {
					return $route.current.params.username + "'s Profile";
				},
				user: function($route) {
					// return User.findByUsername($route.current.params.username);
					return {
						name: 'Chris Sevilleja',
						username: 'sevilayha',
						email: 'chris@scotch.io',
						comments: [],
						posts: []
					};
				}
			}
		});

	// remove the hashtag
	$locationProvider.html5Mode(true);

}

