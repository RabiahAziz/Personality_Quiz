/*Add your JavaScript here*/
var button = document.getElementById("myButton");


var monsterHighScore= 0;
var bratzScore= 0;
var questionCount= 0;

var result = document.getElementById("result");
var restart = document.getElementById("restart");

var q1a1 = document.getElementById ("q1a1");
var q1a2 = document.getElementById ("q1a2");

var q2a1 = document.getElementById ("q2a1");
var q2a2 = document.getElementById ("q2a2");

var q3a1 = document.getElementById ("q3a1");
var q3a2 = document.getElementById ("q3a2");

q1a1.addEventListener("click", bratz);
q1a2.addEventListener("click", monsterHigh);

q2a1.addEventListener("click", monsterHigh);
q2a2.addEventListener("click", bratz);

q3a1.addEventListener("click", bratz);
q3a2.addEventListener("click", monsterHigh);

restart.addEventListener ("click", restartQuiz);

function bratz(parameter1, parameter2){
  bratzScore += 1;
  questionCount += 1;
  console.log("questionCount=" + questionCount + "bratzScore=" + bratzScore);
 if (questionCount == 3){
  console.log("The quiz is done!")
  updateResult();
}
}
function monsterHigh(parameter1, parameter2){
  monsterHighScore += 1;
  questionCount += 1;
  console.log("questionCount=" + questionCount + "monsterHighScore=" + monsterHighScore);
  if (questionCount == 3){
  console.log("The quiz is done!")
  updateResult();
}
}
function updateResult() {
  
  if (monsterHighScore >= 2){
    result.innerHTML = "You are a Monster High doll!";
  console.log("You are a Monster High doll!")
} else if (bratzScore >= 2){
  result.innerHTML = "You are a Bratz doll!";
  console.log("You are a Bratz doll!")
}
}

function updateScore(){
  document.getElementById("result").innerHTML= result;
}

function restartQuiz(){
  result.innerHTML = "You are a...";
  questionCount=0;
  bratzScore=0;
  monsterHighScore=0;
}