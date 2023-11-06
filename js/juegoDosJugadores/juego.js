import { goUp, goDown, goRight, goLeft } from "./movimiento.js";
import { startGame, playerOne, playerTwo } from "./boardManipulation.js";
import { disableObstacleBtn, obstacleBtn } from "./gameRules.js";

window.addEventListener('keydown', (event) => {
    let key = event.code;

    if (obstacleBtn.disabled == false) {
        disableObstacleBtn()
    }

    if (key == 'ArrowRight' && playerOne.direction != 'left' && playerOne.direction != 'right') {
        // moveHeadRight();
        goRight(playerOne);
    } else if (key == 'ArrowLeft' && playerOne.direction != 'right' && playerOne.direction != 'left') {
        // moveHeadLeft();
        goLeft(playerOne);
    } else if (key == 'ArrowUp' && playerOne.direction != 'down' && playerOne.direction != 'up') {
        // moveHeadUp();
        goUp(playerOne);
    } else if (key == 'ArrowDown' && playerOne.direction != 'up' && playerOne.direction != 'down') {
        // moveHeadDown();
        goDown(playerOne);
    } else if (key == 'KeyD' && playerTwo.direction != 'left' && playerTwo.direction != 'right') {
        goRight(playerTwo);
    } else if (key == 'KeyA' && playerTwo.direction != 'left' && playerTwo.direction != 'right') {
        goLeft(playerTwo);
    } else if (key == 'KeyW' && playerTwo.direction != 'down' && playerTwo.direction != 'up') {
        goUp(playerTwo);
    } else if (key == 'KeyS' && playerTwo.direction != 'up' && playerTwo.direction != 'down') {
        goDown(playerTwo);
    }
})

startGame();