console.log("it's working!");

const ball = document.querySelector("#ball");
// This is going to check the actual width IN THE BROWSER. According to the dimensions of the screen
// remember the width of the container has a unit in vw so it's adapting it's size depending on the width
const gameBoardWidth = document.querySelector("#game-board").clientWidth;
const gameBoardHeight = document.querySelector("#game-board").clientHeight;
let positionY = 0;
let positionX = 0;

/* setInterval(()=>{
    position += 30
    ball.style.left = `${position}px`
    ball.style.top = `${position}px`
},1000) */ 
console.log(gameBoardWidth);
function moveBall(){
    ball.style.left = `${positionX}px`
    ball.style.top = `${positionY}px`
    
    if(positionY === gameBoardHeight){
        positionY -= 1;
    }else{
        
        positionX += 1;
        positionY += 1;
    }
}


let frames = 0;
function animate(){
    // moveBall();
    frames ++;

    if(frames %60 ===0){
        console.log("Here we increase the difficulty");
    }
    requestAnimationFrame(animate)
}

animate()