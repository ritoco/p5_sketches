//ellipse + BlendMode
var spacer;
function setup() {
  createCanvas(2800, 2800,P2D);
	blendMode(MULTIPLY);
  pixelDensity(1);
  noStroke();
  colorMode(HSB,360,100,100,100);
  background(200,60,100);
  //描画する図形の配置をランダムにする
  spacer = random(50,200);
  noLoop();
}

function draw() {
  for (let x = 0; x < width; x += spacer) {
    for (let y = 0; y < height; y += spacer) {

			//HSBと図形の透明度の指定
			fill(random(170,280), 100 ,random(100),60);

      //縦横に図形を置いていく。
			ellipse(x + spacer / 2, y + spacer / 2,150,150);
      ellipse(x + spacer / 2, y + spacer / 2,150,150);
    }
  }
}
