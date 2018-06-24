'use strict';

// отрисовка похожих волшебников
(function () {

  // отображение окна настройки персонажа
  var setup = document.querySelector('.setup');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');
  var wizards = [];

  wizards = window.util.getRandomWizards(window.constants.WIZARD_COUNT);

  // отрисовка волшебников
  var renderWizard = function () {
    var wizard = window.wizard;
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

  // изменение цвета параметров персонажа при нажатии
  var userWizard = setup.querySelector('.wizard');
  var wizardCoat = userWizard.querySelector('.wizard-coat');
  var wizardEyes = userWizard.querySelector('.wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');

  window.util.getColorize(window.constants.WIZARD_COAT_COLOR, wizardCoat);
  window.util.getColorize(window.constants.WIZARD_EYES_COLOR, wizardEyes);
  window.util.getColorize(window.constants.WIZARD_FIREBALL_COLOR, wizardFireball);
})();
