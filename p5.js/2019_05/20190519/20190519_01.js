// class�����锠
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
			push(); // ���W��ۑ�
			translate(yoko,  tate);
			moyou.green(); // crossLine��green���Ăяo��
			moyou.yellow(); // crossLine��yellow���Ăяo��
			pop();�@// ���̍��W�ɖ߂�
		}
	}
}

class crossLine {

    /* �΁@*/
    green() {
    push(); 
    	for(let i=0; i<12; i++){
		  noStroke();
	 	�@fill('#2EFE64');
		  ellipse(10*i,10*i,5,110);
	 	�@ellipse((-10*i)+110,10*i,110,5);
	}
 	 pop(); 
  }
    
    /* ���F�@*/
    yellow() {
    push(); 
    	for(let i=0; i<12; i++){
		  noStroke();
	 	�@fill('#FFBF00');
		  ellipse(20*i,20*i,8,8);
	 	�@ellipse((-20*i)+20,10*i,10,10);
	}
 	 pop(); 
  }
}