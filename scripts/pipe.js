function Pipe() {
  //in the future, create diff algorithm for pipe lengths

  this.top = random(height/2); //top height of bottom pipe
  this.bottom = random(height/2); //low height of top pipe
  this.x = width; //x = 0 is left side, x = width is right side
  this.w = 20; //w is width of the PIPE
  this.speed = 3;

  this.highlight = false;

  this.betweenPipes = function(bird){ //checks if x position of bird is between x positions of pipe
    if (bird.x > this.x && bird.x < this.x+this.w){
      return true;
    }
  }

  this.hits = function(bird){
    if (bird.y < this.top || bird.y > height-this.bottom){
      if (this.betweenPipes(bird)){
        this.highlight = true;
        return true;
      }
    }
    return false;
  }

  this.show = function() {
    fill(255);
    if (this.highlight) {
      fill(255,0,0); //fill takes up to 3 parameters, rgb
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
    this.highlight = false;
  }

  this.update = function() {
    this.x -= this.speed;

  }

  this.offscreen = function() {
    if (this.x < -this.w){ //if x is offscreen, return true
      return true;
    }
    else{
      return false;
    }

  }
}
