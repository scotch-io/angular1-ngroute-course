angular
	.module('app')
	.component('aboutPage', {
		templateUrl: './app/components/about/about.component.html',
		controller: AboutController
	});

function AboutController() {
	var about = this;
	console.log('whatasdfsaf');

}