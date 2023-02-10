
// namespace L09_VogelhausClases {
    

//     //export class Snowflake {

//         positon: Vector;
//         velocity: Vector;
//         type: number;
//         size: number;
      
//         constructor(_size: number) {
//             console.log("ConstructorSnow")
//             this.positon= new Vector(0,0);
//             this.positon.random(10000,25000)
//             this.velocity = new Vector(0, 0);
//             this.velocity.random(2000, 2000);
//             this.size = _size;

//             }
        


//         move(_timeslice: number): void {
//             let moveminus: number=this.velocity.y*(-1)
           
//             let offset: Vector = new Vector(this.velocity.x, moveminus);
//             offset.scale(_timeslice);
//             this.positon.add(offset);

//             if (this.positon.x < 0) 
//                 this.positon.x += ctx.canvas.width;
//              if (this.positon.y< 0)
//              this.positon.y += ctx.canvas.height;
//             if (this.positon.x > ctx.canvas.width) 
//             this.positon.x -= ctx.canvas.width;
//             if (this.positon.y > ctx.canvas.height) 
//             this.positon.y -= ctx.canvas.height;
//             }

        


//         draw(): void {
//             let moveminusx: number=this.velocity.y*(-1)
//             ctx.beginPath();
//             ctx.save();
//             ctx.translate(moveminusx, this.positon.y);
//             ctx.arc(0, 0, this.size, 2, 4 * Math.PI);
//             ctx.fillStyle = " white";
//             ctx.closePath();
//             ctx.fill();
//             ctx.restore();
           
           


//         }
//     }

// }