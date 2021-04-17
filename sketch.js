function preload() {
DinoImage = loadImage("Images/Dino-re.png")
EyeImage = loadImage("Images/Eye-re.png")
goblinImage = loadImage("Images/goblin-re.png")
SkelImage = loadImage("Images/Skel-re.png")
slimeImage = loadImage("Images/slime2-re.png")
backgroundImage = loadImage("Images/Jungle.png")
GreatswordImage = loadImage("Images/Great sword.png")
pixeltreeImage = loadImage("Images/pixel-stump-re.png")
}



function setup() {
  createCanvas(800,400);
  createSprite(400,200, 50, 50);
}

function draw() {
  background(255,255,255);

  Jungle=createSprite(200,100,300,150);
  Jungle.addImage("Background",backgroundImage);

Dino=createSprite(150,200,175,300);
Dino.addImage("Dino",DinoImage);
Dino.scale= 0.5

Greatsword=createSprite(400,225,175,100);
Greatsword.addImage("Greatsword",GreatswordImage);

Greatsword.scale = 0.2

goblin=createSprite(450,220,175,100);
goblin.addImage("goblin",goblinImage);
goblin.scale= 0.5





 drawSprites();
}

