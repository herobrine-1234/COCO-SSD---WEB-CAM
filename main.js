status="";
objects=[];

function setup()
{
    canvas=createCanvas(640,440);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="status:Detecting objects";  
}

function modelLoaded()
{
console.log("coco-SSD hass loadeddrrr");
status=true;
}
function gotResult(error,results)
{
if(error ){
console.log(error);
}
else{
console.log(results);
objects=results;
}



}
function draw()
{
image(video,0,0,650,450);
if(status!="")
{r=random(255);
    g=random(255);
    b=random(255);
    
    objectDetector.detect(video,gotResult);
for(i=0;i<objects.length;i++)
{


document.getElementById("status").innerHTML="status:objectos detecteduo";
document.getElementById("number_of_objects").innerHTML="number of objects: "+objects.length;
stroke(r,g,b);
noFill();
percent=floor(objects[i].confidence* 100);
text(objects[i].label+""+percent+"%",objects[i].x,objects[i].y);
stroke(r,g,b);
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}

}
}
