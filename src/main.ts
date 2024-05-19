import { Circle } from './Circle';

const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;
const resetButton: HTMLButtonElement = document.createElement('button');
const circleCountText: HTMLParagraphElement = document.createElement('p');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let lastTime: number = 0;
let circles: Circle[] = [];

function tick(currentTime: number): void {
    const deltaTime: number = (currentTime - lastTime) / 1000;
    update(deltaTime);
    draw();
    lastTime = currentTime;
    requestAnimationFrame(tick);
}

requestAnimationFrame(tick);

canvas.addEventListener('click', (event: MouseEvent): void => {
    if (circles.length < 15) {
        const rect: DOMRect = canvas.getBoundingClientRect();
        const x: number = event.clientX - rect.left;
        const y: number = event.clientY - rect.top;
        circles.push(new Circle(x, y, canvas));
        updateCircleCount();
    }else {
        drawText('You have reached the maximum circle count. Reset for start again.')
    }
});

resetButton.textContent = 'Reset';
resetButton.style.position = 'absolute';
resetButton.style.top = '20px';
resetButton.style.left = '20px';
resetButton.style.padding = '10px';
resetButton.style.fontSize = '16px';
resetButton.style.backgroundColor = '#007bff';
resetButton.style.color = 'white';
resetButton.style.border = 'none';
resetButton.style.borderRadius = '5px';
document.body.appendChild(resetButton);

resetButton.addEventListener('click', (): void => {
    circles = [];
    updateCircleCount();
});

circleCountText.textContent = 'Circles: 0';
circleCountText.style.position = 'absolute';
circleCountText.style.top = '20px';
circleCountText.style.left = '100px';
circleCountText.style.fontSize = '16px';
document.body.appendChild(circleCountText);

function update(deltaTime: number): void {
    circles.forEach(circle => circle.update(deltaTime));
}

function updateCircleCount(): void {
    circleCountText.textContent = `Circles: ${circles.length}`;
}

function draw(): void {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circles.forEach(circle => circle.draw(ctx));
    const message: string = circles.length < 15 ? 'Click anywhere on the screen to spawn circles!' : 'You have reached the maximum circle count. Reset to start again.';
    drawText(message);
}


function drawText(text: string): void {
    const textWidth: number = ctx.measureText(text).width;
    const x: number = (canvas.width - textWidth) / 2;
    const y: number = 40;

    ctx.fillStyle = 'red';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, x, y);
}
