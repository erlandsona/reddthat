angular
  .module('reddthat')
  .factory('articlesFactory', articlesFactory);

function articlesFactory($http, BASE_URL) {
  var articles = {};

  articles.findOne = function (id, cb) {
    $http
      .get(BASE_URL + '/articles/' + id + '.json')
      .success(function (data) {
        cb(data);
      });
  };

  articles.findAll = function (cb) {
    $http
      .get(BASE_URL + '/articles.json')
      .success(function (data) {
        cb(data);
      });
  };

  articles.create = function (data, cb) {
    $http
      .post(BASE_URL + '/articles.json', data)
      .success(function (res) {
        cb(res);
      });
  };

  articles.getVotes = function (id, cb) {
    var url = BASE_URL + '/articles/' + id + '/votes/.json';

    .get(url)
    .success(function(data) {
      cb(data);
    })
  }

  articles.updateVotes = function (id, direction, cb) {
    var url = BASE_URL + '/articles/' + id + '/votes/.json';

    articles.getVotes(id, function(data) {

      $http
        .put(url, data + direction)
        .success(function (res) {
          if (typeof cb === 'function') {
            cb(res);
          }
        });
      };
  };

  articles.delete = function (id, cb) {
    var url = BASE_URL + '/articles/' + id + '.json';

    $http
      .delete(url)
      .success(function () {
        cb();
      });
  };

  return articles;
}
