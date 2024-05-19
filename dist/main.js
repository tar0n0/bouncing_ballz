"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var lastTime = 0;
function tick(currentTime) {
    var deltaTime = (currentTime - lastTime) / 1000;
    update(deltaTime);
    draw();
    lastTime = currentTime;
    requestAnimationFrame(tick);
}
requestAnimationFrame(tick);
var circles = [];
canvas.addEventListener('click', function (event) {
    if (circles.length <= 15) {
        var rect = canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        circles.push(new Circle_1.Circle(x, y, canvas));
    }
});
function update(deltaTime) {
    circles.forEach(function (circle) { return circle.update(deltaTime); });
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circles.forEach(function (circle) { return circle.draw(ctx); });
}
