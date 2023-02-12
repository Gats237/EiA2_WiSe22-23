"use strict";
var Feuerwerksimulator;
(function (Feuerwerksimulator) {
    class Particle extends Feuerwerksimulator.Moveable {
        color;
        size;
        constructor(_position, _veloctiy, _color, _size, _lifetime) {
            super(_position, _veloctiy, _lifetime);
            this.color = _color;
            this.size = _size;
        }
        move() {
            super.move(Feuerwerksimulator.refreshRate / 1000);
            this.draw();
        }
        draw() {
            Feuerwerksimulator.crc2.beginPath();
            Feuerwerksimulator.crc2.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
            Feuerwerksimulator.crc2.strokeStyle = this.color;
            Feuerwerksimulator.crc2.stroke();
        }
    }
    Feuerwerksimulator.Particle = Particle;
})(Feuerwerksimulator || (Feuerwerksimulator = {}));
//# sourceMappingURL=Particle.js.map