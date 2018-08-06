let bird;
let pipes = [];

function setup() {
  // put setup code here
  createCanvas(400,600);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  // put drawing code here
  background(0);
  bird.update();
  bird.show();

  if (frameCount % 50 == 0) { //for every couple frames, push new pipe
    pipes.push(new Pipe());
  }

  for (let i=pipes.length-1; i>=0; i--){
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log("HIT");
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i,1)
    }
  }
}

function keyPressed() {
  if (key == ' '){
    //console.log("SPACE");
    bird.up();
  }
}
