"use strict";
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
        Circles();
        triangle();
        lines();
    }
    function Circles() {
        let circle = canvas.getContext("2d");
        let gradient = circle.createLinearGradient(0, 200, 900, 1200);
        gradient.addColorStop("0", "black");
        gradient.addColorStop("0.5", "green");
        gradient.addColorStop("1.0", "black");
        // Fill with gradient
        circle.strokeStyle = gradient;
        circle.lineWidth = 1;
        for (let i = 0; i < 15; i++) {
            let size = Math.random() * 100;
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
        for (let i = 0; i < 10; i++) {
            let a = Math.random() * 1600;
            let b = Math.random() * 1100;
            let c = Math.random() * 1600;
            let d = Math.random() * 800;
            let e = Math.random() * 900;
            let f = Math.random() * 800;
            lines.beginPath();
            lines;
            lines.moveTo(1600, 1600);
            lines.lineTo(a, b);
            lines.lineTo(e, f);
            lines.lineTo(c, d);
            lines.lineTo(e, f);
            lines.lineTo(0, 0);
            lines.shadowBlur = 40;
            lines.shadowColor = "black";
            lines.stroke();
        }
    }
    function triangle() {
        console.log("Hallop");
        let triangle = canvas.getContext("2d");
        for (let i = 0; i < 7; i++) {
            let start = Math.random() * 1600;
            let spunkt = Math.random() * 1600;
            let startB = Math.random() * 1600;
            let spunktB = Math.random() * 1600;
            let startC = Math.random() * 1600;
            let spunktC = Math.random() * 1600;
            triangle.beginPath();
            triangle.lineCap = "square";
            triangle.moveTo(start, spunkt);
            triangle.lineTo(startB, spunktB);
            triangle.lineTo(startC, spunktC);
            triangle.fill();
            triangle.fillStyle = "black";
            triangle.stroke();
        }
    }
})(A08_Canvas || (A08_Canvas = {}));
//# sourceMappingURL=canvasts.js.map