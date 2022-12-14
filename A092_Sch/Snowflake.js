"use strict";
var L09_VogelhausClases;
(function (L09_VogelhausClases) {
    class Snowflake {
        positon;
        velocity;
        type;
        size;
        constructor(_size) {
            console.log("ConstructorSnow");
            this.positon = new L09_VogelhausClases.Vector(0, 0);
            this.positon.random(10000, 25000);
            this.velocity = new L09_VogelhausClases.Vector(0, 0);
            this.velocity.random(2000, 2000);
            this.size = _size;
        }
        move(_timeslice) {
            let moveminus = this.velocity.y * (-1);
            let offset = new L09_VogelhausClases.Vector(this.velocity.x, moveminus);
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
            let moveminusx = this.velocity.y * (-1);
            L09_VogelhausClases.ctx.beginPath();
            L09_VogelhausClases.ctx.save();
            L09_VogelhausClases.ctx.translate(moveminusx, this.positon.y);
            L09_VogelhausClases.ctx.arc(0, 0, this.size, 2, 4 * Math.PI);
            L09_VogelhausClases.ctx.fillStyle = " white";
            L09_VogelhausClases.ctx.closePath();
            L09_VogelhausClases.ctx.fill();
            L09_VogelhausClases.ctx.restore();
        }
    }
    L09_VogelhausClases.Snowflake = Snowflake;
})(L09_VogelhausClases || (L09_VogelhausClases = {}));
//# sourceMappingURL=Snowflake.js.map