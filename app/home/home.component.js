angular
	.module('app')
	.component('homePage', {
		templateUrl: './app/home/home.component.html',
		controller: HomeController,
		bindings: {
			user: '<'
		}
	});

function HomeController() {

  console.log(this.user);
	this.title = 'whatwhat';
}