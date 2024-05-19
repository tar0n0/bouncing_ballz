import { getRandomColor } from './utils/helpers';

export class Circle {
    x: number;
    y: number;
    radius: number;
    dy: number;
    gravity: number;
    damping: number;
    color: string;
    canvas: HTMLCanvasElement;

    constructor(x: number, y: number, canvas: HTMLCanvasElement) {
        this.x = x;
        this.y = y;
        this.radius = 20;
        this.dy = 0;
        this.gravity = 9.8;
        this.damping = 0.7;
        this.color = getRandomColor();
        this.canvas = canvas;
    }

    update(deltaTime: number): void {
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
    }

    draw(ctx: CanvasRenderingContext2D):void {
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
    }
}
