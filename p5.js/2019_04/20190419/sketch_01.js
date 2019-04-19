//20190419_01

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

        // 線の色を 1（赤）- 80（黄緑） の間でランダムに変える
        stroke( random(1,80),100,100 );

        // 線の太さを 1px-15px のランダムに変える
        strokeWeight( random(1,15) );

        fill( 340,100,100 );

        ellipse(   yoko + 5 , + tate + 6 , 20 , 20  );

      }
    }
}
