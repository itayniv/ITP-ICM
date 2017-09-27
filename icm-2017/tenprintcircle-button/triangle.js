var triangleSize = 10;

  function Triangle(x, y, r, triangleSizeX, triangleSizeY) {
    this.r = r;
    this.x = x;
    this.y = y;
    this.triangleSizeX = triangleSizeX;
    this.triangleSizeY = triangleSizeY;
  //  this.circleSizeY = circleSizeY;

    this.draw = function() {
      //print(this.lineSizeX, this.lineSizeY);
      push();
      fill(255-map(this.triangleSizeX,0,width,0,90),
      255-map(this.triangleSizeX,0,width,0,20),
      map(this.triangleSizeY,0,width,0,255));

      translate(width / 2, height / 2);
      ellipseMode(CENTER);
      rotate(this.r);
      triangle(50+this.x,50+this.y,
        50+map(triangleSizeX,0,width,0,3)+this.x+3,
        50+map(triangleSizeY,0,width,0,10)+this.y,
        50+this.x-5, 50+map(triangleSizeX,0,width,0,10)+this.y-1);

      pop();

    }
  }
