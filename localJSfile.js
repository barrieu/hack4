
const jsPsych = initJsPsych();
var audio= document.getElementById("myaudio_twelve_tones");
var audio= document.getElementById("myaudio_oneHundred_tones");

function initialStuff(){

    var timeline = [];

    const hello_trial = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: 'Hello world!',
      choices: "NO_KEYS",
      trial_duration: 2000
    };
    timeline.push(hello_trial);

    function consoleOutput1(){
      var version = jsPsych.version();
      console.log("version = " + version);
      var time = jsPsych.getTotalTime();
      console.log("entry = " + time);
      playList1([9,2,7,1]);
      jsPsych.pauseExperiment();
      setTimeout(jsPsych.resumeExperiment, 5000);
    };

    function consoleOutput2(){
      var time1 = jsPsych.getTotalTime();
      console.log("exit = " + time1);
    };

    var sayItOut1 = {
         type: jsPsychCallFunction,
         func: consoleOutput1
     };
     timeline.push(sayItOut1);

     var sayItOut2 = {
          type: jsPsychCallFunction,
          func: consoleOutput2
      };
      timeline.push(sayItOut2);

     const goodbye_trial = {
       type: jsPsychHtmlKeyboardResponse,
       stimulus: 'goodbye world!',
       choices: "NO_KEYS",
       trial_duration: 2000
     };
     timeline.push(goodbye_trial);

     function consoleOutput3(){
       var time2 = jsPsych.getTotalTime();
       console.log("all done = " + time2);
     };

     var sayItOut3 = {
          type: jsPsychCallFunction,
          func: consoleOutput3
      };
      timeline.push(sayItOut3);

     return timeline;
}
