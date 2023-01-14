
namespace L10_Vogelhaus_Polymorphie {
    

    export class Snowflake extends Moveable {

        declare positon: Vector;
        declare velocity: Vector;
        type: number;
        size: number;
        style: any;
       


        position: Vector = new Vector(Math.round(Math.random() * innerWidth), Math.round(Math.random() * innerHeight));
        r1: number = Math.round((Math.random() * 4) + 1);
        r2: number = Math.round((Math.random() * 6) + 4);
        gradient: CanvasGradient = ctx.createRadialGradient(0, 0, this.r1, 0, 0, this.r2);
        velocityRandom: number = (Math.random() * 3) + 1;
       

        constructor(_size: number, _position?: Vector) {
            super(_position);
        if (_position)
            this.position = _position.copy();
        else
            this.position = new Vector(0, 0);
            
        this.velocity = new Vector(0, 0);
        this.velocity.random(50, 150);
        this.size = _size;
            this.gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            this.gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            this.draw();
        }

        
        


        draw(): void {
            let moveminusx: number=this.velocity.y*(-1)
            ctx.beginPath();
            ctx.save();
            ctx.translate(moveminusx, this.positon.y);
            ctx.arc(0, 0, this.size, 2, 4 * Math.PI);
            ctx.fillStyle = " white";
            ctx.closePath();
            ctx.fill();
            ctx.restore();

        }
    }

}