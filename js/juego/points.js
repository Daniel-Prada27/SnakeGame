import { snakeArr } from "./boardManipulation.js";

export let score = document.getElementById('score');
export let points = 0;

export function sumPoints() {
    // points += 100;
    points = (snakeArr.length )*100

    if (points < 1000) {
        score.textContent = `SCORE: 0${points}`;
    } else {
        score.textContent = `SCORE: ${points}`;
    }

}

export function setPoints(newPoints) {
    points = newPoints;
}

export function setScore(newScore) {
    score.textContent = `SCORE: ${newScore}`
}