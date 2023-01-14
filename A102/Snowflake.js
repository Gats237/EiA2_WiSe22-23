"use strict";
var L10_Vogelhaus_Polymorphie;
(function (L10_Vogelhaus_Polymorphie) {
    class Snowflake extends L10_Vogelhaus_Polymorphie.Moveable {
        type;
        size;
        style;
        position = new L10_Vogelhaus_Polymorphie.Vector(Math.round(Math.random() * innerWidth), Math.round(Math.random() * innerHeight));
        r1 = Math.round((Math.random() * 4) + 1);
        r2 = Math.round((Math.random() * 6) + 4);
        gradient = L10_Vogelhaus_Polymorphie.ctx.createRadialGradient(0, 0, this.r1, 0, 0, this.r2);
        velocityRandom = (Math.random() * 3) + 1;
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L10_Vogelhaus_Polymorphie.Vector(0, 0);
            this.velocity = new L10_Vogelhaus_Polymorphie.Vector(0, 0);
            this.velocity.random(50, 150);
            this.size = _size;
            this.gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            this.gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            this.draw();
        }
        draw() {
            let moveminusx = this.velocity.y * (-1);
            L10_Vogelhaus_Polymorphie.ctx.beginPath();
            L10_Vogelhaus_Polymorphie.ctx.save();
            L10_Vogelhaus_Polymorphie.ctx.translate(moveminusx, this.positon.y);
            L10_Vogelhaus_Polymorphie.ctx.arc(0, 0, this.size, 2, 4 * Math.PI);
            L10_Vogelhaus_Polymorphie.ctx.fillStyle = " white";
            L10_Vogelhaus_Polymorphie.ctx.closePath();
            L10_Vogelhaus_Polymorphie.ctx.fill();
            L10_Vogelhaus_Polymorphie.ctx.restore();
        }
    }
    L10_Vogelhaus_Polymorphie.Snowflake = Snowflake;
})(L10_Vogelhaus_Polymorphie || (L10_Vogelhaus_Polymorphie = {}));
//# sourceMappingURL=Snowflake.js.map