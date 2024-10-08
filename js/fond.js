window.onload = function() {
	
	//Create canvas and initialize it's context
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	
	//Set the dimensions of canvas equal to the window's dimensions
	var W = window.innerWidth, H = window.innerHeight;
	canvas.width = W;
	canvas.height = H;
	
	//Create an array of circles
	var circles = []; 
	var circles_count = 20;
	
	for(var i = 0; i < circles_count; i++ ){
		circles.push(new create_circle());
	}
	
	//Function to create circles with different positions and velocities
	function create_circle() {
		//Random Position
		this.x = Math.random()*W;
		this.y = Math.random()*H;
		
		//Random Velocities
		this.vx = 0.1+Math.random()*0.5;
		this.vy = -this.vx;
		
		//Random Radius
		this.r = 10 + Math.random()*50;
	}
	
	//Create line particles
	var lines = [];
	var lines_count = 15;

	for(var i = 0; i < lines_count; i++){
		lines.push(new create_lines());
	}
	
	function create_lines() {
		//Random Positions
		this.x = Math.random()*W;
		this.y = Math.random()*H;
		
		//Random Velocities
		this.vx = 0.1+Math.random()*0.8;
		this.vy = -this.vx;
		
		//Random Length
		this.l = 5 + Math.random()*20;
	}
	
	//Function to draw the background
	function draw() {
		//Create the gradient
		var grad = ctx.createLinearGradient(0, 0, W, H);
		grad.addColorStop(0, 'rgb(0, 0, 40)');
		grad.addColorStop(0.9, 'rgb(0, 0, 10)');
		
		//Fill the canvas with the gradient
		ctx.globalCompositeOperation = "source-over";
		ctx.fillStyle = grad;
		ctx.fillRect(0,0,W,H);

		//Fill the canvas with the circles
		for(var i = 0; i < circles.length; i++) {
			var c = circles[i];
			
			//Gradient for circle to create blur
			var blur_grad = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.r);
			blur_grad.addColorStop(0, "rgba(0,0,60,0.5)");
        	blur_grad.addColorStop(0.85, "rgba(0,0,30,0.5)");
        	blur_grad.addColorStop(1, "rgba(0,0,15,0.0)");
			
			//Draw the circle and fill it with the blur gradient
			ctx.beginPath();
			ctx.globalCompositeOperation = "lighter";		
			ctx.fillStyle = blur_grad;
			ctx.arc(c.x, c.y, c.r, Math.PI*2, false);
			ctx.fill();
			
			//Lets use the velocity now
			c.x += c.vx;
			c.y += c.vy;
			
			//To prevent the circles from moving out of the canvas
			if(c.x < -50) c.x = W+50;
			if(c.y < -50) c.y = H+50;
			if(c.x > W+50) c.x = -50;
			if(c.y > H+50) c.y = -50;
		}
		
		//Fill the canvas with lines
		for(var i = 0; i < lines.length; i++) {
			var l = lines[i];
			
			//Draw the lines
			ctx.beginPath();
			ctx.globalCompositeOperation = "lighter";
			
			//Save and restore are used to prevent the circles from getting
			//the glow or shadow
			ctx.save();
			ctx.moveTo(l.x, l.y);
			ctx.shadowColor = "blue";
			ctx.shadowBlur = 10;
			ctx.lineTo(l.x + l.l, l.y - l.l);
			ctx.strokeStyle = "rgba(0,0,50,0.5)";
			ctx.stroke();
			ctx.restore();
			
			//Move the lines
			l.x += l.vx;
			l.y += l.vy;
			
			//To prevent the lines from moving out of the canvas
			if(l.x < -20) l.x = W+20;
			if(l.y < -20) l.y = H+20;
			if(l.x > W+20) l.x = -20;
			if(l.y > H+20) l.y = -20;
		}
	}
	
	setInterval(draw, 25);

} 