'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var uploadElement = setup.querySelector('.upload');

  uploadElement.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var isDragged = false;

    var startСoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var elementMouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();

      isDragged = true;

      var shift = {
        x: startСoords.x - moveEvt.clientX,
        y: startСoords.y - moveEvt.clientY,
      };

      startСoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };

    var elementMouseUpHandler = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', elementMouseMoveHandler);
      document.removeEventListener('mouseup', elementMouseUpHandler);

      if (isDragged) {
        var elementPreventDefaultHandler = function (clickEvt) {
          clickEvt.preventDefault();

          uploadElement.removeEventListener('click', elementPreventDefaultHandler);
        };
        uploadElement.addEventListener('click', elementPreventDefaultHandler);
      }
    };

    document.addEventListener('mousemove', elementMouseMoveHandler);
    document.addEventListener('mouseup', elementMouseUpHandler);
  });
})();
