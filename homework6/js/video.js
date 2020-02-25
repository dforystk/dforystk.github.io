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
	video.playbackRate -= .1
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate += .1
	console.log("Speed is "+ video.playbackRate);
} 

// function skipAhead() {

// 	console.log("Current location is "+ );
// } 

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
       

// function gray() { 

// 	console.log("In grayscale")
// }

// function color() {

// 	console.log("In color") 
// }
