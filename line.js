var rectSize = 10;

function Line(x, y, r, lineSizeX, lineSizeY) {
  this.r = r;
  this.x = x;
  this.y = y;
  this.lineSizeX = lineSizeX;
  this.lineSizeY = lineSizeY;


  this.draw = function() {
    //print(this.lineSizeX, this.lineSizeY);
    push();
    translate(width / 2, height / 2);
    rectMode(CENTER);
    fill(255-map(this.lineSizeX,0,width,0,255),
    map(this.lineSizeY,0,width,0,255),
    map(this.lineSizeX,0,width,0,255));
    
    rotate(this.r);
    rect(this.x, this.y, map(this.lineSizeX,0,width,.1,6), map(this.lineSizeX,0,width,5,45));
    pop();

  }
}
