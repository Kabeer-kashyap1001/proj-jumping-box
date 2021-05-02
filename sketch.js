var canvas;
var music;
var box1;
var box2;
var box3;
var box4;
var block;
function preload(){
music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,700);

    //create 4 different surfaces
    box1= createSprite(100,670,150,20);
    box1.shapeColor="red";
    box2= createSprite(300,670,150,20);
    box2.shapeColor="blue"
    box3= createSprite(500,670,150,20);
    box3.shapeColor="yellow"
    box4= createSprite(700,670,150,20);
    box4.shapColor="green"
    //create box sprite and give velocity
    block= createSprite(random(20,750) ,150,40,40);
    block.velocityX=4
    block.velocityY=9;
}
function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    block.bounceOff(edges);


//add condition to check if box touching surface and make it box

    if(block.isTouching(box1)){
        block.shapeColor = "red";   
        block.velocityX= 0;
        block.velocityY= 0;
        music.stop();
    }
    if(block.isTouching(box2)){
        block.shapeColor =  "blue";   
        block.velocityX= 0;
        block.velocityY= 0;
        music.stop();
    }
    if(block.isTouching(box3)){
        block.shapeColor =  "yellow" ;
        music.play();
    }
    if(block.isTouching(box4)){
        block.shapeColor = "green";     
        music.stop();
    }
 drawSprites();

}