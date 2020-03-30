// Variables!
var color ="red";
var radius = 15;
var x = 50;
var y = 150;
var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle = color

//You will want to add more


//Listeners!!
//Add a listener for loading the window
window.addEventListener('load', function(e){
	console.log('Hello');
	canvas.height = window.innerHeight * .75;
	canvas.width = window.innerWidth * .75;
})
//Add a listener for the mouse movement

canvas.addEventListener('mousemove', function(e){
	draw(25,25);
	console.log(this);
	console.log(e);
})

//Add a listener for the touch move
canvas.addEventListener('mousedown', function(e){
	console.log(this);
	console.log(e);
})

//Add a listener for the keydown
canvas.addEventListener('keydown', function(e){
	console.log(this);
	console.log(e);
})

// Functions!
// I would add a function for draw
function draw (x,y) {
        //use x and y below
        console.log("I'M GONNA DRAW")
        //this always draws in position 50,50
        ctx.fill();
        ctx.arc(15,15,15,0,2 * Math.PI);
    }