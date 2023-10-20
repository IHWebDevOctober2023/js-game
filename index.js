console.log("it's working!");

const ball = document.querySelector("#ball");
// This is going to check the actual width IN THE BROWSER. According to the dimensions of the screen
// remember the width of the container has a unit in vw so it's adapting it's size depending on the width
const gameBoardWidth = document.querySelector("#game-board").clientWidth;
const gameBoardHeight = document.querySelector("#game-board").clientHeight;
let positionY = 0;
let positionX = 0;

let directionY = "down"
let directionX = "right"

/* setInterval(()=>{
    position += 30
    ball.style.left = `${position}px`
    ball.style.top = `${position}px`
},1000) */ 
console.log(gameBoardWidth);
function moveBall(){

    if(directionX === "right"){
        positionX += 1;
        if(positionX >= gameBoardWidth - ball.clientWidth){
            directionX = "left";
        }
    } else if (directionX === "left"){
        positionX -= 1;
        if(positionX <= 0){
            console.log("GAME OVER");
        }
    }
    
    if(directionY === "down"){
        positionY += 1;
        if(positionY >= gameBoardHeight - ball.clientHeight){
            directionY = "up";
        }
        
    } else if (directionY === "up"){
        positionY -= 1;
        if(positionY <= 0){
            directionY = "down";
        }
    }


    ball.style.left = `${positionX}px`
    ball.style.top = `${positionY}px`
    
  
}


let frames = 0;
function animate(){
    moveBall();
    frames ++;

/*     if(frames %60 ===0){
        console.log("Here we increase the difficulty");
    } */
    requestAnimationFrame(animate)
}

animate()