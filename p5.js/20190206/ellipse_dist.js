let distances = [];
let maxDistance;
let spacer;

function setup() {
  createCanvas(2500, 2500);
  noStroke();
  colorMode(HSB,360,100,100);
  maxDistance = dist(width/2, height/2, 0, 0);
  for (let x = 0; x < width; x++) {
    distances[x] = []; // create nested array
    for (let y = 0; y < height; y++) {
      let distance = dist(width, height, 0, 0)*255;
      distances[x][y] = (distance / maxDistance) ;
    }
  }
  spacer = 10;
  noLoop(); // Run once and stop
}

function draw() {
  background(255);

  // This embedded loop skips over values in the arrays based on
  // the spacer variable, so there are more values in the array
  // than are drawn here. Change the value of the spacer variable
  // to change the density of the points

  for (let x = 0; x < width; x += spacer) {
    for (let y = 0; y < height; y += spacer) {
      fill(random(30,200),distances[x][y],distances[x][y]);
      ellipse(x + spacer / 2, y + spacer / 2,10,10);

    }
  }
}
