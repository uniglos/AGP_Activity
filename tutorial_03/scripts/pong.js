
//We will need somewhere to draw our scene
var canvas = null;
//We will need a context in which to draw (this can be 3D, 2D etc)
var context = null;

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

}