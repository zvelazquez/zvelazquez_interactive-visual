let pieImage1;
let pieImage2;
let pieImage3;
let pieImage4;
let pieImage5;
let pieImage6;
let pieSlice;
let progressIcon;
let gameMusic;

function preload(){
    pieImage1 = loadImage("6-slice-pie.png");
    pieImage2 = loadImage("5-slice-pie.png");
    pieImage3 = loadImage("4-slice-pie.png");
    pieImage4 = loadImage("3-slice-pie.png");
    pieImage5 = loadImage("2-slice-pie.png");
    pieImage6 = loadImage("1-slice-pie.png");
    pieImage7 = loadImage("0-slice-pie.png");
    pieSlice = loadImage("pie-slice.png");
    progressIcon = loadImage("smiley-face-icon.png");
    gameMusic = loadSound("charlie-brown-fall.mp3");
}

let plates = {
    x:250,
    y:250,
    number:6,
    size:110,
    slicesTaken:0,
    
    displayPlates: function(){
      if(this.slicesTaken===0){
        fill('#EEEEEA');
        noStroke();
        circle(this.x, this.y-160, this.size);
        circle(this.x, this.y+160, this.size);
        circle(this.x-140, this.y-80, this.size);
        circle(this.x+140, this.y-80, this.size);
        circle(this.x-140, this.y+80, this.size);
        circle(this.x+140, this.y+80, this.size);
        fill('#DDDBD5'); 
        circle(this.x, this.y-160, 90);
        circle(this.x, this.y+160, 90);
        circle(this.x-140, this.y-80, 90);
        circle(this.x+140, this.y-80, 90);
        circle(this.x-140, this.y+80, 90);
        circle(this.x+140, this.y+80, 90);
        this.slicesTaken++;
        fill('#F1BE29');
        rect(390, 450, 75, 50);
        image(progressIcon, 400, 460, 30, 30);
        textSize(25);
        textFont('Futura');
        fill('#3B2214');
        text('0', 438, 485);
      } 
      else if(this.slicesTaken === 1)
      {
        this.slicesTaken++;
        image(pieImage2, 175, 175, 150, 150);
        image(pieSlice, 355, 130, 69, 65);
        fill('#F1BE29');
        rect(390, 450, 75, 50);
        image(progressIcon, 400, 460, 30, 30);
        fill('#3B2214');
        text('1', 438, 485);
      }
      else if (this.slicesTaken === 2)
      {
        this.slicesTaken++;
        image(pieImage3, 175, 175, 150, 150);
        image(pieSlice, 355, 290, 69, 65);
        fill('#F1BE29');
        rect(390, 450, 75, 50);
        image(progressIcon, 400, 460, 30, 30);
        fill('#3B2214');
        text('2', 438, 485);
      }
      else if (this.slicesTaken === 3) 
      {
        this.slicesTaken++;
        image(pieImage4, 175, 175, 150, 150);
        image(pieSlice, 215, 370, 69, 65);
        fill('#F1BE29');
        rect(390, 450, 75, 50);
        image(progressIcon, 400, 460, 30, 30);
        fill('#3B2214');
        text('3', 438, 485);
      }
      else if (this.slicesTaken === 4)
      {
        this.slicesTaken++;
        image(pieImage5, 175, 175, 150, 150);
        image(pieSlice, 75, 290, 69, 65);
        fill('#F1BE29');
        rect(390, 450, 75, 50);
        image(progressIcon, 400, 460, 30, 30);
        fill('#3B2214');
        text('4', 438, 485);
      }
      else if (this.slicesTaken === 5)
      {
        this.slicesTaken++;
        image(pieImage6, 175, 175, 150, 150);
        image(pieSlice, 75, 130, 69, 65);
        fill('#F1BE29');
        rect(390, 450, 75, 50);
        image(progressIcon, 400, 460, 30, 30);
        fill('#3B2214');
        text('5', 438, 485);
      }
      else if (this.slicesTaken === 6)
      {
        this.slicesTaken++;
        image(pieImage7, 175, 175, 150, 150);
        image(pieSlice, 215, 50, 69, 65);
        fill('#F1BE29');
        rect(390, 450, 75, 50);
        image(progressIcon, 400, 460, 30, 30);
        fill('#3B2214');
        text('6', 438, 485);
        textSize(36);
        fill('#F1BE29');
        text('ENJOY!', 190, 260);
      }
    }


}

function setup(){
  createCanvas(500,500);
  background('#D94E4E');
  image(pieImage1, 175, 175, 150, 150);
  plates.displayPlates();
}

function draw(){
}

function mousePressed(){
  plates.displayPlates();
}

function keyPressed(){
  if (keyCode === 32){
    gameMusic.play();
  }
}
