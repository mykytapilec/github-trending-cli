#!/usr/bin/env node

import { parseArgs } from './cli/parseArgs';

async function main() {
  const { duration, limit } = parseArgs();

  console.log('🚀 GitHub Trending CLI');
  console.log('Duration:', duration);
  console.log('Limit:', limit);
}

main();