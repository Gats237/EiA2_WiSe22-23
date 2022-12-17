"use strict";
var L09_VogelhausClases;
(function (L09_VogelhausClases) {
    class Birdpick {
        positon;
        velocity;
        type;
        size;
        style;
        constructor() {
            this.positon = new L09_VogelhausClases.Vector(0, 0);
            this.positon.random(222, 44);
            this.velocity = new L09_VogelhausClases.Vector(0, 0);
            this.velocity.random(20, 10000);
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
            //     console.log("s");
            // for (var i=0; i<5; i++) {
            //     timers.push(setTimeout( i*3000));
            L09_VogelhausClases.ctx.save();
            L09_VogelhausClases.ctx.beginPath();
            L09_VogelhausClases.ctx.translate(_postion.x, _postion.y);
            L09_VogelhausClases.ctx.moveTo(0, 0);
            L09_VogelhausClases.ctx.lineTo(70, -60);
            L09_VogelhausClases.ctx.lineTo(-80, -80);
            L09_VogelhausClases.ctx.lineTo(30, -100);
            L09_VogelhausClases.ctx.lineTo(-80, -130);
            L09_VogelhausClases.ctx.lineTo(60, -130);
            L09_VogelhausClases.ctx.lineTo(90, -110);
            L09_VogelhausClases.ctx.lineTo(110, -90);
            L09_VogelhausClases.ctx.lineTo(110, -100);
            L09_VogelhausClases.ctx.lineTo(120, -120);
            L09_VogelhausClases.ctx.lineTo(135, -130);
            L09_VogelhausClases.ctx.lineTo(140, -135);
            L09_VogelhausClases.ctx.lineTo(170, -130);
            L09_VogelhausClases.ctx.lineTo(180, -110);
            L09_VogelhausClases.ctx.lineTo(120, -40);
            L09_VogelhausClases.ctx.fillStyle = "hsl(" + Math.random() * 180 + ", 50%, 25%)";
            L09_VogelhausClases.ctx.fill();
            L09_VogelhausClases.ctx.stroke();
            L09_VogelhausClases.ctx.beginPath();
            L09_VogelhausClases.ctx.lineTo(150, -90);
            L09_VogelhausClases.ctx.lineTo(150, -10);
            L09_VogelhausClases.ctx.lineTo(180, -110);
            L09_VogelhausClases.ctx.fillStyle = "white";
            L09_VogelhausClases.ctx.fill();
            L09_VogelhausClases.ctx.stroke();
            L09_VogelhausClases.ctx.fill();
            L09_VogelhausClases.ctx.stroke();
            L09_VogelhausClases.ctx.restore();
        }
        // abbrechen:
        while(timers, length) { }
    }
    L09_VogelhausClases.Birdpick = Birdpick;
     > 0;
    {
        clearTimeout(timers.pop());
        L09_VogelhausClases.ctx.save();
        L09_VogelhausClases.ctx.beginPath();
        L09_VogelhausClases.ctx.translate(_postion.x, _postion.y);
        L09_VogelhausClases.ctx.moveTo(0, 0);
        L09_VogelhausClases.ctx.lineTo(70, -60);
        L09_VogelhausClases.ctx.lineTo(-80, -80);
        L09_VogelhausClases.ctx.lineTo(30, -100);
        L09_VogelhausClases.ctx.lineTo(-80, -130);
        L09_VogelhausClases.ctx.lineTo(60, -130);
        L09_VogelhausClases.ctx.lineTo(90, -110);
        L09_VogelhausClases.ctx.lineTo(110, -90);
        L09_VogelhausClases.ctx.lineTo(110, -100);
        L09_VogelhausClases.ctx.lineTo(120, -120);
        L09_VogelhausClases.ctx.lineTo(135, -130);
        L09_VogelhausClases.ctx.lineTo(140, -135);
        L09_VogelhausClases.ctx.lineTo(170, -130);
        L09_VogelhausClases.ctx.lineTo(180, -110);
        L09_VogelhausClases.ctx.lineTo(120, -40);
        L09_VogelhausClases.ctx.fillStyle = "hsl(" + Math.random() * 180 + ", 50%, 25%)";
        L09_VogelhausClases.ctx.fill();
        L09_VogelhausClases.ctx.stroke();
        L09_VogelhausClases.ctx.beginPath();
        L09_VogelhausClases.ctx.lineTo(150, -90);
        L09_VogelhausClases.ctx.lineTo(240, -40);
        L09_VogelhausClases.ctx.lineTo(180, -110);
        L09_VogelhausClases.ctx.fillStyle = "white";
        L09_VogelhausClases.ctx.fill();
        L09_VogelhausClases.ctx.stroke();
        L09_VogelhausClases.ctx.fill();
        L09_VogelhausClases.ctx.stroke();
        L09_VogelhausClases.ctx.restore();
    }
})(L09_VogelhausClases || (L09_VogelhausClases = {}));
//# sourceMappingURL=pickbirds.js.map