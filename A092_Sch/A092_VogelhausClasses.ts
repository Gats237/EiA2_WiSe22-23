/*
Aufgabe: Aufgabe 8 Canvas
Name: Henning Pils
Matrikel: 269355
Datum: 27.10.2022
Quellen: W3 Schhols, Youtube 
*/


namespace L09_VogelhausClases {


    window.addEventListener("load", handleLoad);


    export let ctx: CanvasRenderingContext2D;

    interface Vector {
        x: number;
        y: number;

    }


    function handleLoad(_event?: Event): void {
        console.log("Hallo");


        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        ctx = <CanvasRenderingContext2D>canvas.getContext("2d");


        let horizon: number = ctx.canvas.height * 0.6;
        drawbackround();
        drawSun({ x: 100, y: 75 });
        drawMountains({ x: 0, y: horizon }, 450, 900, "grey", "white");
        drawMountains({ x: 0, y: horizon }, 250, 600, "darkgrey", "lightgrey");
        
        birdhoause({ x: 150, y: 2000 });
        loch({ x: 150, y: 2000 });
        Schneemann({ x: 700, y: 2300 });
        posTrees();
        drawBirdathouse({ x: 130, y: 1700 });
        drawSnow();
        ctx.save();
        update();
        //drawBirds();
       
       
    }

    

    // function snowPos(): void {


    //     for (let i: number = 0; i < 250; i++) {
    //         let snowposX: number = ctx.canvas.width * Math.random();
    //         let snowposY: number = ctx.canvas.height * Math.random() * (-2);

    //         drawSnow();
    //     }
    // }


    // function birds(): void {


    //     for (let i: number =0; i < 20; i++) {
    //         let birdposX: number= ctx.canvas.width*Math.random();
    //         let birdposY: number= ctx.canvas.height*Math.random();
    //         drawBirds({ x:birdposX, y:birdposY });
    //     }
    // }


    function posTrees(): void {


        for (let i: number = 0; i < 42; i++) {
            let stammhöhe: number = 0.55 * ctx.canvas.height
            let positionbaum: number = Math.random() * ctx.canvas.width;
            drawTrees({ x: positionbaum, y: stammhöhe });
        }
    }

    function drawbackround(): void {
        console.log("Background");
        let gradient: CanvasGradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.8, " white");
        gradient.addColorStop(1.0, " white");
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }

    function drawSun(_postion: Vector) {
        console.log("Sonne");

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
       // ctx.restore();
    }


    function drawMountains(_postion: Vector, _min: number, _max: number, _colorLow: string, _colroHigh: string) {
        console.log("Mountain");
        let stepMin: number = 60;
        let stepMax: number = 150;
        let x: number = 0;

        
      

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
        //ctx.restore();
    }

    function birdhoause(_postion: Vector) {


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
        
        //ctx.restore();
    }


    function loch(_postion: Vector) {

       
       
        ctx.beginPath();
        ctx.translate(_postion.x, _postion.y)
        ctx.arc(0, -250, 15, 0.5, 2 * Math.PI)
        ctx.closePath();
        ctx.fillStyle = " black";
        ctx.fill();
       // ctx.restore();
    }


    function Schneemann(_postion: Vector) {

    
       
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
        //ctx.restore();
    }



    function drawTrees(_postion: Vector) {


      
     
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
       
        //ctx.restore();

        for (let i = -2; i < 3; i++) {
            ctx.beginPath();
            ctx.arc(_postion.x + i * Math.random() * 50, (_postion.y + i * Math.random() * 50), 100, 0, 2 * Math.PI);
            let gradient1: CanvasGradient = ctx.createLinearGradient(0, 1, 0, 100)
            gradient1.addColorStop(0, "white");
            gradient1.addColorStop(0.1, " green");
            gradient1.addColorStop(1.0, " green");
            ctx.fillStyle = "gradient1";
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            console.log("baum");
        }
    }


    // function drawBirds (_postion: Vector){

    //             ctx.save();
    //             ctx.translate(_postion.x, _postion.y);
    //             ctx.beginPath();
    //             ctx.moveTo(0,0)
    //             ctx.lineTo(70,-70);
    //             ctx.lineTo(-80,-80);
    //             ctx.lineTo(0,-90);
    //             ctx.lineTo(-80,-120);
    //             ctx.lineTo(60,-130);
    //             ctx.lineTo(90,-120);
    //             ctx.lineTo(100,-140);
    //             ctx.lineTo(110,-160);
    //             ctx.lineTo(130,-170);
    //             ctx.lineTo(180,-150);
    //             ctx.lineTo(150,-140);
    //             ctx.lineTo(155,-80);
    //             ctx.lineTo(150,-70);
    //             ctx.lineTo(130,-50);
    //             ctx.fillStyle =  "hsl(" + Math.random() * 180 + ", 50%, 25%)";
    //             ctx.fill();
    //             ctx.stroke();
    //             ctx.beginPath();
    //             ctx.lineTo(110,-160);
    //             ctx.lineTo(130,-170);
    //             ctx.lineTo(180,-150);
    //             ctx.fillStyle = "white";
    //             ctx.fill();
    //             ctx.stroke();
    //             ctx.fill();
    //             ctx.stroke();
    //             ctx.restore();
    //         }



    function drawBirdathouse(_postion: Vector) {
        
        
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
        //ctx.restore();
    }



    function drawSnow() {
        
        //window.setInterval (update,200);

        for (let index = 0; index < 100; index++) {
            let snowflake: Snowflake = new Snowflake(20);
     
            snowflakeArray.push(snowflake);
           
        
        }
        console.log(snowflakeArray);

    }

    let snowflakeArray: Snowflake[]=[];
    //let birdArray:birds[]=[];
    console.log(snowflakeArray);
    //function drawBirds(){
        // console.log("snowflake");
        // //window.setInterval (update,200);

        // let bird1: birds = new birds(20);

        // for (let index = 0; index < 100; index++) {
        //     bird1.move(0.00000000001);
        //     bird1.drawbird();
        //     birdArray.push(bird1);
        
        // }

    function update(): void{
        console.log("update");
        ctx.clearRect( 0,0,ctx.canvas.width, ctx.canvas.height);
    //     ctx.restore();
    //     for(let i= 0; i<snowflakeArray.length; i++){
    //     snowflakeArray[i].move(1/50);
    //     snowflakeArray[i].draw();
    // }


    }
   

}
