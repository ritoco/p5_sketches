function setup(){
createCanvas(1100, 1100);
  colorMode(HSB, 360, 100, 100);
background(random(10,270),100,100);
noFill();
smooth();
//rect_draw();
ellipse_draw();
}

/* function rect_draw(){
  strokeWeight(random(1,3));
for (var tate = 40; tate < height; tate += 60) {
for (var yoko = 40; yoko < width; yoko += 20) {
stroke(random(20,90),80,100);
rect(yoko + random(-20, 20), tate + random(-20, 20),
random(10, 140), random(10, 140));
}
}
}*/

function ellipse_draw(){
  strokeWeight(random(10,25));
for (var tate = 40; tate < height; tate += 80) {
for (var yoko = 40; yoko < width; yoko += 60) {
stroke(random(20,190),100,100, random(200));
ellipse(yoko + random(-20, 20), tate + random(-20, 20),
random(10, 50), random(10, 50));
}
}
}
