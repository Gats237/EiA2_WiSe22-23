"use strict";
/*
Aufgabe: Aufgabe 8 Canvas
Name: Henning Pils
Matrikel: 269355
Datum: 27.10.2022
Quellen: W3 Schhols, Youtube
*/
var A08_Canvas;
(function (A08_Canvas) {
    //Eventlistener
    window.addEventListener("load", handleLoad);
    window.addEventListener("mousedown", reload);
    //refresh Code
    function reload(_event) { handleLoad(); }
    function handleLoad(_event) {
        //console.log("Hallo");
        let canvas = document.querySelector("canvas");
        let ctx = canvas.getContext("2d");
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        let d1 = Math.random() * 1600;
        let d2 = Math.random() * 1600;
        let d3 = Math.random() * 1600;
        let d4 = Math.random() * 1600;
        let gradient1 = ctx.createLinearGradient(d1, d2, d3, d4);
        let e1 = Math.random() * 0.1;
        let e2 = Math.random() * 0.5;
        let e3 = Math.random() * 1;
        gradient1.addColorStop(e1, "black");
        gradient1.addColorStop(e2, "green");
        gradient1.addColorStop(e3, "grey");
        ctx.beginPath();
        ctx.fillStyle = "gradient1";
        let f1 = Math.random() * 1600;
        let f2 = Math.random() * 1600;
        let f3 = Math.random() * 1600;
        let f4 = Math.random() * 1600;
        ctx.fillRect(f1, f2, f3, f4);
        ctx.stroke();
        Circles();
        triangle();
        lines();
    }
    function Circles() {
        let circle = canvas.getContext("2d");
        let gradient = circle.createLinearGradient(0, 200, 750, 1100);
        circle.imageSmoothingEnabled = true;
        circle.imageSmoothingQuality = "high";
        gradient.addColorStop("0", "black");
        gradient.addColorStop("0.5", "green");
        gradient.addColorStop("1.0", "white");
        // Fill with gradient
        circle.strokeStyle = gradient;
        circle.lineWidth = 2;
        for (let i = 0; i < 15; i++) {
            let size = Math.random() * 1500;
            let x = Math.random() * circle.canvas.width;
            let y = Math.random() * circle.canvas.height;
            let z = Math.random() * 2;
            let p = Math.random() * 4;
            circle.beginPath();
            circle.arc(x, y, size, p, z * Math.PI);
            circle.shadowBlur = 50;
            circle.shadowOffsetX = 80;
            circle.shadowColor = "black";
            circle.fillStyle = gradient;
            circle.fill();
            circle.closePath();
            circle.stroke();
        }
    }
    function lines() {
        let lines = canvas.getContext("2d");
        lines.imageSmoothingEnabled = true;
        lines.imageSmoothingQuality = "high";
        for (let i = 0; i < 6; i++) {
            let a = Math.random() * 1600;
            let b = Math.random() * 1100;
            let c = Math.random() * 1600;
            let d = Math.random() * 800;
            let e = Math.random() * 900;
            let f = Math.random() * 800;
            lines.beginPath();
            lines.moveTo(1600, 1600);
            lines.lineTo(a, b);
            lines.lineTo(e, f);
            lines.lineTo(c, d);
            lines.lineTo(e, f);
            lines.lineTo(0, 0);
            lines.shadowBlur = 40;
            lines.shadowColor = "black";
            lines.strokeStyle = "black";
            lines.stroke();
        }
        ;
    }
    function triangle() {
        console.log("SCFREIBURG");
        let triangle = canvas.getContext("2d");
        triangle.imageSmoothingEnabled = true;
        triangle.imageSmoothingQuality = "high";
        let gradient2 = triangle.createLinearGradient(0, 600, 1200, 1600);
        gradient2.addColorStop("0", "white");
        gradient2.addColorStop("0.5", "green");
        gradient2.addColorStop("1.0", "black");
        for (let i = 0; i < 3; i++) {
            let start = Math.random() * 800;
            let spunkt = Math.random() * 800;
            let startB = Math.random() * 800;
            let spunktB = Math.random() * 1000;
            let startC = Math.random() * 1000;
            let spunktC = Math.random() * 1000;
            triangle.beginPath();
            triangle.lineCap = "square";
            triangle.moveTo(start, spunkt);
            triangle.lineTo(startB, spunktB);
            triangle.lineTo(startC, spunktC);
            triangle.fill();
            triangle.fillStyle = "gradiant1";
            triangle.strokeStyle = "gradiant2";
            triangle.stroke();
        }
    }
})(A08_Canvas || (A08_Canvas = {}));
//# sourceMappingURL=canvasts.js.map