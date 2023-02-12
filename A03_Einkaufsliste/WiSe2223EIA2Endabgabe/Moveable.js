"use strict";
var Feuerwerksimulator;
(function (Feuerwerksimulator) {
    class Moveable {
        position;
        velocity;
        lifetime;
        constructor(_position, _velocity, _lifetime) {
            this.position = _position;
            this.velocity = _velocity;
            this.lifetime = _lifetime;
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            this.lifetime -= _timeslice;
        }
    }
    Feuerwerksimulator.Moveable = Moveable;
})(Feuerwerksimulator || (Feuerwerksimulator = {}));
//# sourceMappingURL=Moveable.js.map