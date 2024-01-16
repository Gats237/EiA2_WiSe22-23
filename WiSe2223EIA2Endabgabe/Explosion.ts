namespace FireworkSimulation {

    // 
    export class Explosion extends Moveable {
        // Array für die Partikel
        particles: Particle[];

        // Erstellen von particle mit zufälliger velocity/ wird von der Rocket aufgerufen
        constructor(_mousePosition: Vector, _particleAmount: number, _color: string, _size: number, _lifetime: number) {
            
            
            // super ruft den Konstruktor der Movable Klasse auf
            //mousePosition wird an die Movable Klasse übergeben 
            super(_mousePosition, new Vector(0, 0), _lifetime); // velocity wird auf 0 gesetzt da keine Bewegung implementiert ist

            this.particles = [];

            for (let i: number = 0; i < _particleAmount; i++) {
                // kreieren eine zufällige velocity für jeden Partikel
                let particleVelocity: Vector = new Vector((Math.random() * 2 - 1) * 200, (Math.random() * 2 - 1) * 200);
                // kopiere die Partikel-Position, damit jeder partikel eine eigene Position hat.
                let particlePosition: Vector = _mousePosition.copy(); //
                // Hier werden alle Partikel dieser Explosion erstellt und die Lebenszeit zufällig kleiner als die der Rakete gehalten
                this.particles.push(new Particle(particlePosition, particleVelocity, _color, _size, _lifetime - Math.random() * this.lifetime));
            }
        }
// move() wird von der Explosion aufgerufen
        draw(): void {
            // Hier wird die Rakete noch visuell dargestellt
            this.drawParticles();
        }
// drawParticles() wird von der Explosion aufgerufen
        drawParticles(): void {
            // Hier werden die Partikel gezeichnet 
            this.particles.forEach((particle, index) => {
                // Male die Partikel nur, wenn sie auch noch leben sollen
                //Wenn ein Partikel noch eine Lebenszeit hat, wird er gezeichnet
                if (particle.lifetime > 0) {
                    particle.move();
                } else {
                    // entferne den Partikel, wenn er keine Lebenszeit mehr hat
                    //Wenn ein Partikel keine Lebenszeit mehr hat, wird er aus dem Array entfernt
                    this.particles.splice(index, 1);
                }
            });
// Wenn keine Partikel mehr da sind, dann ist die Explosion auch vorbei
            if (this.particles.length == 0) {
                this.lifetime = 0;
            }
        }
    }
}