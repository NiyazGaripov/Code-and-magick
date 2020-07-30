'use strict';

(function () {
  var AMOUNT_WIZARDS = 4;

  var allWizards = [];
  var coatColor;
  var eyesColor;
  var fireballColor;

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

  var similarList = document.querySelector('.setup-similar-list');
  var template = document.querySelector('#similar-wizard-template');
  var templateItem = template.content.querySelector('.setup-similar-item');
  var formWrap = document.querySelector('.setup');
  var wizardForm = formWrap.querySelector('.setup-wizard-form');
  var wizardFireball = wizardForm.querySelector('.setup-fireball-wrap');
  var wizardCoat = wizardForm.querySelector('.wizard-coat');
  var wizardEyes = wizardForm.querySelector('.wizard-eyes');
  var inputCoatColor = formWrap.querySelector('[name=coat-color]');
  var inputEyesColor = formWrap.querySelector('[name=eyes-color]');
  var inputFireballColor = formWrap.querySelector('[name=fireball-color]');

  var wizard = {
    onCoatChange: function () {},
    onEyesChange: function () {},
    onFireballChange: function () {},
  }

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

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 3;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 2;
    }
    if (wizard.colorFireball === fireballColor) {
      rank += 1;
    }

    return rank;
  }

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  }

  var updateWizards = function () {
    renderWizards(allWizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  }

  // var getWizardElementColor = function (element, color, input) {
  //   var currentColor = getRandomArrayElement(color);
  //   if (element === wizardFireball) {
  //     element.style.backgroundColor = currentColor;
  //   }
  //   element.style.fill = currentColor;
  //   input.value = currentColor;
  //   wizard.onChange(currentColor);
  // };

  var wizardCoatClickHandler = function () {
    var newColor = getRandomArrayElement(COAT_COLORS);
    this.style.fill = newColor;
    this.value = newColor;
    wizard.onCoatChange(newColor);
  };

  var wizardEyesClickHandler = function () {
    var newColor = getRandomArrayElement(EYES_COLORS);
    this.style.fill = newColor;
    this.value = newColor;
    wizard.onEyesChange(newColor);
  };

  var wizardFireballClickHandler = function () {
    var newColor = getRandomArrayElement(FIREBALL_COLORS);
    this.style.backgroundColor = newColor;
    this.value = newColor;
    wizard.onFireballChange(newColor);
  };

  var renderWizards = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < AMOUNT_WIZARDS; i++) {
      fragment.appendChild(createWizard(wizards[i]));
    }

    similarList.appendChild(fragment);
    formWrap.querySelector('.setup-similar').classList.remove('hidden');
  }

  wizard.onCoatChange = function (color) {
    coatColor = color;
    updateWizards();
  }

  wizard.onEyesChange = function (color) {
    eyesColor = color;
    updateWizards();
  }

  wizard.onFireballChange = function (color) {
    fireballColor = color;
    updateWizards();
  }

  var successLoadDataHandler = function (wizards) {
    allWizards = wizards;
    updateWizards();
  };

  var errorLoadDataHandler = function (message) {
    window.alert.createElement(message);
  };

  window.backend.load(successLoadDataHandler, errorLoadDataHandler);

  window.setup = {
    wizardCoatClickHandler: wizardCoatClickHandler,
    wizardEyesClickHandler: wizardEyesClickHandler,
    wizardFireballClickHandler: wizardFireballClickHandler,
  };
})();
