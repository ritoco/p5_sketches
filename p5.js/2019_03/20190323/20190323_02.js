//ellipse + BlendMode
var spacer;

function setup() {
  createCanvas(1000, 1000,P2D);
  blendMode(MULTIPLY);
  pixelDensity(1);
  noStroke();
  colorMode(HSB,360,100,100,100);
  background(360,0,100);
  //描画する図形の配置を1~20のうちでランダムにする
  spacer = random(1,20);
  noLoop();
}

function draw() {
  for (let x = 0; x < width; x += spacer) {
    for (let y = 0; y < height; y += spacer) {
	//HSBと図形の透明度の指定
	fill(random(280,300), 100 ,random(100),60);
	ellipse(x + spacer , y + spacer,15,15);
      ellipse(x + spacer , y + spacer ,15,15);
    }
  }
}
