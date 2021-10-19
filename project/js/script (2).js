// let
// define what object is
// use number one at a timeout
let bird = {
  x: 0,
  y: 0,
  birdWidth: 20,
  birdHeight: 20,
  birdColor: {
    r: 255,
    g: 255,
    b: 153,
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
    b: 0,
  }
}


let blockTwo = {
    x: 120,
    y: 200,
    blockWidth: 50,
    blockHeight: 300,
    blockSpeed: 1,
    blockColor: {
      r: 0,
      g: 255,
      b: 0,
    }
  }


    //runs only one time = it goes frame by frame
    function setup() {
      createCanvas(500, 500);
    }

    //runs all the time
    //if key is pressed (continuous)
    function draw() {
      background(0);


      //display objects//
      displayBird();
      displayBlock();
      moveBlock();
      //moveBird ();
      if (keyIsPressed) {
        if (key === "ArrowRight") {
          bird.x = bird.x + 1;
        } else if (key === "ArrowLeft") {
          bird.x = bird.x - 1;
        } else if (key === "ArrowUp") {
          bird.y = bird.y - 1;
        } else if (key === "ArrowDown") {
          bird.y = bird.y + 1;
        }
      }
    }


    //******BIRD FUNCTION******//
    //inside.inside
    function displayBird() {
      fill(bird.birdColor.r, bird.birdColor.g, bird.birdColor.b);
      ellipse(bird.x, bird.y, bird.birdWidth, bird.birdHeight);
    }

    function moveBird() {
      bird.x = bird.x + 1;
      bird.y = bird.y + 9;
    }

    //******BLOCK FUNCTION******//
    //height: end
    function displayBlock() {
      block.y = height - block.blockHeight
      fill(block.blockColor.r, block.blockColor.g, block.blockColor.b);
      rect(block.x, block.y, block.blockWidth, block.blockHeight);


    blockTwo.y = height - blockTwo.blockHeight,
    fill(blockTwo.blockColor.r, blockTwo.blockColor.g, blockTwo.blockColor.b);
    rect(blockTwo.x, blockTwo.y, blockTwo.blockWidth, blockTwo.blockHeight);
  }

    function moveBlock() {
      //
      if (block.x < -block.blockWidth) {
        block.x = width;
        block.blockHeight = random(50, 300);
      }
      block.x = block.x - block.blockSpeed;


      //
      if (blockTwo.x < -block.blockWidth) {
        blockTwo.x = width;
        blockTwo.blockHeight = random(50, 300);
      }
      blockTwo.x = blockTwo.x - blockTwo.blockSpeed;

    }
