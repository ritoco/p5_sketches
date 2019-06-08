let moyou;

function setup() {
  createCanvas(windowWidth, windowHeight, P2D);
  pixelDensity();
  colorMode(HSB,360,100,100,100);
  background(185,100,95);
  smooth();
  moyou = new pattern();
}

function draw() {
	for (let tate = 0; tate < windowHeight; tate += 200) {
		for (let yoko = 0; yoko < windowWidth; yoko += 100) {  
			push(); 
			translate(yoko*2,  tate);
			moyou.pink_gradation(); 
			pop();
		}
	}
}

class pattern {
    /* pink */
    pink_gradation() {
    push(); 
    	for(let i=0; i<60; i++){
		  noStroke();
	 	@fill(330,i+30,100); 
		  rect(i*10,i,10,120);
	}
 	 pop(); 
  }
}
