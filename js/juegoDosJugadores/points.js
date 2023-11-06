import { playerOne, playerTwo } from "./boardManipulation.js";

export let score = document.getElementById('score');

export function sumPoints(player) {
    // points += 100;
    player.points = (player.snakeArr.length )*100

    if (player.points < 1000) {
        score.textContent = `SCORE: 0${player.points}`;
    } else {
        score.textContent = `SCORE: ${player.points}`;
    }

}

export function setPoints(player, newPoints) {
    player.points = newPoints;
}

export function setScore(newScore) {
    score.textContent = `SCORE: ${newScore}`
}