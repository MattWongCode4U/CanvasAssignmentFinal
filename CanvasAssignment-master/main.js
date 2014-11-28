//X-Coordinate of smoke
var smokeX = 230;
//Y-Coordinate of smoke
var smokeY = 30;
//Horizontal size of smoke
var horizontalScale = 0.6;
//Vertical size of smoke
var verticalScale = 0.3;

function createCanvas() {
    var canvas = document.getElementById("house");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
		
        drawHouse(ctx);
		drawSmoke(ctx);
		animation(ctx);
    } else {
        alert("Canvas not supported.");
    }
}

function drawHouse(ctx) {

   // Ground
   ctx.fillStyle = "darkolivegreen";
   ctx.beginPath();
   ctx.moveTo(0, 125);
   ctx.lineTo(0, 300);
   ctx.lineTo(300, 300);
   ctx.lineTo(300, 125);
   ctx.lineTo(0, 125);
   ctx.closePath();
   ctx.fill();

   // Side of house
   ctx.fillStyle = "cyan";
   ctx.beginPath();
   ctx.moveTo(195, 118.5);
   ctx.lineTo(195, 190);
   ctx.lineTo(263, 160);
   ctx.lineTo(263, 90);
   ctx.stroke();
   ctx.lineTo(235, 55);
   ctx.lineTo(195, 118.5)
   ctx.lineTo(195, 190);
   ctx.closePath();
   ctx.fill();

   // Chimney Right side
   ctx.lineWidth = 2;
   ctx.fillStyle = "firebrick";
   ctx.beginPath();
   ctx.moveTo(216.5, 47);
   ctx.lineTo(223, 47.75);
   ctx.lineTo(223, 33);
   ctx.lineTo(216.5, 35);
   ctx.lineTo(216.5, 47);
   ctx.closePath();
   ctx.stroke();
   ctx.fill();

   // Chimney Front side
   ctx.fillStyle = "firebrick";
   ctx.beginPath();
   ctx.moveTo(216.5, 35);
   ctx.lineTo(207, 34);
   ctx.lineTo(207, 47);
   ctx.stroke();
   ctx.lineTo(216.5, 47);
   ctx.lineTo(216.5, 35);
   ctx.closePath();
   ctx.fill();

   // Chimney Top
   ctx.lineWidth = 1;
   ctx.fillStyle = "slategray";
   ctx.beginPath();
   ctx.moveTo(206, 34);
   ctx.lineWidth = 2;
   ctx.lineTo(213, 32);
   ctx.lineTo(223, 33);
   ctx.stroke();
   ctx.lineTo(206, 34);
   ctx.closePath();
   ctx.fill();

   // Roof part 1
   ctx.lineWidth = 1;
   ctx.fillStyle = "white";
   ctx.beginPath();
   ctx.moveTo(235, 50);
   ctx.lineTo(200, 115);
   ctx.lineTo(50, 95);
   ctx.lineTo(85, 35);
   ctx.lineTo(235, 50);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();

   // Roof Trim part 1
   ctx.fillStyle = "pink";
   ctx.beginPath();
   ctx.moveTo(235, 50);
   ctx.lineTo(270, 95);
   ctx.lineTo(270, 99);
   ctx.lineTo(236, 55);
   ctx.lineTo(235, 50);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();

   // Roof Trim part 2
   ctx.fillStyle = "chartreuse";
   ctx.beginPath();
   ctx.moveTo(235, 50);
   ctx.lineTo(200, 115);
   ctx.lineTo(200, 119);
   ctx.lineTo(235, 55);
   ctx.lineTo(235, 50);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();

   // Main frame front
   ctx.fillStyle = "gainsboro";
   ctx.beginPath();
   ctx.moveTo(60, 100.33);
   ctx.lineTo(60, 170);
   ctx.lineTo(195, 190);
   ctx.lineTo(195, 118.5);
   ctx.stroke();
   ctx.lineTo(60, 100.33);
   ctx.closePath();
   ctx.fill();

   // Roof Trim part 3
   ctx.fillStyle = "red";
   ctx.beginPath();
   ctx.moveTo(200, 115);
   ctx.lineTo(50, 95);
   ctx.lineTo(50, 99);
   ctx.lineTo(200, 119);
   ctx.lineTo(200, 115);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();

}

//Draws the smoke
function drawSmoke(ctx){
	var canvas = document.getElementById("house");
	var ctx = canvas.getContext("2d");
	
	//Draw arc
	var xArc = 0;
	var yArc = 0;
	var radius = 30;
	ctx.save();
	ctx.translate(smokeX, smokeY);
	ctx.scale(horizontalScale, verticalScale);
	
	ctx.beginPath();
	ctx.arc(xArc, yArc, radius, 0, 2 * Math.PI, false);
	
	ctx.restore();
	
	ctx.fillStyle = "grey";
	ctx.fill();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "grey";
	ctx.stroke();
	
	ctx.restore();
}
		
//Animates the smoke movement
function animation(ctx) {
	var canvas = document.getElementById("house");
	var ctx = canvas.getContext("2d");
	drawHouse(ctx);
	drawSmoke(ctx);
	setInterval(animateSmoke, 200);
}
		
//Animates the smoke
function animateSmoke(ctx) {
	var canvas = document.getElementById("house");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
	
	drawHouse(ctx);
	drawSmoke();
	
	//Moves the smoke to the right
	smokeX += 5;
		//Resets values
		if (smokeX > ctx.canvas.width) {
			smokeX = 230;
			smokeY = 45;
			horizontalScale = 1.0;
			verticalScale = 0.3;
		}
	//Moves the smoke up
	smokeY -= 5;
		//Resets values
		if (smokeY < 0) {
			smokeX = 230;
			smokeY = 30;
			horizontalScale = 0.6;
			verticalScale = 0.3;
		}
	//Increases horizontal size
	horizontalScale += 0.1;
	//Increases vertical size
	verticalScale += 0.1;
}