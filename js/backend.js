'use strict';
(function () {
  var UrlTypes = {
    POST: 'https://js.dump.academy/code-and-magick',
    GET: 'https://js.dump.academy/code-and-magick/data',
  };
  var SUCCESS_CODE = 200;
  var TIMEOUT = 10000;

  var processServerResponse = function (xhr, method, onLoad, onError) {
    xhr.responseType = 'json';
    xhr.timeout = TIMEOUT;
    xhr.open(method, UrlTypes[method]);

    xhr.addEventListener('load', function () {
      if (xhr.status === SUCCESS_CODE) {
        onLoad(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения! Проверьте соединение с интернетом');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });
  };

  var uploadData = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    processServerResponse(xhr, 'POST', onLoad, onError);
    xhr.send(data);
  };

  var loadData = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    processServerResponse(xhr, 'GET', onLoad, onError);
    xhr.send();
  };

  window.backend = {
    save: uploadData,
    load: loadData,
  };
})();
