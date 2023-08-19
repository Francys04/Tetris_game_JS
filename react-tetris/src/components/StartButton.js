//React: The core React library, necessary for creating React components.
import React from 'react';
//styled-components: A popular library for styling React components using tagged template literals.
import styled from 'styled-components';

//StyledStartButton is a styled component created using 
//the styled-components library. It's defined as a styled button element.
const StyledStartButton = styled.button`
  box-sizing: border-box;

  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  border: none;
  color: white;
  background: #333;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
`;
//The StartButton component is a functional component that takes a single prop, callback, 
//which represents the function to be executed when the button is clicked.
const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
);

export default StartButton;
