angular
	.module('app')
	.component('contactPage', {
		templateUrl: './app/components/contact/contact.component.html',
		controller: ContactController,
		bindings: {
			user: '<'
		}
	});

function ContactController() {
	var ctrl = this;
}