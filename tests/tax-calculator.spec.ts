import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import { taxCalculator } from '../src/tax-calculator.js';

describe('Calc test', () => {
  it('Compare result', () => {
    assert.strictEqual(taxCalculator(2, 2), 4);
  });
});
