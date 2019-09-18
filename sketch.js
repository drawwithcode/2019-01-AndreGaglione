function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  frameRate(12);

  background(100);
}

function draw() {
  translate(width/2, height/2)
  rotate(frameCount*3);
  noFill();

  stroke(
    lerpColor(
      color("aquamarine"),
      color("tomato"),
      frameCount/120));

  ellipse(100, 0, 250);

  if(frameCount==120){
    noLoop();
  }

}
