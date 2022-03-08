//var audio= document.getElementById("myaudio_twelve_tones");

function playTone(selectPart){
  //var version = jsPsych.version();
  //console.log(version);
  startT = (selectPart * 1) - 1;
  stopT  = startT + 1;
  //console.log("startT = " + startT);
  audio.currentTime = startT;
  //audio.play();
  var innerPlay = setTimeout(function(){
    audio.play();
    //console.log(" starting audio at " + audio.currentTime);
    // the below setInterval is to check the currentTime
    var checkInterval = setInterval(function(){
      if(audio.currentTime > stopT){
        //console.log(" stopping audio at " + audio.currentTime);
        audio.pause();
        clearInterval(checkInterval);
          }
        },10);
  }, 50);
}
  //console.log(" starting audio at " + audio.currentTime);

// the below setInterval is to check the currentTime
  // var checkInterval = setInterval(function(){
  //   if(audio.currentTime > stopT){
  //     console.log(" stopping audio at " + audio.currentTime);
  //     audio.pause();
  //     clearInterval(checkInterval);
  //       }
  //     },10);
  // }


function playList1(vocalList){
  //console.log("playing Audio List");
  playTone(vocalList[0]);
  var secondTone = setTimeout(function(){ playTone(vocalList[1]);}, 1100);
  var thirdTone  = setTimeout(function(){ playTone(vocalList[2]);}, 2200);
  var sourthTone = setTimeout(function(){ playTone(vocalList[3]);}, 3300);
}
