
const jsPsych = initJsPsych();
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

    // function consoleOutput1(){
    //   var version = jsPsych.version();
    //   console.log("version = " + version);
    //   var time = jsPsych.getTotalTime();
    //   console.log("entry = " + time);
    //   playList1([20,30,70,50]);
    //   jsPsych.pauseExperiment();
    //   setTimeout(jsPsych.resumeExperiment, 5000);
    // };

    function consoleOutput1(){
      var version = jsPsych.version();
      console.log("version = " + version);
      var time = jsPsych.getTotalTime();
      console.log("entry = " + time);

      tonesToPlay = createToneList();
      console.log(tonesToPlay[0] + " " + tonesToPlay[1] + " "  + tonesToPlay[2] + " "  + tonesToPlay[3]);
      playList1([1,249,1,1]);
      //playList1([ tonesToPlay[0],tonesToPlay[0],tonesToPlay[0],tonesToPlay[0] ]);

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
