//20190415touko

var noise_Range = 50.0;

function setup(){
createCanvas(2000, 1500);
pixelDensity();
colorMode(HSB, 360, 100, 100);

background( 0, 0, 100);
noStroke();
ellipse_draw();
}

 function ellipse_draw(){


for (var tate = 1; tate < height; tate += 20) {
for (var yoko = 1; yoko < width; yoko += 20) {


 var noiseVal_1 = noise(sin(noise_Range*100));
 var noiseVal_2 = noise(cos(noise_Range*800));

fill( random(150,330), 80, 100);
ellipse( yoko * (noiseVal_1) * random(5,100) , tate * 10 * noiseVal_2,
noiseVal_2 + random( 50 ), noiseVal_1 + 100);

fill( random(200,300), 70,100 );
ellipse(yoko + ( 10 + noiseVal_2 ), tate + 10,
noiseVal_1*random( 10 ), noiseVal_2*100);
}
}
 }
