
function setup() {
  createCanvas(2500, 2500,P2D);
  pixelDensity(1);
  noStroke();
  colorMode(HSB,360,100,100,100);
  spacer = 150;
  noLoop(); // Run once and stop
}

function draw() {
  background(5);
  for (let x = 0; x < width; x += spacer) {
    for (let y = 0; y < height; y += spacer) {
      fill(random(200,360),100,100,60);
      ellipse(x + spacer / 2, y + spacer / 2,50,350);
      ellipse(x + spacer / 2, y + spacer / 2,350,50);
    }
  }
}
