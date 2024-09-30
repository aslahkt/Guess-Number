// display functions
function displayNumber(number) {
    document.querySelector('.number').textContent=number;
}
function displayMessage(message) {
    document.querySelector('.message').textContent=message;
}
function displayScore(score) {
    document.querySelector('.score').textContent=score;
}
function displayHighScore(highScore) {
    document.querySelector('.highscore').textContent=highScore;
}


let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highScore=0;

displayScore(score);
displayHighScore(highScore);


// Check button 
document.querySelector('.check').addEventListener('click',
function () {
    const guess=Number(document.querySelector('.guess').value);
    // No numbers enterd
    if(!guess){
        // No numbers enterd
        displayMessage('⛔ no number'); 
    }else if(guess===secretNumber){
        // Win the game
        displayMessage('🎊 you are win');
        document.querySelector('body').style.backgroundColor='#06D001';
        document.querySelector('.number').style.width="30rem";
        displayNumber(guess);
        if(score>highScore){
            highScore=score;
            displayHighScore(highScore);
        }
    }else if(guess !== secretNumber){
        if(score>1){
            displayMessage(guess<secretNumber?'📉 too low': '📈 too high');
        score--;
        displayScore(score);
        }
        else{
            // lost the game
            displayMessage('💔 you lost');
            displayScore(0);
        }
    }
});

// Again button
document.querySelector('.again').addEventListener('click',
    function () {
        score=20;
        secretNumber=Math.trunc(Math.random()*20)+1;
        displayMessage('Start guessing....');
        displayScore(score);
        displayNumber('?');
        document.querySelector('.guess').value='';
        document.querySelector('body').style.backgroundColor='#222';
        document.querySelector('.number').style.width="15rem";
    });