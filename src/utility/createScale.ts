import { markDesc } from '../models/markItem';

const createScale = (
  start: number,
  end: number,
  increment: number
): markDesc[] => {
  const result: markDesc[] = [];
  let step = start;

  while (step <= end) {
    let fixedPoint = step;
    if (step > 0 && step < 1) {
      fixedPoint = Number(step.toFixed(2));
    }
    result.push({
      value: fixedPoint,
      label: `${fixedPoint}`,
    });
    step += increment;
  }

  return result;
};

export default createScale;
