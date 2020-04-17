// Variables!
var color = "red";
var radius = 15;
var x = 50;
var y = 150;
var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');
var clr = document.querySelector('#clr');

//You will want to add more
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.offsetX - rect.left,
        y: evt.offsetY - rect.top
    };
}

//Listeners!!
//Add a listener for loading the window

window.addEventListener('load', function(e){
	console.log('Ready to draw?');
	canvas.height = window.innerHeight * .75;
	canvas.width = window.innerWidth * .75;
})

//Add a listener for the mouse movement

canvas.addEventListener("mousemove", function (e) {
    var mousePos = getMousePos(canvas, e);
    console.log(mousePos.x + ',' + mousePos.y);
    draw(mousePos.x, mousePos.y);
}, false);


//Add a listener for the touch move
window.addEventListener("touchstart", function (e){
	console.log(e.touches)
	ctx.beginPath();
})
window.addEventListener("touchmove", function(e){
	draw(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
})
window.addEventListener("touchend", function(e){
	ctx.closePath();
})

//Add a listener for the keydown

document.addEventListener("keydown", function(e){
	console.log(e);
	changeColor(e);
	clearCanvas(e);
	if (e.key == "Arrow Up"){
		draw(e.mousePos.x, e.mousePos.y) = false;
	}
	if (e.key == "Arrow Down"){
		draw(e.mousePos.x, e.mousePos.y) = false;
	}
})

//Color picker-----------------

clr.addEventListener("input", function(e){
	console.log(this.value);
	console.log('Color is now ' + this.value);
	color = this.value;
})

// Functions!
// I would add a function for draw
function draw (x,y) {
        //use x and y below
        console.log("Drawing...")
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(x,y,15,0,2 * Math.PI);
        ctx.fill();        
    }

function changeColor(e){
	if (e.keyCode == 66){
		console.log('Paint is now blue')
		color = "rgb(0,128,255)"
	};
	if (e.keyCode == 82){
		console.log('Paint is now red')
		color = "rgb(255,0,0)"
	};
	if (e.keyCode == 71){
		console.log('Paint is now green')
		color = "rgb(0,255,0)"
	};
	if (e.keyCode == 89){
		console.log('Paint is now yellow')
		color = "rgb(255,255,0)"
	};
}

function clearCanvas(e){
	if (e.keyCode == 32){
		ctx.clearRect(0,0,canvas.width,canvas.height);
	}
}

