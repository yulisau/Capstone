// referenced work:
// p5js reference page: https://p5js.org/reference/
// p5js sound tutorial: https://www.youtube.com/watch?v=Pn1g1wjxl_0&t=67s

// Audio player javascript
var audioplayer = function (p) {
  //Audio player(s) area variables
  let x = 40;
  let y = 200;
  //audio variables
  // let audios = [audio_one, audio_two];
  //buttons
  let playOne;

  // preload webpage audios 
  p.preload = function () {
    // p.soundFormats('wav', 'mp3');
    audio_one = p.loadSound("../assets/sound/crinkling.wav");
    audio_two = p.loadSound("../assets/sound/mouth-noises.wav");
  };

  p.setup = function () {
    var canvas = p.createCanvas(370, p.windowHeight-200);
    // canvas.mouseClicked();
    p.rectMode(p.CENTER);
    canvas.position(x, y);
    canvas.parent("audio-area"); //putting audio player canvas inside panel div 
    playOne = new Play_button(60, 260);
    
  };
  //draws audio player canvas 
  p.draw = function () {
    //player area
    p.background(255, 247, 219); 
    //player buttons 
  };
};
// Audio player javascript end

class Play_button {
  constructor (xpos, ypos){
    this.w = xpos; 
    this.h = ypos;
  }

  display() {
    p.createButton("this.w, this.h, 100");

  }

};

// print sketches seperately
var mySecondSketch = new p5(audioplayer);



//plays and pauses audio one  
  // if (audio_one.isPlaying()) {
  //   // .isPlaying() returns a boolean
  //   audio_one.stop();
  // } else {
  //   audio_one.play();
  // }




//old code


// //play button
// play_button = p.createButton("Play");
// play_button.size(50, 30);
// play_button.parent("audio-area"); //putting button inside audio player area 
// play_button.position(60, 260);
// play_button.mousePressed(play_on);//when button is pressed, trigger play_on function
// //volume slider
// volume_slider = p.createSlider(0, 100, 50, 4); 
// volume_slider.parent("audio-area");
// volume_slider.position(60, 220); 
// volume_slider.style('width', '100px');
// //Play speed button
// play_button = p.createButton("Playback Speed");
// play_button.size(100, 30);
// play_button.parent("audio-area"); //putting button inside audio player area 
// play_button.position(240, 220);
// play_button.mousePressed(play_on);//when button is pressed, trigger play_on function
// // forward 10 sec button
// play_button = p.createButton("+10 sec");
// play_button.size(100, 30);
// play_button.parent("audio-area"); //putting button inside audio player area 
// play_button.position(260, 260);
// play_button.mousePressed(play_on);//when button is pressed, trigger play_on function
//  // backward 10 sec button
//  play_button = p.createButton("-10 sec");
//  play_button.size(100, 30);
//  play_button.parent("audio-area"); //putting button inside audio player area 
//  play_button.position(140, 260);
//  play_button.mousePressed(play_on);//when button is pressed, trigger play_on function