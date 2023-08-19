import React from 'react';
//StyledStage: An import that presumably represents the styled component for the game stage, defined in the StyledStage file.
import { StyledStage } from './styles/StyledStage';

import Cell from './Cell';
//The Stage component is a functional component that takes a single prop, 
//stage, which is the 2D array representing the current state of the game stage.
const Stage = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledStage>
);

export default Stage;


//Mapping Cells:

//Within the StyledStage component, the stage prop is mapped using the map function. 
//This loop iterates over each row in the stage array.
//For each row, another map function is used to iterate over each cell within the row. 
//The cell variable represents a specific cell within the game stage.
//The Cell component is used to render each individual cell. The key attribute is set to the index (x) within the row, and the type 
//attribute is set to cell[0], presumably indicating the type of block in that cell.