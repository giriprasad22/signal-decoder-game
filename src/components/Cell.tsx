import React from 'react';
import '../styles/Cell.css';

interface CellProps {
  index: number;
  isFlashing: boolean;
  isSelected: boolean;
  isCorrect?: boolean;
  isIncorrect?: boolean;
  isDisabled: boolean;
  onClick: (index: number) => void;
}

/**
 * Individual cell component in the grid
 */
export const Cell: React.FC<CellProps> = ({
  index,
  isFlashing,
  isSelected,
  isCorrect,
  isIncorrect,
  isDisabled,
  onClick,
}) => {
  const handleClick = () => {
    if (!isDisabled) {
      onClick(index);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === 'Enter' || e.key === ' ') && !isDisabled) {
      e.preventDefault();
      onClick(index);
    }
  };

  // Determine cell state classes
  const getClassName = () => {
    const classes = ['cell'];
    
    if (isFlashing) classes.push('flashing');
    if (isSelected) classes.push('selected');
    if (isCorrect) classes.push('correct');
    if (isIncorrect) classes.push('incorrect');
    if (isDisabled) classes.push('disabled');
    
    return classes.join(' ');
  };

  return (
    <div
      className={getClassName()}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={isDisabled ? -1 : 0}
      aria-label={`Cell ${index}`}
      aria-pressed={isSelected}
      aria-disabled={isDisabled}
    >
      {/* Show feedback icons */}
      {isCorrect && <span className="icon">✓</span>}
      {isIncorrect && <span className="icon">✗</span>}
    </div>
  );
};
