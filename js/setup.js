'use strict';

var ESC_KEY = '27';
var ENTER_KEY = '13';

var wizards = [];

var AMOUNT_WIZARDS = 4;

var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var WIZARD_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

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

var wizardForm = document.querySelector('.setup');
var formOpen = document.querySelector('.setup-open');
var formClose = wizardForm.querySelector('.setup-close');

var template = document.querySelector('#similar-wizard-template');
var templateItem = template.content.querySelector('.setup-similar-item');
var similarList = document.querySelector('.setup-similar-list');

var getRandomArrayElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var getRandomWizards = function () {
  for (var i = 0; i < AMOUNT_WIZARDS; i++) {
    wizards[i] = {
      name: getRandomArrayElement(WIZARD_NAMES) + ' ' + getRandomArrayElement(WIZARD_SURNAMES),
      coatColor: getRandomArrayElement(COAT_COLORS),
      eyesColor: getRandomArrayElement(EYES_COLORS),
    };
  }
  return wizards;
};

var createWizard = function (wizard) {
  var wizardElement = templateItem.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizard = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < AMOUNT_WIZARDS; i++) {
    fragment.appendChild(createWizard(wizards[i]));
  }

  similarList.appendChild(fragment);
};

var similarWizards = document.querySelector('.setup-similar');
similarWizards.classList.remove('hidden');

getRandomWizards();
renderWizard();

var popupEscPressHandler = function (evt) {
  if (evt.keyCode === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  wizardForm.classList.remove('hidden');
  document.addEventListener('keydown', popupEscPressHandler);
};
