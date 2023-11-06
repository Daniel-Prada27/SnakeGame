
import { createFood, board, foodColor, createObstacle, obstacleColor, playerOne, playerTwo } from "./boardManipulation.js";
import { sumPoints } from "./points.js";
import { allowObstacles } from "./gameRules.js";



// export function checkForSnakeOne(row, col) {
//     let newPosition = document.querySelector(`.position-${row}-${col}`);

//     if (newPosition == null) {
//         return false;
//     }

//     return (newPosition.style.backgroundColor == playerOne.snakeColor) ? true : false;
// }

// export function checkForSnakeTwo(row, col) {
//     let newPosition = document.querySelector(`.position2-${row}-${col}`);

//     if (newPosition == null) {
//         return false;
//     }

//     return (newPosition.style.backgroundColor == playerTwo.snakeColor) ? true : false;

// }

export function checkForFood(row, col) {
    let newPosition = document.querySelector(`.food-${row}-${col}`);

    if (newPosition == null) {
        return false;
    }
    if (newPosition.style.backgroundColor == foodColor) {
        // sumPoints();  DEBE QUEDAR EN MOVEACTION CREO YO
        board.removeChild(newPosition);
        createFood();
        createObstacle();
        return true;
    }

    return false;
}

export function checkForFoodNoPoints(row, col) {
    let newPosition = document.querySelector(`.food-${row}-${col}`);

   return (newPosition != null);
}

export function checkForObstacle(row, col) {

    if (!allowObstacles) {
        return false;
    }

    let newPosition = document.querySelector(`.obstacle-${row}-${col}`);

    if (newPosition == null) {
        return false;
    }
    if (newPosition.style.backgroundColor == obstacleColor) {
        return true;
    }

    return false;
}