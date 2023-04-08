import test from 'ava';
import { generateCalcCode } from '../utils';

test('Generate code', t => {
  const result = generateCalcCode(0, 4, ['+', '-', '/', '*']);
  t.snapshot(result);
});
