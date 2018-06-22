'use strict';

// отрисовка похожих волшебников
(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COUNT = 4;

  // отображение окна настройки персонажа
  var setup = document.querySelector('.setup');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var wizards = [];

  // массив объектов волшебников
  var randomWizards = function (wizardCount) {
    var wizardsArr = [];
    for (var i = 0; i < wizardCount; i++) {
      var randomName = window.util.getRandomData(WIZARD_NAMES) + ' ' + window.util.getRandomData(WIZARD_LAST_NAMES);
      var wizard = {
        name: randomName,
        coatColor: window.util.getRandomData(window.constants.WIZARD_COAT_COLOR),
        eyesColor: window.util.getRandomData(window.constants.WIZARD_EYES_COLOR)
      };
      wizardsArr.push(wizard);
    }
    return wizardsArr;
  };

  wizards = randomWizards(WIZARD_COUNT);

  // отрисовка волшебников
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var renderFragment = function () {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

  renderFragment();

  setup.querySelector('.setup-similar').classList.remove('hidden');
})();
