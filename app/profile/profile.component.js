angular
  .module('app')
  .component('profilePage', {
    templateUrl: './app/profile/profile.component.html',
    controller: ProfileController,
    bindings: {
      user: '<'
    }
  });

function ProfileController() {

}