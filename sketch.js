var score=0
var value = 0;
var emoj=[]
var result,sticker

function preload() {
  ins=loadImage("in.png")  
}

function setup(){
  createCanvas(600,600)
  but = createSprite(300, 290, 200, 80);
  but.shapeColor = "white";

  paddle = createSprite(200, 500,500, 20);
  paddle.shapeColor = "brown";
 paddle.visible=false
 
  ball=createSprite(random(20,580),random(0,50),40,40)
//ball.setAnimation("beachball_1");
//ball.scale = 0.1;
ball.visible=false

  instruct=createSprite(1080,200)
  instruct.addImage(ins)


wall1=createSprite(0,300,20,2000)
wall2=createSprite(300,0,2000,20)
wall3=createSprite(600,0,20,2000)

for (let i = 0; i < 15; i++) {
  emoj.push(new emojiPos());
}
}
function draw() {
  background("black");
  if (mousePressedOver(but)) {
    paddle.visible=true
    but.destroy();
    value = 1;
    ball.visible=true
    ball.velocityX = 4;
ball.velocityY = 5;
    instruct.velocityX=-5
  }
  paddle.x= World.mouseX;

  ball.bounceOff(wall1)
  ball.bounceOff(wall2)
  ball.bounceOff(wall3)
  
  if(ball.bounceOff(paddle)){
    paddle.shapeColor=color(random(20,255), random(20,255), random(20,255));
    ball.shapeColor=color(random(20,255), random(20,255), random(20,255));
    score++
    paddle.width-=35
   /* ball.velocityX=random(-10,10)
    ball.velocityY=random(-10,10)8*/

    if(score==3){
      ball.velocityX=random(-10,10)
    }

    if(score==5){
      ball.velocityX=random(-15,15)
    }

    if(score==10){
      ball.velocityX=random(-18,18)
    }
  }
  if(value==1) {
    fill("white")
    textSize(30)
    textFont('Georgia');
    text('Score: '+score,35,45)}

    if(ball.y>600){
      background("blue")
      wall1.visible=false
      wall2.visible=false
      wall3.visible=false
      paddle.visible=false
      textAlign(CENTER)
      textSize(200)
      text(score, 300,300);
      textSize(30)
      text(result, width / 2,100);

      finalResults(3,7,9,11)
     

      
    }

    for (let i = 0; i < emoj.length; i++) {
      emoj[i].display();
    }
   
  drawSprites();
  fill("red");
  if (value==0) {
    textSize(30);
    text("Start ☄️ Game", 200, 300);
  }
}




function finalResults(a,b,c,d) {
if (score <= a) {
  result = 'Your Score'
  sticker = '💩'
}

if (score > a && score <= b) {
  result = 'Not bad, try again'
  sticker = '😌'
}

if (score > b && score <= c) {
  result = 'Amazing !'
  sticker = '👽'
}

if (score == d) {
  result = 'YOU WIN !!!'
  sticker = '🎉'
}

}


