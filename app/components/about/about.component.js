angular
	.module('app')
	.component('aboutPage', {
		templateUrl: './app/components/about/about.component.html',
		controller: AboutController,
		bindings: {
			user: '<'
		}
	});

function AboutController() {
	var ctrl = this;
}