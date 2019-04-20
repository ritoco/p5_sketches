//20190419_02

// ノイズ範囲を決める
var noiseRange = 50.0;

function setup(){
  createCanvas(1000, 1000);
  pixelDensity();
  colorMode(HSB, 360, 100, 100);
  background(225,100,50);
  ellipse_draw();
}

 function ellipse_draw(){

   for (var tate = 1; tate < height; tate += 30) {
     for (var yoko = 1; yoko < width; yoko += 30) {

       //ノイズを作る。なんでyokoをかけたのかはわからない。
       var my_noise = noise( sin(noiseRange) + yoko * noiseRange );

       stroke( random(1,80),100,100 );
       strokeWeight( random(1,15)*my_noise );
       fill( 340,random(100),100 );
       ellipse( my_noise + yoko + 5 , my_noise + tate + 6 ,	20 + my_noise, 20 + my_noise );

     }
   }
}
