"use strict";
// src/Circle.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var helpers_1 = require("./utils/helpers");
var Circle = /** @class */ (function () {
    function Circle(x, y, canvas) {
        this.x = x;
        this.y = y;
        this.radius = 20;
        this.dy = 0;
        this.gravity = 9.8;
        this.damping = 0.7;
        this.color = (0, helpers_1.getRandomColor)();
        this.canvas = canvas;
    }
    Circle.prototype.update = function (deltaTime) {
        this.dy += this.gravity * deltaTime;
        this.y += this.dy;
        // Bounce off the bottom
        if (this.y + this.radius > this.canvas.height) {
            this.y = this.canvas.height - this.radius;
            this.dy = -this.dy * this.damping;
        }
        // Stop the circle when it's bouncing very low
        if (Math.abs(this.dy) < 0.01) {
            this.dy = 0;
        }
    };
    Circle.prototype.draw = function (ctx) {
        ctx.save();
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    };
    return Circle;
}());
exports.Circle = Circle;
