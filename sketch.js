function preload(){

}
function setup() {

  createCanvas(windowWidth,windowHeight);
    angleMode(DEGREES);

    background(200);
    frameRate(120);
}

function draw() {


    push();
    textSize(20);
        text("In viaggio verso Roma, non ci sono a lezione ma è per una buona causa", width/4, height/6.4);

    var k = 50;

    if(frameCount < 100){
      translate(width/2,height/2);
      stroke("black");
      line(k, 0, (k)*cos(frameCount*4), (k)*sin(frameCount*4));
    }

}
