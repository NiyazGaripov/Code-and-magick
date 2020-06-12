'use strict';

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
wizardForm.classList.remove('hidden');

var template = document.querySelector('#similar-wizard-template');
var templateItem = template.content.querySelector('.setup-similar-item');
var setupSimilar = wizardForm.querySelector('.setup-similar');
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
