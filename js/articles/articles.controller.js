angular
  .module('reddthat')
  .controller('ArticlesController', ArticlesController );

function ArticlesController($location, articlesFactory) {
  var vm = this;

  articlesFactory.findAll(function (articles) {
    vm.data = articles;
  });

  vm.addArticles = function () {
    articlesFactory.create(vm.newArticle, function (res) {
      $location.path('/reddthat');
    });
  };

  vm.updateVotes = function (id) {
    articleFactory.update(id, vm.data[id]);
  };
}
