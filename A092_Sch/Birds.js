"use strict";
var L09_VogelhausClases;
(function (L09_VogelhausClases) {
    class Bird {
        positon;
        velocity;
        type;
        size;
        constructor(size) {
            this.positon = new L09_VogelhausClases.Vector(0, 0);
            this.positon.random(0, 1000);
            this.velocity = new L09_VogelhausClases.Vector(0, 0);
            this.velocity.random(20, -10);
            this.size = _size;
            ;
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
            console.log("ConstructorBird");
            L09_VogelhausClases.ctx.beginPath();
            L09_VogelhausClases.ctx.save;
            L09_VogelhausClases.ctx.translate(this.positon.x, this.positon.y);
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
            L09_VogelhausClases.ctx.closePath;
            L09_VogelhausClases.ctx.fillStyle = "hsl(" + Math.random() * this.size + ", 50%, 25%)";
            L09_VogelhausClases.ctx.fill();
            L09_VogelhausClases.ctx.beginPath();
            L09_VogelhausClases.ctx.save();
            L09_VogelhausClases.ctx.lineTo(110, -160);
            L09_VogelhausClases.ctx.lineTo(130, -170);
            L09_VogelhausClases.ctx.lineTo(180, -150);
            L09_VogelhausClases.ctx.closePath;
            L09_VogelhausClases.ctx.fillStyle = "white";
            L09_VogelhausClases.ctx.fill();
            L09_VogelhausClases.ctx.restore();
        }
    }
    L09_VogelhausClases.Bird = Bird;
})(L09_VogelhausClases || (L09_VogelhausClases = {}));
//# sourceMappingURL=Birds.js.map