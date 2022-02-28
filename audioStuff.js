//var audio= document.getElementById("myaudio_twelve_tones");

function playTone(selectPart){
  //var version = jsPsych.version();
  //console.log(version);
  startT = (selectPart * 1) - 1;
  stopT  = startT + 0.95;
  console.log("startT = " + startT);
  audio.currentTime = startT;
  //audio.play();
  setTimeout(function(){ audio.play();}, 50);
  console.log(" starting audio at " + audio.currentTime);

// the below setInterval is to check the currentTime
  var checkInterval = setInterval(function(){
    if(audio.currentTime > stopT){
      console.log(" stopping audio at " + audio.currentTime);
      audio.pause();
      clearInterval(checkInterval);
        }
      },10);
  }


function playList1(vocalList){
  console.log("playing Audio List");
  playTone(vocalList[0]);
  setTimeout(function(){ playTone(vocalList[1]);}, 1000);
  setTimeout(function(){ playTone(vocalList[2]);}, 2000);
  setTimeout(function(){ playTone(vocalList[3]);}, 3000);
}
