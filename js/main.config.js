angular
  .module('reddthat')
  .config(articlesConfig);

function articlesConfig($routeProvider) {
  $routeProvider
    .when('/reddthat', {
      templateUrl: 'js/articles/articles.html',
      controller: 'ArticlesController',
      controllerAs: 'articles'
    })
    .when('/reddthat/modal', {
      templateUrl: 'js/articles/modal.html',
      controller: 'ArticlesController',
      controllerAs: 'articles'
    })
    .when('/reddthat/:uuid', {
      templateUrl: 'js/articles/show.html',
      controller: 'ShowController',
      controllerAs: 'show'
    })
    .otherwise({
      redirectTo: '/reddthat'
    });
}