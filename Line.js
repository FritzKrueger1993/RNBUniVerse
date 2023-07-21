class Line{
   constructor() {
     this.x = random(width);
     this.y = random(height);
     this.color = random(360);
     this.degrees = 0;
     this.growthX = 1;
     this.growthY = 1;
     this.degreesRate = 1;
     this.degressJump = 5;
   }
   move(){
     this.x = this.x + this.growthX;
     this.y = this.y + this.growthY;
     
   }
   show(){
     stroke(this.color,180,360);
     ellipse(this.x,this.y,1,1);
   }
  
}
