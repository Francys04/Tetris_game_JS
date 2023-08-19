//TETROMINOS Object:
//This object defines the different tetrominos with their corresponding shapes and colors. 
//Tetrominos are represented by their uppercase letter names (I, J, L, O, S, T, Z). Each tetromino has two properties:
// shape: A 2D array representing the pattern of the tetromino where the tetromino's letter is used to denote its presence in the shape.
// color: A string representing the color of the tetromino in the format of 'R, G, B' (red, green, blue) values.

export const TETROMINOS = {
    0: { shape: [[0]], color: '0, 0, 0' },
    I: {
      shape: [[0, 'I', 0, 0], [0, 'I', 0, 0], [0, 'I', 0, 0], [0, 'I', 0, 0]],
      color: '80, 227, 230',
    },
    J: { shape: [[0, 'J', 0], [0, 'J', 0], ['J', 'J', 0]], color: '36, 95, 223' },
    L: {
      shape: [[0, 'L', 0], [0, 'L', 0], [0, 'L', 'L']],
      color: '223, 173, 36',
    },
    O: { shape: [['O', 'O'], ['O', 'O']], color: '223, 217, 36' },
    S: { shape: [[0, 'S', 'S'], ['S', 'S', 0], [0, 0, 0]], color: '48, 211, 56' },
    T: {
      shape: [[0, 0, 0], ['T', 'T', 'T'], [0, 'T', 0]],
      color: '132, 61, 198',
    },
    Z: { shape: [['Z', 'Z', 0], [0, 'Z', 'Z'], [0, 0, 0]], color: '227, 78, 78' },
  };
  
  //randomTetromino Function:
//This function generates a random tetromino by selecting a random letter from the string 'IJLOSTZ' (which represents the available tetromino names).
// The function then returns the corresponding tetromino object from the TETROMINOS object using the selected letter as the key.
  export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ';
    const randTetromino =
      tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetromino];
  };
  
  //describe:
//The keyword "describe" in the comment is likely a placeholder for a testing framework or documentation tool. 
//It suggests that this code may be part of a testing suite where the code's behavior is being described, or it could be a placeholder for documenting how this code works.