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
	ctx.beginPath();
})
window.addEventListener("touchmove", function(e){
	draw(mousePos.x, mousePos.y);
})
window.addEventListener("touchend", function(e){
	ctx.closePath();
})

//Add a listener for the keydown

document.addEventListener("keydown", function(e){
	changeColor(e);
	clearCanvas(e);
})

//Color picker-----------------

clr.addEventListener("input", function(e){
	console.log(this.value);
	console.log(e);
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
		color = "rgb(0,128,255)"
	};
	if (e.keyCode == 82){
		color = "rgb(255,0,0)"
	};
	if (e.keyCode == 71){
		color = "rgb(0,255,0)"
	};
	if (e.keyCode == 89){
		color = "rgb(255,255,0)"
	};
}

function clearCanvas(e){
	if (e.keyCode == 32){
		ctx.clearRect(0,0,canvas.width,canvas.height);
	}
}

function stopDrawing(e){
	if (e.keyCode == 38){
		ctx.closePath();
	}
}
