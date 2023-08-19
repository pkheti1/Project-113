function preload() {
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();

  tint_color = "";
}

function draw() {
  image(video, 50, 50, 641, 581);
  tint(tint_color);
}

function take_snapshot(){    
  save('student_name.png');
}


