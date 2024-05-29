/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// remove this or set to false to enable full program (load will be slower)
var DEBUG_MODE = true;

// this can be used to set the number of sliders to show
var NUM_SLIDERS = 3;

// other variables can be in here too
// here's some examples for colors used


const stroke_color = [95, 52, 8];

// example of a global function
// given a segment, this returns the average point [x, y]
function segment_average(segment) {
  let sum_x = 0;
  let sum_y = 0;
  let s_len = segment.length;
  for (let i=0; i<s_len; i++) {
    sum_x = sum_x + segment[i][0];
    sum_y = sum_y + segment[i][1];
  }
  return [sum_x / s_len , sum_y / s_len ];
}

// This where you define your own face object
function Face() {

  let color_DarkGreen = color("#42421c")
let color_ResedaGreen = color("#84805a")
let color_Tan = color("#d4b48c")
let color_IndianRed = color("#bd6868")
let color_Carmine = color("#950a1e")
let color_RoseWood = color("#5f0d11")
let color_Brown = color("#1f0a0b")
let color_White = color("#fdf5e5")
let color_Yellow = color("#dbb447")
let color_PeachYellow = color("#edd596")
let face_Ypoint=1.9

  // these are state variables for a face
  // (your variables should be different!)
  this.detailColour = [204, 136, 17];
  this.mainColour = [51, 119, 153];
  this.num_eyes = 2;    // can be either 1 (cyclops) or 2 (two eyes)
  this.eye_shift = -1;   // range is -10 to 10
  this.mouth_size = 1;  // range is 0.5 to 8

  this.chinColour = [153, 153, 51]
  this.lipColour = [136, 68, 68]
  this.eyebrowColour = color_Brown



 
  this.draw = function(positions) {
    console.log()
    // head
    ellipseMode(CENTER);
    // triangleMode(CENTER)
    stroke(color_Carmine);
    
    strokeWeight(1)
    strokeJoin(ROUND)
    fill(color_Carmine);
    
this. strawberry_forehead_Y=positions.chin[8][1]-3.3
this.strawberry_forehead_Y3_fac=-2.8
this.strawberry_forehead_Y2=positions.chin[11][1]-2.5
this. strawberry_chain_Y=positions.chin[8][1]+0.2

   
    beginShape();


    curveVertex(positions.chin[5][0],  positions.chin[5][1]+this.strawberry_forehead_Y3_fac,  )

      curveVertex(positions.chin[8][0],  this. strawberry_forehead_Y, )
      curveVertex(positions.chin[11][0], this.strawberry_forehead_Y2,)

      curveVertex(positions.chin[15][0],  positions.chin[15][1],)
      curveVertex(positions.chin[12][0],  positions.chin[12][1],  )

      curveVertex(positions.chin[8][0],  this. strawberry_chain_Y, )

      curveVertex(positions.chin[4][0],  positions.chin[4][1],  )
      curveVertex(positions.chin[1][0],  positions.chin[1][1],  )

      curveVertex(positions.chin[5][0],  this.strawberry_forehead_Y2,  )
      

      curveVertex(positions.chin[8][0],  this. strawberry_forehead_Y, )
  


      curveVertex(positions.chin[11][0],  positions.chin[11][1]+this.strawberry_forehead_Y3_fac,)
  

      endShape();

  

    
   //leave on top 
push()
strokeWeight(0.3)
    fill(color_DarkGreen)
    stroke(color_DarkGreen)
 let heart_H=-segment_average(positions.left_eyebrow)[1]-segment_average(positions.left_eyebrow)[1]/2
 let heart_W=segment_average(positions.right_eyebrow)[1]*2

this.leafhight  =positions.nose_bridge[2][1]*-2
this.leaf_Xpoints_fac=0
this.leaf_Ypoints_fac=0
this.leaf_rotation= (positions.nose_tip[4][0]-positions.nose_tip[0][0])^100
// positions.nose_tip[1][1]*300

console.log(this.leafhight)
translate(0,-2.9)

if(this.leafhight < 0.91){

  this.leafhight = 0.91
}

if(this.leafhight > 3){

  this.leafhight = 3
}

 quad(this.leaf_Xpoints_fac, -this.leafhight*2, 
  this.leaf_Xpoints_fac+this.leafhight/2, this.leaf_Ypoints_fac-this.leafhight, 
  this.leaf_Xpoints_fac,   this.leaf_Xpoints_fac,
  this.leaf_Xpoints_fac-this.leafhight/2, this.leaf_Ypoints_fac-this.leafhight);


 rotate(this.leaf_rotation)
 quad(this.leaf_Xpoints_fac, -this.leafhight*2, 
  this.leaf_Xpoints_fac+this.leafhight/2, this.leaf_Ypoints_fac-this.leafhight, 
  this.leaf_Xpoints_fac,   this.leaf_Xpoints_fac,
  this.leaf_Xpoints_fac-this.leafhight/2, this.leaf_Ypoints_fac-this.leafhight);


rotate(-2*this.leaf_rotation)  
quad(this.leaf_Xpoints_fac, -this.leafhight*2, 
  this.leaf_Xpoints_fac+this.leafhight/2, this.leaf_Ypoints_fac-this.leafhight, 
  this.leaf_Xpoints_fac,   this.leaf_Xpoints_fac,
  this.leaf_Xpoints_fac-this.leafhight/2, this.leaf_Ypoints_fac-this.leafhight);

 pop()
 
 push()
   //strawberry this.seeds
   this.seed_SizeX = segment_average(positions.left_eyebrow)[1]/9
   this.seed_SizeY = segment_average(positions.left_eyebrow)[0]/6
   this.seed_Number = int(random(5, 7))
   this.seed_Angle = random(30,100)
   this.seed_x = segment_average(positions.left_eye)[0]/100
   this.seed_y = segment_average(positions.left_eye)[1]/100-1
   noStroke()
   fill(color_RoseWood)
    translate(0,0)
   for (let i = 0; i < this.seed_Number; i++) {
     
    rotate(this.seed_Angle)
 
     translate(-this.seed_SizeX / 2, +this.seed_SizeY / 2)
 
     bezier(this.seed_x - this.seed_SizeX / 2, this.seed_y + this.seed_SizeY / 2,
       this.seed_x - this.seed_SizeX * 2, this.seed_y - this.seed_SizeY,
       this.seed_x + this.seed_SizeX, this.seed_y - this.seed_SizeY,
       this.seed_x - this.seed_SizeX / 2, this.seed_y + this.seed_SizeY / 2);
     rotate(random(350 / this.seed_Number, 320 / this.seed_Number))

   }
pop()

this.left_eye_pos = segment_average(positions.left_eye)
this.right_eye_pos = segment_average(positions.right_eye);
this.eye_Y_Fac=1
 fill(color_Brown);
 noStroke()

// eyes

 
 this.eye_switch = int(random(1,3))
 // tow round eyes
 if (this.eye_switch == 1 || this.eye_switch == 3) {
   noStroke()
   fill(color_Brown);

   ellipse(this.left_eye_pos[0], this.left_eye_pos[1]+this.eye_Y_Fac, 0.5);
   ellipse(this.right_eye_pos[0], this.right_eye_pos[1]+this.eye_Y_Fac, 0.5);


 }

 //cool eyes  
 if (this.eye_switch == 2) {
   noStroke()
   fill(color_IndianRed);

   //nose
  //  ellipse(0, Nose_H / 2, Nose_H - eye_Space / 8, Nose_H / 2.9);

   fill(color_Brown);




   arc(this.left_eye_pos[0], this.left_eye_pos[1]+this.eye_Y_Fac, 0.6,0.5,0,180);
   arc(this.right_eye_pos[0], this.right_eye_pos[1]+this.eye_Y_Fac, 0.6,0.5,0,180);
 }
   // mouth
push()
this.mouth_open=positions.top_lip[4][0]-positions.bottom_lip[4][0]
translate(0,positions.top_lip[4][1]-0.5)
scale(1,this.mouth_open*2)
   strokeWeight(0.3)
   stroke(color_IndianRed)
   fill(color_IndianRed);


   beginShape();


   arc(segment_average(positions.top_lip)[0], segment_average(positions.top_lip)[1], 1, 1, 0, 180);
   line(segment_average(positions.top_lip)[0]+0.5,  segment_average(positions.top_lip)[1],-0.5+segment_average(positions.bottom_lip)[0],  segment_average(positions.top_lip)[1])
   endShape();

pop()
 noStroke();
 push()
    // eyebrows
    fill( color_Yellow);
    stroke(color_Yellow);
    strokeWeight(0.01);
    scale(1)


    this.drawEyebrowPips_left (positions.left_eyebrow);
    this.drawEyebrowPips_right(positions.right_eyebrow);

    this.draw_segment(positions.left_eyebrow);
    this.draw_segment(positions.right_eyebrow);
pop()
strokeWeight(0.01);
    // draw the chin segment using points
    fill(this.chinColour);
    stroke(this.chinColour);
    this.draw_segment(positions.chin);

    fill(100, 0, 100);
    stroke(100, 0, 100);
    this.draw_segment(positions.nose_bridge);
    this.draw_segment(positions.nose_tip);

    strokeWeight(0.03);
this.nosepos = positions.nose_bridge
    fill(this.lipColour);
    stroke(this.lipColour);
    this.draw_segment(positions.top_lip);
    this.draw_segment(positions.bottom_lip);


    // eyes
    noStroke();
    let curEyeShift = 0.04 * this.eye_shift;
    if(this.num_eyes == 2) {
      fill(this.detailColour);
      // ellipse(this.left_eye_pos[0], this.left_eye_pos[1], 0.5, 0.33);
      // ellipse(this.right_eye_pos[0], this.right_eye_pos[1], 0.5, 0.33);

      // fill(this.mainColour);
      // ellipse(this.left_eye_pos[0] + curEyeShift, this.left_eye_pos[1], 0.18);
      // ellipse(this.right_eye_pos[0] + curEyeShift, this.right_eye_pos[1], 0.18);
    }
    else {
      let eyePosX = (this.left_eye_pos[0] + this.right_eye_pos[0]) / 2;
      let eyePosY = (this.left_eye_pos[1] + this.right_eye_pos[1]) / 2;

      fill(this.detailColour);
      ellipse(eyePosX, eyePosY, 0.45, 0.27);

      fill(this.mainColour);
      ellipse(eyePosX - 0.1 + curEyeShift, eyePosY, 0.18);
    }
   // fill(0)
   //ellipse(0,0, 0.5,0.5) center point
   //rect(-2,-2,4.5,4) sizing debug 
  }




  // example of a function *inside* the face object.
  // this draws a segment, and do_loop will connect the ends if true
  this.draw_segment = function(segment, do_loop) {
 
    for(let i=0; i<segment.length; i++) {
        let px = segment[i][0];
        let py = segment[i][1];
        ellipse(px, py, 0.1);
        if(i < segment.length - 1) {
          let nx = segment[i+1][0];
          let ny = segment[i+1][1];
          line(px, py, nx, ny);
        }
        else if(do_loop) {
          let nx = segment[0][0];
          let ny = segment[0][1];
          line(px, py, nx, ny);
        }
    }
  
  };
this.brow_angle=40

  this.drawEyebrowPips_left = function(segment) {
    for(let i=4; i<segment.length; i++) {
        let px = segment[i][0];
        let py = segment[i][1]+1

        fill(color_Yellow)
        // ellipse(px, py, 0.1);
        push()
        translate(px,py)
 rotate(-this.brow_angle)

        bezier(0 - this.seed_SizeX / 2, 0 + this.seed_SizeY / 2,
       0- this.seed_SizeX * 2, 0- this.seed_SizeY,
        0 + this.seed_SizeX, 0- this.seed_SizeY,
        0 - this.seed_SizeX / 2, 0 + this.seed_SizeY / 2);
     pop()
        
    }
  };  


  this.drawEyebrowPips_right = function(segment) {
    for(let i=0; i<segment.length-4; i++) {
        let px = segment[i][0];
        let py = segment[i][1]+-0.1+1

        fill(color_Yellow)
        // ellipse(px, py, 0.1);
        push()
        translate(px,py)

 rotate(this.brow_angle)

        bezier(0 - this.seed_SizeX / 2, 0 + this.seed_SizeY / 2,
       0- this.seed_SizeX * 2, 0- this.seed_SizeY,
        0 + this.seed_SizeX, 0- this.seed_SizeY,
        0 - this.seed_SizeX / 2, 0 + this.seed_SizeY / 2);
     pop()
        
    }
  };


  this.setProperties = function(settings) {
    this.num_eyes = int(map(settings[0], 0, 100, 1, 2));
    this.eye_shift = map(settings[1], 0, 100, -2, 2);
    this.mouth_size = map(settings[2], 0, 100, 0.5, 8);
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    let settings = new Array(3);
    settings[0] = map(this.num_eyes, 1, 2, 0, 100);
    settings[1] = map(this.eye_shift, -2, 2, 0, 100);
    settings[2] = map(this.mouth_size, 0.5, 8, 0, 100);
    return settings;
  }
}
