// Setup the sounds to be used
var sound1 = new Howl({
  src: ['content/audio/bass.mp3'],
  loop: true,
  onload: playOnLoad
});

var sound2 = new Howl({
  src: ['content/audio/drums.mp3'],
  loop: true,
  onload: playOnLoad
});

var sound3 = new Howl({
  src: ['content/audio/guitar.mp3'],
  loop: true,
  onload: playOnLoad
});



var loaded = 0;       // amount of sounds that have been loaded
var sound1count = 0;  // the position of playback for sound1
var sound2count = 0;  // the position of playback for sound2 
var sound3count = 0;  // the position of playback for sound3

function count() {
  // Get the position of playback for each sound
  sound1count = sound1.seek();
  sound2count = sound2.seek();
  sound3count = sound3.seek();

  // Show the position of playback for each sound in HTML
  document.getElementById('sound1count').innerHTML = sound1count;
  document.getElementById('sound2count').innerHTML = sound2count;
  document.getElementById('sound3count').innerHTML = sound3count;

  // Show the position of playback for each sound in console
  console.log (sound1count);
  console.log (sound2count);
  console.log (sound3count);

  // If the position of playback for each sound is not equal...
  if (sound1count != sound2count || sound1count != sound3count) { 
    document.getElementById('message').innerHTML = 'OUT OF SYNC'; // Show OUT OF SYNC in HTML
  } else {
    document.getElementById('message').innerHTML = ''; // Clear message in HTML
  }

}

function playOnLoad(){
 loaded += 1; // Add 1 to amount of sounds loaded
 document.getElementById('message').innerHTML = 'Loaded: ' + loaded; // Show amount of sounds loaded in HTML
 if (loaded == '3') { // when all sounds are loaded...
    sound1.play(); // play sound1
    sound2.play(); // play sound2
    sound3.play(); // play sound3

    setInterval(count, 1000); // Check the position of playback every second
    
  }
}




// Checkboxes mute and unmute sound
var mute1 = document.getElementById('mute1');
mute1.addEventListener('change', function() {
  if(this.checked){
    sound1.mute(false);
    sound1.fade(0, 1, 1000);
  }
  else{
    sound1.mute(true);
  }
});

var mute2 = document.getElementById('mute2');
mute2.addEventListener('change', function() {
  if(this.checked){
    sound2.mute(false);
    sound2.fade(0, 1, 1000);
  }
  else{
    sound2.mute(true);
  }
});

var mute3 = document.getElementById('mute3');
mute3.addEventListener('change', function() {
  if(this.checked){
    sound3.mute(false);
    sound3.fade(0, 1, 1000);
  }
  else{
    sound3.mute(true);
  }
});

// Stop and play
var stopPlay = document.getElementById('stopPlay');
stopPlay.addEventListener('click', function() {
  if ( sound1.playing() === true ) {
    sound1.stop();
    sound2.stop();
    sound3.stop();
    this.innerHTML = 'PLAY';
  }
  else {
    sound1.play();
    sound2.play();
    sound3.play();
    this.innerHTML = 'STOP';
  }
});

// Mute sounds if you are not watching the webpage
ifvisible.on("blur", function(){
  sound1.mute(true);
  sound2.mute(true);
  sound3.mute(true);
});

ifvisible.on("focus", function(){
    sound1.mute(false);
    sound2.mute(false);
    sound3.mute(false);
});