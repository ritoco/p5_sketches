
function setup() {
  createCanvas(2500, 2500,P2D);
  pixelDensity(1);
  noStroke();
  colorMode(HSB,360,100,100,100);
	rectMode(CENTER);

  spacer = 150;
  noLoop();
}

function draw() {
  background(255);
  for (let x = 0; x < width; x += spacer) {
    for (let y = 0; y < height; y += spacer) {
      fill(random(200,360),100,100,random(60));
      rect(x + spacer / 2, y + spacer / 2,50,350);
      rect(x + spacer / 2, y + spacer / 2,350,50);
    }
  }
}
