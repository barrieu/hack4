
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

    function playTheTonesFunction(){
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
    };

    var playTheTonesTrial = {
         type: jsPsychCallFunction,
         func: playTheTonesFunction
     };
     timeline.push(playTheTonesTrial);

     const goodbye_trial = {
       type: jsPsychHtmlKeyboardResponse,
       stimulus: 'goodbye world!',
       choices: "NO_KEYS",
       trial_duration: 2000
     };
     timeline.push(goodbye_trial);

     return timeline;
}
