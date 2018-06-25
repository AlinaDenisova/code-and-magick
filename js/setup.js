'use strict';

// отрисовка похожих волшебников
(function () {

  // отрисовка волшебников
  var setup = document.querySelector('.setup');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < window.constants.WIZARD_COUNT; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
    setup.querySelector('.setup-similar').classList.remove('hidden');
  };

  // изменение цвета параметров персонажа при нажатии
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');

  window.util.getColorize(window.constants.WIZARD_COAT_COLOR, wizardCoat);
  window.util.getColorize(window.constants.WIZARD_EYES_COLOR, wizardEyes);
  window.util.getColorize(window.constants.WIZARD_FIREBALL_COLOR, wizardFireball);


  // закрытие окна персонажа при успешной загрузке данных на сервер
  var inputUserName = setup.querySelector('.setup-user-name');
  var form = setup.querySelector('.setup-wizard-form');

  var formReset = function () {
    inputUserName.value = 'Синий Пендальф';
    setup.classList.add('hidden');
  };

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), formReset, window.backend.errorHandler);
    evt.preventDefault();
  });

  // загрузка данных с сервера
  window.backend.load(successHandler, window.backend.errorHandler);
})();
