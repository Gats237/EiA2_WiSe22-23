import { isHeritageClause } from "typescript";

namespace Asteroida {

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    let asteroids: Asteroid[] = [];
   


    function handleLoad(_event: Event): void {

        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";

        createPaths();
        console.log("Asteroids path", asteroidsPaths);
        

        createAsteroids(5);
        //createShip();
        //
    canvas.addEventListener("click", shootLaser);

        window.setInterval(update, 20);
    }


function shootLaser(_event: MouseEvent): void {
        console.log("Shoot laser");
        let hotspot: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        console.log("Hotspot: ", hotspot);

        let asteroidHit: Asteroid | null = getAsteroidHit(hotspot);
        if (asteroidHit)
            breakAsteroid(asteroidHit);
    }

    function createAsteroids(_nAsteroids: number): void {
        console.log("create asteroids");

        for (let i: number = 0; i < _nAsteroids; i++) {
            let asteroid: Asteroid = new Asteroid();
            asteroids.push(asteroid);
        }
    }

    function getAsteroidHit(_hotspot: Vector): Asteroid | null {
        for (let asteroid of asteroids) {
            if (asteroid.isHit(_hotspot))
                return asteroid;
        }
        return null;
    }

    function update(): void {
        console.log("Update");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (let asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }

    }

    function breakAsteroid(_asteroid: Asteroid): void {
        console.log("Break Asteroid");
        _asteroid.expendable = true;
    }
    
    function createPaths(): void {
        console.log("Create Paths");


        asteroidsPaths = new Path2D();
        

    isHit(_hotspot: Vector): boolean {
        let hitsize: number = 50;
        let difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);

        return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);

        

    
}