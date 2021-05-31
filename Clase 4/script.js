const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let angulo_incrementado = 0;
let amplitud = 500;
const radio = 1;
const total = canvas.width * 5 / radio;
let periodo = 0.05;

function draw(){
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for(let i=0; i < total; i++){
        let angulo = mapNumber(i, 0, total, 0, Math.PI * 2 / periodo);
        let y = mapNumber(Math.sin(angulo + angulo_incrementado), -1, 1, canvas.height/2 - amplitud/2, canvas.height/2 + amplitud/2);
        let x = mapNumber(i, 0, total, 0, canvas.width);

        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(x, y, radio, 0, Math.PI * 2);
        ctx.fill();
        ctx.quadraticCurveTo(25,25,25,62.5);
        ctx.moveTo(75,25);

        angulo_incrementado += 0.00002;
    }
    requestAnimationFrame(draw);
}
requestAnimationFrame(draw);

function mapNumber(n, in_min, in_max, out_min, out_max){
    return (n - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
