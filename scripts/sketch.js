let bird;


function setup() {
  // put setup code here
  createCanvas(400,600);
  bird = new Bird();
}

function draw() {
  // put drawing code here
  background(0);
  bird.update();
  bird.show();
}

function keyPressed() {
  if (key == ' '){
    //console.log("SPACE");
    bird.up();
  }
}
