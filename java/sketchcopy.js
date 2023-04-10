// referenced work:
// p5js reference page: https://p5js.org/reference/
// p5js sound tutorial: https://www.youtube.com/watch?v=Pn1g1wjxl_0&t=67s

//global variables
let r = 255;
let g = 247;
let b = 219;

var numObjects = 100;
var numObjects2 = 50;
var centerX;
var centerY;
var angle = 0;
var distance = 150;

//graphic sketch
var graphic = function (p) {
  var numObjects = 100;
  // var numObjects2 = 50;
  var centerX;
  var centerY;
  var angle = 0;
  // var distance = 150;

  p.setup = function () {
    var canvas = p.createCanvas(510, 510);
    p.frameRate(30);
    centerX = p.width / 2;
    centerY = p.height / 2;
    p.noStroke();
    p.ellipseMode(p.CENTER);
    canvas.parent("exercise-canvas"); //putting graphic canvas inside main div
    p.background(0);

    mopacity = p.createSlider(20, 100, 100, 10);
    mopacity.position(p.width/2 - 100, p.height+240);
    esize = p.createSlider(0, 50, 25, 5);
    esize.position(p.width/2+ 100, p.height+240);
    esize2 = p.createSlider(0, 50, 25, 5);
    esize2.position(p.width/2+ 300, p.height+240);
    eopacity = p.createSlider(0, 100, 20, 10);
    eopacity.position(p.width/2 + 500, p.height+240);
  };

  // drawing graphic
  p.draw = function () {
    p.background(0, 0, 0, mopacity.value());
    angleObject = 360 / numObjects; //divide the circle 360 degrees according to the number of objects
    for (var i = 0; i < numObjects; i++) {
      //you can have a circular motion if you sum the same angle to all objects
      angle = p.frameCount;
      ellipse_distance = p.sin(p.radians(p.frameCount)) * 200;
      arc_distance = p.sin(p.radians(p.frameCount)) * 100;
  
      //makes circular movement in and out of center
      var posX =
        centerX + ellipse_distance * p.cos(p.radians(angleObject * i + angle));
      var posY =
        centerY + ellipse_distance * p.sin(p.radians(angleObject * i + angle));
  
      var posX2 =
        centerX + 100 + arc_distance * p.cos(p.radians(angleObject * i + angle));
      var posY2 =
        centerY + 100 + arc_distance * p.sin(p.radians(angleObject * i + angle));
  
      var posX3 =
        centerX - 100 + arc_distance * p.cos(p.radians(angleObject * i + angle));
      var posY3 =
        centerY - 100 + arc_distance * p.sin(p.radians(angleObject * i + angle));
  
      var posX4 =
        centerX + arc_distance * p.cos(p.radians(angleObject * i - angle));
      var posY4 =
        centerY + arc_distance * p.sin(p.radians(angleObject * i - angle));
  
      
      p.fill(r, g, b);
      p.noStroke();
      p.ellipse(posX, posY, 20, 20);
      p.fill(r, g, b,eopacity.value());
      p.ellipse(posX4, posY4, 10, 10);
      p.noFill();
     p.stroke(r - 100, g - 100, b - 100);
     p.arc(posX2, posY2, esize.value(), esize.value(), 0, p.PI);
      p.arc(posX3, posY3, esize2.value(), esize2.value(), 0, p.PI);

    };
  };
};

// Audio player javascript
var audioplayer = function (p) {
  //Audio player area variables
  let pbuttons = [];
  // let vbuttons=[];
  var x, w, h;
  //audio variables
  let amp;
  let audio_one, audio_two, audio_three, audio_four;
  let volumeone, speedone, volumetwo, speedtwo, volumethree, speedthree, volumefour, speedfour;

  // preload webpage audios
  p.preload = function () {
    audio_one = p.loadSound("assets/sound/crinkling.wav");
    audio_two = p.loadSound("assets/sound/balloon.wav");
    audio_three = p.loadSound("assets/sound/mouthnoises.wav");
    audio_four = p.loadSound("assets/sound/tapping.wav");
    amp = new p5.Amplitude();
  };

  p.mouseClicked = function () {
    for (var i = 0; i < pbuttons.length; i++) {
      pbuttons[i].click(p.mouseX, p.mouseY);
    }
  };

  function Playbutton(xpos, ypos, w, h, r) {
    this.x = xpos;
    this.y = ypos;
    this.w = w;
    this.h = h;
    this.r = r;
    // is button clicked set to false
    this.audio_one, this.audio_two, this.audio_three, this.audio_four;
    
  
    this.click = function (mx, my) {
      // print(this.audio_one);
      // Check to see if a point is inside the rectangle
      if (
        mx > this.x &&
        mx < this.x + this.w &&
        my > this.y &&
        my < this.y + this.h
      ) {
        // print("clicked!")
        if (!this.audio_one && p.mouseY > 80 && p.mouseY < 130) {
          audio_one.setVolume(volumeone.value());
          audio_one.rate(speedone.value());
          this.audio_one = true;
          // amp.setInput(audio_one);
          audio_one.loop();
          return;
        } else if (!this.audio_two && p.mouseY > 190 && p.mouseY < 240) {
          audio_two.setVolume(volumetwo.value());
          audio_two.rate(speedtwo.value());
          audio_two.loop();
          this.audio_two = true;
          return;
        } else if (this.audio_one && p.mouseY > 80 && p.mouseY < 130) {
          this.audio_one = false;
          audio_one.pause();
          return;
        } else if (this.audio_two && p.mouseY > 190 && p.mouseY < 240) {
          audio_three.setVolume(volumethree.value());
          audio_three.rate(speedthree.value());
          audio_two.pause();
          this.audio_two = false;
          return;
        } else if (this.audio_three && p.mouseY > 300 && p.mouseY < 350) {
          audio_three.pause();
          this.audio_three = false;
          return;
        } else if (!this.audio_three && p.mouseY > 300 && p.mouseY < 350) {
          audio_three.setVolume(volumethree.value());
          audio_three.rate(speedthree.value());
          this.audio_three = true;
          audio_three.loop();
          return;
        } else if (this.audio_four && p.mouseY > 410 && p.mouseY < 460) {
          audio_four.pause();
          this.audio_four = false;
          return;
        } else if (!this.audio_four && p.mouseY > 410 && p.mouseY < 460) {
          audio_four.setVolume(volumefour.value());
          audio_four.rate(speedfour.value());
          this.audio_four = true;
          audio_four.loop();
          return;
        } else {
          // print("WRONG");
          return;
        }
      }
    };
    this.display = function () {
      p.rectMode(p.CORNER);
      p.fill(255);
      p.stroke('black');
      p.strokeWeight(0.5);
      p.rect(this.x, this.y, this.w, this.h);
      p.noStroke();
      p.fill(0);
      p.textSize(10);
      p.text("Play", this.x + 15, this.y + 20);
      console.log(volumeone.value()); 
    };
  }

  p.setup = function () {
    var canvas = p.createCanvas(370, p.windowHeight - 100);
    p.rectMode(p.CENTER);
    canvas.position(40, 125);
    canvas.parent("audio-area");

    // first audio
    volumeone = p.createSlider(0, 1, 0.5, 0.1);
    volumeone.parent("audio-area");
    volumeone.position(90, 160);
    volumeone.style("width", "200px");
    

    speedone = p.createSlider(0.5, 3, 1, 0.5);
    speedone.parent("audio-area");
    speedone.position(160, 210);
    speedone.style("width", "100px");

    //second audio
    volumetwo = p.createSlider(0, 1, 0.5, 0.1);
    volumetwo.parent("audio-area");
    volumetwo.position(90, 270);
    volumetwo.style("width", "200px");

    speedtwo = p.createSlider(0.5, 3, 1, 0.5);
    speedtwo.parent("audio-area");
    speedtwo.position(160, 320);
    speedtwo.style("width", "100px");

    //third audio
    volumethree = p.createSlider(0, 1, 0.5, 0.1);
    volumethree.parent("audio-area");
    volumethree.position(90, 385);
    volumethree.style("width", "200px");

    speedthree = p.createSlider(0.5, 3, 1, 0.5);
    speedthree.parent("audio-area");
    speedthree.position(160, 430);
    speedthree.style("width", "100px");

    //fourth audio
    volumefour = p.createSlider(0, 1, 0.5, 0.1);
    volumefour.parent("audio-area");
    volumefour.position(90, 490);
    volumefour.style("width", "200px");

    speedfour = p.createSlider(0.5, 3, 1, 0.5);
    speedfour.parent("audio-area");
    speedfour.position(160, 540);
    speedfour.style("width", "100px");

    // audio toggle values
    // audio_one.setVolume(volumeone.value());
    // audio_one.rate(speedone.value());

    // audio_two.setVolume(volumetwo.value());
    // audio_two.rate(speedtwo.value());

    // audio_three.setVolume(volumethree.value());
    // audio_three.rate(speedthree.value());

    // audio_four.setVolume(volumefour.value());
    // audio_four.rate(speedfour.value());
    x = 50;
    w = 50;
    h = 30;

    pbuttons = [
      new Playbutton(x, 80, w, h),
      new Playbutton(x, 190, w, h),
      new Playbutton(x, 300, w, h),
      new Playbutton(x, 410, w, h),
    ];
  };

  //draws audio player canvas
  p.draw = function () {
    p.background(255, 247, 219);
    for (var i = 0; i < pbuttons.length; i++) {
      pbuttons[i].display();
    }
    //audio names
    p.fill(0);
    p.textSize(20);
    p.stroke(2);
    p.text("Crinkling", 10, 25);
    p.text("Balloon", 10, 140);
    p.text("Chewing", 10, 255);
    p.text("Tapping", 10, 360);
    //toggle captions
    p.textSize(10);
    p.noStroke();
    //first audio toggles
    p.text("Volume", 54, 60);
    p.text("Speed", 126, 110);
    //second audio toggles
    p.text("Volume", 54, 170);
    p.text("Speed", 126, 220);
    //third audio toggles
    p.text("Volume", 54, 285);
    p.text("Speed", 126, 330);
    //fourth audio toggles
    p.text("Volume", 54, 390);
    p.text("Speed", 126, 440);
  };
};

// print sketches seperately
var myFirstSketch = new p5(graphic);
var mySecondSketch = new p5(audioplayer);