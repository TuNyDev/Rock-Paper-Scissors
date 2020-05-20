let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById('user-score');
const compScore_span=document.getElementById('computer-score');
const scoreBoard_div=document.querySelector('score-board');
const result_p=document.querySelector('.result > p');
const rock_div=document.getElementById('r');
const paper_div=document.getElementById('p');
const scissors_div=document.getElementById('s');



function convertToWords(c){
 if (c==='r'){
   return 'Rock';
 } else if (c==='p'){
   return 'Paper';
 } else {
   return 'Scissors';
 }
}

function getComputerChoice(){
const arr=['r','p','s'];
const random=Math.floor(Math.random()*arr.length);
return arr[random];

}
function win(user,comp){
userScore++;
userScore_span.innerHTML=userScore;
result_p.innerHTML=`You picked ${convertToWords(user)} it  beats ${convertToWords(comp)} You Win! ❤️ `; 
document.getElementById(user).classList.add('green-glow');
setTimeout(function(){document.getElementById(user).classList.remove('green-glow')},2000);

}
function lose(user,comp){
computerScore++;
compScore_span.innerHTML=computerScore;
result_p.innerHTML=`Comp picked ${convertToWords(comp)} it beats ${convertToWords(user)} You Lose 😛 `; 
document.getElementById(user).classList.add('red-glow');
setTimeout(function(){document.getElementById(user).classList.remove('red-glow')},2000);
}
function draw(user){
  result_p.innerHTML="It's a Draw !"
  document.getElementById(user).classList.add('grey-glow');
setTimeout(function(){document.getElementById(user).classList.remove('grey-glow')},2000);
}

function game(userChoice){
  console.log(userChoice);
  const compChoice=getComputerChoice();
  switch (userChoice+compChoice) {
    case 'rs':
    case 'sp': 
    case 'pr':
      win(userChoice,compChoice);
      break;
    case 'sr':
    case 'ps':
    case 'rp':
      lose(userChoice,compChoice);
      break;
    default:
      draw(userChoice);
      break;

  }
};
function main (){
  rock_div.addEventListener('click',function(){
    game('r');
    
  })
  paper_div.addEventListener('click',function(){
    game('p');
  })
  scissors_div.addEventListener('click',function(){
    game('s');
  })
  
};
main();

console.log(getComputerChoice());