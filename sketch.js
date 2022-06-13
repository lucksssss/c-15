var play
var end
var bow , arrow,  background;
var redB
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var gameState = play
var score = 0
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //criar um plano de fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criar um arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  reB = new Group();
  arrowGroup = new Group();

}

function draw() {
 background(0);
  // mover o chão
  if (gameState === play) {
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }


  //mover o arco
  bow.y = World.mouseY
  
   // soltar a flecha quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //mude o valor do balão aleatório para 4
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
   switch(select_balloon){
    case 1: redBalloon()
    break;
    case 2: blueBalloon()
    break;
    case 3: greenBalloon()
    break;
    case 4: pinkBalloon()
break;

  }}
  
  if (arrowGroup.isTouching(redB)) {
    red.destroyEach()

    gameState = end
  }
  }
  if (gameState === end) {
    bow.destroy();
    scene.velocityX = 0;

  }
  drawSprites();
}


// criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

}

function blueBalloon() {
  var azul = createSprite(0,Math.round(random(20, 370)), 10, 10);
  azul.addImage(red_balloonImage);
  azul.velocityX = 3;
  azul.lifetime = 150;
  azul.scale = 0.1;
}
function greenBalloon() {
  var verde = createSprite(0,Math.round(random(20, 370)), 10, 10);
  verde.addImage(red_balloonImage);
  verde.velocityX = 3;
  verde.lifetime = 150;
  verde.scale = 0.1;
}
function pinkBalloon() {
  var rosa = createSprite(0,Math.round(random(20, 370)), 10, 10);
  rosa.addImage(red_balloonImage);
  rosa.velocityX = 3;
  rosa.lifetime = 150;
  rosa.scale = 0.1;
}