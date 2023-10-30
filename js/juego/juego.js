import { goUp, goDown, goRight, goLeft, direction } from "./movimiento.js";
import { startGame } from "./boardManipulation.js";
import { disableObstacleBtn, obstacleBtn } from "./gameRules.js";

window.addEventListener('keydown', (event) => {
    let key = event.code;

    if (obstacleBtn.disabled == false) {
        disableObstacleBtn()
    }

    if (key == 'ArrowRight' && direction != 'left' && direction != 'right') {
        // moveHeadRight();
        goRight();
    } else if (key == 'ArrowLeft' && direction != 'right' && direction != 'left') {
        // moveHeadLeft();
        goLeft();
    } else if (key == 'ArrowUp' && direction != 'down' && direction != 'up') {
        // moveHeadUp();
        goUp();
    } else if (key == 'ArrowDown' && direction != 'up' && direction != 'down') {
        // moveHeadDown();
        goDown();
    }
})

startGame();