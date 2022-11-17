import { run } from 'node:test';
import { resolve } from 'node:path';
import { glob } from 'glob';

run({ files: glob.sync('./tests/**/*.spec.ts') })
  .pipe(process.stdout);
