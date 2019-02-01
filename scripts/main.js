let playerSelection = null;
let chosen = false;;
let rock = document.getElementById("rock");
let userScore = 0;
let enemyScore = 0;


rock.onclick = function(){
    if(chosen){
        alert("Reset the result!");
        return;
    }
    if(playerSelection != null){
        alert("Can't choose more than one");
        return;
    }
   playerSelection = 'rock';
};
            
            
let paper = document.getElementById("paper").onclick = function(){
    if(chosen){
        alert("Reset the result!");
        return;
    }
    if(playerSelection != null){
        alert("Can't choose more than one");
        return;
    }
    playerSelection =  'paper';
};

let scissors = document.getElementById("scissor").onclick = function(){
    if(chosen){
        alert("Reset the result!");
        return;
    }
    if(playerSelection != null){
        alert("Can't choose more than one");
        return;
    }
    playerSelection =  'scissors';
};

let result = document.querySelector('.result');

result.onclick = function(){
    if(playerSelection == null){
        alert("Please choose first");
        return;
    }
    if(chosen){
        result.innerHTML = "Choose Rock Paper or Scissor";
        playerSelection = null;
        chosen = false;
        return;
    }
    chosen = true;
    result.innerHTML = playRound(playerSelection,computerPlay());
    document.querySelector('.user').innerHTML = "Your Score : " +userScore;
    document.querySelector('.enemy').innerHTML = "Enemy Score : " +enemyScore;
    if(userScore == 5){
        userScore = 0;
        enemyScore = 0;
        alert("CONGRATS YOU WIN!");
    }
    else if(enemyScore == 5){
        userScore = 0;
        enemyScore = 0;
        alert("YOU LOSE!");
    }
}


        function computerPlay() {
            let x = Math.floor(Math.random() * 3);
            switch (x) {
                case 0:
                    return 'rock';
                    break;
                case 1:
                    return 'paper';
                    break;
                case 2:
                    return 'scissors';
                    break;
                default:
                    break;
            }
        }

        function playRound(playerSelection,computerSelection){
            if(playerSelection == 'rock'){
                if(computerSelection == 'scissors'){
                    userScore++;
                    return 'You Win! Rock beat Scissors!';
                }
                else if(computerSelection == 'paper'){
                    enemyScore++;
                    return 'You Lose! Paper beat Rock!';
                }
                else{
                    return 'Draw! Rock doesn\'t beat each other!'
                }
            }
            else if(playerSelection == 'scissors'){
                if(computerSelection == 'paper'){
                    userScore++;
                    return 'You Win! Scissors beat Paper!';
                }
                else if(computerSelection == 'rock'){
                    enemyScore++;
                    return 'You Lose! Rock beat Scissors!';
                }
                else{
                    return 'Draw! Scissors doesn\'t beat each other!'
                }
            }
            else{
                if(computerSelection == 'rock'){
                    userScore++;
                    return 'You Win! Paper beat Rock!';
                }
                else if(computerSelection == 'paper'){
                    enemyScore++;
                    return 'You Lose! Scissors beat Paper!';
                }
                else{
                    return 'Draw! Paper doesn\'t beat each other!'
                }
            }
        }
