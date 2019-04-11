function setup(){
createCanvas(1000, 1600);
background(255);
noFill();
smooth();
rect_draw();
ellipse_draw();
}

function rect_draw(){
  strokeWeight(random(2,10));
for (var tate = 40; tate < height; tate += 60) {
for (var yoko = 40; yoko < width; yoko += 20) {
stroke(0, random(200));
rect(yoko + random(-20, 20), tate + random(-20, 20),
random(10, 40), random(1, 40));
  strokeWeight(random(2,10));
}
}
}

function ellipse_draw(){
  strokeWeight(random(15));
for (var tate = 40; tate < height; tate += 80) {
for (var yoko = 40; yoko < width; yoko += 60) {
stroke(0, random(200));
ellipse(yoko + random(-20, 20), tate + random(-20, 20),
random(10, 40), random(1, 40));
}
}
}
