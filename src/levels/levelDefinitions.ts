import { Level } from '../types/game';
import { isPrime } from '../utils/helpers';

/**
 * Level 1: Flash squares where index % 2 === 0 (even indices)
 */
const level1: Level = {
  id: 1,
  name: 'Even Indices',
  description: 'Flash squares at even index positions',
  rule: (_row: number, _col: number, index: number) => index % 2 === 0,
};

/**
 * Level 2: Flash squares on both diagonals
 * Main diagonal: row === col
 * Anti-diagonal: row + col === 4
 */
const level2: Level = {
  id: 2,
  name: 'Diagonals',
  description: 'Flash squares on both main diagonals',
  rule: (row: number, col: number) => row === col || row + col === 4,
};

/**
 * Level 3: Flash squares whose index is a prime number
 */
const level3: Level = {
  id: 3,
  name: 'Prime Numbers',
  description: 'Flash squares at prime index positions',
  rule: (_row: number, _col: number, index: number) => isPrime(index),
};

/**
 * Level 4: Flash center square (index 12) and its 4 direct neighbors
 * Center: row=2, col=2 (index 12)
 * Neighbors: up(7), down(17), left(11), right(13)
 */
const level4: Level = {
  id: 4,
  name: 'Center Cluster',
  description: 'Flash the center and its 4 direct neighbors',
  rule: (row: number, col: number) => {
    // Center
    if (row === 2 && col === 2) return true;
    // Up
    if (row === 1 && col === 2) return true;
    // Down
    if (row === 3 && col === 2) return true;
    // Left
    if (row === 2 && col === 1) return true;
    // Right
    if (row === 2 && col === 3) return true;
    return false;
  },
};

/**
 * Level 5: Flash squares where (row + col) % 3 === 0
 */
const level5: Level = {
  id: 5,
  name: 'Modulo Pattern',
  description: 'Flash squares where (row + col) is divisible by 3',
  rule: (row: number, col: number) => (row + col) % 3 === 0,
};

/**
 * All levels in order
 */
export const levels: Level[] = [level1, level2, level3, level4, level5];
