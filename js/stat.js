var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var COLUMN_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var COLUMN_GAP = 50;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

  // var drawCloud = function (x, y, CLOUD_WIDTH, CLOUD_HEIGHT) {
  //   ctx.beginPath();
  //   ctx.moveTo(CLOUD_X, CLOUD_Y);
  //   ctx.lineTo(CLOUD_X + GAP, CLOUD_Y + CLOUD_HEIGHT / 2);
  //   ctx.lineTo(CLOUD_X, CLOUD_Y + CLOUD_HEIGHT);
  //   ctx.lineTo(CLOUD_X + CLOUD_WIDTH / 2, CLOUD_Y + CLOUD_HEIGHT - GAP);
  //   ctx.lineTo(CLOUD_X + CLOUD_WIDTH, CLOUD_Y + CLOUD_HEIGHT);
  //   ctx.lineTo(CLOUD_X + CLOUD_WIDTH - GAP, CLOUD_Y + CLOUD_HEIGHT / 2);
  //   ctx.lineTo(CLOUD_X + CLOUD_WIDTH, CLOUD_Y);
  //   ctx.lineTo(CLOUD_X + CLOUD_WIDTH / 2, CLOUD_Y + GAP);
  //   ctx.lineTo(CLOUD_X, CLOUD_Y);
  //   ctx.stroke();
  //   ctx.closePath();
  //   ctx.fill();
  // }
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
}
