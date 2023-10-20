console.log("index.js is working!");

const ball = document.querySelector("#ball");
const racket = document.querySelector("#racket");
// This is going to check the actual width IN THE BROWSER. According to the dimensions of the screen
// remember the width of the container has a unit in vw so it's adapting it's size depending on the width
const gameBoardWidth = document.querySelector("#game-board").clientWidth;
const gameBoardHeight = document.querySelector("#game-board").clientHeight;
const gameBoardElement = document.querySelector("#game-board");

let positionYRacket = 0;

let positionYBall = 0;
let positionXBall = 0;

let directionYBall = "down"
let directionXBall = "right"

let ballSpeed = 4;
let racketSpeed = 10;

let animationId;

let aaaah = true;

function moveBall() {

    if (directionXBall === "right") {
        positionXBall += ballSpeed;
        if (positionXBall >= gameBoardWidth - ball.clientWidth) {
            directionXBall = "left";
        }
    } else if (directionXBall === "left") {
        positionXBall -= ballSpeed;
        if (positionXBall <= 0) {
            ball.remove()
            racket.remove()

            const h1Element = document.createElement("h1");
            h1Element.innerText = "GAME OVER";
            aaaah = false;
            gameBoardElement.appendChild(h1Element)
            cancelAnimationFrame(animationId);
        }
    }

    if (directionYBall === "down") {
        positionYBall += ballSpeed;
        if (positionYBall >= gameBoardHeight - ball.clientHeight) {
            directionYBall = "up";
        }

    } else if (directionYBall === "up") {
        positionYBall -= ballSpeed;
        if (positionYBall <= 0) {
            directionYBall = "down";
        }
    }

    ball.style.left = `${positionXBall}px`
    ball.style.top = `${positionYBall}px`

}

function moveRacket(event) {
    if (event.key === "ArrowUp") {
        positionYRacket -= 10
    } else if (event.key === "ArrowDown") {
        positionYRacket += 10
    }
    racket.style.top = `${positionYRacket}px`
}

document.addEventListener("keydown", moveRacket)

function checkForCollissions() {
    if (0 < positionXBall + ball.clientWidth &&
        0 + racket.clientWidth > positionXBall &&
        positionYRacket < positionYBall + ball.clientHeight &&
        positionYRacket + racket.clientHeight > positionYBall) {
        directionXBall = "right"
    }
}

let frames = 0;
function animate() {
    if (aaaah) {
        moveBall();
        checkForCollissions();
        frames++;

        /*  if(frames %60 ===0){
                console.log("Here we can increase the difficulty");
            } */

        // We need to store the animation in a variable so we can stop it later
        animationId = requestAnimationFrame(animate);
    }
}

animate();