"use strict";
var L10_Vogelhaus_Polymorphie;
(function (L10_Vogelhaus_Polymorphie) {
    class Moveable {
        position;
        velocity;
        constructor(_position) {
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L10_Vogelhaus_Polymorphie.Vector(0, 0);
            this.velocity = new L10_Vogelhaus_Polymorphie.Vector(0, 0);
        }
        draw() {
            // 
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
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
    }
    L10_Vogelhaus_Polymorphie.Moveable = Moveable;
})(L10_Vogelhaus_Polymorphie || (L10_Vogelhaus_Polymorphie = {}));
//# sourceMappingURL=moveable.js.map