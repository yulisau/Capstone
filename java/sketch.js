// referenced work:
// p5js reference page: https://p5js.org/reference/
// p5js sound tutorial: https://www.youtube.com/watch?v=Pn1g1wjxl_0&t=67s

// Graphics javascript
var graphic = function (p) {
  p.angle = 0;
  p.r = 150;
  p.setup = function () {
    var canvas = p.createCanvas(1000, 1000);
    p.rectMode(p.CENTER);
    canvas.parent("exercise-canvas"); //putting graphic canvas inside main div
    p.background(0);
   
  };

  // drawing graphic
  p.draw = function () {
    p.translate(500, 250);
    p.strokeWeight(10);
    p.stroke(255, 247, 219);
    if (p.r<=150) {
    let x = p.r * p.cos(p.angle);
    let y = p.r * p.sin(p.angle);
    p.point(x, y);
    p.angle += 0.04;
    p.r -= 0.2;};
  };
};
// Graphics javascript end

// Audio player javascript
var audioplayer = function (p) {
  //Audio player area variables
  let x = 40;
  let y = 200;
  //audio variables
  let audio_one, play_button, volume_slider;

  // preload webpage audios
  p.preload = function () {
    // p.soundFormats('wav', 'mp3');
    audio_one = p.loadSound("assets/sound/crinkling.wav");
  };

  p.setup = function () {
    var canvas = p.createCanvas(370, 100);
    // canvas.mouseClicked();
    p.rectMode(p.CENTER);
    canvas.position(x, y);
    canvas.parent("audio-area"); //putting audio player canvas inside panel div
    //play button
    play_button = p.createButton("Play");
    play_button.size(50, 30);
    play_button.parent("audio-area"); //putting button inside audio player area
    play_button.position(60, 260);
    play_button.mousePressed(play_on); //when button is pressed, trigger play_on function
    //volume slider
    volume_slider = p.createSlider("Volume", 100, 50, 4);
    volume_slider.parent("audio-area");
    volume_slider.position(60, 220);
    volume_slider.style("width", "100px");
    //Play speed button
    play_button = p.createButton("Playback Speed");
    play_button.size(150, 30);
    play_button.parent("audio-area"); //putting button inside audio player area
    play_button.position(240, 220);
    play_button.mousePressed(play_on); //when button is pressed, trigger play_on function
    // forward 10 sec button
    play_button = p.createButton("+10 sec");
    play_button.size(100, 30);
    play_button.parent("audio-area"); //putting button inside audio player area
    play_button.position(260, 260);
    play_button.mousePressed(play_on); //when button is pressed, trigger play_on function
    // backward 10 sec button
    play_button = p.createButton("-10 sec");
    play_button.size(100, 30);
    play_button.parent("audio-area"); //putting button inside audio player area
    play_button.position(140, 260);
    play_button.mousePressed(play_on); //when button is pressed, trigger play_on function
  };

  //plays and pauses audio one
  play_on = function () {
    if (audio_one.isPlaying()) {
      // .isPlaying() returns a boolean
      audio_one.stop();
    } else {
      audio_one.play();
    }
  };

  //draws audio player canvas
  p.draw = function () {
    //player
    p.background(255, 247, 219);
    // let val = slider.value();
  };
};
// Audio player javascript end

// print sketches seperately
var myFirstSketch = new p5(graphic);
var mySecondSketch = new p5(audioplayer);

// var audioplayer = function(p) {
//   //box size
//   let x = 40;
//   let y = 200;
//   //audio
//   // var p.audio1, p.sliderPan, p.sliderRate;
//   let audio_one;

//   p.preload = function () {
//     // p.soundFormats('wav', 'mp3');
//     audio_one = p.loadSound('../assets/sound/crinkling.wav');
//   };

//   p.setup = function () {
//     var canvas = p.createCanvas(370, 100);
//     canvas.mousePressed();
//     p.rectMode(p.CENTER);
//     canvas.position(x,y);
//     canvas.parent("audio-area");
//     //audio
//     audio_one = loadSound('../assets/sound/crinkling.wav');

//   };
// p.mousePressed= function() {
//   if (audio_one.isPlaying()) {
//     // .isPlaying() returns a boolean
//     audio_one.stop();
//     background(255, 247, 219);
//   } else {
//     audio_one.play();
//     background(0, 255, 0);
//   }
// }
//   p.draw = function () {
//     //player
//     p.background(255, 247, 219);
//     // p.audio1.pan(p.sliderPan.value());
//     // p.audio1.rate(p.sliderRate.value());
//   };
// };
