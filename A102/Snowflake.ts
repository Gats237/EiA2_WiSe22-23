
namespace L10_Vogelhaus_Polymorphie {
    

    export class Snowflake extends Moveable {

        // declare positon: Vector;
        // declare velocity: Vector;
        // type: number;
         size: number;
        style: any;
       


        // position: Vector = new Vector(Math.round(Math.random() * innerWidth), Math.round(Math.random() * innerHeight));
        // r1: number = Math.round((Math.random() * 4) + 1);
        // r2: number = Math.round((Math.random() * 6) + 4);

        // velocityRandom: number = (Math.random() * 3) + 1;
        
        constructor(_size: number, _position?: Vector) {
            super(_position);

//Ich verstehe nicht warum ich hier einen Fehler document.getElementById("canvas") bekomme

            let randomXStartPosition: number = Math.random() * document.getElementById("canvas").clientWidth;
            let randomYStartPosition: number = Math.random() * document.getElementById("canvas").clientHeight;
            if (_position)
            this.position = _position.copy();
            else
            this.position = new Vector(randomXStartPosition, randomYStartPosition);

            this.velocity = new Vector(1, _size);
            //this.velocity.random(0, 100);

            this.size = _size;
            /*console.log("ConstructorSnow");
            this.positon = new Vector(0, 0);
            this.positon.random(0, 1500);
            this.velocity = new Vector(0, 0);
            this.velocity.random(20, 200);
            this.size = _size;*/
            }

        move(_timeslice: number): void {
                super.move(0.1);
        }
        
        


        draw(): void {
            ctx.beginPath();
            ctx.save();
            ctx.translate(this.position.x, this.position.y);
            ctx.arc(0, 0, this.size, 0, 2 * Math.PI);
            ctx.fillStyle = " white";
            ctx.closePath();
            ctx.fill();
            ctx.restore();

        }
    }

}
