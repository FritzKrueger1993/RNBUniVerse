let line1

function setup() {
  createCanvas(windowWidth,windowHeight);
  colorMode(HSB, 360);
  background(0);
  line1 = new Line();
}


function draw() {
 
  line1.show();
  line1.move();

  
}

function mousePressed() {
  line1 = new Line();
}

