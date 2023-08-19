//This imports the React hooks useState and useCallback from the React library.
import { useState, useCallback } from 'react';
//This imports the TETROMINOS object and the randomTetromino function from the tetrominos module 
//(likely located in a file named tetrominos.js in the parent directory).
import { TETROMINOS, randomTetromino } from '../tetrominos';
//This imports the STAGE_WIDTH constant and the checkCollision function from the gameHelpers module 
//(likely located in a file named gameHelpers.js in the parent directory).
import { STAGE_WIDTH, checkCollision } from '../gameHelpers';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });

  function rotate(matrix, dir) {
    // Make the rows to become cols (transpose)
    const mtrx = matrix.map((_, index) => matrix.map(column => column[index]));
    // Reverse each row to get a rotaded matrix
    if (dir > 0) return mtrx.map(row => row.reverse());
    return mtrx.reverse();
  }

  function playerRotate(stage, dir) {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

    const pos = clonedPlayer.pos.x;
    let offset = 1;
    while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonedPlayer.tetromino[0].length) {
        rotate(clonedPlayer.tetromino, -dir);
        clonedPlayer.pos.x = pos;
        return;
      }
    }
    setPlayer(clonedPlayer);
  }

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer(prev => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer, playerRotate];
};


//Descruption of userPlayer =>
//const usePlayer = () => { ... }:
//This defines the usePlayer custom hook, which encapsulates player-related logic and state management.

//Inside the hook function:

//const [player, setPlayer] = useState({ ... }):
//This initializes the player state using the useState hook. The player object contains information about the player's position, 
//current tetromino shape, and collision status.

//function rotate(matrix, dir) { ... }:
//This is a utility function used to rotate a matrix (2D array) representing a tetromino shape. 
//It takes a matrix and a rotation direction (dir) as parameters and returns the rotated matrix.

//function playerRotate(stage, dir) { ... }:
//This function is responsible for handling player rotation. It clones the player object, 
//rotates the tetromino shape using the rotate function, and then checks for collisions with the stage. It adjusts the player's position 
//if a collision is detected due to rotation.

//const updatePlayerPos = ({ x, y, collided }) => { ... }:
//This function updates the player's position and collision status. It takes an object with x, y, and collided properties as 
//a parameter and updates the player state accordingly.

//const resetPlayer = useCallback(() => { ... }, []):
//This function is responsible for resetting the player's state to its initial values. It uses the randomTetromino function
// to generate a new random tetromino shape for the player.

//The return [player, updatePlayerPos, resetPlayer, playerRotate]; line returns an array containing the player's state, 
//the updatePlayerPos function, the resetPlayer function, and the playerRotate function.