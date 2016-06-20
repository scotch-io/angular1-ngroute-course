angular
	.module('app')
	.config(['$routeProvider', '$locationProvider', RouterConfig]);

function RouterConfig($routeProvider, $locationProvider) {
	
	$routeProvider

		// main page
		.when('/', {
			template: '<home-page></home-page>'
		})

		// about page
		.when('/about', {
			template: '<about-page></about-page>'
		})

		// contact page
		.when('/contact', {
			template: '<contact-page></contact-page>'
		});

	// remove the hashtag
	$locationProvider.html5Mode(true);
		
}