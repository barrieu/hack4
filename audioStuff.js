//var audio= document.getElementById("myaudio_twelve_tones");

function playTone(selectPart){
  //var version = jsPsych.version();
  //console.log(version);
  var startT = (selectPart * 1.0) - 1.0;
  var stopT  = startT + 0.9;
  console.log("startT = " + startT);
  audio.currentTime = startT;
  audio.play();

// the below setInterval is to check the currentTime
  setInterval(function(){
    if(audio.currentTime>stopT){
      audio.pause();
        }
      },50);
  }


function playList1(vocalList){
  console.log("playing Audio List");
  playTone(vocalList[0]);
  setTimeout(function(){ playTone(vocalList[1]);}, 1100);
  setTimeout(function(){ playTone(vocalList[2]);}, 2200);
  setTimeout(function(){ playTone(vocalList[3]);}, 3300);
}
