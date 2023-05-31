//TO DO
// - If the player is changed mid game, the state should be preserved


window.onload = function() {
  loadPlayer()
  document.getElementById("answer").focus();
  document.querySelector('select').addEventListener('change', loadPlayer);

}

// Get answer field
var answer = document.getElementById("answer");

// Execute a function when the user presses a key on the keyboard
answer.addEventListener("keypress", function(e) {
  // If the user presses the "Enter" key on the keyboard
  console.log(e.key)
  if (e.key === "Enter") {
    // Cancel the default action, if needed
    e.preventDefault();
    // Trigger the button element with a click
    checkAnswer()
  }
});

function disableSubmitButton(){
  document.getElementById('submitBtn').disabled = true;
}

function enableSubmitButton(){
  document.getElementById('submitBtn').disabled = false;  
}

function disableNextButton(){
  document.getElementById('nextQuestionBtn').disabled = true;
}

function enableNextButton(){
  document.getElementById('nextQuestionBtn').disabled = false;  
}

function enableInput() {
  document.querySelector('input').disabled = false;
}

function disableInput() {
  document.querySelector('input').disabled = true; 
}


function loadPlayer(){
  
  let currentScore = document.getElementById('currentScoreValue')
  let currentScoreInt = parseInt(currentScore.textContent)
  let selectedValue = document.querySelector('select').value; 

  if (selectedValue == 'emma' && data['sam']['highscore'] < currentScoreInt){
    data['sam']['highscore'] = currentScoreInt
    
  }else if (selectedValue =='sam' && data['emma']['highscore'] < currentScoreInt){
    data['emma']['highscore'] = currentScoreInt
  }
  clearHangman()
  disableNextButton()

  let highScore = document.getElementById('highScoreValue')
  highScore.textContent = data[selectedValue]['highscore']
  
}

function increaseLevel(){

  let level = document.getElementById('levelValue')
  let levelInt = parseInt(level.textContent) 

  level.textContent = levelInt + 1
}

function updateScore(){
  let currentScore = document.getElementById('currentScoreValue')
  let currentScoreInt = parseInt(currentScore.textContent) 

  currentScore.textContent = currentScoreInt + 1;

  if (parseInt(currentScore.textContent)%10 == 0){
    increaseLevel()
  }
}

function updateHighScore(){
  let currentScore = document.getElementById('currentScoreValue')
  let currentScoreInt = parseInt(currentScore.textContent) 

  let highScore = document.getElementById('highScoreValue')
  let highScoreInt = parseInt(highScore.textContent)

  let activePlayer = document.querySelector('select').value; 

  if (currentScoreInt > highScoreInt ){
    
    data[activePlayer]['highscore'] = currentScoreInt;
  }

}

// MODIFY THIS TO CHANGE INITIAL STATE VALUES MANUALLY
function resetGameState(){
  let currentScore = document.getElementById('currentScoreValue')
  currentScore.textContent = 0 // NORMALLY SET THIS TO 0

  let level = document.getElementById('levelValue')
  level.textContent = 1 // NORMALLY SET THIS TO 1

  let activePlayer = document.querySelector('select').value; 
  let highScore = document.getElementById('highScoreValue')
  highScore.textContent = data[activePlayer]['highscore']

}

function checkAnswer(){ 
  let num1 = parseFloat(document.getElementById('num1').textContent) 
  let num2 = parseFloat(document.getElementById('num2').textContent)
  let answer = parseFloat(document.getElementById('answer').value)

  let failMsg = document.getElementById('msg') 

  let sum = num1 + num2;
  
  if(sum==answer){

    failMsg.textContent = "Correct!"
    failMsg.style.color = "green"

    updateScore()
    disableSubmitButton()
    enableNextButton()

  }else{
    if(wrongCounter<8){
      wrongCounter++
      drawHangman()
      failMsg.textContent = `Keep trying! ${9-wrongCounter} turns remaining.`
      
    }else if(wrongCounter ==8){
      wrongCounter++
      drawHangman()
      failMsg.textContent = "Clear the hangman and try again!"
      updateHighScore()
      // resetGameState()
      disableNextButton()
      disableSubmitButton()
      disableInput()

    }
    failMsg.style.color = "red"
  }

}
function showAnswer(){
    let num1 = parseFloat(document.getElementById('num1').textContent) 
    let num2 = parseFloat(document.getElementById('num2').textContent)
    let result = document.getElementById('result') 

    let sum = num1 + num2 
    result.textContent = sum
    disableInput() 
    disableSubmitButton()
    enableNextButton()
}

function nextQuestion(){
    // clearHangman()
    enableSubmitButton()
    disableNextButton()
    enableInput()

    let num1 = document.getElementById('num1')
    let num2 = document.getElementById('num2')
    let msg = document.getElementById('msg') 
    let result = document.getElementById('result')
    let answer = document.getElementById('answer')
    let level = parseInt(document.getElementById('levelValue').textContent)
    
    msg.textContent = ""
    result.textContent = ""
    answer.value = ""

    num1.textContent = Math.ceil(Math.random() * 10 * level)
    num2.textContent = Math.ceil(Math.random() * 10 * level)

    document.getElementById("answer").focus();
}


