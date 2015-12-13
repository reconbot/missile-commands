var five = require('johnny-five');
var songs = require('j5-songs');

var board = new five.Board();

board.on('ready', function(){
  var rightArmer = new five.Switch(2);
  var rightLaunch = new five.Button(3);
  var rightLaunchLight = new five.Led(4);

  var leftArmer = new five.Switch(5);
  var leftLaunch = new five.Button(6);
  var leftLaunchLight = new five.Led(7);

  var piezo = new five.Piezo(9);
  var song = songs.load('starwars-theme');

  var launched = true;

  leftArmer.on('close', function(){
    console.log('leftArmer:close');
    leftLaunchLight.on();
    piezo.off().stop();
  });

  leftArmer.on('open', function(){
    console.log('leftArmer:open');
    leftLaunchLight.off()
    piezo.off().stop();
    launched = false;
  });

  leftLaunch.on('press', function(){
    console.log('leftLaunch:press');
    if (leftArmer.isClosed && !launched){
      launched = true;
      leftLaunchLight.off();
      piezo.play(song);
    }
  });

  rightArmer.on('close', function(){
    console.log('rightArmer:close');
    rightLaunchLight.on();
  });
  rightArmer.on('open', function(){
    console.log('rightArmer:open');
    rightLaunchLight.off()
  });
  rightLaunch.on('press', function(){
    console.log('rightLaunch:press');
    if (rightArmer.isClosed){
      rightLaunchLight.off();
    }
  });


  this.repl.inject({
    rightArmer: rightArmer,
    rightLaunch: rightLaunch,
    rightLaunchLight: rightLaunchLight,
    leftArmer: leftArmer,
    leftLaunch: leftLaunch,
    leftLaunchLight: leftLaunchLight
  });

});
