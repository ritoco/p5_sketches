/* １から不透明度を加えた */

function setup() {
  createCanvas(2500, 2500,P2D);
  pixelDensity(1);
  noStroke();
  colorMode(HSB,360,100,100,100);
  spacer = 50;
  noLoop();
}

function draw() {
  background(255);
  for (let x = 0; x < width; x += spacer) {
    for (let y = 0; y < height; y += spacer) {
      fill(random(0,70),100,100,15);
      ellipse(x + spacer / 2, y + spacer / 2,150,150);

    }
  }
}
