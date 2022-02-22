function initialStuff(){

    var timeline = [];

    const hello_trial = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: 'Hello world!',
      choices: "NO_KEYS",
      trial_duration: 2000
    };
    timeline.push(hello_trial);

    const goodbye_trial = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: 'goodbye world!',
      choices: "NO_KEYS",
      trial_duration: 2000
    };
    timeline.push(goodbye_trial);

    function consoleOutput(){
      var version = jsPsych.version();
      console.log(version);
    };

    var sayItOut = {
         type: jsPsychCallFunction,
         func: consoleOutput
     };
     timeline.push(sayItOut);

     return timeline;
}
