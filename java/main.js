
//animation js 

var easingVisualizerEl = document.querySelector(".easing-visualizer");

easingVisualizerEl.style.perspectiveOrigin =
  window.innerWidth / 2 + "px " + window.innerHeight / 2 + "px";

var numberOfDots = 1;

// Length of path
var pathLength = window.innerWidth;

for (var r=0; r<=window.innerHeight-50; r+=1) {

  var x = r * Math.cos(r)+window.innerWidth/2;
  var y = r * Math.sin(r)+window.innerHeight/2;

  for (var j = 0; j < numberOfDots; j++) {
    var dotEl = document.createElement("div");
    dotEl.classList.add("dot");
    dotEl.classList.add("color-red");
    easingVisualizerEl.appendChild(dotEl);
    
   // var size = anime.random(5,10);
    var size = 7;
    dotEl.style.width = size+"px";
    dotEl.style.height = size+"px";
    dotEl.style.opacity = "0";
    //dotEl.style.filter = "blur(1px)";
    //dotEl.style.left = x + anime.random(-15, 15) + "px";
    //dotEl.style.top = y + anime.random(-15, 15) + "px";
    dotEl.style.left = x  + "px";
    dotEl.style.top = y  + "px";
  }
}

    var dotEl = document.createElement("div");
    dotEl.classList.add("start_dot");
    dotEl.classList.add("color-red");
    //easingVisualizerEl.appendChild(dotEl);
    
   
    dotEl.style.width = "50px";
    dotEl.style.height = "50px";
    dotEl.style.filter = "blur(5px)";
    dotEl.style.left = 0 +  "px";
    dotEl.style.top = 5 + "px";

var path = anime.path("#myPath");

var timeline = anime.timeline({ loop: true });

var elements = document.querySelectorAll(".dot");

for (var i = 0; i < elements.length; i++) {
  var el = elements[i];
}

timeline
  .add({
    easing: "linear",
    opacity: [
      { value: 1, duration: 100, delay: anime.stagger(10) },
      {
        //value: 0, duration: function(el, i, l) {
        //return anime.random(200, 1000);  }, 
       delay: anime.stagger(10) }
    ],
    targets: document.querySelectorAll(".dot"),
    translateX: {
      value: function(el, i, l) {
        //return anime.random(-15, 15);
      },
      duration: 1500,
      delay: anime.stagger(10)
    },
    translateY: {
      value: function(el, i, l) {
        //return anime.random(-15, 15);
      },
      duration: 1500,
      delay: anime.stagger(10),
      
    },
  });
//animation js end 

// audio player 

var audio = document.querySelectorAll('[data-media]')[0].getElementsByTagName('audio')[0],
    range = document.querySelectorAll('[type=range]')[0],
    current = document.getElementById('current'),
    total = document.getElementById('total'),
    play = document.getElementById('play'),
    playing = false,
    turboMode = false
audio.addEventListener('ended',stopMedia)
function stopMedia(){
  audio.pause()
  playing = false
  play.value = 'Play'
  play.setAttribute('data-button','blue')
  audio.currentTime = range.value = 0
  trackProgress()
}
function unPause(button){
  if (!playing){
    playing = true
    audio.play()
    trackProgress()
    play.value = 'Pause'
    play.setAttribute('data-button','')
  } else {
    playing = false
    audio.pause()
    play.value = 'Play'
    play.setAttribute('data-button','blue')
  }
  var seconds = Math.floor(audio.seekable.end(0)),
      minutes = Math.floor(seconds/60)<10?'0'+Math.floor(seconds/60):Math.floor(seconds/60)
      totalTime = seconds>60?minutes+':'+(seconds-(minutes*60)):'00:'+seconds
  total.innerHTML = totalTime
}
function seek(dir,num){
  if (dir == 'forward'){
    var time = audio.currentTime+num<audio.seekable.end(0)?audio.currentTime+num:audio.seekable.end(0)
    audio.currentTime = time
  } else {
    var time = audio.currentTime-num>0?audio.currentTime-num:0
    audio.currentTime = time
  }
  range.value = (audio.currentTime/audio.seekable.end(0))*1000
  trackProgress()
}
function trackProgress(){
  var percent = (audio.currentTime/audio.seekable.end(0))*1000,
      seconds = Math.floor(audio.currentTime),
      minutes = Math.floor(seconds/60)<10?'0'+Math.floor(seconds/60):Math.floor(seconds/60)
  seconds = (seconds-(minutes*60))<10?'0'+(seconds-(minutes*60)):(seconds-(minutes*60))
  var totalTime = Math.floor(audio.currentTime)>60?minutes+':'+seconds:'00:'+seconds
  range.value = percent
  current.innerHTML = totalTime
  if (playing) {
    setTimeout(function(){trackProgress()},100)
  }
}
function updateTime(time){
  var location = (time/1000)*audio.seekable.end(0)
  audio.currentTime = location
  trackProgress()
}
function rewind(){
  audio.currentTime = range.value = 0
  trackProgress()
}
function turbo(button){
  if (!turboMode){
    turboMode = true
    audio.playbackRate = 1.25
    button.setAttribute('data-button','orange')
  } else {
    turboMode = false
    audio.playbackRate = 1
    button.setAttribute('data-button','blue')
  }
}
//audio player end






// var audio1 = document.getElementById("audio1");
// var audio2 = document.getElementById("audio2");
// var playpause1 = document.getElementByClassName("playpause");
// var audiocount = 0;

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "450px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

  /* audio toggle function */ 
// function audiotog() {
//   if (audiocount == 0 && audio1.pause()) {
//     audiocount = 1;
//     audio1.play();
//   }else if (audiocount == 0 && audio2.pause()){
//     audiocount = 1;
//     audio2.play();
//   }
//    else if (audiocount == 1 && audio1.play()) {
//     audiocount = 0;
//     audio1.pause(); 
//   }
// }





