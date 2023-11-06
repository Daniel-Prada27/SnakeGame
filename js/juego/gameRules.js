
export let obstacleBtn = document.getElementById('obstacleBtn');
export let twoPlayersBtn = document.getElementById('twoPlayerBtn');
export let scoreTwo = document.getElementById('score-2');

export let allowObstacles = false;
export let allowTwoPlayers = false;

obstacleBtn.addEventListener('click', changeObstaclePermission);

function changeObstaclePermission() {

    allowObstacles = !allowObstacles;

    if(allowObstacles) {
        obstacleBtn.style.backgroundColor = '#00d300'
    } else {
        obstacleBtn.style.backgroundColor = '';
    }

}

function changeTwoPlayerPermission() {

    allowTwoPlayers = !allowTwoPlayers;

    if(allowTwoPlayers) {
        twoPlayersBtn.style.backgroundColor = '#00d300'
    } else {
        twoPlayersBtn.style.backgroundColor = '';
    }

}

export function disableObstacleBtn() {
    obstacleBtn.disabled = true;
}

export function enableObstacleBtn() {
    obstacleBtn.disabled = false;
}

export function disableTwoPlayersBtn() {
    twoPlayersBtn.disabled = true;
}

export function enableTwoPlayersBtn() {
    twoPlayersBtn.disabled = false;
}
