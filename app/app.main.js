angular
	.module('app')
	.controller('MainController', MainController);

function MainController() {
	var main     = this;
	
	main.message = 'my message';
}