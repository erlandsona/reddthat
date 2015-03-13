angular
  .module('reddthat')
  .config(articlesConfig)

function articlesConfig($routeProvider) {
  $routeProvider
    .when('/reddthat/articles', {
      templateUrl: 'articles.html',
      controller: 'ArticlesController',
      controllerAs: 'articles'
    })
  }