"use strict";
var L10_Vogelhaus_Polymorphie;
(function (L10_Vogelhaus_Polymorphie) {
    class Birds extends L10_Vogelhaus_Polymorphie.Moveable {
        size;
        //Ich verstehe nicht warum ich hier einen Fehler document.getElementById("canvas") bekomme
        constructor(_size, _position) {
            if (_position) {
                super(_position);
                this.position = _position.copy();
            }
            else {
                let randomXStartPosition = Math.random() * document.getElementById("canvas").clientWidth;
                let randomYStartPosition = Math.random() * document.getElementById("canvas").clientHeight;
                let newPosition = new L10_Vogelhaus_Polymorphie.Vector(randomXStartPosition, randomYStartPosition / 2);
                super(newPosition);
                this.position = newPosition;
            }
            let birdsFlyingSpeed = Math.random() * 30 + 30;
            this.velocity = new L10_Vogelhaus_Polymorphie.Vector(birdsFlyingSpeed, 1);
            this.size = _size;
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
        draw() {
            L10_Vogelhaus_Polymorphie.ctx.save();
            L10_Vogelhaus_Polymorphie.ctx.translate(this.position.y, this.position.x);
            L10_Vogelhaus_Polymorphie.ctx.beginPath();
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
            L10_Vogelhaus_Polymorphie.ctx.fillStyle = "brown";
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
    L10_Vogelhaus_Polymorphie.Birds = Birds;
})(L10_Vogelhaus_Polymorphie || (L10_Vogelhaus_Polymorphie = {}));
//# sourceMappingURL=Birds.js.map