function initialStuff(){

    var timeline = [];

    const hello_trial = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: 'Hello world!',
      choices: "NO_KEYS",
      trial_duration: 2000
    };
    timeline.push(hello_trial);

    function consoleOutput(){
      var version = jsPsych.version();
      console.log(version);
      jsPsych.pauseExperiment();
      setTimeout(jsPsych.resumeExperiment, 5000);
    };

    var sayItOut = {
         type: jsPsychCallFunction,
         func: consoleOutput
     };
     timeline.push(sayItOut);

     const goodbye_trial = {
       type: jsPsychHtmlKeyboardResponse,
       stimulus: 'goodbye world!',
       choices: "NO_KEYS",
       trial_duration: 2000
     };
     timeline.push(goodbye_trial);

     return timeline;
}
