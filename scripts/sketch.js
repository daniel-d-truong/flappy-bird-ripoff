let bird;
let pipes = [];
let paused = false;

let displayScore = document.querySelector("#num-score");
let displayHits = document.querySelector("#num-hits");
let score = 0;
let hits = 0;

function setup() {
  // put setup code here
  createCanvas(400,600);
  bird = new Bird();
  pipes.push(new Pipe());

}

function draw() {
  // put drawing code here
  background(0); //takes rgb parameters
  bird.update();
  bird.show();

  if (frameCount % 50 == 0) { //for every couple frames, push new pipe
    pipes.push(new Pipe());
  }

  for (let i=pipes.length-1; i>=0; i--){
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].betweenPipes(bird) && pipes[i].hits(bird) == false) {
      console.log("NOT HIT");
      score++;
      displayScore.innerHTML = score;
    }
    else if (pipes[i].betweenPipes(bird) && pipes[i].hits(bird)){
      hits++;
      displayHits.innerHTML = hits;
    }


    if (pipes[i].offscreen()) {
      pipes.splice(i,1)
    }
  }

  console.log("NO DRAW");

}
function mousePressed(){
  noLoop();
}

function mouseReleased(){
  loop();
}

function keyPressed() {
  if (key == ' '){
    //console.log("SPACE");
    bird.up();
  }
  // if (paused == false && key == 'f'){
  //   paused=true;
  //   noLoop();
  // }
  // if (paused && key == 'f'){
  //   loop();
  // }
}
