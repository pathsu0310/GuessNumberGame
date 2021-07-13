'use script';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;

// create the function to replace duplicate code
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

const displayScore = function(score){
    document.querySelector('.score').textContent = score;
}

const displayNumber = function(number){
    document.querySelector('.number').textContent=number
}

//------------------------------------------------------------
document.querySelector('.check').addEventListener
('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    // when the guess is null
    if(!guess){
       displayMessage('⛔No Number!');
    // when the guess is right
    }else if (guess === secretNumber){
        displayMessage('🥂You WIN!');
        displayNumber(secretNumber);
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if(score>highScore){
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        }
     // when the guess is wrong
    }else if(guess!==secretNumber){
        if(score>1){
            displayMessage( `${guess >secretNumber ? 'Too high!' : 'Too Low!'}`);
            score--;
            displayScore(score);
    }else{
        displayMessage('You LOST the game👎');
        displayScore(0);
    }
    }
  });




  document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    displayMessage('🤔Start guessing...');
    displayScore(score);
    displayNumber('?');
    document.querySelector('.guess').value= '';
    document.querySelector('body').style.backgroundColor = '#333';
    document.querySelector('.number').style.width = '15rem';
});