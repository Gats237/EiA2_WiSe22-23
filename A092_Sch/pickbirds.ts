namespace L09_VogelhausClases{

    export class Birdpick {
  

        positon: Vector;
        velocity: Vector;
        type: number;
        size: number;
        style:any;
      
        constructor() {
          
            this.positon= new Vector(0,0);
            this.positon.random(222,44)
            this.velocity = new Vector(0, 0);
            this.velocity.random(20, 10000);
            this.style="hsl(" + Math.random() * 180 + ", 50%, 25%)"
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
                
            //     console.log("s");
            // for (var i=0; i<5; i++) {
            //     timers.push(setTimeout( i*3000));
                  
                ctx.save();
                ctx.beginPath();
                ctx.translate(_postion.x, _postion.y);
                ctx.moveTo(0,0)
                ctx.lineTo(70,-60);
                ctx.lineTo(-80,-80);
                ctx.lineTo(30,-100);
                ctx.lineTo(-80,-130);
                ctx.lineTo(60,-130);
                ctx.lineTo(90,-110);
                ctx.lineTo(110,-90);
                ctx.lineTo(110,-100);
                ctx.lineTo(120,-120);
                ctx.lineTo(135,-130);
                ctx.lineTo(140,-135);
                ctx.lineTo(170,-130);
                ctx.lineTo(180,-110);
                ctx.lineTo(120,-40);
                ctx.fillStyle =  "hsl(" + Math.random() * 180 + ", 50%, 25%)";
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();
                ctx.lineTo(150,-90);
                ctx.lineTo(150,-10);
                ctx.lineTo(180,-110);
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.stroke();
                ctx.fill();
                ctx.stroke();
                ctx.restore();
            }
             
            // abbrechen:
            while (timers.length > 0) {
                clearTimeout(timers.pop());
                ctx.save();
                ctx.beginPath();
                ctx.translate(_postion.x, _postion.y);
                ctx.moveTo(0,0)
                ctx.lineTo(70,-60);
                ctx.lineTo(-80,-80);
                ctx.lineTo(30,-100);
                ctx.lineTo(-80,-130);
                ctx.lineTo(60,-130);
                ctx.lineTo(90,-110);
                ctx.lineTo(110,-90);
                ctx.lineTo(110,-100);
                ctx.lineTo(120,-120);
                ctx.lineTo(135,-130);
                ctx.lineTo(140,-135);
                ctx.lineTo(170,-130);
                ctx.lineTo(180,-110);
                ctx.lineTo(120,-40);
                ctx.fillStyle =  "hsl(" + Math.random() * 180 + ", 50%, 25%)";
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();
                ctx.lineTo(150,-90);
                ctx.lineTo(240,-40);
                ctx.lineTo(180,-110);
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.stroke();
                ctx.fill();
                ctx.stroke();
                ctx.restore();
            }
                
        }
    
    }
}
               