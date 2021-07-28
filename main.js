
 function setup()
  { 
      canvas = createCanvas(600, 500);
     canvas.center(); 
     video = createCapture(VIDEO);
      video.hide();
 
     }
      
         function modelLoaded(){
             console.log('poseNet is Initialized');
         }
         function preload(){

         }
        