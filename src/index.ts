#!/usr/bin/env node

import { parseArgs } from './cli/parseArgs';
import { getDateFromDuration } from './utils/date';
import { fetchTrendingRepos } from './services/github.service';
import { formatRepos } from './utils/formatter';

async function main() {
  try {
    const { duration, limit } = parseArgs();

    const date = getDateFromDuration(duration);
    const repos = await fetchTrendingRepos(date, limit);

    if (!repos.length) {
      console.log('⚠️ No repositories found for the selected period.');
      return;
    }

    formatRepos(repos);
  } catch (error: any) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

main();