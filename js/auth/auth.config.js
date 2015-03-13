angular
  .module('reddthat')
  .config(authConfig)

function authConfig($routeProvider) {
  $routeProvider
    .when('/reddthat', {
      templateUrl: 'index.html',
      controller: 'AuthController',
      controllerAs: 'auth'
    })
	}

