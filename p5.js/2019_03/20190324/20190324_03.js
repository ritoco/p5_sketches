//rect + ellipse + BlendMode
var spacer;
function setup() {
  createCanvas(1500, 1500,P2D);
	blendMode(DIFFERENCE);
  pixelDensity(1);
  colorMode(HSB,360,100,100,100);
  background(255);
  //描画する図形の配置をランダムにする
  spacer = random(50,200);
  noLoop();
}

function draw() {
  for (let x = 0; x < width; x += spacer) {
    for (let y = 0; y < height; y += spacer) {

			//HSBと図形の透明度の指定
			stroke(random(10,280), 100 ,random(100),60);
			strokeWeight(random(9));
			fill(random(110,80), 100 ,random(100),60);

      //縦横に図形を置いていく。
      ellipse(x + spacer / 2, y + spacer / 2,150,150);

			//四角
			push();
			strokeWeight(random(9));
			stroke(random(110,180), 100 ,random(100),60);
			fill(random(110,180), 100 ,random(100),5);
			translate(190,-210);
			rectMode(CENTER);
			rotate(120);
      rect(x + spacer, y + spacer,30,30);
			pop();
    }
  }
}
