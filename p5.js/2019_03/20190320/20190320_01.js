//rect + BlendMode
var spacer;
function setup() {
  createCanvas(1500, 1500,P2D);
	blendMode(LIGHTEST);
	rectMode(CENTER);
  pixelDensity(1);
  noStroke();
  colorMode(HSB,360,100,100,100);
  background(0);
  //描画する図形の配置をランダムにする
  spacer = random(200);
  noLoop();
}

function draw() {

  for (let x = 0; x < width; x += spacer) {
    for (let y = 0; y < height; y += spacer) {

			//HSBと図形の透明度の指定
			fill(random(200,300), 100 ,random(100),60);

      //縦横に図形を置いていく。
      rect(x + spacer / 2, y + spacer / 2,150,150);
      rect(x + spacer / 2, y + spacer / 2,150,150);
    }
  }
}
 
