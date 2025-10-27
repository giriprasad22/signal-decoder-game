import { useState, useEffect } from 'react';

/**
 * Custom hook to manage the flashing demo animation
 * @param correctIndexes - Set of indexes that should flash
 * @param demoDuration - Duration of demo in milliseconds (default 10000ms = 10s)
 * @param flashInterval - Interval between flash toggles (default 500ms)
 * @returns Object with flashingIndexes (currently lit) and demoActive flag
 */
export function useDemo(
  correctIndexes: Set<number>,
  demoDuration: number = 10000,
  flashInterval: number = 500
) {
  const [flashingIndexes, setFlashingIndexes] = useState<Set<number>>(
    () => new Set(correctIndexes)
  );
  const [demoActive, setDemoActive] = useState(true);

  useEffect(() => {
    setDemoActive(true);
    
    let flashState = true;
    setFlashingIndexes(new Set(correctIndexes));

    // Toggle flashing on/off every flashInterval ms
    const flashTimer = setInterval(() => {
      flashState = !flashState;
      if (flashState) {
        setFlashingIndexes(new Set(correctIndexes));
      } else {
        setFlashingIndexes(new Set());
      }
    }, flashInterval);

    // Stop demo after demoDuration ms
    const stopTimer = setTimeout(() => {
      clearInterval(flashTimer);
      setDemoActive(false);
      setFlashingIndexes(new Set());
    }, demoDuration);

    // Cleanup on unmount or when dependencies change
    return () => {
      clearInterval(flashTimer);
      clearTimeout(stopTimer);
    };
  }, [correctIndexes, demoDuration, flashInterval]);

  return { flashingIndexes, demoActive };
}
