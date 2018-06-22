'use strict';

// изменение цвета параметров персонажа при нажатии
(function () {
  var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setup = document.querySelector('.setup');
  var userWizard = setup.querySelector('.wizard');
  var wizardCoat = userWizard.querySelector('.wizard-coat');
  var wizardEyes = userWizard.querySelector('.wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');

  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = window.util.getRandomData(window.constants.WIZARD_COAT_COLOR);
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = window.util.getRandomData(window.constants.WIZARD_EYES_COLOR);
  });

  wizardFireball.addEventListener('click', function () {
    wizardFireball.style.backgroundColor = window.util.getRandomData(WIZARD_FIREBALL_COLOR);
  });
})();
