/**
 * Utility function to check if a number is prime
 */
export function isPrime(num: number): boolean {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  
  return true;
}

/**
 * Generate all cells with their row and column positions
 */
export function generateCells(): Array<{ index: number; row: number; col: number }> {
  const cells = [];
  for (let i = 0; i < 25; i++) {
    cells.push({
      index: i,
      row: Math.floor(i / 5),
      col: i % 5,
    });
  }
  return cells;
}

/**
 * Get indexes that should flash based on a level rule
 */
export function getFlashingIndexes(
  rule: (row: number, col: number, index: number) => boolean
): Set<number> {
  const indexes = new Set<number>();
  const cells = generateCells();
  
  for (const cell of cells) {
    if (rule(cell.row, cell.col, cell.index)) {
      indexes.add(cell.index);
    }
  }
  
  return indexes;
}
