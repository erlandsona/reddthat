angular
  .module('reddthat')
  .controller('ArticlesController', ArticlesController );

function ArticlesController($location, articlesFactory) {
  var vm = this;

  articlesFactory.findAll(function (articles) {
    vm.data = articles;
  });

  vm.addArticles = function () {
    vm.newPost.author = articlesFactory.getAuthor();
    vm.newPost.votes = 0;
    vm.newPost.votedUsers = [];

    articlesFactory.create(vm.newPost, function (res) {
      $location.path('/reddthat');
    });
  };

  vm.updateVotes = function (id, direction) {
    articlesFactory.updateVotes(id, direction);
  };
}
