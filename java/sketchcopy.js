// referenced work:
// p5js reference page: https://p5js.org/reference/
// p5js sound tutorial: https://www.youtube.com/watch?v=Pn1g1wjxl_0&t=67s

//graphic
var graphic = function (p) {
  let numObjects = 50;
  let centerX, centerY;
  let angle = 0;
  let distance = 100;
  p.setup = function () {
    var canvas = p.createCanvas(500, 500);
    centerX = p.width / 2;
    centerY = p.height / 2;
    p.noStroke();
    p.ellipseMode(p.CENTER);
    canvas.parent("exercise-canvas"); //putting graphic canvas inside main div
    p.background(0);
  };

  // drawing graphic
  p.draw = function () {
    p.background(0, 0, 0, 20);

  let angleObject = 360 / numObjects;
  for (var i = 0; i < numObjects; i++) {
    angle = p.frameCount;
    angle = (p.frameCount * i) / 100;
    distance = p.sin(p.radians(p.frameCount)) * 150;

    let posX = centerX + distance * p.cos(p.radians(angleObject * i + angle));
    let posY = centerY + distance * p.sin(p.radians(angleObject * i + angle));

    p.fill(255, 247, 219);
    p.ellipse(posX, posY, 10, 10);
    }
  };
};

// Audio player javascript
var audioplayer = function (p) {
  //Audio player area variables
  let pbuttons = [];
  var x, w, h;
  //audio variables
  let amp;
  let audio_one, audio_two;
  let volumeone, speedone, volumetwo;

  // preload webpage audios
  p.preload = function () {
    audio_one = p.loadSound("assets/sound/crinkling.wav");
    audio_two = p.loadSound("assets/sound/balloon.wav");
    audio_three = p.loadSound("assets/sound/mouth-noises.wav");
    amp = new p5.Amplitude();
  };
  
  p.mouseClicked = function() {
    for (var i = 0; i < pbuttons.length; i++) {
    pbuttons[i].click(p.mouseX, p.mouseY);
  }
  }  
  function Playbutton(xpos, ypos, w, h) {
  this.x = xpos;
  this.y = ypos;
  this.w = w;
  this.h = h;
  // is button clicked set to false
  this.audio_one, this.audio_two; 
  // this.audio_one = false;
  // this.audio_two = false; 
  this.click = function (mx, my) {
    // print(this.audio_one); 
    // Check to see if a point is inside the rectangle
    if (
      mx > this.x &&
      mx < this.x + this.w &&
      my > this.y &&
      my < this.y + this.h) {
      // print("clicked!")
      if (!this.audio_one && p.mouseY > 100 && p.mouseY < 150) {
        console.log("on");
        this.audio_one = true; 
        audio_one.loop();
        // print("on!"); 
        return;
      } else if (!this.audio_two && p.mouseY > 220 && p.mouseY < 270) {
        audio_two.loop();
        this.audio_two = true;
        return;
      } 
      else if (this.audio_one && p.mouseY > 100 && p.mouseY < 150) {
        console.log("off")
        this.audio_one = false; 
        audio_one.pause();
        // print("pause!");
        return;
      } else if (this.audio_two && p.mouseY > 220 && p.mouseY < 250) {
        audio_two.pause();
        this.audio_two = false;
        return;}
        else {
        // print("WRONG");
        return;
      }
    }
  }
  this.display = function () {
    p.rectMode(p.CORNER);
    p.fill(255);
    p.rect(this.x, this.y, this.w, this.h);
    p.fill(0);
    p.textSize(10);
    p.text("Play", this.x + 15, this.y + 20);
  };
}


  p.setup = function () {
    var canvas = p.createCanvas(370, p.windowHeight - 100);
    p.rectMode(p.CENTER);
    canvas.position(40, 200);
    canvas.parent("audio-area");
    //first audio
    volumeone = p.createSlider(0, 1, 0.5, 0.01);
    
    volumeone.parent("audio-area");
    volumeone.position(90, 265);
    volumeone.style("width", "200px");
     
    speedone = p.createSlider(0.5, 3, 1, 0.5);
    speedone.parent("audio-area");
    speedone.position(160, 300);
    speedone.style("width", "100px");
    //second audio 
    volumetwo = p.createSlider(0, 1, 0.5, 0.01);
    volumetwo.parent("audio-area");
    volumetwo.position(90, 390);
    volumetwo.style("width", "200px");
    speedtwo = p.createSlider(0.5, 3, 1, 0.5);
    speedtwo.parent("audio-area");
    speedtwo.position(160, 420);
    speedtwo.style("width", "100px");

    //third audio

    x = 50;
    w = 50;
    h = 30;
    pbuttons = [new Playbutton(x, 100, w, h), new Playbutton(x, 220, w, h)];

  };
    
  //draws audio player canvas
  p.draw = function () {
    p.background(255, 247, 219);
  for (var i = 0; i < pbuttons.length; i++) {
    pbuttons[i].display();
  }
  //first audio 
  p.fill(0);
  p.textSize(20);
  p.stroke(2);
  p.text("Crinkling", 10, 25);
  p.textSize(10);
  p.noStroke();
  p.text("Volume", 50, 65);
  p.text("Speed", 126, 125);
  audio_one.setVolume(volumeone.value());
  audio_one.rate(speedone.value());
  //second audio 
  p.fill(0);
  p.textSize(20);
  p.stroke(2); 
  p.text("Balloon", 10, 160);
  p.textSize(10);
  p.noStroke(); 
  p.text("Volume", 50, 190);
  p.text("Speed", 126, 250);
  audio_two.setVolume(volumetwo.value());
  audio_two.rate(speedtwo.value());
  };
};

// print sketches seperately
var myFirstSketch = new p5(graphic);
var mySecondSketch = new p5(audioplayer);

