"use strict";
var L10_Vogelhaus_Polymorphie;
(function (L10_Vogelhaus_Polymorphie) {
    class Snowflake extends L10_Vogelhaus_Polymorphie.Moveable {
        // declare positon: Vector;
        // declare velocity: Vector;
        // type: number;
        size;
        style;
        // position: Vector = new Vector(Math.round(Math.random() * innerWidth), Math.round(Math.random() * innerHeight));
        // r1: number = Math.round((Math.random() * 4) + 1);
        // r2: number = Math.round((Math.random() * 6) + 4);
        // velocityRandom: number = (Math.random() * 3) + 1;
        constructor(_size, _position) {
            super(_position);
            //Ich verstehe nicht warum ich hier einen Fehler document.getElementById("canvas") bekomme
            let randomXStartPosition = Math.random() * document.getElementById("canvas").clientWidth;
            let randomYStartPosition = Math.random() * document.getElementById("canvas").clientHeight;
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L10_Vogelhaus_Polymorphie.Vector(randomXStartPosition, randomYStartPosition);
            this.velocity = new L10_Vogelhaus_Polymorphie.Vector(1, _size);
            //this.velocity.random(0, 100);
            this.size = _size;
            /*console.log("ConstructorSnow");
            this.positon = new Vector(0, 0);
            this.positon.random(0, 1500);
            this.velocity = new Vector(0, 0);
            this.velocity.random(20, 200);
            this.size = _size;*/
        }
        move(_timeslice) {
            super.move(0.1);
        }
        draw() {
            L10_Vogelhaus_Polymorphie.ctx.beginPath();
            L10_Vogelhaus_Polymorphie.ctx.save();
            L10_Vogelhaus_Polymorphie.ctx.translate(this.position.x, this.position.y);
            L10_Vogelhaus_Polymorphie.ctx.arc(0, 0, this.size, 0, 2 * Math.PI);
            L10_Vogelhaus_Polymorphie.ctx.fillStyle = " white";
            L10_Vogelhaus_Polymorphie.ctx.closePath();
            L10_Vogelhaus_Polymorphie.ctx.fill();
            L10_Vogelhaus_Polymorphie.ctx.restore();
        }
    }
    L10_Vogelhaus_Polymorphie.Snowflake = Snowflake;
})(L10_Vogelhaus_Polymorphie || (L10_Vogelhaus_Polymorphie = {}));
//# sourceMappingURL=Snowflake.js.map