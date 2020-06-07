'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.beginPath();
  ctx.moveTo(140, 20);
  ctx.lineTo(500, 20);
  ctx.quadraticCurveTo(500, 50, 530, 50);
  ctx.lineTo(530, 260);
  ctx.quadraticCurveTo(500, 260, 500, 290);
  ctx.lineTo(140, 290);
  ctx.quadraticCurveTo(140, 260, 110, 260);
  ctx.lineTo(110, 50);
  ctx.quadraticCurveTo(140, 50, 140, 20);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

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
