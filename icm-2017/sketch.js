var a = 0;
var r = 2;
var sqSize = 50;
var sqX = 0;
var sqY = 0;
var currX = 0;
var currY = 0;
var doesHover = false;

var spiral = [];
var spiralcircle = [];
var spiraltriangle = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  frameRate(50);

  sqX = 100;
  sqY = 100;
  currX = 100;
  currY = 100;


}


function draw() {

  background(255);




      	fill(20);
      	noStroke();

        var x = r * cos(a);
        var y = r * sin(a);

        a += map(mouseX,0,width,0,.7)  ;
        r += map(mouseY,0,height,0,.4) ;

        var trans = 50;

        var line = new Line(x,y,r, sqX, sqY);
        spiral.push(line);

        var circles = new  Circle(x,y,r, sqX, sqY);
        spiralcircle.push(circles);

        var triangles = new Triangle(x,y,r, sqX, sqY);
        spiraltriangle.push(triangles);

      	x = round(map(mouseX,0, width, 20 ,40));
      	//print(map(mouseX,0, width, 5,10));

        for (var  i = 0 ; i < spiral.length; i++){
          color(map(mouseX,0,width,5,255));
          spiralcircle[i].draw();
          spiraltriangle[i].draw();
          spiral[i].draw();

        }

        noStroke();
        fill(60);
        text("Xpos - " + currX + ", Ypos - " + currY, (currX-(sqSize)), (currY+sqSize)); // Text wraps within text box

        fill(100);
        rectMode(CENTER);
        rect(sqX,sqY,sqSize,sqSize);


      //// hover state
        if    (( mouseX < (currX + sqSize/2)) &&
              ( mouseX > (currX - sqSize/2)) &&
              ( mouseY < (currY + sqSize/2)) &&
              ( mouseY > (currY - sqSize/2))

              ) {
                fill(200);
                rectMode(CENTER);
                rect(sqX,sqY,sqSize,sqSize);
                //doesHover = true;
              }else{
                //doesHover = false;
              }


        if    (( mouseX < (currX + sqSize/2)) &&
              ( mouseX > (currX - sqSize/2)) &&
              ( mouseY < (currY + sqSize/2)) &&
              ( mouseY > (currY - sqSize/2)) &&
              (mouseIsPressed)
              ){
              //background(255);
              fill(60);
              text("Xpos - " + currX + ", Ypos - " + currY, (currX-(sqSize)), (currY+sqSize));
              fill(255,65,50);
              noStroke();
              rectMode(CENTER);
              rect(sqX,sqY,sqSize,sqSize);
              sqX = mouseX;
              sqY = mouseY;
              currY = mouseY;
              currX = mouseX;

            }



              if ( ( mouseX < (currX + sqSize/2)) &&
                   ( mouseX > (currX - sqSize/2)) &&
                   ( mouseY < (currY + sqSize/2)) &&
                   ( mouseY > (currY - sqSize/2))
                 )

                   {
                     fill(255,255,50);
                     noStroke();
                   }










}




///////////
