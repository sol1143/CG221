var img;
var mediumPoint, largePoint;

function preload(){
  img = loadImage("http://cdn.history.com/sites/2/2015/05/hith-Mona-Lisa-model-E.jpeg");
}

function setup() {
  //created my canvas
  createCanvas(windowWidth, windowHeight);
  smallPoint = 4;
  largePoint = 40;
  imageMode (CENTER);
  noStroke();
  background(255);
  img.loadPixels();

}

function draw() {
  var pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  var x = floor(random(img.width));
  var y = floor(random(img.height));
  var pix = img.get(x, y);
  fill(pix, 128);
  ellipse(x, y, pointillize, pointillize);
}
















function setup() {
  createCanvas (2000, 1500);
  background (51);
  frameRate (30);


}

function draw() {
  fill (255, 204, 0);
  ellipse (300, 300, 75, 125);
  ellipse (500, 300, 75, 125);
  stroke (255, 204, 0);
  arc(400, 500, 200, 150, 0, PI);

}
