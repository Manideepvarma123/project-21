var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    surface1 = createSprite(0,580,360,30);
    surface1.shapeColor = "red";

    surface2 = createSprite(295,580,200,30);
    surface2.shapeColor = "yellow";

    surface3 = createSprite(515,580,200,30);
    surface3.shapeColor = "azure";

    surface4 = createSprite(740,580,220,30);
    surface4.shapeColor = "orange";

    box = createSprite(random(20,750),100, 40,40);
    box.shapeColor = rgb(255,255,255);
    box.velocityX = 4;
    box.velocityY = 9;

}

function draw() {
    background("salmon");
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);


  if(surface1.isTouching(box) && box.bounceOff(surface1)){
    box.shapeColor ="red" ;
    music.play();
    }

    if(surface2.isTouching(box)){
        box.shapeColor = "yellow";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "azure";
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "orange";
    }

drawSprites();
}






