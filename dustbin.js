class dustbin{
constructor(x,y){
this.x=x;
this.y=y;
this.dustbinWidth=200;
this.dustbinHeight=100;
this.wallThickness=20;
this.angle=0;

this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic:true});                                                                                                                                            
this.leftBody=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true});
Matter.Body.setAngle(this.leftBody,this.angle);
this.rightBody=Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true});
Matter.Body.setAngle(this.rightBody,-1*this.angle);
World.add(world, this.bottomBody) 
World.add(world, this.leftBody)
World.add(world, this.rightBody); 

}
display(){
var bottompos=this.bottomBody.position;
push();
translate(bottompos.x,bottompos.y);
rectMode(CENTER);
stroke(255);
angleMode(RADIANS); 
fill(255); 
rect(0,0,this.dustbinWidth, this.wallThickness);
pop();

var rightpos=this.rightBody.position;
push();
translate(rightpos.x,rightpos.y);
rectMode(CENTER);
stroke(255); 
angleMode(RADIANS);
fill(255);
rotate(-1*this.angle); 
rect(0,0,this.wallThickness, this.dustbinHeight);
pop();

var leftpos=this.leftBody.position;
push();
translate(leftpos.x,leftpos.y);
rectMode(CENTER);
angleMode(RADIANS);
fill(255) ;
stroke(255);
rotate(this.angle) ;
rect(0,0,this.wallThickness, this.dustbinHeight)
pop();

}


}