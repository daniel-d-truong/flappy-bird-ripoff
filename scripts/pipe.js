function Pipe() {
  //in the future, create diff algorithm for pipe lengths

  this.top = random(height/2); //top height of bottom pipe
  this.bottom = random(height/2); //low height of top pipe
  this.x = width;
  this.w = 20;
  this.speed = 3;

  this.highlight = false;



  this.hits = function(bird){
    if (bird.y < this.top || bird.y > height-this.bottom){
      if (bird.x > this.x && bird.x < this.x+this.w){
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
