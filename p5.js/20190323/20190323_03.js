//ellipse+blendMode
var spacer;
function setup() {
  createCanvas(1000, 1000,P2D);
  // 強めPCの場合は　createCanvas(2800, 2800,P2D);
	blendMode(ADD);
  pixelDensity(1);
  noStroke();
  colorMode(HSB,360,100,100,100);
  background(360,80,100);
  //描画する図形の配置をランダムにする
  spacer = random(5,20);
  noLoop();
}

function draw() {
  for (let x = 0; x < width; x += spacer) {
    for (let y = 0; y < height; y += spacer) {

			//HSBと図形の透明度の指定
			fill(random(80,20), 100 ,random(100),60);

      //縦横に図形を置いていく。
			ellipse(x + spacer , y + spacer,15,15);
      ellipse(x + spacer , y + spacer ,15,15);
    }
  }
}
