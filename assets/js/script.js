

document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByTagName('button');

  for (let button of buttons) {
    button.addEventListener("click", function() {
        if (this.getAttribute("data.type") === "submit") {
            alert("you clicked submit");
        } else {
            let gameType = this.getAttribute("data-type");
           runGame(gameType);
        }
    })
  }

  runGame("addition");
})


// create two random numbers between 1 and 25
function runGame(gameType) {
   let num1 = Math.floor(Math.random() * 25) + 1;
   let num2 = Math.floor(Math.random() * 25) + 1;

   if (gameType === "addition") {
      displayAdditionQuestion(num1, num2);
   } else {
      alert (`unknown game type ${gameType}`);
      throw `unknown game type ${gameType}. Aborting!`;
   }

}


/**
 * Get operand from numbers(minus, plus and subtraction)
 * directly from DOM and returns the correct answer
 */
function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
  document.getElementById('operand1').textContent = operand1;
  document.getElementById('operand2').textContent = operand2;
  document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}
