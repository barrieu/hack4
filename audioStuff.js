//var audio= document.getElementById("myaudio_twelve_tones");

function playTone(selectPart){
  //console.log(JSON.stringify(settings.timeline));
  var version = jsPsych.version();
  console.log(version);
  startT = (selectPart * 0.5) - 0.5;
  stopT  = startT + 0.4;

  audio.currentTime=startT;
  audio.play();

// the below setInterval is to check the currentTime
  setInterval(function(){
    if(audio.currentTime>stopT){
      audio.pause();
        }
      },50);
  }


function playList1(vocalList){
  console.log("playing First Audio");

  playTone(vocalList[0]);

  setTimeout(function(){
    playTone(vocalList[1]);
    //console.log("played 1");
  }, 500)

  setTimeout(function(){
    playTone(vocalList[2]);
    //console.log("played 2");
  }, 1000)

  setTimeout(function(){
    playTone(vocalList[3]);
    //console.log("played 3");
  }, 1500)

}
