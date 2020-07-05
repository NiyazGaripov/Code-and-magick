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

  var formWrap = document.querySelector('.setup');
  var wizardForm = formWrap.querySelector('.setup-wizard-form');
  var formOpen = document.querySelector('.setup-open');
  var formClose = formWrap.querySelector('.setup-close');
  var inputName = wizardForm.querySelector('.setup-user-name');
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var inputCoatColor = formWrap.querySelector('[name=coat-color]');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var inputEyesColor = formWrap.querySelector('[name=eyes-color]');
  var wizardFireball = wizardForm.querySelector('.setup-fireball-wrap');
  var inputFireballColor = formWrap.querySelector('[name=fireball-color]');

  var popupEscPressHandler = function (evt) {
    if (evt.key === ESC_KEY && inputName !== document.activeElement) {
      closePopup();
    }
  };

  var openPopup = function () {
    formWrap.classList.remove('hidden');
    document.addEventListener('keydown', popupEscPressHandler);
    wizardCoat.addEventListener('click', wizardCoatClickHandler);
    wizardEyes.addEventListener('click', wizardEyesClickHandler);
    wizardFireball.addEventListener('click', wizardFireballClickHandler);
  };

  var closePopup = function () {
    formWrap.classList.add('hidden');
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

  var getWizardElementColor = function (element, color, input) {
    var currentColor = window.setup.getRandomArrayElement(color);
    if (element === wizardFireball) {
      element.style.backgroundColor = currentColor;
    }
    element.style.fill = currentColor;
    input.value = currentColor;
  };

  var wizardCoatClickHandler = function () {
    getWizardElementColor(wizardCoat, COAT_COLORS, inputCoatColor);
  };

  var wizardEyesClickHandler = function () {
    getWizardElementColor(wizardEyes, EYES_COLORS, inputEyesColor);
  };

  var wizardFireballClickHandler = function () {
    getWizardElementColor(wizardFireball, FIREBALL_COLORS, inputFireballColor);
  };

  var createAlertsElement = function (message) {
    var node = document.createElement('div');
    node.style = 'z-index: 1; margin: 0 auto; text-align: center;';
    node.style.position = 'absolute';
    node.style.right = 0;
    node.style.left = 0;
    node.style.fontSize = '30px';
    node.style.backgroundColor = message ? 'red' : 'green';

    node.textContent = message ? message : 'Данные успешно отправлены';

    if (message) {
      formWrap.insertAdjacentElement('afterbegin', node);
    } else {
      document.body.insertAdjacentElement('afterbegin', node);
    }
  };

  var successHandler = function () {
    formWrap.classList.add('hidden');
    createAlertsElement();
  };

  wizardForm.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(wizardForm), successHandler, errorHandler);
    evt.preventDefault();
  });
})();
