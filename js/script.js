// onclick or nor onclick thats the question

let testing = (s) => { return console.log( s == undefined ? "testing" : s);}


//dvdScreen move
let ctx = canvas.getContext("2d");

//elemento imagen y canvas
let image = document.createElement('img');
image.src = 'img/logo.png';

//variables canvas info dibujar
let imgData = {

	w : 100,
	h : 50
}
const colors = ['#044444', '#5fb969', '#ee53b9', '#a5ce34', '#b54915', '#3cc0ce'];	

var count = 0, x,y,color;

let limits = {
	left : 0,
	right : canvas.width - imgData.w,
	top : 0,
	bottom : canvas.height - imgData.h
}

var boolDir = {
	
	r : true,
	b : true
}

let animarCuadro = setInterval(animC, 300);


function animC(){

	ctx.clearRect(x,y, imgData.w, imgData.h);
	ctx.save();
	if(count == 0) {
		x = Math.random()* limits.right | 0;
		y = Math.random()* limits.bottom | 0; 
	}
	
	if(x >= limits.right && boolDir.r == true){
		boolDir.r = false;
		x = x+5;
		y = y-2;
		color = colors[Math.random()*colors.length | 0];
	} else if ( y >= limits.bottom && boolDir.b == true){
		boolDir.b = false;
		x = x-5;
		y = y+2;
		color = colors[Math.random()*colors.length | 0];
	} else if (x <= limits.left && boolDir.r == false){
		boolDir.r = true;
		x = x-5;
		y = y+2;
		color = colors[Math.random()*colors.length | 0];
	} else if ( y <= limits.top && boolDir.b == false){
		boolDir.b = true;
		x = x+2;
		y = y-5;
		color = colors[Math.random()*colors.length | 0];
	}
	
	x = boolDir.r ? x + 10 : x - 10;
	y = boolDir.b ? y + 10 : y - 10;
	
	
	
	ctx.imageSmoothingEnabled = true;
    	ctx.drawImage(image, x, y, imgData.w, imgData.h);
	
	ctx.globalCompositeOperation = "source-atop";  
	 
	ctx.fillStyle = color;
	
	ctx.fillRect( x, y, imgData.w, imgData.h);
	ctx.fill();
	ctx.restore();
	if(count >= 400 && (x == 0 && y == 0)){
		stopAnimC();
	}
	count++
}

function stopAnimC(){

	clearInterval(animarCuadro);
	animarCuadro = null;
}

onOff.onclick = function(){
	stopAnimC()

}
