import { useEffect, useState } from 'react';

export const enum MinBreakPoint {
  sm = 640,
  md = 768,
  lg = 1024,
  xl = 1280,
  '2xl' = 1536,
}

// for the ordering
const breakPoints = [
  MinBreakPoint.sm,
  MinBreakPoint.md,
  MinBreakPoint.lg,
  MinBreakPoint.xl,
  MinBreakPoint['2xl'],
];

const getNextMinBreakPoint = (width: number): MinBreakPoint => {
  let result = MinBreakPoint.sm;

  for (const current of breakPoints) {
    if (current > width) {
      break;
    }
    result = current;
  }
  return result;
};

interface WindowDimensions {
  width: number;
  height: number;
  breakPoint: MinBreakPoint;
}

const windowSnapshot = (): WindowDimensions => ({
  width: window.innerWidth,
  height: window.innerHeight,
  breakPoint: getNextMinBreakPoint(window.innerWidth),
});

const useWindowDimensions = (): WindowDimensions => {
  const [snapshot, setSnapshot] = useState(windowSnapshot());

  const resizeListener = (): void => {
    setSnapshot(windowSnapshot());
  };

  useEffect(() => {
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return snapshot;
};

export default useWindowDimensions;
