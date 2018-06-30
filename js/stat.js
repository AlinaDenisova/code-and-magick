'use strict';

// отрисовка статистики
(function () {

  var constants = window.constants;
  // отрисовка облака
  var renderCloud = function (ctx, x, y, width, height, color) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + constants.GAP, y + constants.CLOUD_HEIGHT / 2);
    ctx.lineTo(x, y + constants.CLOUD_HEIGHT);
    ctx.lineTo(x + constants.CLOUD_WIDTH / 2, y + constants.CLOUD_HEIGHT - constants.GAP);
    ctx.lineTo(x + constants.CLOUD_WIDTH, y + constants.CLOUD_HEIGHT);
    ctx.lineTo(x + constants.CLOUD_WIDTH - constants.GAP, y + constants.CLOUD_HEIGHT / 2);
    ctx.lineTo(x + constants.CLOUD_WIDTH, y);
    ctx.lineTo(x + constants.CLOUD_WIDTH / 2, y + constants.GAP);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = color;
  };

  // отрисовка гистограммы
  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, constants.CLOUD_X, constants.CLOUD_Y, constants.CLOUD_WIDTH, constants.CLOUD_HEIGHT, '#fff');
    renderCloud(ctx, constants.CLOUD_X - constants.GAP, constants.CLOUD_Y - constants.GAP, constants.CLOUD_WIDTH, constants.CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)');

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 140, 30);

    ctx.font = '16px PT Mono';
    ctx.fillText('Список результатов:', 140, 50);

    var maxTime = constants.COLUMN_HEIGHT / window.util.getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'rgba(0, 0, 255, ' + (Math.random()) + ')';
      }
      ctx.fillRect(constants.COLUMN_X + (constants.COLUMN_WIDTH + constants.COLUMN_GAP) * i, constants.COLUMN_Y, constants.COLUMN_WIDTH, times[i] * -maxTime);
      ctx.fillStyle = '#000';
      ctx.fillText(names[i], constants.COLUMN_X + (constants.COLUMN_WIDTH + constants.COLUMN_GAP) * i, 255);
      ctx.fillText(times[i].toFixed(), constants.COLUMN_X + (constants.COLUMN_WIDTH + constants.COLUMN_GAP) * i, 80);
    }
  };
})();
