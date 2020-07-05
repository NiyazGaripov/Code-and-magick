'use strict';
(function () {
  var URL = 'https://js.dump.academy/code-and-magick';
  var SUCCESS_CODE = 200;

  var save = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.open('POST', URL);

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

    xhr.send();
  };

  window.backend = {
    save: save,
  };
})();
