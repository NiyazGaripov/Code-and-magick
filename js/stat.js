'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_DELTA = 30;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var SHADOW_DELTA = 10;

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

window.renderStatistics = function (ctx) {
  var shadowX = CLOUD_X + SHADOW_DELTA;
  var shadowY = CLOUD_Y + SHADOW_DELTA;

  renderCloud(ctx, shadowX, shadowY, 'rgba(0, 0, 0, 0.7');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
};
