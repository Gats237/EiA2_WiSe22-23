"use strict";
// namespace L09_VogelhausClases{
//     export class Bird {
//         positon: Vector;
//         velocity: Vector;
//         type: number;
//         size: number;
//         style:any;
//         constructor() {
//             this.positon= new Vector(0,0);
//             this.positon.random(0,100)
//             this.velocity = new Vector(1, 200);
//             this.velocity.random(20, 1000);
//             this.style="hsl(" + Math.random() * 180 + ", 50%, 25%)"
//         }
//         move(_timeslice: number): void {
//             let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
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
//             drawbirds(){  
//                 ctx.save();
//                 ctx.translate(this.positon.y, this.positon.x);
//                 ctx.beginPath();
//                 ctx.moveTo(0, 0)
//                 ctx.lineTo(35, -35);
//                 ctx.lineTo(-40, -40);
//                 ctx.lineTo(0, -45);
//                 ctx.lineTo(-40, -60);
//                 ctx.lineTo(30, -65);
//                 ctx.lineTo(45, -60);
//                 ctx.lineTo(50, -70);
//                 ctx.lineTo(55, -80);
//                 ctx.lineTo(65, -85);
//                 ctx.lineTo(90, -75);
//                 ctx.lineTo(75, -70);
//                 ctx.lineTo(75.25, -40);
//                 ctx.lineTo(75, -35);
//                 ctx.lineTo(65, -25);
//                 ctx.closePath();
//                 ctx.fillStyle = this.style;
//                 ctx.fill();
//                 ctx.stroke();
//                 ctx.beginPath();
//                 ctx.lineTo(55, -80);
//                 ctx.lineTo(65, -85);
//                 ctx.lineTo(90, -75);
//                 ctx.fillStyle = "white";
//                 ctx.closePath();
//                 ctx.fill();
//                 ctx.stroke();
//                 ctx.restore();                          
//                    }
//             }
//         }
//# sourceMappingURL=Birds.js.map