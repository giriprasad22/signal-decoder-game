/**
 * Represents a single cell in the 5x5 grid
 */
export interface Cell {
  index: number;
  row: number;
  col: number;
  isSelected?: boolean;
  isFlashing?: boolean;
  isCorrect?: boolean;
  isIncorrect?: boolean;
}

/**
 * Game modes during different phases
 */
export type GameMode = 'demo' | 'select' | 'review' | 'complete';

/**
 * Level rule function type
 * Returns true if the cell at (row, col, index) should flash
 */
export type LevelRule = (row: number, col: number, index: number) => boolean;

/**
 * Level definition with metadata
 */
export interface Level {
  id: number;
  name: string;
  description: string;
  rule: LevelRule;
}

/**
 * Overall game state
 */
export interface GameState {
  currentLevelIndex: number;
  mode: GameMode;
  score: number;
  selectedIndexes: Set<number>;
  correctIndexes: Set<number>;
  flashingIndexes: Set<number>;
  attempts: number;
}
