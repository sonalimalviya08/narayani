var canvas, backgroundImage;
var obstacleGroup;
var invisibleGround
var road,roadImg,obstacle1
var score=0,points,pointsGrp
var lives=5
var edges;
var citymap, boystanding, girlstanding,virus,soap,vac1,sanitizer, roaday , roadnight,mask2, hospital,hosback2
var citymap_img, boystanding_img, girlstnading_img,virus_img, soap_img, vac1_img, sanitizer_img , roaday_img , roadnight_img,mask2_img,hospital_img, hosback2_img
var obstacle;
function preload(){
citymap_img=loadImage("images/citymap.jpg");
boystanding_img=loadImage("images/boystanding.png");
girlstanding_img=loadImage("images/girlstanding.png");
virus_img=loadImage("images/virus.png")
vac1_img=loadImage("images/vac1.png");
soap_img=loadImage("images/soap.png")
sanitizer_img=loadImage("images/sanitizer.png")
roaday_img=loadImage("images/roaday.jpg")
mask2_img=loadImage("images/mask2.png")
hosback2_img=loadImage("images/hosback2.jpg")
hospital_img=loadImage("images/hospimg.png")
roadImg=loadImage("images/road.jpg")
}


function setup() {
  createCanvas(displayWidth+150,displayHeight-30);
  
edges=createEdgeSprites()
  boystanding=createSprite(displayWidth/2 , displayHeight-165)
  boystanding.addImage("boystanding",boystanding_img)
   

 boystanding.debug=true
 boystanding.setCollider("rectangle",10,-20,30,100)
obstacleGroup=new Group ()
pointsGrp=new Group ()
hospital=createSprite(displayWidth/2+450,displayHeight/2+50)
hospital.addImage(hospital_img)
hospital1=createSprite(displayWidth,displayHeight)

}

function draw() {
  background(citymap_img)
  textSize(30)
  text("SCORE:"+score,displayWidth-190,displayHeight/9-50)

  textSize(30)
  fill("black")
  text("LIVES: "+lives ,displayWidth-1000,displayHeight/9-50)
 
 boystanding.x=mouseX
  

for(var i=0;i<obstacleGroup.length;i++){
  if(obstacleGroup.get(i).isTouching(boystanding)){
     //score=score+1
    obstacleGroup.get(i).remove();
    lives-=1
          }
} 
for(var j=0;j<pointsGrp.length;j++){
  if(pointsGrp.get(j).isTouching(boystanding)){
     //score=score+1
    pointsGrp.get(j).remove();
    score+=1
          }
}
obstacle()
//obstacle1()
points()

drawSprites()
if(score===10){
  text("you are survivor  ",200,200)
}
if(lives==0){
  text("you are affected take rest",250,200)
}
}


function obstacle(){
  if (frameCount%50===0) {
    virus=createSprite(displayWidth/2+80,displayHeight/6+288)
    virus.addImage("virus",virus_img)
    virus.scale=0.05
    //virus.velocityX=2
    virus.x=Math.round(random(displayWidth/2-2,displayWidth/2+150))
    virus.velocityY=1
    virus.scale=.03
  virus.lifetime=200
  virus.scale=.02
  obstacleGroup.add(virus)
  boystanding.depth=virus.depth
  }
    
}

function points(){
  if(frameCount%300===0){

    sanitizer=createSprite(displayWidth/2+30,displayHeight/6+300)
    sanitizer.addImage("virus",sanitizer_img)
    sanitizer.scale=0.3
    //virus.velocityX=2
    sanitizer.x=Math.round(random(displayWidth/2+10,displayWidth/2+200))
    sanitizer.velocityY=1
  sanitizer.lifetime=100
  pointsGrp.add(sanitizer)
  }
  if(frameCount%250===0){
  //pointsGrp.add(sanitizer)
  mask2=createSprite(displayWidth/2+10,displayHeight/6+300)
    mask2.addImage("virus",mask2_img)
    mask2.scale=0.3
    //virus.velocityX=2
    mask2.x=Math.round(random(displayWidth/2+3,displayWidth/2+150))
    mask2.velocityY=1
  mask2.lifetime=100
  pointsGrp.add(mask2)
  }

}