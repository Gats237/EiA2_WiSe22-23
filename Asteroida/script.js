"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Asteroida;
(function (Asteroida) {
    window.addEventListener("load", handleLoad);
    let asteroids = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Asteroida.crc2 = canvas.getContext("2d");
        Asteroida.crc2.fillStyle = "black";
        Asteroida.crc2.strokeStyle = "white";
        createPaths();
        console.log("Asteroids path", asteroidsPaths);
        createAsteroids(5);
        //createShip();
        //
        canvas.addEventListener("click", shootLaser);
        window.setInterval(update, 20);
    }
    function shootLaser(_event) {
        console.log("Shoot laser");
        let hotspot = new Vector(_event.clientX - Asteroida.crc2.canvas.offsetLeft, _event.clientY - Asteroida.crc2.canvas.offsetTop);
        console.log("Hotspot: ", hotspot);
        let asteroidHit = getAsteroidHit(hotspot);
        if (asteroidHit)
            breakAsteroid(asteroidHit);
    }
    function createAsteroids(_nAsteroids) {
        console.log("create asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            let asteroid = new Asteroid();
            asteroids.push(asteroid);
        }
    }
    function getAsteroidHit(_hotspot) {
        for (let asteroid of asteroids) {
            if (asteroid.isHit(_hotspot))
                return asteroid;
        }
        return null;
    }
    function update() {
        console.log("Update");
        Asteroida.crc2.fillRect(0, 0, Asteroida.crc2.canvas.width, Asteroida.crc2.canvas.height);
        for (let asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }
    }
    function breakAsteroid(_asteroid) {
        console.log("Break Asteroid");
        _asteroid.expendable = true;
    }
    function createPaths() {
        console.log("Create Paths");
        asteroidsPaths = new Path2D();
        isHit(_hotspot, Vector);
        boolean;
        {
            let hitsize = 50;
            let difference = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
})(Asteroida || (Asteroida = {}));
//# sourceMappingURL=script.js.map