'use strict';

(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';
  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848',
  ];

  var formOpen = document.querySelector('.setup-open');
  var wizardForm = document.querySelector('.setup');
  var formClose = wizardForm.querySelector('.setup-close');
  var inputName = wizardForm.querySelector('.setup-user-name');
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var inputCoatColor = setupWizard.querySelector('[name=coat-color]');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var inputEyesColor = setupWizard.querySelector('[name=eyes-color]');
  var wizardFireball = setupWizard.querySelector('.setup-fireball-wrap');
  var inputFireballColor = setupWizard.querySelector('[name=fireball-color]');

  var popupEscPressHandler = function (evt) {
    if (evt.key === ESC_KEY && inputName !== document.activeElement) {
      closePopup();
    }
  };

  var openPopup = function () {
    wizardForm.classList.remove('hidden');
    document.addEventListener('keydown', popupEscPressHandler);
    wizardCoat.addEventListener('click', wizardCoatClickHandler);
    wizardEyes.addEventListener('click', wizardEyesClickHandler);
    wizardFireball.addEventListener('click', wizardFireballClickHandler);
  };

  var closePopup = function () {
    wizardForm.classList.add('hidden');
    document.removeEventListener('keydown', popupEscPressHandler);
    wizardCoat.removeEventListener('click', wizardCoatClickHandler);
    wizardEyes.removeEventListener('click', wizardEyesClickHandler);
    wizardFireball.removeEventListener('click', wizardFireballClickHandler);
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

  var wizardCoatClickHandler = function () {
    getWizardElementColor(wizardCoat, COAT_COLORS, inputCoatColor);
  };

  var wizardEyesClickHandler = function () {
    getWizardElementColor(wizardEyes, EYES_COLORS, inputEyesColor);
  };

  var wizardFireballClickHandler = function () {
    getWizardElementColor(wizardFireball, FIREBALL_COLORS, inputFireballColor);
  };
})();
