
var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music = loadSound ("music.mp3")
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "yellow";

    
    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(720,580,200,30);
    block4.shapeColor = "green";

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityY = 5
    ball.velocityX = 5

    //write code to add velocityX and velocityY
  //  ball.velocityY = 0
    //ball.velocityX = 0
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) ){
        ball.shapeColor = "blue";
        music.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "yellow";
      
        //write code to stop music
     
    }

    if(block3.isTouching(ball) ){
      ball.shapeColor = "red";
      music.play();
  }

  if(block4.isTouching(ball) ){
    ball.shapeColor = "green";
    music.play();
}
    //write code to bounce off ball from the block3
    if(ball.y -block1.y < ball.height/2 + block1.height/2 && block1.y -ball.y < ball.height/2 + block1.height/2 ){
        ball.velocityY = ball.velocityY*(1)
        block1.velocityY = block1.velocityY*(-1)
      }
      if(ball.x -block1.x < ball.width/2+block1.width/2  && block1.x -ball.x <ball.width/2+block1.width/2){
        ball.velocityX = ball.velocityX*(1)
         block1.velocityX = block1.velocityX*(1)
       
       }

    //write code to bounce off ball from the block4
    if(ball.y -block2.y < ball.height/2 + block2.height/2 && block2.y -ball.y < ball.height/2 + block2.height/2 ){
        ball.velocityY = ball.velocityY*(-1)
        block2.velocityY = block2.velocityY*(-1)
      }
      if(ball.x -block2.x < ball.width/2+block2.width/2  && block2.x -ball.x <ball.width/2+block2.width/2){
        ball.velocityX = ball.velocityX*(1)
         block2.velocityX = block2.velocityX*(1)
       
       }
     //write code to bounce off ball from the block3
     if(ball.y -block3.y < ball.height/2 + block3.height/2 && block3.y -ball.y < ball.height/2 + block3.height/2 ){
        ball.velocityY = ball.velocityY*(1)
        block3.velocityY = block3.velocityY*(-1)
      }
      if(ball.x -block3.x < ball.width/2+block3.width/2  && block3.x -ball.x <ball.width/2+block3.width/2){
        ball.velocityX = ball.velocityX*(1)
         block3.velocityX = block3.velocityX*(1)
       
       }

    //write code to bounce off ball from the block4
    if(ball.y -block4.y < ball.height/2 + block4.height/2 && block4.y -ball.y < ball.height/2 + block4.height/2 ){
        ball.velocityY = ball.velocityY*(1)
        block4.velocityY = block4.velocityY*(-1)
      }
      if(ball.x -block4.x < ball.width/2+block4.width/2  && block4.x -ball.x <ball.width/2+block4.width/2){
        ball.velocityX = ball.velocityX*(1)
         block4.velocityX = block4.velocityX*(1)
       
       }

    drawSprites();
}

   

