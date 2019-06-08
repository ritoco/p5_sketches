let moyou;

function setup() {
  createCanvas(windowWidth, windowHeight, P2D);
  pixelDensity();
  colorMode(HSB,360,100,100,100);
  background(55,100,100);
  smooth();
  moyou = new pattern();
}

function draw() {
	for (let tate = 0; tate < windowHeight; tate += 200) {
		for (let yoko = 0; yoko < windowWidth; yoko += 100) {  
			push(); 
			translate(yoko,  tate);
			moyou.purple_gradation(); 
			pop();
		}
	}
}

class pattern {
    /* ‚Þ‚ç‚³‚« */
    purple_gradation() {
    push(); 
       rotate(PI/4);
    	for(let i=0; i<60; i++){
		  noStroke();
	 	@fill(290,i+30,90); 
		  rect(i,i,100,100);
	}
 	 pop(); 
  }
}
