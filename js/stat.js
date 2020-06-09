'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_DELTA = 30;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var SHADOW_DELTA = 10;
var TEXT_X = 155;
var TEXT_Y = 30;
var TEXT_GAP = 20;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_X = 155;
var BAR_Y = 90;
var BAR_TEXT_Y = 260;
var FONT = '16px PT Mono';
var cloudColor = 'rgba(255, 255, 255, 1';
var shadowColor = 'rgba(0, 0, 0, 0.7';
var textColor = 'rgba(0, 0, 0, 1';


var renderCloud = function (ctx, x, y, color) {
  var deltaWidth = CLOUD_WIDTH - CLOUD_DELTA;
  var deltaHeight = CLOUD_HEIGHT - CLOUD_DELTA;

  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(x + CLOUD_DELTA, y);
  ctx.lineTo(x + deltaWidth, y);
  ctx.quadraticCurveTo(x + deltaWidth, y + CLOUD_DELTA, x + CLOUD_WIDTH, y + CLOUD_DELTA);
  ctx.lineTo(x + CLOUD_WIDTH, y + deltaHeight);
  ctx.quadraticCurveTo(x + deltaWidth, y + deltaHeight, x + deltaWidth, y + CLOUD_HEIGHT);
  ctx.lineTo(x + CLOUD_DELTA, y + CLOUD_HEIGHT);
  ctx.quadraticCurveTo(x + CLOUD_DELTA, y + deltaHeight, x, y + deltaHeight);
  ctx.lineTo(x, y + CLOUD_DELTA);
  ctx.quadraticCurveTo(x + CLOUD_DELTA, y + CLOUD_DELTA, x + CLOUD_DELTA, y);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
};

var renderText = function (ctx, text, x, y) {
  ctx.font = FONT;
  ctx.fillStyle = textColor;
  ctx.fillText(text, x, y);
};

var renderHistogram = function (ctx, names) {
  names.forEach(function (i) {
    ctx.fillText(names[i], BAR_X + (BAR_GAP + BAR_WIDTH) * i, BAR_TEXT_Y);
    ctx.fillRect(BAR_X + (BAR_GAP + BAR_WIDTH) * i, BAR_Y, BAR_WIDTH, BAR_HEIGHT);
  });
};

window.renderStatistics = function (ctx, names) {
  var shadowX = CLOUD_X + SHADOW_DELTA;
  var shadowY = CLOUD_Y + SHADOW_DELTA;

  renderCloud(ctx, shadowX, shadowY, shadowColor);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, cloudColor);

  renderText(ctx, 'Ура вы победили!', TEXT_X, TEXT_Y);
  renderText(ctx, 'Список результатов:', TEXT_X, TEXT_Y + TEXT_GAP);

  renderHistogram(ctx, names);
};
