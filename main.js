nosex=0;
nosey=0;
difference=0;
rightwristx=0;
leftwristx=0;

function setup(){
    canvas = createCanvas(600,500);
    canvas.position(680,70)
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
    console.log("noseX = "+nosex+" noseY = "+nosey)
}
}