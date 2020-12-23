class Form {
 constructor(){
    this.logoImage = "https://raw.githubusercontent.com/IronMan-1000/ALIEN-GAME-IMAGES/main/LOGO.png";
    this.logo = createImg(this.logoImage);
    this.logo.position(1000, 1000);

    this.input = createInput("").attribute("placeholder", "Name");
    this.button = createButton('PLAY');
    this.reset = createButton('RESET');
    this.greeting = createElement('h2');

    this.freeplayButton = createButton("FREE PLAY MODE");
    this.instructionButton = createButton("INSTRUCTIONS");
    
    }
      hideElements() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.freeplayButton.hide();
      }
    
      setElementPosition() {
        this.logo.position(width / 18, -210);
        this.input.position(width / 2.3, height / 2 - 100);
        this.button.position(width / 2.3, height / 2);
        this.freeplayButton.position(width / 2.3, height / 1.6);
        this.instructionButton.position(width / 1.15, height/ 1.25, 10, 10);
        this.reset.position(displayWidth-100,20);
        
      }
    
      setElementStyle() {
        this.input.class("customInput");
        this.button.class("customButton");
        this.freeplayButton.class("customButton");
        this.instructionButton.class("customButton");
        //this.reset.class("customButton");

      }
      handleOnpress() {
        this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
          this.freeplayButton.hide();
          player.name = this.input.value();
          playerCount+=1;
          player.index = playerCount;
          player.update();
          player.updateCount(playerCount);
          this.greeting.html("Hello " + player.name)
          this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        });
        this.instructionButton.mousePressed(() => {
          swal({
            title: "INSTRUCTIONS",
            text: "YOU HAVE ONLY 3 LIFELINES. YOU CAN USE THE LEFT AND RIGHT ARROW KEYS TO MOVE THE ALEIN. USE THE SPACEBAR TO JUMP. YOU HAVE ONLY ONE POWERS THAT YOU CAN FLY ONLY FOR 30 SECONDS. ALL THE BEST!!",           
            confirmButtonText: "Ok"
          });
        });
        this.reset.mousePressed(()=>{
          player.updateCount(0);
          game.update(0);
        });
      }

      
    display(){
        this.setElementStyle();
        this.setElementPosition();
        this.handleOnpress();   
    }
} 
 
//document.getElementById("images/sound on.png").style.height = "300px";
//document.getElementById("images/sound off.png").style.width = "300px";
