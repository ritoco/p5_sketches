var spacer;
function setup() {
  createCanvas(1000, 1000,P2D);
  pixelDensity(1);
  noStroke();
  colorMode(HSB,360,100,100,100);
	rectMode(CENTER);

  spacer = random(150); //四角の敷き詰め方がランダムなのでいろんなパターンできる。
  noLoop();
}

function draw() {
  background(255);

  for (let x = 0; x < width; x += spacer) {
    for (let y = 0; y < height; y += spacer) {
      
			//HSBと透明度の指定
			fill(random(100,130), 100 ,random(100),random(20));
			
      //縦横に四角を置いていく。
      rect(x + spacer / 2, y + spacer / 2,50,350);
      rect(x + spacer / 2, y + spacer / 2,350,50);
    }
  }
}
