"use strict";
var L09_VogelhausClases;
(function (L09_VogelhausClases) {
    class Bird {
        positon;
        velocity;
        type;
        size;
        constructor() {
            this.positon = new L09_VogelhausClases.Vector(0, 0);
            this.positon.random(0, 100);
            this.velocity = new L09_VogelhausClases.Vector(0, 0);
            this.velocity.random(20, -10);
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
            L09_VogelhausClases.ctx.beginPath();
            L09_VogelhausClases.ctx.save();
            L09_VogelhausClases.ctx.lineTo(0, 0);
            L09_VogelhausClases.ctx.strokeStyle = "black";
            L09_VogelhausClases.ctx.stroke();
            // ctx.moveTo(0,0)
            // ctx.lineTo(70,-70);
            // ctx.lineTo(-80,-80);
            // ctx.lineTo(0,-90);
            // ctx.lineTo(-80,-120);
            // ctx.lineTo(60,-130);
            // ctx.lineTo(90,-120);
            // ctx.lineTo(100,-140);
            // ctx.lineTo(110,-160);
            // ctx.lineTo(130,-170);
            // ctx.lineTo(180,-150);
            // ctx.lineTo(150,-140);
            // ctx.lineTo(155,-80);
            // ctx.lineTo(150,-70);
            // ctx.lineTo(130,-50);
            // ctx.closePath;
            // ctx.fillStyle =  "hsl(" + Math.random() * this.size + ", 50%, 25%)";
            // ctx.fill();
            // ctx.beginPath();
            // ctx.save();
            // ctx.lineTo(110,-160);
            // ctx.lineTo(130,-170);
            // ctx.lineTo(180,-150);
            // ctx.closePath;
            // ctx.fillStyle = "white";
            //  ctx.fill();
            L09_VogelhausClases.ctx.restore();
        }
    }
    L09_VogelhausClases.Bird = Bird;
})(L09_VogelhausClases || (L09_VogelhausClases = {}));
//# sourceMappingURL=Birds.js.map