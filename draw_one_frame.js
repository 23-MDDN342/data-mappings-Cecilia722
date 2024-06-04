function draw_one_frame(cur_frac) {
	let sun_size = height / 8;
  
	colorMode(RGB)
	noStroke();
  
  
	
  
   
  
	stroke(0);
	fill(100, 100, 100);
  
	let b1_y = 1 / 10 * height;
	let b2_y = 1 * height;
  
	let b1_size = height / 150;
	let b2_size = height / 5.1;
  
	let silk_space = height / 155.
	let b1_fac = height / 40
  
  
  
	let color_1 = color("#F0EAD2")
	let color_2 = color("#DDE5B6")
	let color_3 = color("#ADC178")
	let color_4 = color("#A98467")
	let color_5 = color("#6C584c")
	let color_6 = color("#6C584c")
  
	let color_7 = color("#A98467")
	let color_8 = color("#ADC178")
	let color_9 = color("#ffffff")
	let color_10 = color("#DDE5B6")
	let color_11 = color("#f08080")  
	let color_12 = color("#fbc4ab")
  
  
	let arrayOfColours = [
	  color_1,
	  color_2,
	  color_3,
	  color_4,
	  color_5,
	  color_6,
	  color_7,
	  color_8,
	  color_9,
	  color_10,
	  color_11,
  
	  color_5,
	  color_10,
	  color_3,
	  color_4,
	  color_5,
	  color_6,
	  color_7,
	  color_6,
	  color_9,
	  color_10,
  
	  color_5,
	  color_6,
	  color_3,
	  color_4,
	  color_5,
	  color_6,
	  color_10,
	  color_8,
	  color_9,
	  color_10,
  
	]
  
	let grid_points1 = [
	  -0.8 * width,
	  -0.6 * width,
	  -0.4 * width,
	  -0.2 * width,
	  -0 * width,
	  0.2 * width,
	  0.4 * width,
	  0.6 * width,
	  0.8 * width,
	  1 * width,
	  1.2 * width,
	  1.4 * width,
	  1.6 * width,
	  1.8 * width,
	  2.0 * width,
  
	  2.2 * width,
	  2.4 * width,
	  2.6 * width,
	  2.8 * width,
	  3.0 * width,
  
	  3.2 * width,
	  3.4 * width,
	  3.6 * width,
	  3.8 * width,
	  4.0 * width,
  
	  4.2 * width,
	  4.4 * width,
	 4.6 * width,
	  4.8 * width,
	  5.0 * width,
  
  
	
  
  
	  
  
  
  
  
  
  
	]
  
	let grid_pointX = [
	  -0.8 * width,
	  -0.6 * width,
	  -0.4 * width,
	  -0.2 * width,
	  -0 * width,
	  0.2 * width,
	  0.4 * width,
	  0.6 * width,
	  0.8 * width,
	  1 * width,
	  1.2 * width,
	  1.4 * width,
	  1.6 * width,
	  1.8 * width,
	  2.0 * width,
  
	  2.2 * width,
	  2.4 * width,
	  2.6 * width,
	  2.8 * width,
	  3.0 * width,
  
	
	]
  
  
	let low_piontY = 0
	let high_pointY = 0.03
  
	let grid_pointY = [
	  low_piontY * height,
	  high_pointY * height,
	  low_piontY * height,
	  high_pointY * height,
	  low_piontY * height,
	  high_pointY * height,
	  low_piontY * height,
	  high_pointY * height,
	  low_piontY * height,
	  high_pointY * height,
	  low_piontY * height,
	  high_pointY * height
  
  
  
	]
  
	let low_piontY_2 = 0
	let high_pointY_2 = 0.01
  
	let grid_pointY_2 = [
	  low_piontY * height,
	  high_pointY_2* height,
	  low_piontY * height,
	  high_pointY_2 * height,
	  low_piontY * height,
	  high_pointY_2* height,
	  low_piontY * height,
	  high_pointY_2* height,
	  low_piontY * height,
	  high_pointY_2* height,
	  low_piontY * height,
	  high_pointY_2 * height
  
	]
  
  
  
  
  
   // background
   noStroke();
   fill(169, 132, 103);
   rect(0, height/2.4, width, height );
  
   
  
   fill(171, 163, 112);
   rect(0, height/2.4, width, height/2.4 );
  
   
  var _width = 600;
  var _height = 900;
  var _size = 20; // hexagon radius
  
  function setup() {
   
   createCanvas(_width, _height);
   noLoop();
   
   background(255);
   noFill();
   stroke(0);
   strokeWeight(2);
  
  }
  
  function draw() {
  
   // clear background
   background(255);
   
   // line length (hypotenuse)
   var h = sin(PI/3) * _size;
   
   for (var i = 0; i <= _width / (_size * 3); i++) {
   for (var j = 0; j <= (_height / h) + 1; j++) {
  
   // reference points (centre of each hexagon)
   var x = i * _size * 3 + (_size / 2);
   var y = j * h;
   // offset each odd row
   if (j % 2 > 0) {
   x += _size * 1.5;
   }
  
   push();
   
   translate(x, y);
   
   // random hexagon 'rotation' (0, 120, 240 degrees)
   rotate(int(random(0, 3)) * PI/3);
   
   // draw line
   line(0, -h, 0, h);
   
   // draw arcs
   arc(-_size, 0, _size, _size, -PI/3, PI/3);
   arc( _size, 0, _size, _size, PI/3 * 2, PI/3 * 4); 
   
   pop();
  
   } 
   }
  
  }
  
  function mousePressed() {
   
   redraw();
  
  }
  
  
  
  
   //yellow edge
   
   fill(255,249,191);
   rect(0, height / 1.922, width, height /30);
  
  
  
  
  
  
  
  
  
  
  
  
   
  
  
   //girls
	for (let i = 0; i < grid_pointX.length - 1; i++) {
	  let cur_x_pos = map(cur_frac, 0, 1, grid_pointX[i], grid_pointX[i + 1]);
	  let cur_y_pos = map(cur_frac, 0, 1, grid_pointY[i], grid_pointY[i + 1])
  
   //arms shadow
  
   fill(48, 21, 45,100);
	  
   push()
   translate(cur_x_pos+b2_size*0.10, cur_y_pos + height / 1.13)
   rotate(PI/1.2)
   rect(0, 0, b2_size/1.6, b2_size/4.6,b2_size/3);
   pop()
  
   push()
   translate(cur_x_pos+b2_size*0.99, cur_y_pos + height / 1.178)
   rotate(PI/5.8)
   rect(0, 0, b2_size/1.6, b2_size/4.6,b2_size/3);
   pop()
  
  
  rect(cur_x_pos-b2_size*0.59, cur_y_pos + height /1.117, b2_size/4, b2_size/4,b2_size);
  rect(cur_x_pos+b2_size*1.29, cur_y_pos + height /1.117, b2_size/4, b2_size/4,b2_size);
  
  
  
  rect(cur_x_pos-b2_size*0.52, cur_y_pos + height /1.13, b2_size/10, b2_size/10,b2_size);
  rect(cur_x_pos+b2_size*1.36, cur_y_pos + height /1.13, b2_size/10, b2_size/10,b2_size);
  
   //hair back
	  fill(color_5);
	  rect(cur_x_pos, cur_y_pos + height / 1.6, b2_size, b2_size/1.2,b2_size/3);
  //dress
	  fill(color_3);
	  rect(cur_x_pos+b2_size/20, cur_y_pos + height / 1.203, b2_size/1.1, b2_size/2,b2_size/3);
  //face
	  fill(color_1);
	  rect(cur_x_pos, cur_y_pos + height / 1.5, b2_size, b2_size/1.2,b2_size/3);
  
  
  //mouth red
	 fill(color_11)
	 rect(cur_x_pos+b2_size/3, cur_y_pos + height /1.3, b2_size/3, b2_size/5,b2_size/3);
  
  //cheeks
	 fill(color_12)
	 rect(cur_x_pos+b2_size/9, cur_y_pos + height / 1.32, b2_size/5, b2_size/5,b2_size/1);
	 rect(cur_x_pos+b2_size/1.45, cur_y_pos + height / 1.32, b2_size/5, b2_size/5,b2_size/1);
  
	// teeth
	fill(255,255,255)
	 rect(cur_x_pos+b2_size/2.5, cur_y_pos + height / 1.329, b2_size/5, b2_size/5,b2_size/20);
  
  
  //mouth out & neck
	 fill(color_1);
	 rect(cur_x_pos+b2_size/3.8, cur_y_pos + height /1.34, b2_size/2.1, b2_size/5,b2_size/3);
	 rect(cur_x_pos+b2_size/3, cur_y_pos + height /1.24, b2_size/3, b2_size/5,b2_size/20);
  
	 
   
	 fill(color_5);
	 //eyes
	 rect(cur_x_pos+b2_size/6, cur_y_pos + height / 1.354, b2_size/5, b2_size/4.5,b2_size/3);
	 rect(cur_x_pos+b2_size/1.6, cur_y_pos + height / 1.354, b2_size/5, b2_size/4.5,b2_size/3);
  
  
	 //hair mid
	 rect(cur_x_pos-b2_size/11, cur_y_pos + height / 1.52, b2_size*1.17, b2_size/3,b2_size/4);
	 rect(cur_x_pos+b2_size/1.2, cur_y_pos + height / 1.48, b2_size/4, b2_size/2.5,b2_size/3);
	 rect(cur_x_pos-b2_size/11, cur_y_pos + height / 1.48, b2_size/4, b2_size/2.5,b2_size/3);
  
	 //ears
	 fill(color_1);
	 rect(cur_x_pos+b2_size/1.09, cur_y_pos + height / 1.354, b2_size/5, b2_size/4.5,b2_size/3);
	 rect(cur_x_pos-b2_size/9, cur_y_pos + height / 1.354, b2_size/5, b2_size/4.5,b2_size/3);
  
  
	//slives back
	 fill(color_3);
	 rect(cur_x_pos+b2_size/1.3, cur_y_pos + height /1.22, b2_size/3, b2_size/2.3,b2_size/3);
	 rect(cur_x_pos-b2_size/9, cur_y_pos + height / 1.22, b2_size/3, b2_size/2.3,b2_size/3);
  
	 //dress bottom
	 fill(color_2);
	 ellipse(cur_x_pos+b2_size/2, cur_y_pos + height /0.99, b2_size/0.7, b2_size,b2_size*2);
	
	 // nose
	fill(251, 196, 171,180)
	 rect(cur_x_pos+b2_size/2.5, cur_y_pos + height / 1.31, b2_size/5, b2_size/12,b2_size/1);
  
	 //arms
  
	 fill(color_1);
	  
	  push()
	  translate(cur_x_pos+b2_size*0.08, cur_y_pos + height / 1.13)
	  rotate(PI/1.2)
	  rect(0, 0, b2_size/1.6, b2_size/4.6,b2_size/3);
	  pop()
  
	  push()
	  translate(cur_x_pos+b2_size*1.01, cur_y_pos + height / 1.178)
	  rotate(PI/5.8)
	  rect(0, 0, b2_size/1.6, b2_size/4.6,b2_size/3);
	  pop()
  
	 
   rect(cur_x_pos-b2_size*0.6, cur_y_pos + height /1.12, b2_size/4, b2_size/4,b2_size);
   rect(cur_x_pos+b2_size*1.28, cur_y_pos + height /1.12, b2_size/4, b2_size/4,b2_size);
  
  
  
   rect(cur_x_pos-b2_size*0.52, cur_y_pos + height /1.13, b2_size/10, b2_size/10,b2_size);
   rect(cur_x_pos+b2_size*1.36, cur_y_pos + height /1.13, b2_size/10, b2_size/10,b2_size);
	 
  
  
  
   //slives front
   fill(color_3);
   rect(cur_x_pos+b2_size/1.3, cur_y_pos + height /1.2, b2_size/3, b2_size/3,b2_size/3);
   rect(cur_x_pos-b2_size/9, cur_y_pos + height / 1.2, b2_size/3, b2_size/3,b2_size/3);
  
  
  
	}
  
	// sky
	fill("#DDE5B6");
	rect(0, 0, width, height/1.89);
  
  
	if (debugView) {
	  stroke(250, 0, 0);
  
	  strokeWeight(height / 100);
	  noFill();
	  for (let i = 0; i < arrayOfColours.length - 1; i++) {
		cur_x_pos = map(cur_frac, 0, 1, grid_points1[i], width * 2)
		cur_x_pos_reverse = map(cur_frac, 1, 0, grid_points1[i], width * 2)
		rect(cur_x_pos - i * width / 10, b1_y, b1_size * b1_fac, b1_size);
		rect(cur_x_pos_reverse - i * width / 10, b1_y, b1_size * b1_fac, b1_size);
		rect(cur_x_pos - i * width / 10 - width / 20, b1_y - silk_space, b1_size * b1_fac, b1_size);
		rect(cur_x_pos_reverse - i * width / 10 - width / 20, b1_y - silk_space, b1_size * b1_fac, b1_size);
  
	  }
	}
  
  // Fabric
  
	noStroke()
	for (let ii = 0; ii < 6; ii++) {
	  for (let i = 0; i < arrayOfColours.length - 1; i++) {
		fill(arrayOfColours[i])
		let cur_x_pos = map(cur_frac, 0, 1, grid_points1[i] - width / 4, width * 2)
		cur_x_pos_reverse = map(cur_frac, 1, 0, grid_points1[i] - width / 4, width * 2)
  
  
		rect(cur_x_pos - i * width / 10, b1_y * ii, b1_size * b1_fac, b1_size);
		rect(cur_x_pos_reverse - i * width / 10, b1_y * ii, b1_size * b1_fac, b1_size);
  
		rect(cur_x_pos - i * width / 10 - width / 20, b1_y * ii - silk_space, b1_size * b1_fac, b1_size);
		rect(cur_x_pos_reverse - i * width / 10 - width / 20, b1_y * ii - silk_space, b1_size * b1_fac, b1_size);
  
		rect(cur_x_pos - i * width / 10 - width / 20, b1_y * ii + silk_space, b1_size * b1_fac, b1_size);
		rect(cur_x_pos_reverse - i * width / 10 - width / 20, b1_y * ii + silk_space, b1_size * b1_fac, b1_size);
  
		rect(cur_x_pos - i * width / 10 + width / 20, b1_y * ii + silk_space * 2, b1_size * b1_fac, b1_size);
		rect(cur_x_pos_reverse - i * width / 10 + width / 20, b1_y * ii + silk_space * 2, b1_size * b1_fac, b1_size);
  
		rect(cur_x_pos - i * width / 10 + width / 20, b1_y * ii - silk_space * 2, b1_size * b1_fac, b1_size);
		rect(cur_x_pos_reverse - i * width / 10 + width / 20, b1_y * ii - silk_space * 2, b1_size * b1_fac, b1_size);
  
  
  
	  }
	}
  
  
  
	  
  
  
  // yellow stripes
	noStroke()
	for (let ii = 0; ii < 6; ii++) {
	  for (let i = 0; i < grid_points1.length-1; i++) {
		fill(255,249,191)
		let cur_x_pos = map(cur_frac, -1, 1, grid_points1[i], width /2)
	   let cur_x_pos_reverse = map(cur_frac, 1, -1, grid_points1[i], width /2)
  
  
		rect(cur_x_pos, ii*b1_y- width / 35, width*10, b1_size*1.5);
		rect(cur_x_pos_reverse, ii*b1_y- width / 35, width*10, b1_size*1.5);
		
  
  
  
  
  
  
  
	  }
	}
  
  
  
  
  
  
  
	if (debugView) {
	  stroke(250, 50, 0);
	  strokeWeight(height / 50);
	  noFill();
	  for (let i = 0; i < grid_points1.length; i++) {
		rect(grid_points1[i], b2_y, b2_size, 2 * b2_size);
	  }
	}
  
	// tassels
	fill(255,249,191);
	noStroke();
	for (let i = 0; i < grid_pointX.length - 1; i++) {
	  let cur_x_pos = map(cur_frac, 0, 1, grid_pointX[i], grid_pointX[i + 1]);
	  let cur_y_pos = map(cur_frac, 0, 1, grid_pointY_2[i], grid_pointY_2[i + 1])
	  rect(cur_x_pos, cur_y_pos+height/1.9 , b2_size/30, b2_size/3);
	  rect(cur_x_pos+width/100, cur_y_pos+height/1.9 , b2_size/30, b2_size/3.2);
	  rect(cur_x_pos+2*width/100, cur_y_pos+height/1.9 , b2_size/30, b2_size/3);
	  rect(cur_x_pos+3*width/100, cur_y_pos+height/1.9 , b2_size/30, b2_size/3);
	  rect(cur_x_pos+4*width/100, cur_y_pos+height/1.9 , b2_size/30, b2_size/3);
	  rect(cur_x_pos+5*width/100, cur_y_pos+height/1.9 , b2_size/30, b2_size/3.24);
	  rect(cur_x_pos+6*width/100, cur_y_pos+height/1.9 , b2_size/30, b2_size/3.4);
	  rect(cur_x_pos+7*width/100, cur_y_pos+height/1.9 , b2_size/30, b2_size/3.1);
	  rect(cur_x_pos+8*width/100, cur_y_pos+height/1.9 , b2_size/30, b2_size/3);
	  rect(cur_x_pos+9*width/100, cur_y_pos+height/1.9 , b2_size/30, b2_size/3.4);
	  rect(cur_x_pos+10*width/100, cur_y_pos+height/1.9 , b2_size/30, b2_size/3.5);
	  rect(cur_x_pos+11*width/100, cur_y_pos+height/1.9 , b2_size/30, b2_size/3);
	  rect(cur_x_pos+12*width/100, cur_y_pos+height/1.9 , b2_size/30, b2_size/3.2);
	  rect(cur_x_pos+13*width/100, cur_y_pos+height/1.9 , b2_size/30, b2_size/3);
	  rect(cur_x_pos+14*width/100, cur_y_pos+height/1.9 , b2_size/30, b2_size/3.24);
	  rect(cur_x_pos+15*width/100, cur_y_pos+height/1.9 , b2_size/30, b2_size/3);
	  rect(cur_x_pos+16*width/100, cur_y_pos+height/1.9 , b2_size/30, b2_size/3);
	  rect(cur_x_pos+17*width/100, cur_y_pos+height/1.9 , b2_size/30, b2_size/3.1);
	   rect(cur_x_pos+18*width/100, cur_y_pos+height/1.9 , b2_size/30, b2_size/3);
	   rect(cur_x_pos+19*width/100, cur_y_pos+height/1.9 , b2_size/30, b2_size/3.5);
	   rect(cur_x_pos+20*width/100, cur_y_pos+height/1.9 , b2_size/30, b2_size/3);
  
  
	  
  
  
	}
  
  
  
  
	
  
  }
  
