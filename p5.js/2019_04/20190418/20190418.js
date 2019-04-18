
//20190418

function setup(){
	createCanvas(1500, 1500);
	pixelDensity();
	colorMode(HSB, 360, 100, 100);
	background(200,100,100);
	noFill();
	ellipse_draw();
}


function ellipse_draw(){

for (var tate = 1; tate < height; tate += 60) {
for (var yoko = 1; yoko < width; yoko += 20) {
		// 太い丸、背景と同色
			strokeWeight(15);
			stroke(200,100,100);
			ellipse(yoko + random(-10, 20), tate + random(-20, 20),
						50, 50);

		// 細い丸、多色
			strokeWeight(5);
			stroke(random(100,180),100,100);
			ellipse(yoko + random(0, 20), tate + random(-20, 20),
						50, 50);
}
}
}
