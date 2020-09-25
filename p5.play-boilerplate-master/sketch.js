var hr, mn, sec;
var hourAngle,minuteAngle,secondAngle;


function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);


}

function draw() {
  background("green");  
  translate(200,200);
  rotate(-90);

  hr = hour();
  mn = minute();
  sec = second();

  secondAngle = map(sec,0,60,0,360);
  minuteAngle = map(mn,0,60,0,360);
  hourAngle = map(hr%12,0,12,0,360);
  arc(0,0,270,270,0,360);
  //arcMode(CENTER);
  
  push();
  rotate(secondAngle);
  stroke("black");
  strokeWeight(7);
  line(0,0,100,0);

  pop();

  push();
  rotate(minuteAngle);
  stroke("black");
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();
  rotate(hourAngle);
  stroke("black");
  strokeWeight(7);
  line(0,0,52,0);
  pop();

  stroke(255,0,255);
  point(0,0);

}