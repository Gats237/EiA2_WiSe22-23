"use strict";
var Feuerwerksimulator;
(function (Feuerwerksimulator) {
    class Explosion extends Feuerwerksimulator.Moveable {
        particles;
        // Erstellen von particle
        constructor(_mousePosition, _particleAmount, _color, _size, _lifetime) {
            super(_mousePosition, new Feuerwerksimulator.Vector(0, 0), _lifetime);
            this.particles = [];
            for (let i = 0; i < _particleAmount; i++) {
                // kreieren eine zufällige velocity für jeden Partikel
                let particleVelocity = new Feuerwerksimulator.Vector((Math.random() * 2 - 1) * 200, (Math.random() * 2 - 1) * 200);
                // kopiere die Partikel-Position, damit jeder partikel eine eigene Position hat.
                let particlePosition = _mousePosition.copy();
                // Hier werden alle Partikel dieser Explosion erstellt und die Lebenszeit zufällig kleiner als die der Rakete gehalten
                this.particles.push(new Feuerwerksimulator.Particle(particlePosition, particleVelocity, _color, _size, _lifetime - Math.random() * this.lifetime));
            }
        }
        draw() {
            // Hier wird die Rakete noch visuell dargestellt
            this.drawParticles();
        }
        drawParticles() {
            this.particles.forEach((particle, index) => {
                // Male die Partikel nur, wenn sie auch noch leben sollen
                if (particle.lifetime > 0) {
                    particle.move();
                }
                else {
                    // entferne den Partikel, wenn er keine Lebenszeit mehr hat
                    this.particles.splice(index, 1);
                }
            });
            if (this.particles.length == 0) {
                this.lifetime = 0;
            }
        }
    }
    Feuerwerksimulator.Explosion = Explosion;
})(Feuerwerksimulator || (Feuerwerksimulator = {}));
//# sourceMappingURL=Explosion.js.map