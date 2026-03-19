#!/usr/bin/env node

import chalk from 'chalk';
import { parseArgs } from './cli/parseArgs';
import { getDateFromDuration } from './utils/date';
import { fetchTrendingRepos } from './services/github.service';
import { formatRepos } from './utils/formatter';

async function main() {
  try {
    const { duration, limit } = parseArgs();

    console.log(chalk.green.bold('\n🚀 GitHub Trending Repositories\n'));
    console.log(chalk.gray(`Duration: ${duration} | Limit: ${limit}\n`));

    const date = getDateFromDuration(duration);
    const repos = await fetchTrendingRepos(date, limit);

    if (!repos.length) {
      console.log(chalk.yellow('⚠️ No repositories found for the selected period.'));
      return;
    }

    formatRepos(repos);
  } catch (error: any) {
    console.error(chalk.red(`\n❌ Error: ${error.message}`));
    process.exit(1);
  }
}

main();