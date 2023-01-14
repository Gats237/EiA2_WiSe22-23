namespace L10_Vogelhaus_Polymorphie{

      export class Birds extends Moveable {

       
        type: number;
        size: number;
        style:any;
      
        constructor(_position: Vector) {
           
            super(_position);
            this.position= new Vector(0,0);
            this.position.random(0,100)
            this.velocity = new Vector(1, 200);
            this.velocity.random(20, 1000);
            this.style="hsl(" + Math.random() * 180 + ", 50%, 25%)"
        }
        


        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0) 
                this.position.x += ctx.canvas.width;
             if (this.position.y< 0)
             this.position.y += ctx.canvas.height;
            if (this.position.x > ctx.canvas.width) 
            this.position.x -= ctx.canvas.width;
            if (this.position.y > ctx.canvas.height) 
            this.position.y -= ctx.canvas.height;
            }

            drawbirds(){  
                
                
                
                ctx.save();
                ctx.translate(this.position.y, this.position.x);
                ctx.beginPath();
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
                ctx.fillStyle = this.style;
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
        }