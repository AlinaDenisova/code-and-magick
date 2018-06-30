'use strict';

// отрисовка похожих волшебников
(function () {

  // отрисовка волшебников
  var setup = document.querySelector('.setup');
  var similarElement = document.querySelector('.setup-similar');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  // отрисовка одного похожего волшебника
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').innerText = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var render = function (data) {
    var takeNumber = data.length > window.constants.WIZARD_COUNT ? window.constants.WIZARD_COUNT : data.length;
    similarListElement.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      similarListElement.appendChild(renderWizard(data[i]));
    }
    similarElement.classList.remove('hidden');
  };

  // изменение цвета параметров персонажа при нажатии
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');

  var userWizard = {
    onEyesChange: function (color) {
      return color;
    },
    onCoatChange: function (color) {
      return color;
    }
  };

  wizardCoat.addEventListener('click', function () {
    var color = window.util.getRandomData(window.constants.WIZARD_COAT_COLOR);
    wizardCoat.style.fill = color;
    userWizard.onCoatChange(color);
  });

  wizardEyes.addEventListener('click', function () {
    var color = window.util.getRandomData(window.constants.WIZARD_EYES_COLOR);
    wizardEyes.style.fill = color;
    userWizard.onEyesChange(color);
  });

  wizardEyes.addEventListener('click', function () {
    var color = window.util.getRandomData(window.constants.WIZARD_FIREBALL_COLOR);
    wizardFireball.style.fill = color;
  });

  // отрисовка похожих волшебников
  var coatColor;
  var eyesColor;
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    render(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  userWizard.onEyesChange = window.util.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  userWizard.onCoatChange = window.util.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  var successHandler = function (data) {
    wizards = data;
    render(wizards);
  };

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
