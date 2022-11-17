import { run } from 'node:test';
import { resolve } from 'node:path';
import * as glob from 'glob';

run({ files: glob.default.sync('./tests/**/*.spec.ts') })
  .pipe(process.stdout);
