"use strict";
var L10_Vogelhaus_Polymorphie;
(function (L10_Vogelhaus_Polymorphie) {
    class Birdpick {
        position;
        velocity;
        type;
        size;
        style;
        eating;
        constructor() {
            this.position = new L10_Vogelhaus_Polymorphie.Vector(0, 0);
            this.position.random(222, 44);
            this.velocity = new L10_Vogelhaus_Polymorphie.Vector(0, 0);
            this.velocity.random(20, 10000);
            this.style = "hsl(" + Math.random() * 180 + ", 50%, 25%)";
            let values = [true, false];
            this.eating = values[Math.floor(Math.random() * values.length)];
        }
        move(_timeslice) {
            let offset = new L10_Vogelhaus_Polymorphie.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L10_Vogelhaus_Polymorphie.ctx.canvas.width;
            if (this.position.y < 0)
                this.position.y += L10_Vogelhaus_Polymorphie.ctx.canvas.height;
            if (this.position.x > L10_Vogelhaus_Polymorphie.ctx.canvas.width)
                this.position.x -= L10_Vogelhaus_Polymorphie.ctx.canvas.width;
            if (this.position.y > L10_Vogelhaus_Polymorphie.ctx.canvas.height)
                this.position.y -= L10_Vogelhaus_Polymorphie.ctx.canvas.height;
        }
        drawbirds(_eating) {
            if (this.eating != true) {
                console.log("H");
                L10_Vogelhaus_Polymorphie.ctx.save();
                L10_Vogelhaus_Polymorphie.ctx.beginPath();
                L10_Vogelhaus_Polymorphie.ctx.moveTo(0, 0);
                L10_Vogelhaus_Polymorphie.ctx.lineTo(70, -60);
                L10_Vogelhaus_Polymorphie.ctx.lineTo(-80, -80);
                L10_Vogelhaus_Polymorphie.ctx.lineTo(30, -100);
                L10_Vogelhaus_Polymorphie.ctx.lineTo(-80, -130);
                L10_Vogelhaus_Polymorphie.ctx.lineTo(60, -130);
                L10_Vogelhaus_Polymorphie.ctx.lineTo(90, -110);
                L10_Vogelhaus_Polymorphie.ctx.lineTo(110, -90);
                L10_Vogelhaus_Polymorphie.ctx.lineTo(110, -100);
                L10_Vogelhaus_Polymorphie.ctx.lineTo(120, -120);
                L10_Vogelhaus_Polymorphie.ctx.lineTo(135, -130);
                L10_Vogelhaus_Polymorphie.ctx.lineTo(140, -135);
                L10_Vogelhaus_Polymorphie.ctx.lineTo(170, -130);
                L10_Vogelhaus_Polymorphie.ctx.lineTo(180, -110);
                L10_Vogelhaus_Polymorphie.ctx.lineTo(120, -40);
                L10_Vogelhaus_Polymorphie.ctx.fillStyle = "hsl(" + Math.random() * 180 + ", 50%, 25%)";
                L10_Vogelhaus_Polymorphie.ctx.fill();
                L10_Vogelhaus_Polymorphie.ctx.stroke();
                L10_Vogelhaus_Polymorphie.ctx.beginPath();
                L10_Vogelhaus_Polymorphie.ctx.lineTo(150, -90);
                L10_Vogelhaus_Polymorphie.ctx.lineTo(150, -10);
                L10_Vogelhaus_Polymorphie.ctx.lineTo(180, -110);
                L10_Vogelhaus_Polymorphie.ctx.fillStyle = "white";
                L10_Vogelhaus_Polymorphie.ctx.fill();
                L10_Vogelhaus_Polymorphie.ctx.stroke();
                L10_Vogelhaus_Polymorphie.ctx.fill();
                L10_Vogelhaus_Polymorphie.ctx.stroke();
                L10_Vogelhaus_Polymorphie.ctx.restore();
            }
            if (this.eating == true) {
                {
                    L10_Vogelhaus_Polymorphie.ctx.save();
                    L10_Vogelhaus_Polymorphie.ctx.beginPath();
                    L10_Vogelhaus_Polymorphie.ctx.moveTo(0, 0);
                    L10_Vogelhaus_Polymorphie.ctx.lineTo(70, -60);
                    L10_Vogelhaus_Polymorphie.ctx.lineTo(-80, -80);
                    L10_Vogelhaus_Polymorphie.ctx.lineTo(30, -100);
                    L10_Vogelhaus_Polymorphie.ctx.lineTo(-80, -130);
                    L10_Vogelhaus_Polymorphie.ctx.lineTo(60, -130);
                    L10_Vogelhaus_Polymorphie.ctx.lineTo(90, -110);
                    L10_Vogelhaus_Polymorphie.ctx.lineTo(110, -90);
                    L10_Vogelhaus_Polymorphie.ctx.lineTo(110, -100);
                    L10_Vogelhaus_Polymorphie.ctx.lineTo(120, -120);
                    L10_Vogelhaus_Polymorphie.ctx.lineTo(135, -130);
                    L10_Vogelhaus_Polymorphie.ctx.lineTo(140, -135);
                    L10_Vogelhaus_Polymorphie.ctx.lineTo(170, -130);
                    L10_Vogelhaus_Polymorphie.ctx.lineTo(180, -110);
                    L10_Vogelhaus_Polymorphie.ctx.lineTo(120, -40);
                    L10_Vogelhaus_Polymorphie.ctx.fillStyle = "hsl(" + Math.random() * 180 + ", 50%, 25%)";
                    L10_Vogelhaus_Polymorphie.ctx.fill();
                    L10_Vogelhaus_Polymorphie.ctx.stroke();
                    L10_Vogelhaus_Polymorphie.ctx.beginPath();
                    L10_Vogelhaus_Polymorphie.ctx.lineTo(150, -90);
                    L10_Vogelhaus_Polymorphie.ctx.lineTo(240, -40);
                    L10_Vogelhaus_Polymorphie.ctx.lineTo(180, -110);
                    L10_Vogelhaus_Polymorphie.ctx.fillStyle = "white";
                    L10_Vogelhaus_Polymorphie.ctx.fill();
                    L10_Vogelhaus_Polymorphie.ctx.stroke();
                    L10_Vogelhaus_Polymorphie.ctx.fill();
                    L10_Vogelhaus_Polymorphie.ctx.stroke();
                    L10_Vogelhaus_Polymorphie.ctx.restore();
                }
            }
        }
    }
    L10_Vogelhaus_Polymorphie.Birdpick = Birdpick;
})(L10_Vogelhaus_Polymorphie || (L10_Vogelhaus_Polymorphie = {}));
//# sourceMappingURL=pickbirds.js.map