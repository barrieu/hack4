function createToneList(){
  var standard_tone = 1;
  var init_deviant_tone = 200;
  var init_decrement = 25;
  var init_increment = 75;
  var later_decrement = 10;
  var later_increment = 30;
  var reversal_limit = 20;
  var deviant_location = '-';

  var deviant_tone = init_deviant_tone;
  var centre_part = [];

  var deviant_selector = Math.random();

  if (deviant_selector > 0.5){
    centre_part = [standard_tone, deviant_tone];
    deviant_location = 'R';
  }else{
    centre_part = [deviant_tone, standard_tone];
    deviant_location = 'L';
  }

  var toneList = [];
  toneList[0] = standard_tone;
  toneList[1] = centre_part[0];
  toneList[2] = centre_part[1];
  toneList[3] = standard_tone;
  console.log(toneList + "  " + deviant_location );
  return toneList;
}
