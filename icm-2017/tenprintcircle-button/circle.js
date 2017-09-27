var circleSize = 10;

  function Circle(x, y, r, circleSizeX, circleSizeY) {
    this.r = r;
    this.x = x;
    this.y = y;
    this.circleSizeX = circleSizeX;
    this.circleSizeY = circleSizeY;
  //  this.circleSizeY = circleSizeY;

    this.draw = function() {
      //print(this.lineSizeX, this.lineSizeY);
      push();
      fill(map(this.circleSizeX,0,width,0,255),
      255-map(this.circleSizeX,0,width,0,255),
      255-map(this.circleSizeY,0,width,0,255));

      translate(width / 2, height / 2);
      ellipseMode(CENTER);
      rotate(this.r);
      ellipse(this.x-40,this.y+45, map(this.circleSizeX,0,width,1,35));
      //rect(this.x, this.y, map(this.lineSizeX,0,width,.1,6), map(this.lineSizeX,0,width,5,45));
      pop();

    }
  }
