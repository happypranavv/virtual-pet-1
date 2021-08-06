//Create variables here
var dog , happy_dog , foodS , foodStock , database ,dogimg1  , dogimg2;
function preload()
{
  dogimg1 = loadImage("images/Dog.png");
  dogimg2 = loadImage("images/happydog.png")
	//load images here
}

function setup() {
	createCanvas(500,500);
  dog = createSprite(250,250);
  dog.addImage(dogimg1);
  dog.scale = 0.3;

  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87);

if(keyWentDown("UP_ARROW")){
  writeStock(foodS);
  dog.addImage(dogimg2);
  dog.scale = 0.3;
}
  drawSprites();
  //add styles here
 
textSize(20)
 fill("white");
 text("foodRemaining="+foodS,250,100);
}
function readStock(data){
foodS = data.val()
}
function writeStock(x){
  if(x<0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref("/").update({
    Food:x
  })

}

