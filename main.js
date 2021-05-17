nosex=0;
nosey=0;
difference=0;
rightwristx=0;
leftwristx=0;
eyex= 0;
eyey=0;
balloon;
function preload(){
    balloon = loadImage("balloon.png");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.position(680,120);
    video = createCapture(VIDEO);
    video.size(600,500);
    //initializing posenet
    posenet = ml5.poseNet(video,modelLoaded);
    //executing posenet
    posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("model is initialized");
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    nosex = results[0].pose.nose.x;
    nosey = results[0].pose.nose.y;
    eyex = results[0].pose.rightEye.x;
    eyey = results[0].pose.rightEye.y;
    console.log("noseX = "+nosex+" noseY = "+nosey);
    leftwristx = results[0].pose.leftWrist.x;
    rightwristx = results[0].pose.rightWrist.x;
    difference = floor(leftwristx - rightwristx);

    console.log("leftwristx = "+leftwristx+" rightwristx = "+rightwristx+" difference = "+difference);
}
}

function draw(){
    background("#f2e56b");
    document.getElementById("sqaure_side").innerHTML = "The Side Of The Square is "+difference+"px";
    fill("lightblue");
    //border colour
    stroke("blue");
    //border width
    strokeWeight(4);
    rectMode(CENTER);
   square(nosex,nosey,difference);
circle(nosex,nosey,5);
image(balloon,eyex,eyey,60,100);
}