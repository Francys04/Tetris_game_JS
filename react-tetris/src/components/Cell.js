import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

// React.memo makes sure we only re-render the changed cells
const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color}>
    {console.log('rerender cell')}
  </StyledCell>
);
//The Cell component, wrapped with React.memo, is exported as the default export of the module.
export default React.memo(Cell);
