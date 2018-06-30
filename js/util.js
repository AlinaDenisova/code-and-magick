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

  // устранение "дребезга"
  var debounce = function (fun) {
    var lastTimeout = null;
    return function () {
      var args = arguments;
      if (lastTimeout) {
        clearTimeout(lastTimeout);
      }
      lastTimeout = setTimeout(function () {
        fun.apply(null, args);
      }, window.constants.DEBOUNCE_INTERVAL);
    };
  };

  window.util = {
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
    getRandomData: getRandomData,
    getMaxElement: getMaxElement,
    debounce: debounce
  };
})();
