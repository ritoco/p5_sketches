/* こちらのサイトを参考にしました　https://infosmith.biz/blog/it/p5js-webgl-test */


let frameFlag = false;

function setup() {
    createCanvas(700, 500, WEBGL);
    ambientLight(150, 150, 190);
    directionalLight(110, 110, 150, 255, -1, 1, 0);
    ambientMaterial(150, 150, 255, 200);
    strokeWeight(3);
    noStroke();
}

function draw() {
    background(20, 20, 45);
    drawObject();
}

function drawObject() {
    //draw 3d boxes and sphere
    push();
    rotateX(frameCount / 100);
    rotateY(frameCount / 100);
    rotateZ(frameCount / 100);
    box(300);
    pop();

    push();
    rotateX(-frameCount / 50);
    rotateY(frameCount / 100);
    rotateZ(frameCount / 100);
    box(200);
    pop();

    push();
    rotateX(frameCount / 50);
    rotateY(-frameCount / 100);
    rotateZ(-frameCount / 50);
    box(100);
    pop();

    push();
    rotateX(-frameCount / 100);
    rotateY(frameCount / 50);
    rotateZ(-frameCount / 100);
    sphere(30);
    pop();

}

function mouseClicked() {
    if (!frameFlag) {
        stroke(220, 220, 255, 100);
        noFill();
    } else {
        clear();
        fill(0);
        noStroke();
        ambientLight(150, 150, 190);
        directionalLight(110, 110, 150, 255, -1, 1, 0);
        ambientMaterial(150, 150, 255, 200);
    }
    frameFlag = !frameFlag;
}
