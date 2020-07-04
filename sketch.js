var mr , fr;



function setup() {


  createCanvas(1200,800);
  
  fr= createSprite(400, 100, 50, 80);
  fr.shapeColor="green";
  fr.debug=true;
  fr.velocityY=5;

  mr=createSprite(400,800,80,30);
  mr.shapeColor="green";
  mr.debug=true;
  mr.velocityY=-5;
}

function draw() {
  background(0,0,0); 
 // mr.x=World.mouseX;
  //mr.y=World.mouseY;
  
if (mr.x - fr.x < mr.width/2 + fr.width/2 
  && fr.x - mr.x < mr.width/2 + fr.width/2){


mr.velocityX=mr.velocityX*(-1);
fr.velocityX=fr.velocityX*(-1);


  } 
   if( mr.y - fr.y < mr.height/2 + fr.height/2
   && fr.y - mr.y < mr.height/2 + fr.height/2){

  mr.velocityY= mr.velocityY*(-1);
  fr.velocityY=fr.velocityY*(-1);


}






  drawSprites();
}