const GAP_SIZE = 75;

let bird = {
  x: 200,
  y: 200,
  birdWidth: 40,
  birdHeight: 40,
  birdSpeed: 2,
  birdColor: {
    r: 255,
    g: 255,
    b: 153
  },
  birdImage: ""
}

let block = {
  x: 20,
  y: 200,
  blockWidth: 50,
  blockHeight: 200,
  blockSpeed: 1,
  blockColor: {
    r: 0,
    g: 255,
    b: 0
  },
  blockImage: ""
}

let blockTwo = {
  x: 20,
  y: 200,
  blockWidth: 50,
  blockHeight: 200,
  blockSpeed: 1,
  blockColor: {
    r: 0,
    g: 255,
    b: 0
  },
  blockImage: ""
}

let blockThree = {
  x: 150,
  y: 200,
  blockWidth: 50,
  blockHeight: 100,
  blockSpeed: 1,
  blockColor: {
    r: 0,
    g: 255,
    b: 0
  },   blockImage: ""
}


let blockFour = {
  x: 150,
  y: 200,
  blockWidth: 50,
  blockHeight: 100,
  blockSpeed: 1,
  blockColor: {
    r: 0,
    g: 255,
    b: 0
  },   blockImage: ""
}

let blockFive = {
  x: 410,
  y: 200,
  blockWidth: 50,
  blockHeight: 100,
  blockSpeed: 1,
  blockColor: {
    r: 0,
    g: 255,
    b: 0
  },   blockImage: ""
}

let blockSix = {
  x: 410,
  y: 200,
  blockWidth: 50,
  blockHeight: 100,
  blockSpeed: 1,
  blockColor: {
    r: 0,
    g: 255,
    b: 0
  },   blockImage: ""
}

let blockSeven = {
  x: 280,
  y: 200,
  blockWidth: 50,
  blockHeight: 100,
  blockSpeed: 1,
  blockColor: {
    r: 0,
    g: 255,
    b: 0
  },   blockImage: ""
}


let blockEight = {
  x: 280,
  y: 200,
  blockWidth: 50,
  blockHeight: 100,
  blockSpeed: 1,
  blockColor: {
    r: 0,
    g: 255,
    b: 0
  },   blockImage: ""
}
let gameStartButton = {
  x: 150,
  y: 150,
  buttonWidth: 200,
  buttonHeight: 200,
  butttonImage: ""
}

let gameResetButton = {
  x: 150,
  y: 150,
  buttonWidth: 200,
  buttonHeight: 200,
  butttonImage: ""
}

let hitSound;

let bgSound;

let livesRemaining = 5;

let bgImage;

let bgImageX = 0;

let gameState = "START";


//any files only runs wheneverything is preloaded, it's there before the program runs
function preload() {
  block.blockImage = loadImage("assets/images/block.png");
  blockTwo.blockImage = loadImage("assets/images/block.png");
  blockThree.blockImage = loadImage("assets/images/block.png");
  blockFour.blockImage = loadImage("assets/images/block.png");
  blockFive.blockImage = loadImage("assets/images/block.png");
  blockSix.blockImage = loadImage("assets/images/block.png");
  blockSeven.blockImage = loadImage("assets/images/block.png");
  blockEight.blockImage = loadImage("assets/images/block.png");
  bird.birdImage = loadImage("assets/images/bird sample.png");
  gameStartButton.buttonImage = loadImage("assets/images/startbutton.png");
  gameResetButton.buttonImage = loadImage("assets/images/reset.png")
  bgImage = loadImage("assets/images/bgImage.png");
}


// do this for each block
function setup() {
  // put setup code here
  createCanvas(500, 500);
  block.blockImage.resize(block.blockWidth, block.blockHeight);
  blockTwo.blockImage.resize(blockTwo.blockWidth, blockTwo.blockHeight);
  blockThree.blockImage.resize(blockThree.blockWidth, blockThree.blockHeight);
  blockFour.blockImage.resize(blockFour.blockWidth, blockFour.blockHeight);
  blockFive.blockImage.resize(blockFive.blockWidth, blockFive.blockHeight);
  blockSix.blockImage.resize(blockSix.blockWidth, blockSix.blockHeight);
  blockSeven.blockImage.resize(blockSeven.blockWidth, blockSeven.blockHeight);
  blockEight.blockImage.resize(blockEight.blockWidth, blockEight.blockHeight);

  bird.birdImage.resize(bird.birdWidth, bird.birdHeight);
  gameStartButton.buttonImage.resize(gameStartButton.buttonWidth, gameStartButton.buttonHeight);
  gameResetButton.buttonImage.resize(gameResetButton.buttonWidth, gameResetButton.buttonHeight);
  hitSound = loadSound('assets/sounds/hitSound.mp3');
  bgSound = loadSound('assets/sounds/bgSound.mp3');


}

function draw() {






  if (gameState === "START") {
    background(0);

    image(gameStartButton.buttonImage, gameStartButton.x, gameStartButton.y);

  } else if (gameState === "PLAY") {
    background(0);

    image(bgImage, bgImageX, 0);
    bgImageX = bgImageX-1;
    if((-bgImageX)>bgImage.width/2){
      bgImageX =0;
    }
  //  console.log(bgImageX);

    /***display objects**/
    displayBird();
    displayBlock();
    //testJump();
    moveBlock();
    checkBirdCollision();
    checkBirdBoundary();
    //moveBird();
    displayLives();


    /** KEY PRESS **/
    //if key is pressed
    if (keyIsPressed) {
      //console.log(key);
      if (key === "ArrowRight") {
        bird.x = bird.x + bird.birdSpeed;

      }
      // else if(key ==="ArrowLeft"){
      //     bird.x= bird.x-bird.birdSpeed;
      //
      // }
      else if (key === "ArrowUp") {
        bird.y = bird.y - bird.birdSpeed;

      } else if (key === "ArrowDown") {
        bird.y = bird.y + bird.birdSpeed;
        // console.log(bird.y);

      }
    }
  } //play

  else if (gameState === "COLLIDED"){
    background(0);
    image(bgImage, bgImageX, 0);
    displayBird();
    displayBlock();
    displayLives();

    if(hitSound.isPlaying() ===false){
      bird.x =-50;
      gameState = "PLAY";
    }

  }

  else if (gameState ==="GAMEOVER"){
    background(0, 0, 0);
    displayBird();
    displayBlock();
    console.log(hitSound.isPlaying());

    if(hitSound.isPlaying() ===false){
      gameState = "RESET";
      if (bgSound.isPlaying()=== false) {
        bgSound.play()
      }

    }
  }
  else if (gameState === "RESET") {
    background(0, 0, 0);
    image(gameResetButton.buttonImage, gameResetButton.x, gameResetButton.y);

  }
}

function displayLives(){
  let livesText = `Lives Remaining: ${livesRemaining}`;
  textSize(20);
  fill(255);
  text(livesText, 10, 30);
}

function reset(){

  livesRemaining =5;

  //reset the blocks
  bird = {
    x: 200,
    y: 200,
    birdWidth: 40,
    birdHeight: 40,
    birdSpeed: 2,
    birdColor: {
      r: 255,
      g: 255,
      b: 153
    },
    birdImage: ""
  }

  block = {
    x: 20,
    y: 200,
    blockWidth: 50,
    blockHeight: 200,
    blockSpeed: 1,
    blockColor: {
      r: 0,
      g: 255,
      b: 0
    },
    blockImage: ""
  }

  blockTwo = {
    x: 20,
    y: 200,
    blockWidth: 50,
    blockHeight: 200,
    blockSpeed: 1,
    blockColor: {
      r: 0,
      g: 255,
      b: 0
    },
    blockImage: ""
  }

  blockThree = {
    x: 150,
    y: 200,
    blockWidth: 50,
    blockHeight: 100,
    blockSpeed: 1,
    blockColor: {
      r: 0,
      g: 255,
      b: 0
    },   blockImage: ""
  }


  blockFour = {
    x: 150,
    y: 200,
    blockWidth: 50,
    blockHeight: 100,
    blockSpeed: 1,
    blockColor: {
      r: 0,
      g: 255,
      b: 0
    },   blockImage: ""
  }

  blockFive = {
    x: 410,
    y: 200,
    blockWidth: 50,
    blockHeight: 100,
    blockSpeed: 1,
    blockColor: {
      r: 0,
      g: 255,
      b: 0
    },   blockImage: ""
  }

  blockSix = {
    x: 410,
    y: 200,
    blockWidth: 50,
    blockHeight: 100,
    blockSpeed: 1,
    blockColor: {
      r: 0,
      g: 255,
      b: 0
    },   blockImage: ""
  }

  blockSeven = {
    x: 280,
    y: 200,
    blockWidth: 50,
    blockHeight: 100,
    blockSpeed: 1,
    blockColor: {
      r: 0,
      g: 255,
      b: 0
    },   blockImage: ""
  }


  blockEight = {
    x: 280,
    y: 200,
    blockWidth: 50,
    blockHeight: 100,
    blockSpeed: 1,
    blockColor: {
      r: 0,
      g: 255,
      b: 0
    },   blockImage: ""
  }

  block.blockImage = loadImage("assets/images/block.png");
  blockTwo.blockImage = loadImage("assets/images/block.png");
  blockThree.blockImage = loadImage("assets/images/block.png");
  blockFour.blockImage = loadImage("assets/images/block.png");
  blockFive.blockImage = loadImage("assets/images/block.png");
  blockSix.blockImage = loadImage("assets/images/block.png");
  blockSeven.blockImage = loadImage("assets/images/block.png");
  blockEight.blockImage = loadImage("assets/images/block.png");
  bird.birdImage = loadImage("assets/images/bird sample.png");
}
/*** mouse functions ***/
function mousePressed() {
  if (gameState === "START") {
    if (mouseX > gameStartButton.x && mouseX < gameStartButton.x + gameStartButton.buttonWidth) {
      if (mouseY > gameStartButton.y && mouseY < gameStartButton.y + gameStartButton.buttonHeight) {
        //  console.log(" start game");
        if (bgSound.isPlaying()=== false) {
          bgSound.play ()
        }
        gameState = "PLAY";

      }
    }

  }//start

  if (gameState === "RESET") {
    if (mouseX > gameResetButton.x && mouseX < gameResetButton.x + gameResetButton.buttonWidth) {
      if (mouseY > gameResetButton.y && mouseY < gameResetButton.y + gameResetButton.buttonHeight) {
        //  console.log(" start game");
        reset();
        gameState = "PLAY";

      }
    }

  }//start
}


/*** BIRD FUNCTIONS ****/
function displayBird() {
  //  fill(bird.birdColor.r,bird.birdColor.g,bird.birdColor.b);
  //  ellipse(bird.x,bird.y,bird.birdWidth,bird.birdHeight);
  push();
  translate(bird.x, bird.y)
  scale(-1, 1);
  image(bird.birdImage, 0, 0, bird.birdWidth, bird.birdHeight);
  pop();

}

function checkBirdBoundary() {
  if (bird.x > width) {
    bird.x = 0;
  }
}
/**** BLOCK FUNCTIONS ****/

function displayBlock() {
  //block 1
  //  blockTwo.y =  (height-blockTwo.blockHeight)-300;
  block.y = height - block.blockHeight;
  image(block.blockImage, block.x, block.y, block.blockWidth, block.blockHeight);

  fill(0);
  rect(block.x, block.y, 5, 5);

  //block two
  blockTwo.y = 0;
  //fill(blockTwo.blockColor.r, blockTwo.blockColor.g, blockTwo.blockColor.b);
  //rect(blockTwo.x, blockTwo.y, blockTwo.blockWidth, blockTwo.blockHeight);
  image(blockTwo.blockImage, blockTwo.x, blockTwo.y, blockTwo.blockWidth, blockTwo.blockHeight);

  //block three
  blockThree.y = height - blockThree.blockHeight;
  image(blockThree.blockImage, blockThree.x, blockThree.y, blockThree.blockWidth, blockThree.blockHeight);

  //block four
  blockFour.y = 0;
  image(blockFour.blockImage, blockFour.x, blockFour.y, blockFour.blockWidth, blockFour.blockHeight);

  //block five
  blockFive.y = height - blockFive.blockHeight;
  image(blockFive.blockImage, blockFive.x, blockFive.y, blockFive.blockWidth, blockFive.blockHeight);

  //block six
  blockSix.y = 0;
  image(blockSix.blockImage, blockSix.x, blockSix.y, blockSix.blockWidth, blockSix.blockHeight);

  //block seven
  blockSeven.y = height - blockSeven.blockHeight;
  image(blockSeven.blockImage, blockSeven.x, blockSeven.y, blockSeven.blockWidth, blockSeven.blockHeight);
  //
  //block eight
  blockEight.y = 0;
  image(blockEight.blockImage, blockEight.x, blockEight.y, blockEight.blockWidth, blockEight.blockHeight);
}

function moveBlock() {
  // has the block reached left side of screen
  //block 1
  if (block.x < (-block.blockWidth)) {

    block.x = width;
    block.blockHeight = random(50, 300);
    block.blockImage.resize(block.blockWidth, block.blockHeight);

  }

  block.x = block.x - block.blockSpeed;

  //block 2

  if (blockTwo.x < (-blockTwo.blockWidth)) {

    blockTwo.x = width;
    blockTwo.blockHeight = (height - block.blockHeight) - GAP_SIZE;
    blockTwo.blockImage.resize(blockTwo.blockWidth, blockTwo.blockHeight);

  }

  blockTwo.x = blockTwo.x - blockTwo.blockSpeed;


  //block 3
  if (blockThree.x < (-blockThree.blockWidth)) {

    blockThree.x = width;
    blockThree.blockHeight = random(50, 300);


  }

  blockThree.x = blockThree.x - blockThree.blockSpeed;

  //block 4
  if (blockFour.x < (-blockFour.blockWidth)) {

    blockFour.x = width;
    blockFour.blockHeight = (height - blockThree.blockHeight) - GAP_SIZE;

  }

  blockFour.x = blockFour.x - blockFour.blockSpeed;

  //block 5
  if (blockFive.x < (-blockFive.blockWidth)) {

    blockFive.x = width;
    blockFive.blockHeight = random(50, 300);
  }

  blockFive.x = blockFive.x - blockFive.blockSpeed;

  //block 6
  if (blockSix.x < (-blockSix.blockWidth)) {

    blockSix.x = width;
    blockSix.blockHeight = (height - blockFive.blockHeight) - GAP_SIZE;

  }

  blockSix.x = blockSix.x - blockSix.blockSpeed;

  //block 7
  if (blockSeven.x < (-blockSeven.blockWidth)) {

    blockSeven.x = width;
    blockSeven.blockHeight = random(50, 300);
  }

  blockSeven.x = blockSeven.x - blockSeven.blockSpeed;

  //block 8
  if (blockEight.x < (-blockEight.blockWidth)) {

    blockEight.x = width;
    blockEight.blockHeight = (height - blockSeven.blockHeight) - GAP_SIZE;

  }

  blockEight.x = blockEight.x - blockEight.blockSpeed;
}


/********************** COLLISION **********************/
function checkBirdCollision() {

  /** CHECK 1 and 2 */

  let collision =false;
  let bird_X_ForCollison = bird.x - bird.birdWidth / 2;
  let bird_Y_ForCollision = bird.y + bird.birdHeight / 2;
  //check x collison of BOTH 1 & 2
  if (bird_X_ForCollison > block.x && bird_X_ForCollison < block.x + block.blockWidth) {


    //check y collision with 1
    if (bird_Y_ForCollision > block.y) {
      console.log("collision 1");
      collision =true;


    }
    //check y collision with 2
    else if (bird_Y_ForCollision < (blockTwo.blockHeight)) {

      console.log("collision 2");
      collision =true;


    }

  } //end check x


  /** CHECK 3 and 4*/

  //check x collision for BOTH 3 & 4
  else if (bird_X_ForCollison > blockThree.x && bird_X_ForCollison < blockThree.x + blockThree.blockWidth) {


    //check y collision with 3
    if (bird_Y_ForCollision > blockThree.y) {
      console.log("collision 3");
      collision =true;

    }
    //check y collision with 4
    else if (bird_Y_ForCollision < (blockFour.blockHeight)) {

      console.log("collision 4");
      collision =true;


    }
  }


  //check x collision for BOTH 5 & 6
  else if (bird_X_ForCollison > blockFive.x && bird_X_ForCollison < blockFive.x + blockFive.blockWidth) {

    //check y collision with 5
    if (bird_Y_ForCollision > blockFive.y) {
      console.log("collision 5");
      collision =true;

    }
    //check y collision with 6
    else if (bird_Y_ForCollision < (blockSix.blockHeight)) {

      console.log("collision 6");
      collision =true;

    }
  }


  /** CHECK 7and 8**/

  //check x collision for BOTH 5 & 6
  else if (bird_X_ForCollison > blockSeven.x && bird_X_ForCollison < blockSeven.x + blockSeven.blockWidth) {
    //check y collision with 5
    if (bird_Y_ForCollision > blockSeven.y) {
      console.log("collision 7");
      collision =true;

    }
    //check y collision with 6
    else if (bird_Y_ForCollision < (blockEight.blockHeight)) {

      console.log("collision 8");
      collision =true;


    }
  }


 if(collision ===true){

   livesRemaining = livesRemaining-1;


//game over
    if(livesRemaining ===0){

    if (bgSound.isPlaying()=== true) {
      bgSound.stop()
    }


      gameState = "GAMEOVER";
    }
 //collided
    else{
      if(hitSound.isPlaying() ===false){
        hitSound.play();
        gameState = "COLLIDED";

      }

    }
  }
} //end collision
