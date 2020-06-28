'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var uploadElement = setup.querySelector('.upload');

  uploadElement.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startСoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var elementMouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startСoords.x - moveEvt.clientX,
        y: startСoords.y - moveEvt.clientY,
      };

      startСoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

    };

    document.addEventListener('mousemove', elementMouseMoveHandler);
    document.addEventListener('mouseup', elementMouseUpHandler);
  });
})();
