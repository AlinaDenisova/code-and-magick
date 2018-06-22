'use strict';

(function () {

  function isEscEvent(evt, action) {
    if (evt.keyCode === window.constants.ESC_KEYCODE) {
      action();
    }
    return action;
  }
  function isEnterEvent(evt, action) {
    if (evt.keyCode === window.constants.ENTER_KEYCODE) {
      action();
    }
    return action;
  }

  function getRandomData(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  window.util = {
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
    getRandomData: getRandomData
  };
})();
