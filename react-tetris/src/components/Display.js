import React from 'react';
import { StyledDisplay } from './styles/StyledDisplay';

//The Display component is a functional component that takes two props:
//gameOver: A boolean indicating whether the game is over.
//text: The text content to be displayed in the display area.


const Display = ({ gameOver, text }) => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);

export default Display;
