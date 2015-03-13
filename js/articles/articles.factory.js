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

  articles.update = function (id, data, cb) {
    var url = BASE_URL + '/articles/' + id + '.json';

    $http
      .put(url, data)
      .success(function (res) {
        if (typeof cb === 'function') {
          cb(res);
        }
      });
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
