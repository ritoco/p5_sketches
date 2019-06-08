// classを入れる箱
let moyou;

function setup() {

  createCanvas(windowWidth, windowHeight, P2D);
  pixelDensity();
  background('#CC2EFA');
  smooth();
  noLoop();
    moyou = new crossLine();

}

function draw() {

	for (let tate = 0; tate < windowHeight; tate += 200) {
		for (let yoko = 0; yoko < windowWidth; yoko += 200) {  
			push(); // 座標を保存
			translate(yoko,  tate);
			moyou.green(); // crossLineのgreenを呼び出す
			moyou.yellow(); // crossLineのyellowを呼び出す
			pop();　// 元の座標に戻す
		}
	}
}

class crossLine {

    /* 緑　*/
    green() {
    push(); 
    	for(let i=0; i<12; i++){
		  noStroke();
	 	　fill('#2EFE64');
		  ellipse(10*i,10*i,5,110);
	 	　ellipse((-10*i)+110,10*i,110,5);
	}
 	 pop(); 
  }
    
    /* 黄色　*/
    yellow() {
    push(); 
    	for(let i=0; i<12; i++){
		  noStroke();
	 	　fill('#FFBF00');
		  ellipse(20*i,20*i,8,8);
	 	　ellipse((-20*i)+20,10*i,10,10);
	}
 	 pop(); 
  }
}