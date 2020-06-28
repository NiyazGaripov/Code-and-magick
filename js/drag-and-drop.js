'use strict';

(function () {
  var uploadElement = document.querySelector('.upload');

  uploadElement.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startСoords = {
      x: evt.clientX,
      y: evt.clientY
    };
  });
})();
