class Game {
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }
//no update of gamestate
update(state){
  database.ref('/').update({
    gameState: state
  });
}
  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    //alein1 = createSprite(width+200, 10);
   // alein1.addImage("alein1", alein1Img);
    //alein1.scale = 0.1;

    //alein2 = createSprite(width-300, 200);
    //alein2.addImage("alein2", alein2Img);
    //alein2.scale = 0.5;

    //aleins = [alein1, alein2];
  }

  play() {
  //form.hide();
    //Player.getPlayerInfo();
    //player.getAleinAtEnd();
    if (allPlayers !== undefined) {
      //background(gameback);
      //image(gameback, 0, -height * 4, width, height * 5);

      //var display_position = 100;

      //index of the array
      
    } 
    //if(keyIsDown(LEFT_ARROW) && player.index !== null){
     // player.distance +=10
      //player.update();
    //}
    //if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      //player.distance -=10
      //player.update();
   // }
    //platform1 = createSprite(50, 400, 50, 200);
   // platform1.shapeColor = color(250,237,141);
    //drawSprites();
  }
}