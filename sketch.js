var db,b,e,i,gs=0,pc=0,greet,reset,c1,c2,allp,link=0,x,index,r=0,crossed=0;
cars=[]
function preload(){
  a=loadImage("car1.png")
  a1=loadImage("car2.png")
  a2=loadImage("track.jpg")
}
function setup() {
  createCanvas(displayWidth,displayHeight-150);
c1=createSprite(200,200,50,50)
c2=createSprite(300,200,50,50)
c1.addImage("c",a)
c2.addImage("c+",a1)
cars=[c1,c2]
c1.shapeColor="pink"
c2.shapeColor="red"
db=firebase.database()
b=createButton("Mahi")
b.position(20,30)
e=createElement("h1")
e.html("hello!")
e.position(30,50)
i=createInput()
i.position(100,20)
b.mousePressed(p)
reset=createButton("Reset")
reset.position(100,100)
reset.mousePressed(r)
db.ref("gamestate").on("value",function(data){
gs=data.val()
})
db.ref("rank").on("value",function(data){
r=data.val()
})
db.ref("playercount").on("value",function(data){
pc=data.val()
})
}

function draw() {
  background(255,255,255);  
if(pc===2){
db.ref("/").update({gamestate:1})

}
if(gs===1&&allp===undefined){
 db.ref("players").on("value",function(data){
   allp=data.val()
 })
}

if(gs===1){

 
  image(a2,0,-displayHeight,displayWidth,displayWidth*5)
 x=430
 index=0
  for(var i in allp){
cars[index].x=x
x=x+400
cars[index].y=allp[i].y
if(index===link-1){
  camera.position.y=cars[index].y
  fill("pink")
  ellipse(cars[index].x,cars[index].y,60,60)
}
index=index+1
  }
  if(cars[link-1].y<-485 && crossed===0){
    crossed=1
    r=r+1
    db.ref("/").update({rank:r})
    alert("Awsome! your rank is"+r)
  }
if(keyDown("up")){
cars[link-1].y=cars[link-1].y-5
db.ref("players/player"+link).update({
  y:cars[link-1].y
}) 
}




drawSprites();}

  
}