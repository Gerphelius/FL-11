let isPlaying = confirm('Do you want to play a game?');

const randomRangeChanger = 4;
const newGameRandomNum = 8;
const maxAttempts = 3;
const newGameMaxPrize = 100;
const prizeChanger = 2;
const userNewGamePrize = 0;

let maxRandomNum = newGameRandomNum;
let currentAttempt = maxAttempts;
let currentMaxPrize = newGameMaxPrize;
let userTotalPrize = userNewGamePrize;

newGame: while ( isPlaying ) {
    let randomNum = Math.floor(Math.random() * maxRandomNum + 1);
    let userChoice = null;

    nextLevel: while ( currentAttempt > 0 ) {
        userChoice = +prompt( 'Choose a roulette pocket number from 0 to ' + maxRandomNum + '\n' + 
        'Attempts left: ' + currentAttempt + '\nTotal prize: ' + userTotalPrize + '$\n' + 
        'Possible prize on current attempt: ' + currentMaxPrize + '$' + randomNum);

        if ( userChoice !== randomNum ) {
            currentAttempt--;
            currentMaxPrize /= prizeChanger;
        } else {
            userTotalPrize += currentMaxPrize;
            isPlaying = confirm( 'Congratulation, you won!\nYour prize is: ' + userTotalPrize + 
            ' $.\n Do you want to continue?' )

            if ( isPlaying ) {
                currentMaxPrize *= prizeChanger;
                currentAttempt = maxAttempts;
                maxRandomNum += randomRangeChanger;
                randomNum = Math.floor( Math.random() * maxRandomNum );
                continue nextLevel;
            } else {
                alert( 'Thank you for your participation.\n Your prize is: ' + userTotalPrize + '$' );
                isPlaying = confirm( 'Do you want to play again?' );

                if ( isPlaying ) {
                    currentMaxPrize = newGameMaxPrize;
                    currentAttempt = maxAttempts;
                    maxRandomNum = newGameRandomNum;
                    userTotalPrize = userNewGamePrize;
                    continue newGame;
                } else {
                    break newGame;
                }
            }
        }
    }
    alert( 'Thank you for your participation.\n Your prize is: ' + userTotalPrize + '$' );
    isPlaying = confirm( 'Do you want to play again?' );

    if ( isPlaying ) {
        currentMaxPrize = newGameMaxPrize;
        currentAttempt = maxAttempts;
        maxRandomNum = newGameRandomNum;
        userTotalPrize = userNewGamePrize;
        continue newGame;
    } else {
        break newGame;
    }
} 

alert( 'You did not become a billionaire, but can.' )