"use strict";
var L09_VogelhausClases;
(function (L09_VogelhausClases) {
    console.log("Snow");
    class Snowflake {
        positon;
        velocity;
        type;
        size;
        constructor(_size) {
            console.log("ConstructorSnow");
            this.positon = new L09_VogelhausClases.Vector(0, 0);
            this.positon.random(0, 1000);
            this.velocity = new L09_VogelhausClases.Vector(0, 0);
            this.velocity.random(20, 1000);
            this.size = _size;
            this.draw();
        }
        move(_timeslice) {
            console.log("Hallo");
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
        draw() {
            let p = Math.random() * 15;
            L09_VogelhausClases.ctx.translate(this.positon.x, this.positon.y);
            L09_VogelhausClases.ctx.beginPath();
            L09_VogelhausClases.ctx.arc(0, 0, p, 2, 4 * Math.PI);
            L09_VogelhausClases.ctx.fillStyle = " white";
            L09_VogelhausClases.ctx.fill();
            L09_VogelhausClases.ctx.closePath();
            L09_VogelhausClases.ctx.stroke();
        }
    }
    L09_VogelhausClases.Snowflake = Snowflake;
})(L09_VogelhausClases || (L09_VogelhausClases = {}));
//# sourceMappingURL=Snowflake.js.map