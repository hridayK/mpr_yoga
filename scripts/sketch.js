let video;
let poseNet;
function setup(){
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelReady);
}

function modelReady(){
    console.log("model ready!!!!");
}

function draw(){
    background(0);
    image(video, 0, 0, 640, 480);
}