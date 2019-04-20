//20190421
function setup(){
  createCanvas(1000, 1000);
  pixelDensity();
  smooth();
  colorMode(HSB, 360, 100, 100);
  background(0,0,100)
  noStroke();
  ellipse_draw();
}


function ellipse_draw(){

  for (let tate = 1; tate < height; tate += 2) {
    for (let yoko = 1; yoko < width; yoko += 2) {

  　   // 角度
	      let angle = 2;
        let noiseVal = 0.01;
        let my_noise = noise( sin( noiseVal * angle), cos(noiseVal * angle))*10;
        translate( width/2, height/2 );

      // 回転させる
        rotate( angle * my_noise );

      // 円を白～黒のグラデーションにする
	     　fill( 0,0,random(100*my_noise) );

      // 丸をnoiseで並べる
      　 ellipse( my_noise + yoko  , my_noise + tate , 200 , 10 )

      // 角度の初期化
	     　angle +=  1;
}
}
}
