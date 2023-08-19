//This imports the React hooks useState, useEffect, and useCallback from the React library.
import { useState, useEffect, useCallback } from 'react';

export const useGameStatus = rowsCleared => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);

  const linePoints = [40, 100, 300, 1200];

  const calcScore = useCallback(() => {
    // We have score
    if (rowsCleared > 0) {
      // This is how original Tetris score is calculated
      setScore(prev => prev + linePoints[rowsCleared - 1] * (level + 1));
      setRows(prev => prev + rowsCleared);
    }
  }, [level, linePoints, rowsCleared]);

  useEffect(() => {
    calcScore();
  }, [calcScore, rowsCleared, score]);

  return [score, setScore, rows, setRows, level, setLevel];
};

//Description ofuseGameStatus => 
//const useGameStatus = rowsCleared => { ... }:
//This defines the useGameStatus custom hook, which takes the number of rows that have been 
//cleared (rowsCleared) as a parameter.

//Inside the hook function:

//const [score, setScore] = useState(0);

//const [rows, setRows] = useState(0);

//const [level, setLevel] = useState(0);
//These three lines set up the state variables for score, rows, and level, along with their corresponding setter functions.

//const linePoints = [40, 100, 300, 1200];
//This array defines the points awarded for clearing a certain number of rows. The index of the array 
//corresponds to the number of cleared rows minus one (since arrays are zero-indexed). So, clearing 1 row gives 40 points,
// 2 rows give 100 points, and so on.

//const calcScore = useCallback(() => { ... }, [level, linePoints, rowsCleared]);
//This function calculates the score and updates the state variables for score and rows based on the number of cleared rows.
// The calculation follows the original Tetris scoring mechanism. It multiplies the points corresponding to the number of 
//cleared rows by the current level, and then adds the calculated score to the current score state.

//useEffect(() => { calcScore(); }, [calcScore, rowsCleared, score]);
//This effect hook triggers the calcScore function whenever there's a change in the dependencies: calcScore, rowsCleared, 
//and score. It ensures that the score and row states are updated accurately based on the game's progress.

//The return [score, setScore, rows, setRows, level, setLevel]; line returns an array containing the score, 
//its setter function, the number of rows cleared, its setter function, the current level, and its setter function.