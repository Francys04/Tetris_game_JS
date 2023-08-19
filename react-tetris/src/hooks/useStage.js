//This imports the necessary React hooks useState and useEffect from the React library.
import { useState, useEffect } from 'react';
//This imports the createStage function from the gameHelpers module
// (likely located in a file named gameHelpers.js in the parent directory).
import { createStage } from '../gameHelpers';

//const useStage = (player, resetPlayer) => { ... }:
//This defines the useStage custom hook. 
//It takes in the player object representing the current 
//player's state and the resetPlayer function to reset the player's state.

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    setRowsCleared(0);
    const sweepRows = newStage =>
      newStage.reduce((ack, row) => {
        if (row.findIndex(cell => cell[0] === 0) === -1) {
          setRowsCleared(prev => prev + 1);
          ack.unshift(new Array(newStage[0].length).fill([0, 'clear']));
          return ack;
        }
        ack.push(row);
        return ack;
      }, []);

    const updateStage = prevStage => {
      // First flush the stage
      const newStage = prevStage.map(row =>
        row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
      );

      // Then draw the tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`,
            ];
          }
        });
      });
      // Then check if we got some score if collided
      if (player.collided) {
        resetPlayer();
        return sweepRows(newStage);
      }
      return newStage;
    };

    // Here are the updates
    setStage(prev => updateStage(prev));
  }, [
    player.collided,
    player.pos.x,
    player.pos.y,
    player.tetromino,
    resetPlayer,
  ]);

  return [stage, setStage, rowsCleared];
};

//Inside the useEffect block:
//This effect is responsible for updating the game stage based on changes in the player's state. 
//It's triggered whenever the dependencies in the dependency array change (i.e., player.collided, player.pos.x, player.pos.y, player.tetromino, and resetPlayer).

//setRowsCleared(0);: Initializes the rows cleared state to 0 at the beginning of each update.

//const sweepRows = newStage => ...: This function iterates through each row of the stage and checks if any rows are fully filled (no empty cells). 
//If a row is fully filled, it increments the rowsCleared count, clears the row, and adds an empty row at the top. This simulates the rows being cleared.

//const updateStage = prevStage => ...: This function updates the game stage based on the player's state. 
//It first creates a copy of the previous stage and replaces 'clear' cells with actual cell values from the player's tetromino. 
//If the player's tetromino has collided, it resets the player's position and returns the result of the sweepRows function to update the stage accordingly.

//setStage(prev => updateStage(prev));: Finally, the setStage function is used to update the stage using the updateStage function. 
//It takes the previous stage state as a parameter and returns the updated stage.