var bullet,wall,thickness;

var speed,weight,rating;

var damage;

var state="start";

function setup() {
  createCanvas(1360,400);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  bullet = createSprite(50,200,60,10);
  bullet.shapeColor="white";
}

function draw() {
  background(0);

  if(state==="start") {
    textSize(40);
    fill("white");
    text("Press the spacebar to start",400,100);

    if(keyWentDown("space")) {
      state="running";
    }
  }

  if(state==="running") {
    weight = Math.round(random(30,52));
    speed = Math.round(random(220,245));
    thickness = random(22,83);
    bullet.velocityX = speed;

  if(isTouching(bullet,wall)) {
    wall.width=thickness;

    bullet.velocityX=0;
    damage = Math.round(0.5*weight*speed*speed/(thickness*thickness*thickness));
     
    if(damage>10) {
    wall.shapeColor="red";
    rating="BAD";
    }

    if(damage<10) {
      wall.shapeColor="green";
      rating="GOOD";
    }

    state="end";
  }
}

  if(state==="end") {

    if(damage>=10) {
      fill("red");
    }

    if(damage<10) {
      fill("green");
    }

    textSize(25);
    text("Speed: "+speed+"  km / h",10,50);
    text("Weight: " +weight+ " kg",300,50);
    text("Thickness: "+Math.round(thickness),550,50);
    text("Rating: "+rating,1000,50);
    text("Damage: "+damage,800,50);

    textSize(30);
    text("Press 'R' to reset",500,200);
    if(keyDown("r")) {
      reset();
     
    }
  }

  drawSprites();
}


function reset() {
  state="start";
  bullet.x=50;
  wall.shapeColor=color(127,127,127);
}