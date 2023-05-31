// Get the canvas element and 2D context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Global values
const yPosOffset = 40;
const color = 'black'
let wrongCounter = 0;

// For checking position of hangman parts
// document.getElementById('drawButton').addEventListener('click', drawPost);
// document.getElementById('drawButton').addEventListener('click', drawBeam);
// document.getElementById('drawButton').addEventListener('click', drawRope);
// document.getElementById('drawButton').addEventListener('click', drawHead);
// document.getElementById('drawButton').addEventListener('click', drawBody);
// document.getElementById('drawButton').addEventListener('click', drawLeftArm);
// document.getElementById('drawButton').addEventListener('click', drawRightArm);
// document.getElementById('drawButton').addEventListener('click', drawLeftLeg);
// document.getElementById('drawButton').addEventListener('click', drawRightLeg);

function drawHangman(){

    if(wrongCounter==1){
        drawPost()
    }else if (wrongCounter==2){
      drawBeam()
    }else if (wrongCounter==3){
      drawRope()
    }else if (wrongCounter==4){
      drawHead()
    }else if (wrongCounter==5){
      drawBody()
    }else if (wrongCounter==6){
      drawLeftArm()
    }else if (wrongCounter==7){
      drawRightArm()
    }else if (wrongCounter==8){
      drawLeftLeg()
    }else if (wrongCounter==9){
      drawRightLeg()
    }
  
  }
  
  function clearHangman(){
    wrongCounter = 0;
    ctx.clearRect(0,0,canvas.width,canvas.height)
    let failMsg = document.getElementById('msg') 
    failMsg.textContent = ""
    // enableNextButton()
    enableSubmitButton()
    resetGameState()
  }

function drawPost() {

  // Set rectangle properties
  const rectWidth = 20;
  const rectHeight = canvas.height;
  const rectColor = color;

  // Draw rectangle
  const rectX = 20; 
  const rectY = 0;
  ctx.fillStyle = rectColor;
  ctx.fillRect(rectX, rectY, rectWidth, rectHeight);
}

function drawBeam() {

  // Set rectangle properties
  const rectWidth = canvas.width/2;
  const rectHeight = 20;
  const rectColor = color;

  // Draw rectangle
  const rectX = 20; 
  const rectY = 0;
  ctx.fillStyle = rectColor;
  ctx.fillRect(rectX, rectY, rectWidth, rectHeight);
}

function drawRope() {

  // Set rectangle properties
  const rectWidth = 20;
  const rectHeight = 160;
  const rectColor = color;

  // Draw rectangle
  const rectX = canvas.width/2; 
  const rectY = 0;
  ctx.fillStyle = rectColor;
  ctx.fillRect(rectX, rectY, rectWidth, rectHeight);
}

function drawHead() {
  
  // Set circle properties
  const centerX = canvas.width/2 + 10;
  const centerY = 170 + yPosOffset; // Adjusted value for centerY
  const radius = 60;
  
  // Draw circle
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}

function drawBody() {

  // Set rectangle properties
  const rectWidth = 20;
  const rectHeight = 200;
  const rectColor = color;

  // Draw rectangle
  const rectX = canvas.width/2; 
  const rectY = 220 + yPosOffset;
  ctx.fillStyle = rectColor;
  ctx.fillRect(rectX, rectY, rectWidth, rectHeight);
}

function drawLeftArm() {

  // Set rectangle properties
  const rectWidth = 20;
  const rectHeight = 100;
  const rectColor = color;

  // Save the current canvas state
  ctx.save();

  // Translate to the desired position and rotate
  const rectX = canvas.width/2 -40;
  const rectY = 210 + yPosOffset;
  ctx.translate(rectX + rectWidth / 2, rectY + rectHeight / 2);
  ctx.rotate(Math.PI / 2); // 90 degrees in radians

  // Draw rectangle
  ctx.fillStyle = rectColor;
  ctx.fillRect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight);

  // Restore the canvas state
  ctx.restore();
}

function drawRightArm() {

  // Set rectangle properties
  const rectWidth = 20;
  const rectHeight = 100;
  const rectColor = color;

  // Save the current canvas state
  ctx.save();

  // Translate to the desired position and rotate
  const rectX = canvas.width/2 +40;
  const rectY = 210 + yPosOffset;
  ctx.translate(rectX + rectWidth / 2, rectY + rectHeight / 2);
  ctx.rotate(Math.PI / -2); // 90 degrees in radians

  // Draw rectangle
  ctx.fillStyle = rectColor;
  ctx.fillRect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight);

  // Restore the canvas state
  ctx.restore();
}

function drawLeftLeg() {

  // Set rectangle properties
  const rectWidth = 20;
  const rectHeight = 100;
  const rectColor = color;

  // Save the current canvas state
  ctx.save();

  // Translate to the desired position and rotate
  const rectX = canvas.width/2 -35;
  const rectY = 395 + yPosOffset;
  ctx.translate(rectX + rectWidth / 2, rectY + rectHeight / 2);
  ctx.rotate(Math.PI / 4); // 45 degrees in radians

  // Draw rectangle
  ctx.fillStyle = rectColor;
  ctx.fillRect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight);

  // Restore the canvas state
  ctx.restore();
}

function drawRightLeg() {

  // Set rectangle properties
  const rectWidth = 20;
  const rectHeight = 100;
  const rectColor = color;

  // Save the current canvas state
  ctx.save();

  // Translate to the desired position and rotate
  const rectX = canvas.width/2 +35;
  const rectY = 395 + yPosOffset;
  ctx.translate(rectX + rectWidth / 2, rectY + rectHeight / 2);
  ctx.rotate(Math.PI / -4); // 45 degrees in radians

  // Draw rectangle
  ctx.fillStyle = rectColor;
  ctx.fillRect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight);

  // Restore the canvas state
  ctx.restore();
}