namespace L09_VogelhausClases {
    console.log("Snow");

    export class birds {

        positon: Vector;
        velocity: Vector;
        type: number;
        size: number;
      
        constructor(_size: number) {
            console.log("ConstructorSnow")
            this.positon= new Vector(0,0);
            this.positon.random(0,100)
            this.velocity = new Vector(0, 0);
            this.velocity.random(20, -10);
            this.size = _size;
            this.drawbird();}
        


        move(_timeslice: number): void {
            console.log("1221");
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

            drawbird(){
                            
                            ctx.translate(this.positon.x, this.positon.y);
                            ctx.beginPath();
                            ctx.moveTo(0,0)
                            ctx.lineTo(70,-70);
                            ctx.lineTo(-80,-80);
                            ctx.lineTo(0,-90);
                            ctx.lineTo(-80,-120);
                            ctx.lineTo(60,-130);
                            ctx.lineTo(90,-120);
                            ctx.lineTo(100,-140);
                            ctx.lineTo(110,-160);
                            ctx.lineTo(130,-170);
                            ctx.lineTo(180,-150);
                            ctx.lineTo(150,-140);
                            ctx.lineTo(155,-80);
                            ctx.lineTo(150,-70);
                            ctx.lineTo(130,-50);
                            ctx.fillStyle =  "hsl(" + Math.random() * 180 + ", 50%, 25%)";
                            ctx.fill();
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.lineTo(110,-160);
                            ctx.lineTo(130,-170);
                            ctx.lineTo(180,-150);
                            ctx.fillStyle = "white";
                            ctx.fill();
                            ctx.stroke();
                            ctx.fill();
                            ctx.stroke();
                          
                   }
                
            }
        }