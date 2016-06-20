angular
	.module('app')
	.component('homePage', {
		templateUrl: './app/components/home/home.component.html',
		controller: HomeController
	});

function HomeController() {
	var ctrl = this;

	ctrl.title = 'whatwhat';
}