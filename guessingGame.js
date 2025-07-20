let randomNumber= Math.floor(Math.random()* 100)+ 1;
let attempt=10;
function submit() {
    attempt --;
    const inputValue= document.getElementById("guess");
const guess=inputValue.value;
const answer= document.getElementById("answer");
    while (attempt > 0) {
   if(guess==randomNumber){
    answer.innerHTML="You got It";
    answer.style.color="green";
    attempt=0;
    answer.style.color="green";
    break;
}
else if(guess>randomNumber) {
    answer.innerHTML= "Too high! Try Again. You have "+ attempt + " lives left";
    answer.style.color="red";
    break;
}
else{
    answer.innerHTML="Too low! Try Again. You have " + attempt + " lives left";
    answer.style.color="red";
    break;
}}
if (attempt === 0 && guess !=randomNumber) {
    answer.innerHTML="Sorry, you are out of lives. The correct answer is "+ randomNumber;
    answer.style.color="red";
}}

function restart(){
 randomNumber= Math.floor(Math.random()*100)+ 1;
 attempt = 10;
 document.getElementById("guess").value = " ";
 document.getElementById("answer").innerHTML= " ";
}
