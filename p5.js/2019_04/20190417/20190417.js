
var noise_Range = 50.0;

function setup(){
createCanvas(2000, 1500);
pixelDensity();
colorMode(HSB, 360, 100, 100);

background( 180, 10, 100);
noStroke();
rect_draw();
}

 function rect_draw(){


for (var tate = 1; tate < height; tate += 50) {
for (var yoko = 1; yoko < width; yoko += 5) {


 var noiseVal_1 = noise(sin(noise_Range*160));
 var noiseVal_2 = noise(cos(noise_Range*500));


fill( random(150,250), 70,100 );
rect(yoko + ( 10 + noiseVal_2 ), tate + 10,
noiseVal_1*random( 10 ), noiseVal_2*100);
}
}
 }
