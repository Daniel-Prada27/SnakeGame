
import { createFood, board, snakeColor, foodColor } from "./boardManipulation.js";
import { sumPoints } from "./points.js";



export function checkForSnake(row, col) {
    let newPosition = document.querySelector(`.position-${row}-${col}`);

    if (newPosition == null) {
        return false;
    }

    return (newPosition.style.backgroundColor == snakeColor) ? true : false;
}

export function checkForFood(row, col) {
    let newPosition = document.querySelector(`.food-${row}-${col}`);

    if (newPosition == null) {
        return false;
    }
    if (newPosition.style.backgroundColor == foodColor) {
        sumPoints();
        board.removeChild(newPosition);
        createFood();
        return true;
    }

    return false;
}