//This imports the React library, which is necessary for creating React components and utilizing JSX syntax.
import React from 'react';
import Tetris from './components/Tetris';

//This defines a functional component named App. 
//The component doesn't take any props and uses an arrow function (() => ...) for its implementation.
const App = () => (
  //This JSX element represents a div with the CSS class name "App".
  // JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript code.
  <div className="App">
    <Tetris />
  </div>
);

export default App;

//<Tetris/>
//This JSX element is a self-closing tag that renders the Tetris component. 
//It's assumed that the Tetris component generates the necessary structure and logic for the Tetris game.