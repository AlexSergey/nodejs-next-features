import { parseArgs } from 'node:util';

import { taxCalculator } from './tax-calculator.js';

const res = await fetch('http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000');
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
