/*
 Project 2 - Array of Objects
 Name: Sara Ali
 Comments: 
 */

function MyClass(tempX, tempY) {
  this.x = tempX;
  this.y = tempY;
  this.d = 50;
  this.speedX = random(-1, 1);
  this.speedY = random(-1, 1);

  this.move = function() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x > width || this.x < 0){
      this.speedX *= -1;
    }
    if (this.y > height || this.y < 0){
      this.speedY *= -1;
    }
  }

  this.display = function() {
    push();
    translate(this.x, this.y);
    fill(255, 0, 0);
    ellipse(0, 0, this.d, this.d);
    pop();
  }
}

var objects = new Array(10);

function setup(){
  createCanvas(600, 400);

  for(var i = 0; i < objects.length; i++) {
    objects[i] = new MyClass(random(width), random(height));
  }
}

function draw(){
  background(200);
  
  for(var i = 0; i < objects.length; i++){
    objects[i].move();
    objects[i].display();
  }
}
