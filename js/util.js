'use strict';

(function () {

  // событие нажатия клавиши ESC
  var isEscEvent = function (evt, action) {
    if (evt.keyCode === window.constants.ESC_KEYCODE) {
      action();
    }
    return action;
  };

  // событие нажатия клавиши ENTER
  var isEnterEvent = function (evt, action) {
    if (evt.keyCode === window.constants.ENTER_KEYCODE) {
      action();
    }
    return action;
  };

  // максимальный элемент массива
  var getMaxElement = function (arr) {
    var maxElement = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  // рандомный элемент массива
  var getRandomData = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  // массив объектов волшебников
  var getRandomWizards = function (wizardCount) {
    var wizardsArr = [];
    for (var i = 0; i < wizardCount; i++) {
      var randomName = getRandomData(window.constants.WIZARD_NAMES) + ' ' + getRandomData(window.constants.WIZARD_LAST_NAMES);
      window.wizard = {
        name: randomName,
        coatColor: getRandomData(window.constants.WIZARD_COAT_COLOR),
        eyesColor: getRandomData(window.constants.WIZARD_EYES_COLOR)
      };
      wizardsArr.push(window.wizard);
    }
    return wizardsArr;
  };

  // изменение цвета при нажатии
  var getColorize = function (arr, element) {
    element.addEventListener('click', function () {
      var color = getRandomData(arr);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
    });
  };

  window.util = {
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
    getRandomData: getRandomData,
    getMaxElement: getMaxElement,
    getRandomWizards: getRandomWizards,
    getColorize: getColorize
  };
})();
