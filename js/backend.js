'use strict';
(function () {
  var URL = 'https://js.dump.academy/code-and-magick';

  var save = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest;
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onLoad(xhr.response);
    });
  };
})();
