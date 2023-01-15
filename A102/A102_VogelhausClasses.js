"use strict";
/*
Aufgabe: Aufgabe 092 VogelhausClasses
Name: Henning Pils
Matrikel: 269355
Datum: 27.10.2022
Quellen: W3 Schhols, Youtube
*/
var L10_Vogelhaus_Polymorphie;
(function (L10_Vogelhaus_Polymorphie) {
    window.addEventListener("load", handleLoad);
    let moveables = [];
    let imgData;
    function create() {
        for (let index = 0; index < 100; index++) {
            let snowflakeSize = Math.random() * 10;
            let snowflake = new L10_Vogelhaus_Polymorphie.Snowflake(snowflakeSize);
            moveables.push(snowflake);
        }
        for (let index2 = 0; index2 < 20; index2++) {
            let bird = new L10_Vogelhaus_Polymorphie.Birds(0);
            moveables.push(bird);
        }
    }
    L10_Vogelhaus_Polymorphie.create = create;
    function update() {
        L10_Vogelhaus_Polymorphie.ctx.putImageData(imgData, 0, 0);
        for (let snowflake of moveables) {
            snowflake.move(1 / 50);
            snowflake.draw();
        }
        for (let bird of moveables) {
            bird.move(1 / 50);
            bird.draw();
        }
    }
    L10_Vogelhaus_Polymorphie.update = update;
    function handleLoad(_event) {
        console.log("Hallo");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L10_Vogelhaus_Polymorphie.ctx = canvas.getContext("2d");
        let horizon = L10_Vogelhaus_Polymorphie.ctx.canvas.height * 0.6;
        L10_Vogelhaus_Polymorphie.ctx.save();
        drawbackround();
        drawSun({ x: 100, y: 75 });
        drawMountains({ x: 0, y: horizon }, 450, 900, "grey", "white");
        drawMountains({ x: 0, y: horizon }, 250, 600, "darkgrey", "lightgrey");
        birdhoause({ x: 150, y: 2000 });
        loch({ x: 150, y: 2000 });
        Schneemann({ x: 700, y: 2300 });
        posTrees();
        drawBirdathouse({ x: 130, y: 1700 });
        imgData = L10_Vogelhaus_Polymorphie.ctx.getImageData(0, 0, canvas.width, canvas.height);
        setInterval(update, 100);
        create();
        setInterval(update, 10);
        function posTrees() {
            for (let i = 0; i < 42; i++) {
                let stammhöhe = 0.55 * L10_Vogelhaus_Polymorphie.ctx.canvas.height;
                let positionbaum = Math.random() * L10_Vogelhaus_Polymorphie.ctx.canvas.width;
                drawTrees({ x: positionbaum, y: stammhöhe });
            }
        }
        function drawbackround() {
            console.log("Background");
            L10_Vogelhaus_Polymorphie.ctx.save();
            L10_Vogelhaus_Polymorphie.ctx.beginPath();
            let gradient = L10_Vogelhaus_Polymorphie.ctx.createLinearGradient(0, 0, 0, L10_Vogelhaus_Polymorphie.ctx.canvas.height);
            gradient.addColorStop(0, "lightblue");
            gradient.addColorStop(0.8, " white");
            gradient.addColorStop(1.0, " white");
            L10_Vogelhaus_Polymorphie.ctx.closePath();
            L10_Vogelhaus_Polymorphie.ctx.fillStyle = gradient;
            L10_Vogelhaus_Polymorphie.ctx.fillRect(0, 0, L10_Vogelhaus_Polymorphie.ctx.canvas.width, L10_Vogelhaus_Polymorphie.ctx.canvas.height);
            L10_Vogelhaus_Polymorphie.ctx.restore();
        }
        function drawSun(_postion) {
            console.log("Sonne");
            L10_Vogelhaus_Polymorphie.ctx.save();
            let r1 = 100;
            let r2 = 320;
            let gradient = L10_Vogelhaus_Polymorphie.ctx.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "yellow");
            gradient.addColorStop(1, "hsl(353,42%,76%");
            L10_Vogelhaus_Polymorphie.ctx.beginPath();
            L10_Vogelhaus_Polymorphie.ctx.translate(_postion.x, _postion.y);
            L10_Vogelhaus_Polymorphie.ctx.fillStyle = gradient;
            L10_Vogelhaus_Polymorphie.ctx.arc(0, 0, r2, 0, 2 * Math.PI);
            L10_Vogelhaus_Polymorphie.ctx.fill();
            L10_Vogelhaus_Polymorphie.ctx.closePath();
            L10_Vogelhaus_Polymorphie.ctx.restore();
        }
        function drawMountains(_postion, _min, _max, _colorLow, _colroHigh) {
            console.log("Mountain");
            let stepMin = 60;
            let stepMax = 150;
            let x = 0;
            L10_Vogelhaus_Polymorphie.ctx.save();
            L10_Vogelhaus_Polymorphie.ctx.beginPath();
            L10_Vogelhaus_Polymorphie.ctx.translate(_postion.x, _postion.y);
            L10_Vogelhaus_Polymorphie.ctx.moveTo(0, 0);
            L10_Vogelhaus_Polymorphie.ctx.lineTo(0, -_max);
            do {
                x += stepMin + Math.random() * (stepMax - stepMin);
                let y = -_min - Math.random() * (_max - _min);
                L10_Vogelhaus_Polymorphie.ctx.lineTo(x, y);
            } while (x < L10_Vogelhaus_Polymorphie.ctx.canvas.width);
            L10_Vogelhaus_Polymorphie.ctx.lineTo(x, 0);
            let gradient = L10_Vogelhaus_Polymorphie.ctx.createLinearGradient(0, 0, 0, -_max);
            gradient.addColorStop(0, _colorLow);
            gradient.addColorStop(1, _colroHigh);
            L10_Vogelhaus_Polymorphie.ctx.fillStyle = gradient;
            L10_Vogelhaus_Polymorphie.ctx.fill();
            L10_Vogelhaus_Polymorphie.ctx.closePath();
            L10_Vogelhaus_Polymorphie.ctx.restore();
        }
        function birdhoause(_postion) {
            L10_Vogelhaus_Polymorphie.ctx.save();
            L10_Vogelhaus_Polymorphie.ctx.beginPath();
            L10_Vogelhaus_Polymorphie.ctx.translate(_postion.x, _postion.y);
            L10_Vogelhaus_Polymorphie.ctx.shadowBlur = 20;
            L10_Vogelhaus_Polymorphie.ctx.shadowOffsetX = -10;
            L10_Vogelhaus_Polymorphie.ctx.shadowOffsetY = 30;
            L10_Vogelhaus_Polymorphie.ctx.shadowColor = "black";
            L10_Vogelhaus_Polymorphie.ctx.moveTo(-6, 0);
            L10_Vogelhaus_Polymorphie.ctx.lineTo(-6, -200);
            L10_Vogelhaus_Polymorphie.ctx.lineTo(-50, -200);
            L10_Vogelhaus_Polymorphie.ctx.lineTo(-50, -280);
            L10_Vogelhaus_Polymorphie.ctx.lineTo(0, -340);
            L10_Vogelhaus_Polymorphie.ctx.lineTo(50, -280);
            L10_Vogelhaus_Polymorphie.ctx.lineTo(50, -200);
            L10_Vogelhaus_Polymorphie.ctx.lineTo(3, -200);
            L10_Vogelhaus_Polymorphie.ctx.lineTo(3, 0);
            L10_Vogelhaus_Polymorphie.ctx.closePath();
            L10_Vogelhaus_Polymorphie.ctx.fillStyle = "brown";
            L10_Vogelhaus_Polymorphie.ctx.fill();
            L10_Vogelhaus_Polymorphie.ctx.restore();
        }
        function loch(_postion) {
            L10_Vogelhaus_Polymorphie.ctx.save();
            L10_Vogelhaus_Polymorphie.ctx.beginPath();
            L10_Vogelhaus_Polymorphie.ctx.translate(_postion.x, _postion.y);
            L10_Vogelhaus_Polymorphie.ctx.arc(0, -250, 15, 0.5, 2 * Math.PI);
            L10_Vogelhaus_Polymorphie.ctx.closePath();
            L10_Vogelhaus_Polymorphie.ctx.fillStyle = " black";
            L10_Vogelhaus_Polymorphie.ctx.fill();
            L10_Vogelhaus_Polymorphie.ctx.restore();
        }
        function Schneemann(_postion) {
            L10_Vogelhaus_Polymorphie.ctx.save();
            L10_Vogelhaus_Polymorphie.ctx.beginPath();
            L10_Vogelhaus_Polymorphie.ctx.translate(_postion.x, _postion.y);
            L10_Vogelhaus_Polymorphie.ctx.arc(0, -430, 80, 0, 2 * Math.PI);
            L10_Vogelhaus_Polymorphie.ctx.closePath();
            L10_Vogelhaus_Polymorphie.ctx.stroke();
            L10_Vogelhaus_Polymorphie.ctx.beginPath();
            L10_Vogelhaus_Polymorphie.ctx.arc(0, -250, 100, 0, 2 * Math.PI);
            L10_Vogelhaus_Polymorphie.ctx.closePath();
            L10_Vogelhaus_Polymorphie.ctx.stroke();
            L10_Vogelhaus_Polymorphie.ctx.beginPath();
            L10_Vogelhaus_Polymorphie.ctx.arc(0, 0, 150, 0, 2 * Math.PI);
            L10_Vogelhaus_Polymorphie.ctx.closePath();
            L10_Vogelhaus_Polymorphie.ctx.stroke();
            L10_Vogelhaus_Polymorphie.ctx.beginPath();
            L10_Vogelhaus_Polymorphie.ctx.arc(-25, -450, 20, 0, 2 * Math.PI);
            L10_Vogelhaus_Polymorphie.ctx.closePath();
            L10_Vogelhaus_Polymorphie.ctx.fillStyle = " black";
            L10_Vogelhaus_Polymorphie.ctx.fill();
            L10_Vogelhaus_Polymorphie.ctx.stroke();
            L10_Vogelhaus_Polymorphie.ctx.beginPath();
            L10_Vogelhaus_Polymorphie.ctx.arc(25, -450, 20, 0, 2 * Math.PI);
            L10_Vogelhaus_Polymorphie.ctx.fillStyle = " black";
            L10_Vogelhaus_Polymorphie.ctx.closePath();
            L10_Vogelhaus_Polymorphie.ctx.fill();
            L10_Vogelhaus_Polymorphie.ctx.stroke();
            L10_Vogelhaus_Polymorphie.ctx.beginPath();
            L10_Vogelhaus_Polymorphie.ctx.moveTo(-10, -410);
            L10_Vogelhaus_Polymorphie.ctx.lineTo(-12, -330);
            L10_Vogelhaus_Polymorphie.ctx.lineTo(20, -410);
            L10_Vogelhaus_Polymorphie.ctx.closePath();
            L10_Vogelhaus_Polymorphie.ctx.fillStyle = "orange";
            L10_Vogelhaus_Polymorphie.ctx.fill();
            L10_Vogelhaus_Polymorphie.ctx.stroke();
            L10_Vogelhaus_Polymorphie.ctx.restore();
        }
        function drawTrees(_postion) {
            L10_Vogelhaus_Polymorphie.ctx.save();
            L10_Vogelhaus_Polymorphie.ctx.beginPath();
            L10_Vogelhaus_Polymorphie.ctx.translate(_postion.x, _postion.y);
            L10_Vogelhaus_Polymorphie.ctx.shadowBlur = 20;
            L10_Vogelhaus_Polymorphie.ctx.shadowOffsetX = 10;
            L10_Vogelhaus_Polymorphie.ctx.shadowOffsetY = -20;
            L10_Vogelhaus_Polymorphie.ctx.shadowColor = "black";
            L10_Vogelhaus_Polymorphie.ctx.moveTo(0, 0);
            L10_Vogelhaus_Polymorphie.ctx.lineTo(0, 300);
            L10_Vogelhaus_Polymorphie.ctx.lineTo(25, 300);
            L10_Vogelhaus_Polymorphie.ctx.lineTo(25, 0);
            L10_Vogelhaus_Polymorphie.ctx.fillStyle = "brown";
            L10_Vogelhaus_Polymorphie.ctx.closePath();
            L10_Vogelhaus_Polymorphie.ctx.fill();
            L10_Vogelhaus_Polymorphie.ctx.stroke();
            L10_Vogelhaus_Polymorphie.ctx.restore();
            for (let i = -2; i < 3; i++) {
                L10_Vogelhaus_Polymorphie.ctx.save();
                L10_Vogelhaus_Polymorphie.ctx.beginPath();
                L10_Vogelhaus_Polymorphie.ctx.arc(_postion.x + i * Math.random() * 50, (_postion.y + i * Math.random() * 50), 100, 0, 2 * Math.PI);
                let gradient1 = L10_Vogelhaus_Polymorphie.ctx.createLinearGradient(0, 1, 0, 100);
                gradient1.addColorStop(0, "white");
                gradient1.addColorStop(0.1, " green");
                gradient1.addColorStop(1.0, " green");
                L10_Vogelhaus_Polymorphie.ctx.fillStyle = "white";
                L10_Vogelhaus_Polymorphie.ctx.closePath();
                L10_Vogelhaus_Polymorphie.ctx.fill();
                L10_Vogelhaus_Polymorphie.ctx.stroke();
                console.log("baum");
                L10_Vogelhaus_Polymorphie.ctx.restore();
            }
        }
        function drawBirdathouse(_postion) {
            L10_Vogelhaus_Polymorphie.ctx.save();
            L10_Vogelhaus_Polymorphie.ctx.beginPath();
            L10_Vogelhaus_Polymorphie.ctx.translate(_postion.x, _postion.y);
            L10_Vogelhaus_Polymorphie.ctx.moveTo(0, 0);
            L10_Vogelhaus_Polymorphie.ctx.lineTo(35, -35);
            L10_Vogelhaus_Polymorphie.ctx.lineTo(-40, -40);
            L10_Vogelhaus_Polymorphie.ctx.lineTo(0, -45);
            L10_Vogelhaus_Polymorphie.ctx.lineTo(-40, -60);
            L10_Vogelhaus_Polymorphie.ctx.lineTo(30, -65);
            L10_Vogelhaus_Polymorphie.ctx.lineTo(45, -60);
            L10_Vogelhaus_Polymorphie.ctx.lineTo(50, -70);
            L10_Vogelhaus_Polymorphie.ctx.lineTo(55, -80);
            L10_Vogelhaus_Polymorphie.ctx.lineTo(65, -85);
            L10_Vogelhaus_Polymorphie.ctx.lineTo(90, -75);
            L10_Vogelhaus_Polymorphie.ctx.lineTo(75, -70);
            L10_Vogelhaus_Polymorphie.ctx.lineTo(75.25, -40);
            L10_Vogelhaus_Polymorphie.ctx.lineTo(75, -35);
            L10_Vogelhaus_Polymorphie.ctx.lineTo(65, -25);
            L10_Vogelhaus_Polymorphie.ctx.closePath();
            L10_Vogelhaus_Polymorphie.ctx.fillStyle = "black";
            L10_Vogelhaus_Polymorphie.ctx.fill();
            L10_Vogelhaus_Polymorphie.ctx.stroke();
            L10_Vogelhaus_Polymorphie.ctx.beginPath();
            L10_Vogelhaus_Polymorphie.ctx.lineTo(55, -80);
            L10_Vogelhaus_Polymorphie.ctx.lineTo(65, -85);
            L10_Vogelhaus_Polymorphie.ctx.lineTo(90, -75);
            L10_Vogelhaus_Polymorphie.ctx.fillStyle = "white";
            L10_Vogelhaus_Polymorphie.ctx.closePath();
            L10_Vogelhaus_Polymorphie.ctx.fill();
            L10_Vogelhaus_Polymorphie.ctx.stroke();
            L10_Vogelhaus_Polymorphie.ctx.restore();
        }
    }
})(L10_Vogelhaus_Polymorphie || (L10_Vogelhaus_Polymorphie = {}));
// function drawSnow() {
//     //window.setInterval (update,200);
//     for (let index = 0; index < 400; index++) {
//         let snowflake: Snowflake = new Snowflake(Math.random()*20);
//         snowflakeArray.push(snowflake);
//     }
//     console.log(snowflakeArray);
// }
// let snowflakeArray: Snowflake[]=[];
// let birdArray: Birds[]=[];
// let birdpickArray: Birdpick []=[];
// console.log(birdpickArray);
//     function updateBird(): void {
//         drawpickBirdsup(true);
//     }
// //Picken funktioniert nicht
//     function drawpickBirdsup(_update:boolean){
//         console.log("q");
//         for (let bird of Birdpick) {
//             ctx.save();
//             bird.draw();
//             ctx.restore();
//             if (_update) {
//                 bird.eat(0 / 150);
//             }
//             for (let index = 0; index < 2; index++) {
//                 let birdpick1: Birdpick = new Birdpick();
//                 birdpickArray.push(birdpick1);
//             }
//         }
//     }
// function drawBirds():void{
//     for (let index = 0; index < 10; index++) {
//         let bird1: Birds = new Birds (0,0);
//         birdArray.push(bird1);
//         console.log(birdArray);
//     }}
// export function update(): void{
//     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
//     ctx.putImageData(imgData,0 ,0);
//     ctx.save();
//     for(let i= 0; i<snowflakeArray.length; i++){
//      snowflakeArray[i].move(1/50);
//      snowflakeArray[i].draw();
//     }
//     ctx.restore();
//     ctx.save();
//     for(let i= 0; i<birdArray.length; i++){
//         birdArray[i].move(1/50);
//         birdArray[i].drawbirds();
//     }
//drawpickBirdsup(false);
// ctx.save();
// for (let i =0; i <birdpickArray.length; i++) {
//     birdpickArray[i].drawbirds();
// }
//# sourceMappingURL=A102_VogelhausClasses.js.map