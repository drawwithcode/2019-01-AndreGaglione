function preload(){

}
function setup() {

  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  frameRate(120);

  background(200);

}

function draw() {
  translate(width/2, height/2);
  rotate(frameCount*4);
  noFill();

  stroke(color="black");
  line(-60, 0, cos(frameCount), sin(frameCount));

  if(frameCount==90){
    noLoop();
  }

}
