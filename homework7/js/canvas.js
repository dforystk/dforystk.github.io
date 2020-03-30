// Variables!
var color = "red";
var radius = 15;
var x = 50;
var y = 150;
var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');

//You will want to add more
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
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

// canvas.addEventListener('mousedown', function(e){
// 	console.log(this);
// 	console.log(e);
// })

//Add a listener for the keydown

window.addEventListener("keydown", function(e){
	console.log(this);
	changeColor(e);
	clearCanvas(e);
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
		color = "blue"
	};
	if (e.keyCode == 82){
		color = "red"
	};
	if (e.keyCode == 71){
		color = "green"
	};
	if (e.keyCode == 89){
		color = "yellow"
	};
}

function clearCanvas(e){
	if (e.keyCode == 32){
		ctx.clearRect(0,0,canvas.width,canvas.height);
	}
}