"use strict";
var L09_VogelhausClases;
(function (L09_VogelhausClases) {
    console.log("Snow");
    class birds {
        positon;
        velocity;
        type;
        size;
        constructor(_size) {
            console.log("ConstructorSnow");
            this.positon = new L09_VogelhausClases.Vector(0, 0);
            this.positon.random(0, 100);
            this.velocity = new L09_VogelhausClases.Vector(0, 0);
            this.velocity.random(20, -10);
            this.size = _size;
            this.drawbird();
        }
        move(_timeslice) {
            console.log("1221");
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
        drawbird() {
            L09_VogelhausClases.ctx.translate(this.positon.x, this.positon.y);
            L09_VogelhausClases.ctx.beginPath();
            L09_VogelhausClases.ctx.moveTo(0, 0);
            L09_VogelhausClases.ctx.lineTo(70, -70);
            L09_VogelhausClases.ctx.lineTo(-80, -80);
            L09_VogelhausClases.ctx.lineTo(0, -90);
            L09_VogelhausClases.ctx.lineTo(-80, -120);
            L09_VogelhausClases.ctx.lineTo(60, -130);
            L09_VogelhausClases.ctx.lineTo(90, -120);
            L09_VogelhausClases.ctx.lineTo(100, -140);
            L09_VogelhausClases.ctx.lineTo(110, -160);
            L09_VogelhausClases.ctx.lineTo(130, -170);
            L09_VogelhausClases.ctx.lineTo(180, -150);
            L09_VogelhausClases.ctx.lineTo(150, -140);
            L09_VogelhausClases.ctx.lineTo(155, -80);
            L09_VogelhausClases.ctx.lineTo(150, -70);
            L09_VogelhausClases.ctx.lineTo(130, -50);
            L09_VogelhausClases.ctx.fillStyle = "hsl(" + Math.random() * 180 + ", 50%, 25%)";
            L09_VogelhausClases.ctx.fill();
            L09_VogelhausClases.ctx.stroke();
            L09_VogelhausClases.ctx.beginPath();
            L09_VogelhausClases.ctx.lineTo(110, -160);
            L09_VogelhausClases.ctx.lineTo(130, -170);
            L09_VogelhausClases.ctx.lineTo(180, -150);
            L09_VogelhausClases.ctx.fillStyle = "white";
            L09_VogelhausClases.ctx.fill();
            L09_VogelhausClases.ctx.stroke();
            L09_VogelhausClases.ctx.fill();
            L09_VogelhausClases.ctx.stroke();
        }
    }
    L09_VogelhausClases.birds = birds;
})(L09_VogelhausClases || (L09_VogelhausClases = {}));
//# sourceMappingURL=Birds.js.map