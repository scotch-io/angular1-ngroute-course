angular
  .module('app', ['ngRoute'])
  .run(['$rootScope', UpdateTitle]);

// update the title when route successfully changed
function UpdateTitle($rootScope) {
  $rootScope.$on('$routeChangeSuccess', function(event, current) {

    if (current.locals.title)
      document.title = current.locals.title;
    else if (current.title)
      document.title = current.title;
    else
      document.title = 'My Routing App';

  });
}