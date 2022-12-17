"use strict";
var L09_VogelhausClases;
(function (L09_VogelhausClases) {
    class Bird {
        positon;
        velocity;
        type;
        size;
        style;
        constructor() {
            this.positon = new L09_VogelhausClases.Vector(0, 0);
            this.positon.random(0, 100);
            this.velocity = new L09_VogelhausClases.Vector(1, 200);
            this.velocity.random(20, 1000);
            this.style = "hsl(" + Math.random() * 180 + ", 50%, 25%)";
        }
        move(_timeslice) {
            let offset = new L09_VogelhausClases.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.positon.add(offset);
            if (this.positon.x < 0)
                this.positon.x += L09_VogelhausClases.ctx.canvas.width;
            if (this.positon.y < 0)
                this.positon.y += L09_VogelhausClases.ctx.canvas.height;
            if (this.positon.x > L09_VogelhausClases.ctx.canvas.width)
                this.positon.x -= L09_VogelhausClases.ctx.canvas.width;
            if (this.positon.y > L09_VogelhausClases.ctx.canvas.height)
                this.positon.y -= L09_VogelhausClases.ctx.canvas.height;
        }
        drawbirds() {
            L09_VogelhausClases.ctx.save();
            L09_VogelhausClases.ctx.translate(this.positon.y, this.positon.x);
            L09_VogelhausClases.ctx.beginPath();
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
            L09_VogelhausClases.ctx.fillStyle = this.style;
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
    }
    L09_VogelhausClases.Bird = Bird;
})(L09_VogelhausClases || (L09_VogelhausClases = {}));
//# sourceMappingURL=Birds.js.map