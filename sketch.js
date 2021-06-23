var path,runner,pathImg,runnerImg
var boundry1, boundry2
function preload(){
  //pre-load images
pathImg=loadImage("path.png")
runnerImg=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
path=createSprite(200,200,20,400)
path.addImage(pathImg)
path.velocityY = 4
path.scale=1.2

runner=createSprite(200,200,20,20)
runner.addAnimation("r1",runnerImg)
runner.scale=0.1

boundry1=createSprite(10,200,10,400)

boundry2=createSprite(390,200,10,400)
}

function draw() {
  background(0);
  if(path.y>400){
    path.y=height/2
  }

  if (keyDown("left")){
    runner.x=runner.x-10
  }

  if (keyDown("right")){
    runner.x=runner.x+10
  }
  runner.collide(boundry1)
  runner.collide(boundry2)
drawSprites()
}
