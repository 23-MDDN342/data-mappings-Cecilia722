/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */

// remove this or set to false to enable full program (load will be slower)
var DEBUG_MODE = true;

// this can be used to set the number of sliders to show
var NUM_SLIDERS = 8;

// other variables can be in here too
// here's some examples for colors used


const stroke_color = [95, 52, 8];

// example of a global function
// given a segment, this returns the average point [x, y]
function segment_average(segment) {
  let sum_x = 0;
  let sum_y = 0;
  let s_len = segment.length;
  for (let i = 0; i < s_len; i++) {
    sum_x = sum_x + segment[i][0];
    sum_y = sum_y + segment[i][1];
  }
  return [sum_x / s_len, sum_y / s_len];
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
  let face_Ypoint = 1.9

  // these are state variables for a face
  // (your variables should be different!)
  this.detailColour = [204, 136, 17];
  this.mainColour = [51, 119, 153];
  this.num_eyes = 2;    // can be either 1 (cyclops) or 2 (two eyes)
  this.leaf_height = -1;   // range is -10 to 10
  this.mouth_size = 1;  // range is 0.5 to 8

  this.chinColour = [153, 153, 51]
  this.lipColour = [136, 68, 68]
  this.eyebrowColour = color_Brown
  this.leaf_height_value = 0.6

  this.leaf_width_value = 0.6
  this.leaf_direction_value = 0
  this.mouth_Y_Position = 0


  this.DrawLeaf = function (positions) {

    //leaves on top  -----------------------------------------------------

    push()
    strokeWeight(0.3)
    fill(color_DarkGreen)
    stroke(color_DarkGreen)
    let heart_H = -segment_average(positions.left_eyebrow)[1] - segment_average(positions.left_eyebrow)[1] / 2
    let heart_W = segment_average(positions.right_eyebrow)[1] * 2

    this.leafhight = this.leaf_height_value * 2 * positions.nose_bridge[2][0] * -6
    this.leaf_width = this.leaf_width_value * positions.nose_bridge[2][0] * 1.5
    this.leaf_Xpoints_fac = 0
    this.leaf_Ypoints_fac = -1
    this.leaf_rotation = 60
    this.behind_head_X = +positions.chin[0][0] + positions.chin[16][0]



    console.log(this.leaf_direction)

    translate(0, 0)

    if (this.leafhight < 0.3) {

      this.leafhight = 0.3
    }

    if (this.leafhight > 2) {

      this.leafhight = 2
    }

    quad(this.leaf_Xpoints_fac, -this.leafhight * 2,
      this.leaf_Xpoints_fac + this.leaf_width, this.leaf_Ypoints_fac - this.leaf_width / 2,
      this.leaf_Xpoints_fac, this.leaf_Xpoints_fac,
      this.leaf_Xpoints_fac - this.leaf_width, this.leaf_Ypoints_fac - this.leaf_width / 2,);


    rotate(this.leaf_rotation)
    quad(this.leaf_Xpoints_fac, -this.leafhight * 2,
      this.leaf_Xpoints_fac + this.leaf_width, this.leaf_Ypoints_fac - this.leaf_width / 2,
      this.leaf_Xpoints_fac, this.leaf_Xpoints_fac,
      this.leaf_Xpoints_fac - this.leaf_width, this.leaf_Ypoints_fac - this.leaf_width / 2,);



    rotate(-2 * this.leaf_rotation)
    quad(this.leaf_Xpoints_fac, -this.leafhight * 2,
      this.leaf_Xpoints_fac + this.leaf_width, this.leaf_Ypoints_fac - this.leaf_width / 2,
      this.leaf_Xpoints_fac, this.leaf_Xpoints_fac,
      this.leaf_Xpoints_fac - this.leaf_width, this.leaf_Ypoints_fac - this.leaf_width / 2,);


    pop()
  }

  this.DrawBerryBase = function (positions) {


    push()
    stroke(color_Carmine);

    strokeWeight(1)

    fill(color_Carmine);


    beginShape();

    this.strawberry_forehead_Y = positions.chin[8][1] - 3.3
    this.strawberry_forehead_Y3_fac = -2.8
    this.strawberry_forehead_Y2 = positions.chin[11][1] - 2.5
    this.strawberry_chain_Y = positions.chin[8][1] + 0.2


    curveVertex(positions.chin[5][0], positions.chin[5][1] + this.strawberry_forehead_Y3_fac,)

    curveVertex(positions.chin[8][0], this.strawberry_forehead_Y,)
    curveVertex(positions.chin[11][0], this.strawberry_forehead_Y2,)

    curveVertex(positions.chin[15][0], positions.chin[15][1],)
    curveVertex(positions.chin[12][0], positions.chin[12][1],)

    curveVertex(positions.chin[8][0], this.strawberry_chain_Y,)

    curveVertex(positions.chin[4][0], positions.chin[4][1],)
    curveVertex(positions.chin[1][0], positions.chin[1][1],)

    curveVertex(positions.chin[5][0], this.strawberry_forehead_Y2,)


    curveVertex(positions.chin[8][0], this.strawberry_forehead_Y,)



    curveVertex(positions.chin[11][0], positions.chin[11][1] + this.strawberry_forehead_Y3_fac,)


    endShape();

    pop()


  }
  this.DrawMouth = function (positions) {



    push()
    this.mouth_open = positions.top_lip[4][0] - positions.bottom_lip[4][0]
    translate(0, positions.top_lip[4][1] - 0.5)
    scale(1, this.mouth_open * 2)

    beginShape();

    arc(-(positions.top_lip)[7][0] / 2 - (positions.top_lip)[1][0] / 2, segment_average(positions.bottom_lip)[1] + this.mouth_Y_Position, (positions.top_lip)[7][0] - (positions.top_lip)[0][0], this.mouth_size, 0, 180, CHORD);

    endShape();

    pop()




  }

  


  this.DrawCuteEye=function(positions){
    this.eye_size = map(this.eye_size_value, 0, 100, 1, 1.4)*this.eye_open*6
      this.eye_open=(positions.left_eye)[5][1]-(positions.left_eye)[2][1]
      
      noStroke()
      push()
      ellipseMode(CENTER);
      rectMode(CENTER)
      fill(color_Brown)


      rect(0, 0 , 0.75, 0.8 * this.eye_size, 0.3 * this.eye_size);
      fill("#4f0d02")

      fill("#381d46");


      rect(0, 0 , 0.6, 0.6 * this.eye_size, 0.3 * this.eye_size);
      fill("#180925")
      rect(0, 0 , 0.3 * this.eye_size, 0.3 * this.eye_size, 0.3 * this.eye_size);
push()
      translate(0, 0 +this.eye_size / 10)

      fill("#f1a2f8")
      ellipse(0 + 0.04, 0  + 0.21, 0.2, 0.15*this.eye_size);
      fill(color_White)
      ellipse(0+ 0.05, 0  + 0.2, 0.15, 0.1*this.eye_size)
pop()


      // translate(this.left_eye_pos[0], this.left_eye_pos[1])

      translate(0, 0-this.eye_size / 10)
      rotate(30)
      fill(color_White)
      ellipse(0, -0.2, 0.3, 0.16*this.eye_size);
      ellipse(0,-0.0, 0.13, 0.09*this.eye_size);
      pop()

      push()
      translate(0.1,  -this.eye_size / 10)
      rotate(-30)


      fill("#d2fefe")
      ellipse(-0.24, 0  - 0.19, 0.13, 0.1*this.eye_size);
      rotate(40)
      ellipse(0 - 0.24, 0  + 0.12, 0.1, 0.06*this.eye_size);
      pop()


  }


this.DrawSeed=function(positions){

  this.seed_SizeX = segment_average(positions.left_eyebrow)[1] / 9
  this.seed_SizeY = segment_average(positions.left_eyebrow)[0] / 6


  bezier(0 - this.seed_SizeX / 2, 0 + this.seed_SizeY / 2,
  0 - this.seed_SizeX * 2, 0 - this.seed_SizeY,
  0 + this.seed_SizeX, 0 - this.seed_SizeY,
  0 - this.seed_SizeX / 2, 0 + this.seed_SizeY / 2);





}


  
  this.draw = function (positions) {
    console.log()
    // head

    ellipseMode(CENTER);
    strokeJoin(ROUND)



    this.leaf_direction = map(this.leaf_direction_value, -90, 90, -100, 100)

    push()
    translate(this.behind_head_X, this.strawberry_forehead_Y)
    rotate(this.leaf_direction)
    this.DrawLeaf(positions)
    pop()

    push()
    this.DrawBerryBase(positions)
    pop()


    this.left_eye_pos = segment_average(positions.left_eye)
    this.right_eye_pos = segment_average(positions.right_eye);
    this. eye_hight=map(this.eye_hight_value,0,100,0.6,1.2)
 

    push()
    //strawberry this.seeds
    this.seed_Number = int(random(3,6))
    this.seed_Angle = random(-20,20)
    this.seed_x = this.left_eye_pos[0]
    this.seed_y = this.left_eye_pos[1]
    noStroke()
    fill(color_RoseWood)
    translate( this.seed_x-0.2,  this.seed_y+1.5)

    for (let i = 0; i < this.seed_Number; i++) {

      rotate(this.seed_Angle)

      translate( this.seed_x/3,  this.seed_y/3)

      this.DrawSeed(positions)

      rotate(random(320/ this.seed_Number,350/ this.seed_Number))

    }
    pop()


    push()
    //strawberry this.seeds

    this.seed_x_2= this.right_eye_pos[0]
    this.seed_y_2= this.right_eye_pos[1]
    noStroke()
    fill(color_RoseWood)
    translate(     this.seed_x_2+0.2, this.seed_y_2+1.5)

    for (let i = 0; i < this.seed_Number; i++) {

      rotate(this.seed_Angle)

      translate(     -this.seed_x_2/3,  this.seed_y_2/3)

      this.DrawSeed(positions)

      rotate(random(320/ this.seed_Number,350/ this.seed_Number))

    }
    pop()





    fill(color_Brown);
    noStroke()

    // eyes


    // this.eye_switch = 1

    this.eye_switch =int(this.eye_switch_value)
    // tow round eyes
    if (this.eye_switch == 1 || this.eye_switch == 3) {
push()
translate(this.left_eye_pos[0], this.left_eye_pos[1]+ this. eye_hight)
      this.DrawCuteEye(positions)

pop()

push()
translate(this.right_eye_pos[0], this.right_eye_pos[1]+ this. eye_hight)
      this.DrawCuteEye(positions)

pop()
    }


    if (this.eye_switch == 2) {
translate(0,0)
      fill(color_Brown);

      stroke(color_Brown)
      strokeWeight(0,1)


      arc(this.left_eye_pos[0], this.left_eye_pos[1]+this. eye_hight , 0.6, 0.5, 0, 180, CHORD);
      arc(this.right_eye_pos[0], this.right_eye_pos[1]+this. eye_hight , 0.6, 0.5, 0, 180, CHORD);

      noStroke()
      fill(color_IndianRed);

      ellipse((positions.nose_bridge)[3][0], (positions.nose_bridge)[3][1], 0.3, 0.2)
      fill(color_White)
      ellipse((positions.nose_bridge)[3][0] + 0.04, (positions.nose_bridge)[3][1], 0.08)

    }
    // mouth -----------------------------------------------------


    stroke(color_IndianRed)
    fill(color_IndianRed);
    strokeWeight(0.3)

    this.DrawMouth(positions)

    noStroke();
    push()
    // eyebrows
    fill(color_Yellow);
    stroke(color_Yellow);
    strokeWeight(0.01);
    scale(1)


    this.drawEyebrowPips_left(positions.left_eyebrow);
    this.drawEyebrowPips_right(positions.right_eyebrow);

    this.draw_segment(positions.left_eyebrow);
    this.draw_segment(positions.right_eyebrow);
    this.draw_segment(positions.right_eye);
    this.draw_segment(positions.left_eye);
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


    // // eyes
    // noStroke();
    // let curEyeShift = 0.04 * this.leaf_height;
    // if (this.num_eyes == 2) {
    //   fill(this.detailColour);
    //   // ellipse(this.left_eye_pos[0], this.left_eye_pos[1], 0.5, 0.33);
    //   // ellipse(this.right_eye_pos[0], this.right_eye_pos[1], 0.5, 0.33);

    //   // fill(this.mainColour);
    //   // ellipse(this.left_eye_pos[0] + curEyeShift, this.left_eye_pos[1], 0.18);
    //   // ellipse(this.right_eye_pos[0] + curEyeShift, this.right_eye_pos[1], 0.18);
    // }
    // else {
    //   let eyePosX = (this.left_eye_pos[0] + this.right_eye_pos[0]) / 2;
    //   let eyePosY = (this.left_eye_pos[1] + this.right_eye_pos[1]) / 2;

    //   fill(this.detailColour);
    //   ellipse(eyePosX, eyePosY, 0.45, 0.27);

    //   fill(this.mainColour);
    //   ellipse(eyePosX - 0.1 + curEyeShift, eyePosY, 0.18);
    // }
    // fill(0)
    //ellipse(0,0, 0.5,0.5) center point
    //rect(-2,-2,4.5,4) sizing debug 
  }




  // example of a function *inside* the face object.
  // this draws a segment, and do_loop will connect the ends if true
  // this.draw_segment = function (segment, do_loop) {

  //   for (let i = 0; i < segment.length; i++) {
  //     let px = segment[i][0];
  //     let py = segment[i][1];
  //     ellipse(px, py, 0.1);
  //     if (i < segment.length - 1) {
  //       let nx = segment[i + 1][0];
  //       let ny = segment[i + 1][1];
  //       line(px, py, nx, ny);
  //     }
  //     else if (do_loop) {
  //       let nx = segment[0][0];
  //       let ny = segment[0][1];
  //       line(px, py, nx, ny);
  //     }
  //   }

  // };
  this.brow_angle = 40

  this.drawEyebrowPips_left = function (segment) {
    for (let i = 4; i < segment.length; i++) {
      let px = segment[i][0];
      let py = segment[i][1] +0.5

      fill(color_Yellow)
      // ellipse(px, py, 0.1);
      push()
      translate(px, py)
      rotate(-this.brow_angle)

      bezier(0 - this.seed_SizeX / 2, 0 + this.seed_SizeY / 2,
        0 - this.seed_SizeX * 2, 0 - this.seed_SizeY,
        0 + this.seed_SizeX, 0 - this.seed_SizeY,
        0 - this.seed_SizeX / 2, 0 + this.seed_SizeY / 2);
      pop()

    }
  };


  this.drawEyebrowPips_right = function (segment) {
    for (let i = 0; i < segment.length - 4; i++) {
      let px = segment[i][0];
      let py = segment[i][1] + 0.5-0.1

      fill(color_Yellow)
      // ellipse(px, py, 0.1);
      push()
      translate(px, py)

      rotate(this.brow_angle)

      bezier(0 - this.seed_SizeX / 2, 0 + this.seed_SizeY / 2,
        0 - this.seed_SizeX * 2, 0 - this.seed_SizeY,
        0 + this.seed_SizeX, 0 - this.seed_SizeY,
        0 - this.seed_SizeX / 2, 0 + this.seed_SizeY / 2);
      pop()

    }
  };


  this.setProperties = function (settings) {
    this.leaf_width_value = map(settings[0], 0, 100, 0.5, 2);
    this.leaf_height_value = map(settings[1], 0, 100, 0.5, 1);
    this.mouth_Y_Position = map(settings[2], 0, 100, -5, 5)
    this.mouth_size = map(settings[3], 0, 100, 0.5, 4);
    this.leaf_direction_value = map(settings[4], 0, 100, -90, 90);
    this.eye_switch_value = map(settings[5], 0, 100, 1, 3)
    this.eye_size_value = map(settings[6], 0, 100, 0, 100)
    this.eye_hight_value=map(settings[7],0,100,0,100)
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function () {
    let settings = new Array(3);
    settings[0] = map(this.leaf_width_value, 0.5, 1, 0, 100);
    settings[1] = map(this.leaf_height_value, 0.5, 2, 0, 100);
    settings[2] = map(this.mouth_Y_Position, -5, 5, 0, 100)
    settings[3] = map(this.mouth_size, 0.5, 4, 0, 100);
    settings[4] = map(this.leaf_direction_value, -90, 90, 0, 100);
    settings[5] = map(this.eye_switch_value, 1, 3, 0, 100)
    settings[6] = map(this.eye_size_value, 0, 100, 0, 100)
    settings[7]=map(this.eye_hight_value,0,100,0,100)
    return settings;
  }
}
