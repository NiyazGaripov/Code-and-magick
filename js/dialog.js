'use strict';

(function () {
  var ESC_KEY = 'Escape';

  var ENTER_KEY = 'Enter';

  var formWrap = document.querySelector('.setup');
  var wizardForm = formWrap.querySelector('.setup-wizard-form');
  var formOpen = document.querySelector('.setup-open');
  var formClose = formWrap.querySelector('.setup-close');
  var inputName = wizardForm.querySelector('.setup-user-name');
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = wizardForm.querySelector('.setup-fireball-wrap');

  var popupEscPressHandler = function (evt) {
    if (evt.key === ESC_KEY && inputName !== document.activeElement) {
      closePopup();
    }
  };

  var openPopup = function () {
    formWrap.classList.remove('hidden');
    document.addEventListener('keydown', popupEscPressHandler);
    wizardCoat.addEventListener('click', window.setup.wizardCoatClickHandler);
    wizardEyes.addEventListener('click', window.setup.wizardEyesClickHandler);
    wizardFireball.addEventListener('click', window.setup.wizardFireballClickHandler);
  };

  var closePopup = function () {
    formWrap.classList.add('hidden');
    document.removeEventListener('keydown', popupEscPressHandler);
    wizardCoat.removeEventListener('click', window.setup.wizardCoatClickHandler);
    wizardEyes.removeEventListener('click', window.setup.wizardEyesClickHandler);
    wizardFireball.removeEventListener('click', window.setup.wizardFireballClickHandler);
  };

  formOpen.addEventListener('click', function () {
    openPopup();
  });

  formOpen.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      openPopup();
    }
  });

  formClose.addEventListener('click', function () {
    closePopup();
  });

  formClose.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      closePopup();
    }
  });

  var successUploadDataHandler = function () {
    formWrap.classList.add('hidden');
    window.alert.createElement();
  };

  var errorUploadDataHandler = function (message) {
    window.alert.createElement(message);
  };

  wizardForm.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(wizardForm), successUploadDataHandler, errorUploadDataHandler);
    evt.preventDefault();
  });
})();
