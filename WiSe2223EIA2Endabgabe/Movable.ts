namespace FireworkSimulation {

    // Movable Klasse wird von allen Klassen verwendet
    export abstract class Moveable {
        position: Vector;
        velocity: Vector;
        lifetime: number;
// Konstruktor wird von der Explosion aufgerufen
        constructor(_position: Vector, _velocity: Vector, _lifetime: number) {
            this.position = _position;
            this.velocity = _velocity;
            this.lifetime = _lifetime;
        }
// move() wird von der Explosion aufgerufen
// _timeslice sind die Millisekunden seit dem letzten Aufruf

        move(_timeslice: number): void {
            // copy() erstellt eine Kopie des Vektors und gibt neue Werte zurück
            let offset: Vector = this.velocity.copy(); // kopieren die velocity sonst wird die velocity verändert
            // offset wird mit der Zeit multipliziert
            offset.scale(_timeslice);
            this.position.add(offset);
            // Lebenszeit verringern 
            this.lifetime -= _timeslice;
        }
    }
}