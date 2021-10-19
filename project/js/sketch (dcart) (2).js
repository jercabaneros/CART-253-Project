const GAP_SIZE = 75;

let bird = {
  x: 200,
  y: 200,
  birdWidth: 20,
  birdHeight: 20,
  birdSpeed: 1,
  birdColor: {
    r: 255,
    g: 255,
    b: 153
  }

}

let block = {
  x: 20,
  y: 200,
  blockWidth: 50,
  blockHeight: 300,
  blockSpeed: 1,
  blockColor: {
    r: 0,
    g: 255,
    b: 0
  }
}

let blockTwo = {
  x: 20,
  y: 200,
  blockWidth: 50,
  blockHeight: 300,
  blockSpeed: 1,
  blockColor: {
    r: 0,
    g: 255,
    b: 0
  }
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
}

let jump = false;
let floorY = 500;

function setup() {
  // put setup code here
   createCanvas(500, 500);
}

function draw() {
  // put drawing code here
   background(0);

   /***display objects**/
   displayBird();
   displayBlock();
  //testJump();
  moveBlock();
   //moveBird();


   /** KEY PRESS **/
   //if key is pressed
   if(keyIsPressed){
     //console.log(key);
     if(key ==="ArrowRight"){
         bird.x= bird.x+1;

     }
     else if(key ==="ArrowLeft"){
         bird.x= bird.x-1;

     }
     else if(key ==="ArrowUp"){
         bird.y= bird.y-1;

     }

     else if(key ==="ArrowDown"){
         bird.y= bird.y+1;
        // console.log(bird.y);

     }
   }

}
/*** BIRD FUNCTIONS ****/
function displayBird(){
  fill(bird.birdColor.r,bird.birdColor.g,bird.birdColor.b);
  ellipse(bird.x,bird.y,bird.birdWidth,bird.birdHeight);
}

function moveBird(){
  bird.x= bird.x+1;
  bird.y = bird.y+1;
}
/**** BLOCK FUNCTIONS ****/

function displayBlock(){
  //block 1
  //  blockTwo.y =  (height-blockTwo.blockHeight)-300;
  block.y =  height-block.blockHeight;
  fill(block.blockColor.r,block.blockColor.g, block.blockColor.b);
  rect(block.x,block.y,block.blockWidth,block.blockHeight);

 //block two
  blockTwo.y = 0;
  fill(blockTwo.blockColor.r,blockTwo.blockColor.g, blockTwo.blockColor.b);
  rect(blockTwo.x,blockTwo.y,blockTwo.blockWidth,blockTwo.blockHeight);


 //block three
  blockThree.y =  height-blockThree.blockHeight;
  fill(blockThree.blockColor.r,blockThree.blockColor.g, blockThree.blockColor.b);
  rect(blockThree.x,blockThree.y,blockThree.blockWidth,blockThree.blockHeight);

 //block four
  blockFour.y = 0;
  fill(blockFour.blockColor.r,blockFour.blockColor.g, blockFour.blockColor.b);
  rect(blockFour.x,blockFour.y,blockFour.blockWidth,blockFour.blockHeight);

  //block five
   blockFive.y =  height-blockFive.blockHeight;
   fill(blockFive.blockColor.r,blockFive.blockColor.g, blockFive.blockColor.b);
   rect(blockFive.x,blockFive.y,blockFive.blockWidth,blockFive.blockHeight);

  //block six
   blockSix.y = 0;
   fill(blockSix.blockColor.r,blockSix.blockColor.g, blockSix.blockColor.b);
   rect(blockSix.x,blockSix.y,blockSix.blockWidth,blockSix.blockHeight);

   //block seven
    blockSeven.y =  height-blockSeven.blockHeight;
    fill(blockSeven.blockColor.r,blockSeven.blockColor.g, blockSeven.blockColor.b);
    rect(blockSeven.x,blockSeven.y,blockSeven.blockWidth,blockSeven.blockHeight);
   //
   //block eight
    blockEight.y = 0;
    fill(blockEight.blockColor.r,blockEight.blockColor.g, blockEight.blockColor.b);
    rect(blockEight.x,blockEight.y,blockEight.blockWidth,blockEight.blockHeight);
}

function moveBlock() {
  // has the block reached left side of screen
  //block 1
if (block.x < (-block.blockWidth)) {

  block.x = width;
  block.blockHeight = random(50, 300);


}

block.x = block.x - block.blockSpeed;

//block 2

if (blockTwo.x < (-blockTwo.blockWidth)) {

  blockTwo.x = width;
  blockTwo.blockHeight = (height - block.blockHeight) - GAP_SIZE;

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
