var canvas, backgroundImg;
var bg = "images/day back.jpg";
var database;
var gameState = 0;
var playerCount;
var database;
var form, player, game;
//var alein1, alein2;
//var aleins = [];
//var gameback;
//var fire, hornUp, hornDown, rocket, stones, water;
//var alein1Img, alein2Img, fireImg, hornDownImg, hornUpImg, rocketImg, stonesImg, waterImg;
var allPlayers;
//var platform1;

function preload(){
    getBackgroundImg();
    sound = loadSound("sound.wav"); 
    //alein1Img = loadImage("images/alien/ALIEN1.png");
    //alein2Img = loadImage("images/alien/2.png"); 
    //fireImg = loadImage("images/obstacles/level 2/fire.png");
    //hornUpImg = loadImage("images/obstacles/level 2/horn up.png");
    //hornDownImg = loadImage("images/obstacles/level 2/horn down.png");
    //rocketImg = loadImage("images/obstacles/level 2/rocket.png");
    //stonesImg = loadImage("images/obstacles/level 2/stones.png");
    //waterImg = loadImage("images/obstacles/level 2/Water.png");
    //gameback = loadImage("images/GAME BACK.jpg"); 

}

function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    database = firebase.database();
    sound.loop();
    game = new Game();
    form = new Form();
    player = new Player();
    game.getState();
    game.start();

    
}
function draw(){
    if(backgroundImg)
    background(backgroundImg);

    if(playerCount === 2){
      game.update(1);
    }
    if(gameState === 1){
      clear();
      game.play();
    }

     //drawSprites();
     
}
async function getBackgroundImg(){
    var response = await fetch("http://worldclockapi.com/api/json/est/now");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    
    if(hour>=06 && hour<=19){
        bg = "images/day back.jpg";
    }
    else{
        bg = "images/night back.jpg";
    }

    backgroundImg = loadImage(bg);
    //console.log(backgroundImg);
}


//if(alien.isTouching(firegroup)){
  // text("Start over");
  //gamestate= 1
  //life1.destroy();
  //
  //
//}
//if all lives are over
//if(alien.isTouching(firegroup)){
  // gamestate= 2 //end
  //text("game over");
  //
//}