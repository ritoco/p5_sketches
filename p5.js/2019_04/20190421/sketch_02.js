// 20190421_rect

function setup(){
	createCanvas( windowWidth, windowHeight );
	pixelDensity();
    smooth();
	colorMode( HSB, 360, 100, 100 ,100 );
	background( 220,10,100 )
	noStroke();
	rect_draw();
}


 function rect_draw(){

for (let tate = 1; tate < windowHeight; tate += 5) {
for (let yoko = 1; yoko < windowWidth; yoko += 5) {
	translate( width/2, height/2 );
    let angle = 1;
    let noiseRange = 6.0;
	let my_noise = noise( sin( 75 * noiseRange ) + noiseRange * angle ) *20;
	let a = int( random(4) ) * 360 / 5;
    
	rotate( angle / my_noise );
    
    // �e�̐F
    fill( 0 , 0 , 0 , 50);
    
    // ��ԉ���rect��������1px���炵�A�c��2px���炷
    rect( my_noise + yoko +�@1 , my_noise + tate + 2 , 5 , 15 , 10 )
    
    // ����rect�̐F
	fill( a , 50 , 100 );�@
   
    // ���A�c�A���A�����A�p�x
	rect( my_noise + yoko  , my_noise + tate  , 5 , 15 , 10 )
    

	angle +=  1;

}
}
}