"use strict";
/*
Aufgabe: Aufgabe 8 Canvas
Name: Henning Pils
Matrikel: 269355
Datum: 27.10.2022
Quellen: W3 Schhols, Youtube
*/
var L09_VogelhausClases;
(function (L09_VogelhausClases) {
    window.addEventListener("load", handleLoad);
    let imgData;
    function handleLoad(_event) {
        console.log("Hallo");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_VogelhausClases.ctx = canvas.getContext("2d");
        let horizon = L09_VogelhausClases.ctx.canvas.height * 0.6;
        L09_VogelhausClases.ctx.save();
        drawbackround();
        drawSun({ x: 100, y: 75 });
        drawMountains({ x: 0, y: horizon }, 450, 900, "grey", "white");
        drawMountains({ x: 0, y: horizon }, 250, 600, "darkgrey", "lightgrey");
        birdhoause({ x: 150, y: 2000 });
        loch({ x: 150, y: 2000 });
        Schneemann({ x: 700, y: 2300 });
        posTrees();
        drawBirdathouse({ x: 130, y: 1700 });
        // drawpickBirds({x: 150, y: 2200});
        drawSnow();
        drawBirds();
        // drawpickBirdsup();
        imgData = L09_VogelhausClases.ctx.getImageData(0, 0, canvas.width, canvas.height);
        setInterval(update, 100);
    }
    function posTrees() {
        for (let i = 0; i < 42; i++) {
            let stammhöhe = 0.55 * L09_VogelhausClases.ctx.canvas.height;
            let positionbaum = Math.random() * L09_VogelhausClases.ctx.canvas.width;
            drawTrees({ x: positionbaum, y: stammhöhe });
        }
    }
    function drawbackround() {
        console.log("Background");
        L09_VogelhausClases.ctx.save();
        L09_VogelhausClases.ctx.beginPath();
        let gradient = L09_VogelhausClases.ctx.createLinearGradient(0, 0, 0, L09_VogelhausClases.ctx.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.8, " white");
        gradient.addColorStop(1.0, " white");
        L09_VogelhausClases.ctx.closePath();
        L09_VogelhausClases.ctx.fillStyle = gradient;
        L09_VogelhausClases.ctx.fillRect(0, 0, L09_VogelhausClases.ctx.canvas.width, L09_VogelhausClases.ctx.canvas.height);
        L09_VogelhausClases.ctx.restore();
    }
    function drawSun(_postion) {
        console.log("Sonne");
        L09_VogelhausClases.ctx.save();
        let r1 = 100;
        let r2 = 320;
        let gradient = L09_VogelhausClases.ctx.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "yellow");
        gradient.addColorStop(1, "hsl(353,42%,76%");
        L09_VogelhausClases.ctx.beginPath();
        L09_VogelhausClases.ctx.translate(_postion.x, _postion.y);
        L09_VogelhausClases.ctx.fillStyle = gradient;
        L09_VogelhausClases.ctx.arc(0, 0, r2, 0, 2 * Math.PI);
        L09_VogelhausClases.ctx.fill();
        L09_VogelhausClases.ctx.closePath();
        L09_VogelhausClases.ctx.restore();
    }
    function drawMountains(_postion, _min, _max, _colorLow, _colroHigh) {
        console.log("Mountain");
        let stepMin = 60;
        let stepMax = 150;
        let x = 0;
        L09_VogelhausClases.ctx.save();
        L09_VogelhausClases.ctx.beginPath();
        L09_VogelhausClases.ctx.translate(_postion.x, _postion.y);
        L09_VogelhausClases.ctx.moveTo(0, 0);
        L09_VogelhausClases.ctx.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L09_VogelhausClases.ctx.lineTo(x, y);
        } while (x < L09_VogelhausClases.ctx.canvas.width);
        L09_VogelhausClases.ctx.lineTo(x, 0);
        let gradient = L09_VogelhausClases.ctx.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(1, _colroHigh);
        L09_VogelhausClases.ctx.fillStyle = gradient;
        L09_VogelhausClases.ctx.fill();
        L09_VogelhausClases.ctx.closePath();
        L09_VogelhausClases.ctx.restore();
    }
    function birdhoause(_postion) {
        L09_VogelhausClases.ctx.save();
        L09_VogelhausClases.ctx.beginPath();
        L09_VogelhausClases.ctx.translate(_postion.x, _postion.y);
        L09_VogelhausClases.ctx.shadowBlur = 20;
        L09_VogelhausClases.ctx.shadowOffsetX = -10;
        L09_VogelhausClases.ctx.shadowOffsetY = 30;
        L09_VogelhausClases.ctx.shadowColor = "black";
        L09_VogelhausClases.ctx.moveTo(-6, 0);
        L09_VogelhausClases.ctx.lineTo(-6, -200);
        L09_VogelhausClases.ctx.lineTo(-50, -200);
        L09_VogelhausClases.ctx.lineTo(-50, -280);
        L09_VogelhausClases.ctx.lineTo(0, -340);
        L09_VogelhausClases.ctx.lineTo(50, -280);
        L09_VogelhausClases.ctx.lineTo(50, -200);
        L09_VogelhausClases.ctx.lineTo(3, -200);
        L09_VogelhausClases.ctx.lineTo(3, 0);
        L09_VogelhausClases.ctx.closePath();
        L09_VogelhausClases.ctx.fillStyle = "brown";
        L09_VogelhausClases.ctx.fill();
        L09_VogelhausClases.ctx.restore();
    }
    function loch(_postion) {
        L09_VogelhausClases.ctx.save();
        L09_VogelhausClases.ctx.beginPath();
        L09_VogelhausClases.ctx.translate(_postion.x, _postion.y);
        L09_VogelhausClases.ctx.arc(0, -250, 15, 0.5, 2 * Math.PI);
        L09_VogelhausClases.ctx.closePath();
        L09_VogelhausClases.ctx.fillStyle = " black";
        L09_VogelhausClases.ctx.fill();
        L09_VogelhausClases.ctx.restore();
    }
    function Schneemann(_postion) {
        L09_VogelhausClases.ctx.save();
        L09_VogelhausClases.ctx.beginPath();
        L09_VogelhausClases.ctx.translate(_postion.x, _postion.y);
        L09_VogelhausClases.ctx.arc(0, -430, 80, 0, 2 * Math.PI);
        L09_VogelhausClases.ctx.closePath();
        L09_VogelhausClases.ctx.stroke();
        L09_VogelhausClases.ctx.beginPath();
        L09_VogelhausClases.ctx.arc(0, -250, 100, 0, 2 * Math.PI);
        L09_VogelhausClases.ctx.closePath();
        L09_VogelhausClases.ctx.stroke();
        L09_VogelhausClases.ctx.beginPath();
        L09_VogelhausClases.ctx.arc(0, 0, 150, 0, 2 * Math.PI);
        L09_VogelhausClases.ctx.closePath();
        L09_VogelhausClases.ctx.stroke();
        L09_VogelhausClases.ctx.beginPath();
        L09_VogelhausClases.ctx.arc(-25, -450, 20, 0, 2 * Math.PI);
        L09_VogelhausClases.ctx.closePath();
        L09_VogelhausClases.ctx.fillStyle = " black";
        L09_VogelhausClases.ctx.fill();
        L09_VogelhausClases.ctx.stroke();
        L09_VogelhausClases.ctx.beginPath();
        L09_VogelhausClases.ctx.arc(25, -450, 20, 0, 2 * Math.PI);
        L09_VogelhausClases.ctx.fillStyle = " black";
        L09_VogelhausClases.ctx.closePath();
        L09_VogelhausClases.ctx.fill();
        L09_VogelhausClases.ctx.stroke();
        L09_VogelhausClases.ctx.beginPath();
        L09_VogelhausClases.ctx.moveTo(-10, -410);
        L09_VogelhausClases.ctx.lineTo(-12, -330);
        L09_VogelhausClases.ctx.lineTo(20, -410);
        L09_VogelhausClases.ctx.closePath();
        L09_VogelhausClases.ctx.fillStyle = "orange";
        L09_VogelhausClases.ctx.fill();
        L09_VogelhausClases.ctx.stroke();
        L09_VogelhausClases.ctx.restore();
    }
    function drawTrees(_postion) {
        L09_VogelhausClases.ctx.save();
        L09_VogelhausClases.ctx.beginPath();
        L09_VogelhausClases.ctx.translate(_postion.x, _postion.y);
        L09_VogelhausClases.ctx.shadowBlur = 20;
        L09_VogelhausClases.ctx.shadowOffsetX = 10;
        L09_VogelhausClases.ctx.shadowOffsetY = -20;
        L09_VogelhausClases.ctx.shadowColor = "black";
        L09_VogelhausClases.ctx.moveTo(0, 0);
        L09_VogelhausClases.ctx.lineTo(0, 300);
        L09_VogelhausClases.ctx.lineTo(25, 300);
        L09_VogelhausClases.ctx.lineTo(25, 0);
        L09_VogelhausClases.ctx.fillStyle = "brown";
        L09_VogelhausClases.ctx.closePath();
        L09_VogelhausClases.ctx.fill();
        L09_VogelhausClases.ctx.stroke();
        L09_VogelhausClases.ctx.restore();
        for (let i = -2; i < 3; i++) {
            L09_VogelhausClases.ctx.save();
            L09_VogelhausClases.ctx.beginPath();
            L09_VogelhausClases.ctx.arc(_postion.x + i * Math.random() * 50, (_postion.y + i * Math.random() * 50), 100, 0, 2 * Math.PI);
            let gradient1 = L09_VogelhausClases.ctx.createLinearGradient(0, 1, 0, 100);
            gradient1.addColorStop(0, "white");
            gradient1.addColorStop(0.1, " green");
            gradient1.addColorStop(1.0, " green");
            L09_VogelhausClases.ctx.fillStyle = "white";
            L09_VogelhausClases.ctx.closePath();
            L09_VogelhausClases.ctx.fill();
            L09_VogelhausClases.ctx.stroke();
            console.log("baum");
            L09_VogelhausClases.ctx.restore();
        }
    }
    function drawBirdathouse(_postion) {
        L09_VogelhausClases.ctx.save();
        L09_VogelhausClases.ctx.beginPath();
        L09_VogelhausClases.ctx.translate(_postion.x, _postion.y);
        L09_VogelhausClases.ctx.moveTo(0, 0);
        L09_VogelhausClases.ctx.lineTo(35, -35);
        L09_VogelhausClases.ctx.lineTo(-40, -40);
        L09_VogelhausClases.ctx.lineTo(0, -45);
        L09_VogelhausClases.ctx.lineTo(-40, -60);
        L09_VogelhausClases.ctx.lineTo(30, -65);
        L09_VogelhausClases.ctx.lineTo(45, -60);
        L09_VogelhausClases.ctx.lineTo(50, -70);
        L09_VogelhausClases.ctx.lineTo(55, -80);
        L09_VogelhausClases.ctx.lineTo(65, -85);
        L09_VogelhausClases.ctx.lineTo(90, -75);
        L09_VogelhausClases.ctx.lineTo(75, -70);
        L09_VogelhausClases.ctx.lineTo(75.25, -40);
        L09_VogelhausClases.ctx.lineTo(75, -35);
        L09_VogelhausClases.ctx.lineTo(65, -25);
        L09_VogelhausClases.ctx.closePath();
        L09_VogelhausClases.ctx.fillStyle = "black";
        L09_VogelhausClases.ctx.fill();
        L09_VogelhausClases.ctx.stroke();
        L09_VogelhausClases.ctx.beginPath();
        L09_VogelhausClases.ctx.lineTo(55, -80);
        L09_VogelhausClases.ctx.lineTo(65, -85);
        L09_VogelhausClases.ctx.lineTo(90, -75);
        L09_VogelhausClases.ctx.fillStyle = "white";
        L09_VogelhausClases.ctx.closePath();
        L09_VogelhausClases.ctx.fill();
        L09_VogelhausClases.ctx.stroke();
        L09_VogelhausClases.ctx.restore();
    }
    function drawSnow() {
        //window.setInterval (update,200);
        for (let index = 0; index < 400; index++) {
            let snowflake = new L09_VogelhausClases.Snowflake(Math.random() * 20);
            snowflakeArray.push(snowflake);
        }
        console.log(snowflakeArray);
    }
    let snowflakeArray = [];
    let birdArray = [];
    let birdpickArray = [];
    console.log(birdpickArray);
    // function drawpickBirdsup(){
    //     console.log("q");
    //         for (let index = 0; index < 2; index++) {
    //             let birdpick1: Birdpick = new Birdpick();
    //             birdpickArray.push(birdpick1);
    //         }
    //     }
    function drawBirds() {
        for (let index = 0; index < 10; index++) {
            let bird1 = new L09_VogelhausClases.Bird();
            birdArray.push(bird1);
            console.log(birdArray);
        }
    }
    function update() {
        L09_VogelhausClases.ctx.clearRect(0, 0, L09_VogelhausClases.ctx.canvas.width, L09_VogelhausClases.ctx.canvas.height);
        L09_VogelhausClases.ctx.putImageData(imgData, 0, 0);
        L09_VogelhausClases.ctx.save();
        for (let i = 0; i < snowflakeArray.length; i++) {
            snowflakeArray[i].move(1 / 50);
            snowflakeArray[i].draw();
        }
        L09_VogelhausClases.ctx.restore();
        L09_VogelhausClases.ctx.save();
        for (let i = 0; i < birdArray.length; i++) {
            birdArray[i].move(1 / 50);
            birdArray[i].drawbirds();
        }
        L09_VogelhausClases.ctx.restore();
        // ctx.save();
        // for (let i =0; i <birdpickArray.length; i++) {
        //     birdpickArray[i].drawbirds();
        // }
    }
})(L09_VogelhausClases || (L09_VogelhausClases = {}));
//# sourceMappingURL=A092_VogelhausClasses.js.map