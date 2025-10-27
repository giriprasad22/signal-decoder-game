import React, { useState, useEffect, useMemo } from 'react';
import { Grid } from './Grid';
import { useDemo } from '../hooks/useDemo';
import { levels } from '../levels/levelDefinitions';
import { getFlashingIndexes, generateCells } from '../utils/helpers';
import { GameMode } from '../types/game';
import '../styles/GameController.css';

/**
 * Main game controller component - orchestrates the game flow
 */
export const GameController: React.FC = () => {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [mode, setMode] = useState<GameMode>('demo');
  const [selectedIndexes, setSelectedIndexes] = useState<Set<number>>(new Set());
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const currentLevel = levels[currentLevelIndex];
  const correctIndexes = useMemo(
    () => getFlashingIndexes(currentLevel.rule),
    [currentLevel]
  );
  
  // Use demo hook for flashing animation
  const { flashingIndexes, demoActive } = useDemo(correctIndexes, 10000, 500);

  // When demo ends, switch to selection mode
  useEffect(() => {
    if (!demoActive && mode === 'demo') {
      setMode('select');
    }
  }, [demoActive, mode]);

  // Handle cell selection
  const handleCellClick = (index: number) => {
    if (mode !== 'select') return;

    setSelectedIndexes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  // Submit selection and check answer
  const handleSubmit = () => {
    if (mode !== 'select') return;

    setMode('review');

    // Calculate score: +10 for each correct, -5 for each incorrect
    const correct = [...selectedIndexes].filter((idx) => correctIndexes.has(idx)).length;
    const incorrect = selectedIndexes.size - correct;

    const points = correct * 10 - incorrect * 5;
    setScore((prev) => prev + Math.max(0, points));

    // Check if perfect match
    if (
      selectedIndexes.size === correctIndexes.size &&
      [...selectedIndexes].every((idx) => correctIndexes.has(idx))
    ) {
      // Perfect! Auto-advance after 2 seconds
      setTimeout(() => {
        handleNextLevel();
      }, 2000);
    }
  };

  // Go to next level
  const handleNextLevel = () => {
    if (currentLevelIndex < levels.length - 1) {
      setCurrentLevelIndex((prev) => prev + 1);
      setMode('demo');
      setSelectedIndexes(new Set());
      setShowHint(false);
    } else {
      setMode('complete');
    }
  };

  // Replay demo for current level
  const handleReplay = () => {
    setMode('demo');
    setSelectedIndexes(new Set());
    setShowHint(false);
  };

  // Generate cell data for grid
  const getCellData = () => {
    return generateCells().map((cell) => {
      const isFlashing = mode === 'demo' && flashingIndexes.has(cell.index);
      const isSelected = selectedIndexes.has(cell.index);
      
      let isCorrect = false;
      let isIncorrect = false;

      if (mode === 'review') {
        if (isSelected && correctIndexes.has(cell.index)) {
          isCorrect = true;
        } else if (isSelected && !correctIndexes.has(cell.index)) {
          isIncorrect = true;
        }
      }

      return {
        index: cell.index,
        isFlashing,
        isSelected,
        isCorrect,
        isIncorrect,
      };
    });
  };

  // Check if user is ready to submit
  const canSubmit = mode === 'select' && selectedIndexes.size > 0;

  return (
    <div className="game-container">
      <header className="game-header">
        <h1>🔍 Signal Decoder</h1>
        <p className="subtitle">The Invisible Pattern Game</p>
      </header>

      {mode !== 'complete' ? (
        <>
          <div className="game-info">
            <div className="level-info">
              <h2>
                Level {currentLevel.id}: {currentLevel.name}
              </h2>
              <p className="progress">
                Progress: {currentLevelIndex + 1} / {levels.length}
              </p>
            </div>
            <div className="score-info">
              <p className="score">Score: {score}</p>
            </div>
          </div>

          <div className="status-bar">
            {mode === 'demo' && (
              <p className="status-message">🔄 Watch the pattern carefully...</p>
            )}
            {mode === 'select' && (
              <p className="status-message">👆 Click the cells that were flashing</p>
            )}
            {mode === 'review' && (
              <p className="status-message">
                {selectedIndexes.size === correctIndexes.size &&
                [...selectedIndexes].every((idx) => correctIndexes.has(idx))
                  ? '✅ Perfect! Moving to next level...'
                  : '❌ Not quite right. Try again!'}
              </p>
            )}
          </div>

          <Grid
            cells={getCellData()}
            isDisabled={mode === 'demo'}
            onCellClick={handleCellClick}
          />

          <div className="controls">
            {mode === 'select' && (
              <button
                className="btn btn-primary"
                onClick={handleSubmit}
                disabled={!canSubmit}
              >
                Submit Answer
              </button>
            )}

            {mode === 'review' && (
              <>
                <button className="btn btn-secondary" onClick={handleReplay}>
                  Replay Demo
                </button>
                <button className="btn btn-primary" onClick={handleNextLevel}>
                  {currentLevelIndex < levels.length - 1 ? 'Next Level' : 'Finish'}
                </button>
                <button
                  className="btn btn-hint"
                  onClick={() => setShowHint(!showHint)}
                >
                  {showHint ? 'Hide Hint' : 'Show Hint'}
                </button>
              </>
            )}
          </div>

          {showHint && mode === 'review' && (
            <div className="hint-box">
              <p className="hint-title">💡 Hint:</p>
              <p>{currentLevel.description}</p>
            </div>
          )}
        </>
      ) : (
        <div className="completion-screen">
          <h2>🎉 Congratulations!</h2>
          <p>You've completed all {levels.length} levels!</p>
          <p className="final-score">Final Score: {score}</p>
          <button className="btn btn-primary" onClick={() => window.location.reload()}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};
