
export let obstacleBtn = document.getElementById('obstacleBtn');

export let allowObstacles = false;

obstacleBtn.addEventListener('click', changeObstaclePermission);

function changeObstaclePermission() {

    allowObstacles = !allowObstacles;

}

export function disableObstacleBtn() {
    obstacleBtn.disabled = true;
}

export function enableObstacleBtn() {
    obstacleBtn.disabled = false;
}
