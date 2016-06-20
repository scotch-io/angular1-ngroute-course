angular
	.module('app')
	.config(['$routeProvider', '$locationProvider', RouterConfig]);

function RouterConfig($routeProvider, $locationProvider) {
	
	function getUser() {
		return {
			name: 'Chris Sevilleja',
			username: 'sevilayha',
			email: 'chris@scotch.io'
		};
	}

	// define routes
	$routeProvider

		// main page
		.when('/', {
			template: '<home-page user="$resolve.user"></home-page>',
			resolve: {
				user: getUser
			}
		})

		// about page
		.when('/about', {
			template: '<about-page user="$resolve.user"></about-page>',
			resolve: {
				user: getUser
			}
		})

		// contact page
		.when('/contact', {
			template: '<contact-page user="$resolve.user"></contact-page>',
			resolve: {
				user: getUser
			}
		});

	// remove the hashtag
	$locationProvider.html5Mode(true);
		
}