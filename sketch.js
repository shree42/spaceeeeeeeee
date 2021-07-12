var iss,bg,spacecraft;
var issImg,bgImg,spacecraft1,spacecraft2,spacecraft3;
var spacecraft4;

var hasDocked=false;
function preload(){

  issImg=loadAnimation("iss.png")
  bgImg=loadImage("spacebg.jpg")
  spacecraft1=loadAnimation("spacecraft1.png")
  spacecraft2=loadAnimation("spacecraft2.png");
  spacecraft3=loadAnimation("spacecraft3.png");
  spacecraft4=loadAnimation("spacecraft4.png");
}

function setup() {
  createCanvas(1500,800);

 spacecraft=createSprite(450,500);
 spacecraft.addAnimation("space",spacecraft1)
 spacecraft.addAnimation("space2",spacecraft2)
 spacecraft.addAnimation("space3",spacecraft3)
 spacecraft.addAnimation("space4",spacecraft4)
 spacecraft.scale=0.4
 

 iss=createSprite(500,200);
 iss.addAnimation("iss",issImg);
 iss.scale=0.8;


}

function draw() {
  background(bgImg);  

  if(!hasDocked){
    spacecraft.x=Math.round(random(450, 460))

    if(keyDown(LEFT_ARROW)){
      spacecraft.x=Math.round(random(490-10, 500-10))
      spacecraft.changeAnimation("space3", spacecraft3);
      console.log("pressed left")
     }
     if(keyDown(RIGHT_ARROW)){
     
      spacecraft.x=Math.round(random(490-10, 500-10))
       spacecraft.changeAnimation("space4", spacecraft4);
       console.log("pressed right")
     
      }
      if(keyDown(UP_ARROW)){
        // spacecraft.x=500;
       // spacecraft.x=Math.round(random(490-10, 500-10))
         spacecraft.y=spacecraft.y-10
         spacecraft.changeAnimation("space2", spacecraft2);

         console.log("pressed up")
     }
        }
        if(keyDown(DOWN_ARROW)){
          // spacecraft.x=500;
         //spacecraft.x=Math.round(random(490-10, 500-10))
           spacecraft.y=spacecraft.y+10
         console.log("pressed down")
         spacecraft.changeAnimation("space2", spacecraft2);
          }

          if( spacecraft.y<=370){
              hasDocked=true;
              textSize(42);
              fill("cyan");

              stroke("white");
              strokeWeight(3);
  
              text("DOCKING COMPLETE",550,400)
          }

          console.log(spacecraft.y)
  
  drawSprites();}
