/*
Aufgabe: Aufgabe 8 Canvas
Name: Henning Pils
Matrikel: 269355
Datum: 27.10.2022
Quellen: W3 Schhols, Youtube 
*/

namespace A08_Canvas {
  
    //Eventlistener
    window.addEventListener("load", handleLoad);
    window.addEventListener("mousedown", reload)
  
   //refresh Code
   function reload(_event: Event){ handleLoad();}


   function handleLoad(_event: Event): void {

   //console.log("Hallo");
    let canvas: HTMLCanvasElement = document.querySelector("canvas");
    let ctx: CanvasRenderingContext2D =canvas.getContext("2d");
    canvas.height= window.innerHeight;
    canvas.width= window.innerWidth;
    let gradient1 = ctx.createLinearGradient(0,700,900,1600);
    gradient1.addColorStop("0", "white");
    gradient1.addColorStop("0.5" ,"grey");
    gradient1.addColorStop("1.0", "green");
    ctx.beginPath();
    ctx.fillStyle="gradient1"
    ctx.fillRect(0,0,1600,1600);
    ctx.stroke();
    Circles();
    triangle();
    lines();
    
   }

   function Circles(){
        
      let circle: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");
      let gradient = circle.createLinearGradient(0,200,900,1200);
      gradient.addColorStop("0", "black");
      gradient.addColorStop("0.5" ,"green");
      gradient.addColorStop("1.0", "black");

      // Fill with gradient
      circle.strokeStyle = gradient;
      circle.lineWidth = 1;

      for (let i: number = 0; i < 15; i++) {

         let size: number = Math.random()*100;


             let x: number = Math.random() * circle.canvas.width;
             let y: number = Math.random() * circle.canvas.height;
             let z: number= Math.random() * 2;
             let p: number= Math.random() * 4;
            
             circle.beginPath();
             circle.arc(x, y, size, p, z * Math.PI);
             circle.shadowBlur = 50;
             circle.shadowOffsetX =80;
             circle.shadowColor="black"
             circle.fillStyle= gradient;
             circle.fill();
             circle.closePath();
             circle.stroke();


      }
   }

   function lines(){
      let lines: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

      for (let i: number = 0; i < 10; i++) {
         let a: number= Math.random() * 1600;
         let b: number= Math.random() * 1100;
         let c: number= Math.random() * 1600;
         let d: number= Math.random() * 800;
         let e: number= Math.random() * 900;
         let f: number= Math.random() * 800;

         lines.beginPath();
         lines
         
         lines.moveTo(1600,1600);
         lines.lineTo(a,b);
         lines.lineTo(e,f);
         lines.lineTo(c,d);
         lines.lineTo(e,f);
         lines.lineTo(0, 0)
         lines.shadowBlur=40;
         lines.shadowColor="black";
         lines.stroke();}
   }

   function triangle() {
      console.log("Hallop")
      let triangle: CanvasRenderingContext2D= <CanvasRenderingContext2D> canvas.getContext("2d");
      for (let i: number = 0; i < 12; i++) {
        
         let start: number=Math.random() * 1600;
         let spunkt: number=Math.random() * 1600;
         let startB: number=Math.random() * 1600;
         let spunktB: number=Math.random() * 1600;
         let startC: number=Math.random() * 1600;
         let spunktC: number=Math.random() * 1600;

         triangle.beginPath();
         triangle.lineCap="square";
         triangle.moveTo(start,spunkt);
         triangle.lineTo(startB,spunktB);
         triangle.lineTo(startC,spunktC);
         triangle.fill();
         triangle.fillStyle= "black";
         triangle.stroke();
      }

   }




}