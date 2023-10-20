# Mini lab | Player Movement

## html and css
- Create an index.html file and link it to a css (name it as you want) file.
- This html needs to include a gameBoard div and a player div.
- Add the styles you want to the css file (colors, shapes...).

## Classes
- Create two JS files. One called game and another called player.
- This files are going to be the classes we'll need to create the game and keep track of the player and the status of the game.

### Game Class
The game class constructor is going to contain only the score and a boolean that tells us if the game is over or not. 

### Player Class
The player class is trickier 😜
This constructor is including:
- The position X of the player. (x)
- The position Y of the player. (y)
- The velocity/speed of the player. (speed or vel)
- The element that is going to be the player (html element). (element)
- The element that is going to be the gameBoard (html element). (gameBoard)
Every time we create a ``new player`` we'll have access to this properties.

## Game logic
- Create another JS file called index.js
- Don't forget to link it to the index.html file!
- Create a new game and a new player.
- Add an event listener to the document that listens to the keydown event.
- When the keydown event is triggered, check if the key pressed is an arrow key.
- If it is, change the position of the player and update the position of the player in the DOM.

## Bonus
- Add a score to the game and update it every time the player moves.

## Super Bonus
- Add a timer to the game and update it every second.

## Super Mega Bonus
- Add a start button to the game. So the timer and the score only start when the user clicks on the start button.

## Super Mega Bonus Combo
- Create another player and make it move with the WASD keys.

## Super Mega Bonus Combo GOLD
- Make the players collide and stop the game when they do.

## Super Mega Bonus Combo GOLD PLATINUM
- Create a new game called Hollow Knight: Silksong and upload it to steam. 