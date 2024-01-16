namespace FireworkSimulation {


    // Vektor Klasse wird von allen Klassen verwendet
    export class Vector {
        public x: number;
        public y: number;

        // Konstruktor für den Vektor mit x und y Werten

        constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }

        // setzt neue Werte für den Vektor
        set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }

        // skaliert die position (kamera bewegt sich auf einen zu oder von einem weg)
        scale(_factor: number): void {
            // skaliert die x und y Werte
            this.x *= _factor;
            this.y *= _factor;
        }

        // addiert einen Vektor auf den bestehenden Vektor
        // wird für die Bewegung der Partikel benötigt 
        // wird in der move() Methode der Partikel aufgerufen
        add(_add: Vector): void {
        
            this.x += _add.x;
            this.y += _add.y;
        }

        // kopiert den Vektor und gibt den neuen zurück
        // wird für die Bewegung der Partikel benötigt
        copy(): Vector {
            // gibt einen neuen Vektor zurück 
            return new Vector(this.x, this.y);
        }
    }
}