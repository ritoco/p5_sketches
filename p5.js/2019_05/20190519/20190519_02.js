// class�����锠
let moyou;

function setup() {

  createCanvas(windowWidth, windowHeight, P2D);
  pixelDensity();
  background('#FFFFFF');
  smooth();
  noLoop();
    moyou = new crossLine();

}

function draw() {

	for (let tate = 0; tate < windowHeight; tate += 200) {
		for (let yoko = 0; yoko < windowWidth; yoko += 200) {  
			push(); // ���W��ۑ�
			translate(yoko,  tate);
			moyou.red(); // crossLine �� red ���Ăяo��
			moyou.green(); // crossLine �� green ���Ăяo��
			pop();�@// ���̍��W�ɖ߂�
		}
	}
}

class crossLine {

    /* �� */
    red() {
    push(); 
    	for(let i=0; i<12; i++){
		  noStroke();
	 	�@fill('#FE2E2E');
		  ellipse(10*i,10*i,20,110);
	 	�@ellipse((-10*i)+110,10*i,110,20);
	}
 	 pop(); 
  }
    
    /* �� */
    green() {
    push(); 
    	for(let i=0; i < 22; i++){
		  noStroke();
	 	�@fill('#01DF01');
		  ellipse(20*i,20*i,8,8);
	 	�@ellipse((-20*i)+20,10*i,10,10);
	}
 	 pop(); 
  }
}
