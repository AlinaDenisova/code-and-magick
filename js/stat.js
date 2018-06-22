'use strict';

// отрисовка статистики
(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var COLUMN_HEIGHT = 150;
  var COLUMN_WIDTH = 40;
  var COLUMN_GAP = 50;
  var COLUMN_X = 160;
  var COLUMN_Y = 240;

  // отрисовка облака
  var renderCloud = function (ctx, x, y, width, height, color) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + GAP, y + CLOUD_HEIGHT / 2);
    ctx.lineTo(x, y + CLOUD_HEIGHT);
    ctx.lineTo(x + CLOUD_WIDTH / 2, y + CLOUD_HEIGHT - GAP);
    ctx.lineTo(x + CLOUD_WIDTH, y + CLOUD_HEIGHT);
    ctx.lineTo(x + CLOUD_WIDTH - GAP, y + CLOUD_HEIGHT / 2);
    ctx.lineTo(x + CLOUD_WIDTH, y);
    ctx.lineTo(x + CLOUD_WIDTH / 2, y + GAP);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = color;
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  // отрисовка гистограммы
  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, '#fff');
    renderCloud(ctx, CLOUD_X - GAP, CLOUD_Y - GAP, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)');

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 140, 30);

    ctx.font = '16px PT Mono';
    ctx.fillText('Список результатов:', 140, 50);

    var maxTime = COLUMN_HEIGHT / getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'rgba(0, 0, 255, ' + (Math.random()) + ')';
      }
      ctx.fillRect(COLUMN_X + (COLUMN_WIDTH + COLUMN_GAP) * i, COLUMN_Y, COLUMN_WIDTH, times[i] * -maxTime);
      ctx.fillStyle = '#000';
      ctx.fillText(names[i], COLUMN_X + (COLUMN_WIDTH + COLUMN_GAP) * i, 255);
      ctx.fillText(times[i].toFixed(), COLUMN_X + (COLUMN_WIDTH + COLUMN_GAP) * i, 80);
    }
  };
})();
