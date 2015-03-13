angular
  .module('reddthat')
  .controller('ShowController', ShowController);

function ShowController($routeParams, articlesFactory) {
  var vm = this,
      id = $routeParams.uuid;

  articlesFactory.findOne(id, function (article) {
    vm.article = article;
  });
}