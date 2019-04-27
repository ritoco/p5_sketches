let ang = 0; 
let rad = 100; 
function setup() { 
    createCanvas(windowWidth, windowHeight , P2D); 
    colorMode(HSB,360,100,100,100);
    noStroke();
    background(60 , 100 , 100);
}
 
function draw() { 
    

   // äpä€éläp
    for (let shikaku = 1; shikaku < 60; shikaku += 1) {
        
   // äpä€éläpÇÃÉAÉjÉÅÅ[ÉVÉáÉì
      x = sin((ang - (shikaku * 10))) * rad; 
      y = cos((ang - (shikaku * 20))) * rad; 
      h =  360 / random(4);
        
    	push(); 
        translate( windowWidth / 2, windowHeight / 2 );
        fill( h , 90 , 100 );
        rect( x * 10 , y * 10 , 10, 10 , 3 ); 
        pop();
    }
    ang += 0.01;
}