//20190419_03

// �m�C�Y�͈͂����߂�
let noiseRange = 3.0;

function setup(){
 	createCanvas( windowWidth, windowHeight );
	pixelDensity();
 	colorMode( HSB, 360, 100, 100,100);
  	background( 210,100,80 );
  	ellipse_draw();

}

 function ellipse_draw(){

   for (let tate = 1; tate < windowHeight; tate += 30) {
     for (let yoko = 1; yoko < windowWidth; yoko += 30) {

       // noise���쐬�Byoko�͋C��
       let my_noise = noise( sin(noiseRange) * cos(noiseRange) );

       // �w�i�𗘗p���~�ɃO���f�[�V�������ۂ��̂��ł���
       stroke( random(1,80),100,100,80 );
       strokeWeight( random(1,10) + my_noise  );
       fill( 340,random(100),100 );
       ellipse( my_noise + yoko , my_noise + tate + 10 , 20 + my_noise, 20 + my_noise );

     }
   }
}
