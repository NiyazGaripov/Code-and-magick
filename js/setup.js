'use strict';

(function () {
  var AMOUNT_WIZARDS = 4;

  var similarList = document.querySelector('.setup-similar-list');
  var template = document.querySelector('#similar-wizard-template');
  var templateItem = template.content.querySelector('.setup-similar-item');
  var formWrap = document.querySelector('.setup');

  var getRandomArrayElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var createWizard = function (wizard) {
    var wizardElement = templateItem.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var successLoadDataHandler = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < AMOUNT_WIZARDS; i++) {
      fragment.appendChild(createWizard(wizards[i]));
    }

    similarList.appendChild(fragment);
    formWrap.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorLoadDataHandler = function (message) {
    window.alert.createElement(message);
  };

  window.backend.load(successLoadDataHandler, errorLoadDataHandler);

  window.setup = {
    getRandomArrayElement: getRandomArrayElement,
  };
})();
