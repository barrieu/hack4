
const jsPsych = initJsPsych();
var audio= document.getElementById("myaudio_oneHundred_tones");

function initialStuff(){

    var timeline = [];

    const hello_trial = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: 'Listen to the Tones',
      choices: "NO_KEYS",
      trial_duration: 2000
    };
    timeline.push(hello_trial);

    tonesToPlayOut = function playTheTonesFunction(){
      var version = jsPsych.version();
      console.log("version = " + version);
      var time = jsPsych.getTotalTime();
      console.log("entry = " + time);

      tonesToPlay = createToneList();
      console.log(tonesToPlay[0] + " " + tonesToPlay[1] + " "  + tonesToPlay[2] + " "  + tonesToPlay[3]);
      //playList1([1,249,1,1]);
      playList1([ tonesToPlay[0],tonesToPlay[1],tonesToPlay[2],tonesToPlay[3] ]);

      jsPsych.pauseExperiment();
      setTimeout(jsPsych.resumeExperiment, 5000);

      return tonesToPlay;
    };

    var playTheTonesTrial = {
         type: jsPsychCallFunction,
         func: playTheTonesFunction
     };
     timeline.push(playTheTonesTrial);

     const collectUserKey = {
       type: jsPsychHtmlKeyboardResponse,
       stimulus: 'press Z or M',
       choices: ['z' , 'm'],
       response_ends_trial: true,
       on_finish: function(tonesToPlayOut) {
         console.log("after press " + tonesToPlayOut[1]);
       }
     };
     timeline.push(collectUserKey);

     const goodbye_trial = {
       type: jsPsychHtmlKeyboardResponse,
       stimulus: 'goodbye world!',
       choices: "NO_KEYS",
       trial_duration: 2000
     };
     timeline.push(goodbye_trial);

     return timeline;
}
