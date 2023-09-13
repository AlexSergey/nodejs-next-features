import { parseArgs } from 'node:util';

import { taxCalculator } from './tax-calculator.js';
import { logger } from './logger';
import * as process from 'process';

logger.silly('Calculation in progress');

try {
  const res = await fetch('https://random-data-api.com/api/v2/users');
  const [tax]: [number] = await res.json();
  const args = process.argv.slice(2);

  const options = {
    cost: {
      type: 'string',
      short: 'c'
    }
  };

  const {
    values,
  } = parseArgs<any>({ args, options });
  const cost = Number(values.cost);

  console.log(taxCalculator(cost, tax));
} catch (e) {
  console.error(e);
}

console.log(`env: ${process.env.TEST}`)
