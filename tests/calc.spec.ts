import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import { calc } from '../src/calc';

describe('A thing', () => {
  it('should work', () => {
    assert.strictEqual(calc(2, 2), 4);
  });
});
