/*
Aufgabe: Aufgabe 092 VogelhausClasses
Name: Henning Pils
Matrikel: 269355
Datum: 27.10.2022
Quellen: W3 Schhols, Youtube 
*/


namespace L10_Vogelhaus_Polymorphie {


    window.addEventListener("load", handleLoad);


    export let ctx: CanvasRenderingContext2D;
    export let  canvas: HTMLCanvasElement;
    let moveables: Moveable[] = []; 
    let imgData: ImageData;

    interface Vector {
        x: number;
        y: number;

    }





    export function create(): void {
        
        for (let index: number = 0; index < 100; index++) {
            let snowflakeSize: number = Math.random() * 10;
            let snowflake: Snowflake = new Snowflake(snowflakeSize); 
            moveables.push(snowflake); 
        }

        for (let index2: number = 0; index2 < 20; index2++) {
            let bird: Birds= new Birds(0);
            moveables.push(bird);
        }
    }

    export function update(): void {
        ctx.putImageData(imgData, 0, 0); 
        for (let snowflake of moveables) {
            snowflake.move(1 / 50);
            snowflake.draw();
        }
        for (let bird of moveables) {
            bird.move(1 / 50);
            bird.draw();
        }
    }    

    function handleLoad(_event?: Event): void {
        console.log("Hallo");


        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        ctx = <CanvasRenderingContext2D>canvas.getContext("2d");


        let horizon: number = ctx.canvas.height * 0.6;
        
        ctx.save();
        drawbackround();
        drawSun({ x: 100, y: 75 });
        drawMountains({ x: 0, y: horizon }, 450, 900, "grey", "white");
        drawMountains({ x: 0, y: horizon }, 250, 600, "darkgrey", "lightgrey");
        
        birdhoause({ x: 150, y: 2000 });
        loch({ x: 150, y: 2000 });
        Schneemann({ x: 700, y: 2300 });
        posTrees();
        drawBirdathouse({ x: 130, y: 1700 });
        imgData  = ctx.getImageData (0, 0, canvas.width, canvas.height);
        setInterval(update, 100);
        create();
        setInterval(update, 10);




    function posTrees(): void {


        for (let i: number = 0; i < 42; i++) {
            let stammhöhe: number = 0.55 * ctx.canvas.height
            let positionbaum: number = Math.random() * ctx.canvas.width;
            drawTrees({ x: positionbaum, y: stammhöhe });
        }
    }

    function drawbackround(): void {
        console.log("Background");
        ctx.save();
        ctx.beginPath();
        let gradient: CanvasGradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.8, " white");
        gradient.addColorStop(1.0, " white");
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.restore();

    }

    function drawSun(_postion: Vector) {
        console.log("Sonne");
        ctx.save();
        let r1: number = 100;
        let r2: number = 320;
        let gradient: CanvasGradient = ctx.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "yellow");
        gradient.addColorStop(1, "hsl(353,42%,76%");

        ctx.beginPath();
        ctx.translate(_postion.x, _postion.y);
        ctx.fillStyle = gradient;
        ctx.arc(0, 0, r2, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    
        ctx.restore();
    }


    function drawMountains(_postion: Vector, _min: number, _max: number, _colorLow: string, _colroHigh: string) {
        console.log("Mountain");
        let stepMin: number = 60;
        let stepMax: number = 150;
        let x: number = 0;

        
      
        ctx.save();
        ctx.beginPath();
        ctx.translate(_postion.x, _postion.y)
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            ctx.lineTo(x, y);
        } while (x < ctx.canvas.width);

        ctx.lineTo(x, 0);

        let gradient: CanvasGradient = ctx.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(1, _colroHigh);

        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }

    function birdhoause(_postion: Vector) {

        ctx.save();
        ctx.beginPath();     
        ctx.translate(_postion.x, _postion.y)
        ctx.shadowBlur = 20;
        ctx.shadowOffsetX = -10;
        ctx.shadowOffsetY = 30;
        ctx.shadowColor = "black";
        ctx.moveTo(-6, 0);
        ctx.lineTo(-6, -200);
        ctx.lineTo(-50, -200);
        ctx.lineTo(-50, -280);
        ctx.lineTo(0, -340);
        ctx.lineTo(50, -280);
        ctx.lineTo(50, -200);
        ctx.lineTo(3, -200);
        ctx.lineTo(3, 0);
        ctx.closePath();
        ctx.fillStyle = "brown";
        ctx.fill();
        ctx.restore();
    }


    function loch(_postion: Vector) {

       
        ctx.save();
        ctx.beginPath();
        ctx.translate(_postion.x, _postion.y)
        ctx.arc(0, -250, 15, 0.5, 2 * Math.PI)
        ctx.closePath();
        ctx.fillStyle = " black";
        ctx.fill();
        ctx.restore();
    }


    function Schneemann(_postion: Vector) {

    
        ctx.save();
        ctx.beginPath();
        ctx.translate(_postion.x, _postion.y);
        ctx.arc(0, -430, 80, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, -250, 100, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, 150, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(-25, -450, 20, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fillStyle = " black";
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(25, -450, 20, 0, 2 * Math.PI);
        ctx.fillStyle = " black";
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(-10, -410);
        ctx.lineTo(-12, -330);
        ctx.lineTo(20, -410);
        ctx.closePath();
        ctx.fillStyle = "orange";
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }



    function drawTrees(_postion: Vector) {


      
        ctx.save();
        ctx.beginPath();
        ctx.translate(_postion.x, _postion.y);
        ctx.shadowBlur = 20;
        ctx.shadowOffsetX = 10;
        ctx.shadowOffsetY = -20;
        ctx.shadowColor = "black";
        ctx.moveTo(0, 0);
        ctx.lineTo(0, 300)
        ctx.lineTo(25, 300);
        ctx.lineTo(25, 0);
        ctx.fillStyle = "brown";
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
       ctx.restore();

        for (let i = -2; i < 3; i++) {
            ctx.save();
            ctx.beginPath();
            ctx.arc(_postion.x + i * Math.random() * 50, (_postion.y + i * Math.random() * 50), 100, 0, 2 * Math.PI);
            let gradient1: CanvasGradient = ctx.createLinearGradient(0, 1, 0, 100)
            gradient1.addColorStop(0, "white");
            gradient1.addColorStop(0.1, " green");
            gradient1.addColorStop(1.0, " green");
            ctx.fillStyle = "white";
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            console.log("baum");
        ctx.restore();

            
        }
    }


    function drawBirdathouse(_postion: Vector) {
        
        ctx.save();
        ctx.beginPath();
        ctx.translate(_postion.x, _postion.y);
        ctx.moveTo(0, 0)
        ctx.lineTo(35, -35);
        ctx.lineTo(-40, -40);
        ctx.lineTo(0, -45);
        ctx.lineTo(-40, -60);
        ctx.lineTo(30, -65);
        ctx.lineTo(45, -60);
        ctx.lineTo(50, -70);
        ctx.lineTo(55, -80);
        ctx.lineTo(65, -85);
        ctx.lineTo(90, -75);
        ctx.lineTo(75, -70);
        ctx.lineTo(75.25, -40);
        ctx.lineTo(75, -35);
        ctx.lineTo(65, -25);
        ctx.closePath();
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.lineTo(55, -80);
        ctx.lineTo(65, -85);
        ctx.lineTo(90, -75);
        ctx.fillStyle = "white";
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }
}
    
    // function drawSnow() {
        
    //     //window.setInterval (update,200);
    //     for (let index = 0; index < 400; index++) {
    //         let snowflake: Snowflake = new Snowflake(Math.random()*20);
     
    //         snowflakeArray.push(snowflake);
           
        
    //     }
    //     console.log(snowflakeArray);

    // }

    // let snowflakeArray: Snowflake[]=[];
    // let birdArray: Birds[]=[];
    // let birdpickArray: Birdpick []=[];
    // console.log(birdpickArray);
    


//     function updateBird(): void {
//         drawpickBirdsup(true);
//     }


// //Picken funktioniert nicht
//     function drawpickBirdsup(_update:boolean){
//         console.log("q");
//         for (let bird of Birdpick) {
//             ctx.save();

//             bird.draw();
//             ctx.restore();

//             if (_update) {
//                 bird.eat(0 / 150);
//             }
            
//             for (let index = 0; index < 2; index++) {
//                 let birdpick1: Birdpick = new Birdpick();
    
//                 birdpickArray.push(birdpick1);
             
//             }
//         }
//     }
    
    
    // function drawBirds():void{
    

        
    //     for (let index = 0; index < 10; index++) {
    //         let bird1: Birds = new Birds (0,0);

    //         birdArray.push(bird1);
    //         console.log(birdArray);
        
    //     }}




    // export function update(): void{
       
    //     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    //     ctx.putImageData(imgData,0 ,0);
    //     ctx.save();
    //     for(let i= 0; i<snowflakeArray.length; i++){
    //      snowflakeArray[i].move(1/50);
    //      snowflakeArray[i].draw();
    //     }
    //     ctx.restore();
    //     ctx.save();
    //     for(let i= 0; i<birdArray.length; i++){
    //         birdArray[i].move(1/50);
    //         birdArray[i].drawbirds();
    //     }
        //drawpickBirdsup(false);
       
        // ctx.save();
        // for (let i =0; i <birdpickArray.length; i++) {
        //     birdpickArray[i].drawbirds();
            
            
        // }

    }

   




