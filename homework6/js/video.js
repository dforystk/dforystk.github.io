var video;
var volume;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play()
	console.log("Play Video");
	console.log(video)
	volume = document.querySelector("#volume");
	console.log(volume)
	volume.innerHTML = video.volume * 100 + "%"
} 

function pauseVid() { 
	video.pause()
	console.log("Pause Video");
} 
function decreaseSpeed() { 
	video.playbackRate -= .2
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate += .25
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	video.currentTime += 60
	console.log("Current location is " + video.currentTime);
} 

function mute() { 
	let mute = document.querySelector("#mute")
	console.log(video.muted)
  	if (video.muted){
  		video.muted=false;
		console.log("Unmuted");
  	}
    else{
    	video.muted = true;
      	console.log("Muted");
	}
	console.log(mute)
	var button= document.querySelector('#mute')
	button.innerHTML="Unmuted"
}

function changeVolume() {
	let slider = document.querySelector("#volumeSlider")
	console.log(slider.value)
	video.volume = slider.value/100
	console.log("Volume is " + video.volume)
	volume.innerHTML = slider.value + "%"
}
       
function gray() { 
	video.style.filter = 'grayscale(100%'
	console.log("In grayscale")
}

function color() {
	video.style.filter = 'grayscale(0%)'
	console.log("In color") 
}

// ----------PLAY BUTTON-------------

let playbutton = document.querySelector('#play')
playbutton.innerHTML = '<img src="../buttons/play_button.png"/>'