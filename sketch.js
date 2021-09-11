var startPage
var startButton;
var rulesButton;
var pinkThemeButton;
var pinkBoard;
var backButton;
var solarThemeButton;
var ChooseTheme = 0;

function preload(){
  startPageImg = loadImage("Page1/startImg.jpg")
  rulesPageImg = loadImage("Page1/rules.png")
  chooseTheme = loadImage("Page2/choosetheme.png")
  pinkThemeBG = loadImage("pink theme/pinkbg.png")
  pinkBoardImg = loadImage("pink theme/pinkboard.png")
  dmThemeBG = loadImage("demon slayer/dm.png")
  DemonSlayerBoardImg = loadImage("demon slayer/dmboard.png")
  solarBoardImg = loadImage("space theme/bg.png")
  solarBoardImage = loadImage("space theme/board.png")
  backButtonImg = loadImage("Page1/back.png")
  pinkBall1 = loadImage("pink theme/circle1.png")
  dmBall1 = loadImage("demon slayer/ball1.png")
  solarBall1 = loadImage("space theme/ball1.png")
}

function setup() {
  createCanvas(1200,700);
  
  //For creating the Start button in the first page
  startButton=createImg("Page1/startButton.png")
  startButton.position(400,400)
  startButton.size(350,200);

  //For creating the Rules button in the first page
  rulesButton=createImg("Page1/rulesButton.png")
  rulesButton.position(620,410)
  rulesButton.size(340,180);

 
  //For creating the pink theme button
  pinkThemeButton = createButton("pink theme")
  pinkThemeButton.position(200,300);
  pinkThemeButton.size(200,100)
  pinkThemeButton.hide();

  //For creating the back button in the first page
  backButton=createImg("Page1/back.png")
  backButton.position(5,520)
  backButton.size(350,250);
  backButton.hide();

  //To create the demon slayer button in the demon slayer theme
  dmThemeButton = createButton("demon slayer theme")
  dmThemeButton.position(450,300);
  dmThemeButton.size(200,100)
  dmThemeButton.hide();
  
  //For creating the solar theme button
  solarThemeButton = createButton("space theme")
  solarThemeButton.position(700,300);
  solarThemeButton.size(200,100)
  solarThemeButton.hide();

  //For creating the pinkBoard in the pink theme
  pinkBoard = createSprite(600,400,50,50);
  pinkBoard.addImage(pinkBoardImg)
  pinkBoard.scale=0.7;
  pinkBoard.visible = false;

  //For creating the demonSlayerBoard in the demon slayer theme
  dmBoard = createSprite(600,400,50,50);
  dmBoard.addImage(DemonSlayerBoardImg);
  dmBoard.scale=0.7;
  dmBoard.visible = false;

  //For creating the soalrBoard in the solar theme
  solarBoard = createSprite(600,390,50,50);
  solarBoard.addImage(solarBoardImage);
  solarBoard.scale=0.9;
  solarBoard.visible = false;


}

function draw() {
 background(startPageImg); 

  //FUnctions to happen after start button is pressed
  startButton.mousePressed(function () {
  startButton.hide();
  rulesButton.hide();
  ChooseTheme = 1;
  });
  
  //To change to rules page if rules button is pressed
  rulesButton.mousePressed(function () {
  startButton.hide();
  rulesButton.hide();
  ChooseTheme=2;
  });
    
  //To com back to starting page if back is pressed
  backButton.mousePressed(function () {
  ChooseTheme = 5
  });
 

 if(ChooseTheme === 1){
   background(chooseTheme)
    pinkThemeButton.show();
    dmThemeButton.show();
    solarThemeButton.show();
    backButton.show();

  }else if(ChooseTheme ===2){
    background(rulesPageImg);
    backButton.show();
  }

  if(ChooseTheme===5){
    background(startPageImg);
    startButton.show();
    rulesButton.show();
    backButton.hide();
    pinkThemeButton.hide();
    dmThemeButton.hide();
    solarThemeButton.hide();
  }

  pinkThemeButton.mousePressed(function () {
  pinkThemeButton.hide();
  dmThemeButton.hide();
  solarThemeButton.hide();
  ChooseTheme=3;

  });

  dmThemeButton.mousePressed(function () {
  dmThemeButton.hide();
  pinkThemeButton.hide();
  solarThemeButton.hide();
  ChooseTheme=4;

  });

  solarThemeButton.mousePressed(function () {
  pinkThemeButton.hide();
  dmThemeButton.hide();
  solarThemeButton.hide();
  ChooseTheme=6;
  
    });

  if(ChooseTheme===3){
    background(pinkThemeBG)
    drawSprites();
    pinkBoard.visible=true;
    dmBoard.visible=false;
    solarBoard.visible = false;
    verticalrow(325, 3);
    verticalrow(410, 3);
    verticalrow(510, 3);
    verticalrow(595, 3);
    verticalrow(695, 3);
    verticalrow(795, 3);
    verticalrow(890, 3);
  }

  if(ChooseTheme===4){
    background(dmThemeBG)
    drawSprites();
    dmBoard.visible=true;
    pinkBoard.visible = false;
    solarBoard.visible = false;
    verticalrow(325, 4);
    verticalrow(410, 4);
    verticalrow(505, 4);
    verticalrow(590, 4);
    verticalrow(690, 4);
    verticalrow(790, 4);
    verticalrow(880, 4);

  }

  if(ChooseTheme===6){
    background(solarBoardImg)
    drawSprites();
    solarBoard.visible = true;
    pinkBoard.visible=false;
    dmBoard.visible=false;
    verticalrow(325, 6);
    verticalrow(410, 6);
    verticalrow(510, 6);
    verticalrow(590, 6);
    verticalrow(690, 6);
    verticalrow(790, 6);
    verticalrow(880, 6);
  }

  

    

}

function verticalrow(x, c){
  var i
  for(i=1; i<=5; i++ ){
    pinkButton1 = createSprite(x, i*90+130, 50, 50)

    if(c === 3){
    pinkButton1.addImage(pinkBall1)
    pinkButton1.scale=0.06;
    }else if(c===4){
     pinkButton1.addImage(dmBall1)
     pinkButton1.scale=0.1;
    }else if(c === 6){
      pinkButton1.addImage(solarBall1)
      pinkButton1.scale=0.2;
    }
    
  }

}


