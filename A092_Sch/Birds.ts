namespace L09_VogelhausClases{

    export class Bird {

        positon: Vector;
        velocity: Vector;
        type: number;
        size: number;
      
        constructor() {
           
            this.positon= new Vector(0,0);
            this.positon.random(0,100)
            this.velocity = new Vector(0, 0);
            this.velocity.random(20, -10);
        }
        


        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.positon.add(offset);

            if (this.positon.x < 0) 
                this.positon.x += ctx.canvas.width;
             if (this.positon.y< 0)
             this.positon.y += ctx.canvas.height;
            if (this.positon.x > ctx.canvas.width) 
            this.positon.x -= ctx.canvas.width;
            if (this.positon.y > ctx.canvas.height) 
            this.positon.y -= ctx.canvas.height;
            }

            drawbirds(){  
               
                
                ctx.beginPath();
                ctx.save();
                ctx.lineTo(0,0);
                ctx.strokeStyle="black";
                ctx.stroke();
                            // ctx.moveTo(0,0)
                            // ctx.lineTo(70,-70);
                            // ctx.lineTo(-80,-80);
                            // ctx.lineTo(0,-90);
                            // ctx.lineTo(-80,-120);
                            // ctx.lineTo(60,-130);
                            // ctx.lineTo(90,-120);
                            // ctx.lineTo(100,-140);
                            // ctx.lineTo(110,-160);
                            // ctx.lineTo(130,-170);
                            // ctx.lineTo(180,-150);
                            // ctx.lineTo(150,-140);
                            // ctx.lineTo(155,-80);
                            // ctx.lineTo(150,-70);
                            // ctx.lineTo(130,-50);
                            // ctx.closePath;
                            // ctx.fillStyle =  "hsl(" + Math.random() * this.size + ", 50%, 25%)";
                            // ctx.fill();
                            // ctx.beginPath();
                            // ctx.save();
                            // ctx.lineTo(110,-160);
                            // ctx.lineTo(130,-170);
                            // ctx.lineTo(180,-150);
                            // ctx.closePath;
                            // ctx.fillStyle = "white";
                            //  ctx.fill();
                            ctx.restore();                          
                   }
                
            }
        }