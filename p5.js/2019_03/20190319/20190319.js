//ellipse + BlendMode
var spacer;
function setup() {
  createCanvas(2500, 2500,P2D);
	blendMode(ADD);
  pixelDensity(1);
  noStroke();
  colorMode(HSB,360,100,100,100);
  background(0);
  //描画する図形の配置をランダムにする
  spacer = random(150);
  noLoop();
}

function draw() {

  for (let x = 0; x < width; x += spacer) {
    for (let y = 0; y < height; y += spacer) {

			//HSBと図形の透明度の指定
			fill(random(210,350), 100 ,random(100),random(40));

      //縦横に図形を置いていく。
      ellipse(x + spacer / 2, y + spacer / 2,50,350);
      ellipse(x + spacer / 2, y + spacer / 2,350,50);
    }
  }
}
