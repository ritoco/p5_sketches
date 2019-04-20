//20190420

function setup(){
	createCanvas(windowWidth, windowHeight,P2D);
	pixelDensity();
	smooth();
	colorMode(HSB, 360, 100, 100);
	background(280,100,60);
	noStroke();
	ellipse_draw();
}

 function ellipse_draw(){

	for (let tate = 1; tate < windowHeight; tate += 65) {
	for (let yoko = 1; yoko < windowWidth; yoko += 65) {

    // noiseに色を指定してもらう
		let noiseVal = 11.0;
		let my_noise = noise( tate*sin(noiseVal), yoko*cos(noiseVal))*250;
		fill( my_noise ,100 ,100 );

    // 楕円をクロスさせる 
			ellipse(  yoko + 30 ,   tate + 15 ,50 ,  10 );
			ellipse( yoko + 30 ,   tate + 15 , 10 , 50 );
}
}
}
