'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = '#fff';
  ctx.strokeStyle = '#fff';
  ctx.beginPath();
  ctx.moveTo(130, 10);
  ctx.lineTo(490, 10);
  ctx.quadraticCurveTo(490, 40, 520, 40);
  ctx.lineTo(520, 250);
  ctx.quadraticCurveTo(490, 250, 490, 280);
  ctx.lineTo(130, 280);
  ctx.quadraticCurveTo(130, 250, 100, 250);
  ctx.lineTo(100, 40);
  ctx.quadraticCurveTo(130, 40, 130, 10);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

};
