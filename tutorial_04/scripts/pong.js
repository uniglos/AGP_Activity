
//We will need somewhere to draw our scene
var canvas = null;
//We will need a context in which to draw (this can be 3D, 2D etc)
var context = null;

//Global variables for the Ball
var ballX = 0;
var ballY = 0;
var ballXSpeed = 0;

function main(){

    //Using the document that this script will be run from we can get an element by it's ID,
    //Lets ask for the canvas and set it's rendering context to 2D.
    canvas = document.getElementById("main_canvas");
    context = canvas.getContext("2d");
    //Add a border to our canvas so that we can see the area it occupies
    canvas.style = "border:1px solid #000000;";
    //set our canvas size based off our current browser window size
    canvas.width = window.innerWidth * 0.75;
    canvas.height = window.innerHeight * 0.50;

    //Set Ball X & Y Position to center of canvas
    ballX = canvas.width * 0.5;
    ballY = canvas.height * 0.5;
    ballXSpeed = 2;

    requestAnimationFrame(mainLoop);
}

function mainLoop(timestamp){
    //clear the canvas each frame
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    //move the ball along it's X axis by 2 pixels each time the function is called.
    //we want the ball to bounce off the edge of the screen
    if( ballX > canvas.width || ballX < 0 ){
        ballXSpeed = ballXSpeed * -1;
    }
    ballX = ballX + ballXSpeed;
        
    //Ball Radius
    var ballRadius = 10.0;
    //Set our context's fill style
    context.fillStyle = "#000000";
    //begin drawing a path
    context.beginPath();
    context.arc( ballX, ballY, ballRadius, 0, Math.PI*2);
    context.closePath();
    //fill what we have just drawn
    context.fill();
    //when an animation frame happens call this function again.
    requestAnimationFrame(mainLoop);

}