/*Vicky Zhou
Section E
vzhou@andrew.cmu.edu
Project-06-Clock*/ 

var prevsec;
var millisrollover;

function setup() {
    createCanvas(480, 480);
    millisrollover = 0;
}

function draw() {
	background(255);

	//current time 
	var h = hour();
	var m = minute();
	var s = second();


	//changes military to standard time
	if(h > 12){
		h = h - 12; 
	}

	//making seconds beocme smoother
	if (prevsec != s){
		millisrollover = millis();
	}
	prevsec = s;
	var mills = floor(millis() - millisrollover);
	var secfraction = s + (mills / 1000);

	//map function to adjust ratio of time to canvas size
	var hourmap = map(h, 0, 12, 0, height);
	var minmap = map(m, 0, 59, 0, height);
	var secmap = map(secfraction, 0, 59, 0, height);


	// seconds that spiral outwards 
		push();
		for (i = 0; i <= 360; i ++){
			fill(secmap, 180, 190, 5);
			stroke(200, 100, 20);
			strokeWeight(0.9);
			rotate(degrees(180));
			translate(-390, -300);
			ellipse(width/2, height/2, secmap, secmap);
		}
		pop();


	//min triangle that shifts from left to right
		push();
		for (i = 0; i <= 360; i ++){
			fill(200, minmap, 190, 20);
			stroke(100, 100, 200);
			strokeWeight(1);
			triangle(i + 480, 480, 0, i + 480, minmap, i * 20);
		}
		pop();


	//hour bar that travels from top to bottom 
		push();
		for (i = 0; i <= 360; i += 20){
			fill(240, 240, 240, 0.05);
			stroke(100, 120, hourmap);
			strokeWeight(1.5);
			rectMode(CENTER);
			rect(100, hourmap, 1000, i/3);
		}
		pop();
}
