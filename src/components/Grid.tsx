import React from 'react';
import { Cell } from './Cell';
import '../styles/Grid.css';

interface GridProps {
  cells: Array<{
    index: number;
    isFlashing: boolean;
    isSelected: boolean;
    isCorrect?: boolean;
    isIncorrect?: boolean;
  }>;
  isDisabled: boolean;
  onCellClick: (index: number) => void;
}

/**
 * 5x5 Grid component that renders all cells
 */
export const Grid: React.FC<GridProps> = ({ cells, isDisabled, onCellClick }) => {
  return (
    <div className="grid-container">
      <div className="grid">
        {cells.map((cell) => (
          <Cell
            key={cell.index}
            index={cell.index}
            isFlashing={cell.isFlashing}
            isSelected={cell.isSelected}
            isCorrect={cell.isCorrect}
            isIncorrect={cell.isIncorrect}
            isDisabled={isDisabled}
            onClick={onCellClick}
          />
        ))}
      </div>
    </div>
  );
};
