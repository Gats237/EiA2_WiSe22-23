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
    ctx.imageSmoothingEnabled= true;
    ctx.imageSmoothingQuality="high";
    let d1: number= Math.random() * 1600;
    let d2: number= Math.random() * 1600;
    let d3: number= Math.random() * 1600;
    let d4: number= Math.random() * 1600;
    let gradient1 = ctx.createLinearGradient(d1,d2,d3,d4);
    let e1: number= Math.random() * 0.1;
    let e2: number= Math.random() * 0.5;
    let e3: number= Math.random() * 1;

    gradient1.addColorStop(e1, "black");
    gradient1.addColorStop(e2 ,"green");
    gradient1.addColorStop(e3, "grey");
    ctx.beginPath();
    ctx.fillStyle="gradient1"
    let f1: number= Math.random() * 1600;
    let f2: number= Math.random() * 1600;
    let f3: number= Math.random() * 1600;
    let f4: number= Math.random() * 1600;
    ctx.fillRect(f1,f2,f3,f4);
    ctx.stroke();
    Circles();
    triangle();
    lines();
    
   }

   function Circles(){
        
      let circle: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");
      let gradient = circle.createLinearGradient(0,200,750,1100);
      circle.imageSmoothingEnabled= true;
      circle.imageSmoothingQuality="high";
      gradient.addColorStop("0", "black");
      gradient.addColorStop("0.5" ,"green");
      gradient.addColorStop("1.0", "white");

      // Fill with gradient
      circle.strokeStyle = gradient;
      circle.lineWidth = 2;

      for (let i: number = 0; i < 15 i++) {

         let size: number = Math.random()*1500;


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
      lines.imageSmoothingEnabled= true;
      lines.imageSmoothingQuality="high";
      

      for (let i: number = 0; i < 6; i++) {
         let a: number= Math.random() * 1600;
         let b: number= Math.random() * 1100;
         let c: number= Math.random() * 1600;
         let d: number= Math.random() * 800;
         let e: number= Math.random() * 900;
         let f: number= Math.random() * 800;

         lines.beginPath();
         lines.moveTo(1600,1600);
         lines.lineTo(a,b);
         lines.lineTo(e,f);
         lines.lineTo(c,d);
         lines.lineTo(e,f);
         lines.lineTo(0, 0)
         lines.shadowBlur=40;
         lines.shadowColor="black";
         lines.strokeStyle="black";
         lines.stroke();};
   }

   function triangle() {
      console.log("SCFREIBURG")
      let triangle: CanvasRenderingContext2D= <CanvasRenderingContext2D> canvas.getContext("2d");
      triangle.imageSmoothingEnabled= true;
      triangle.imageSmoothingQuality="high";
      let gradient2 = triangle.createLinearGradient(0,600,1200,1600);
      gradient2.addColorStop("0", "white");
      gradient2.addColorStop("0.5" ,"green");
      gradient2.addColorStop("1.0", "black");
      for (let i: number = 0; i < 3; i++) {
        
         let start: number=Math.random() * 800;
         let spunkt: number=Math.random() * 800;
         let startB: number=Math.random() * 800;
         let spunktB: number=Math.random() * 1000;
         let startC: number=Math.random() * 1000;
         let spunktC: number=Math.random() * 1000;

         triangle.beginPath();
         triangle.lineCap="square";
         triangle.moveTo(start,spunkt);
         triangle.lineTo(startB,spunktB);
         triangle.lineTo(startC,spunktC);
         triangle.fill();
         triangle.fillStyle= "gradiant1";
         triangle.strokeStyle="gradiant2";
         triangle.stroke();
      }

   }




}