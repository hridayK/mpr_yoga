let video;
let poseNet;

let noseX = 40;
let noseY = 40;

function setup(){
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelReady);

    poseNet.on('pose', (results) => {
        poses = results;
        console.log(poses);
        noseX = poses[0].pose.keypoints[0].position.x;
        noseY = poses[0].pose.keypoints[0].position.y;
    });

    
}



function modelReady(){
    console.log("model ready!!!!");
}

function draw(){
    background(0);
    image(video, 0, 0, 640, 480);

    fill(255,0,0);
    ellipse(noseX,noseY,70);
}