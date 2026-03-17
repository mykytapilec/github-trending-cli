import { parseArgs } from './cli/parseArgs';
import { getDateFromDuration } from './utils/date';
import { fetchTrendingRepos } from './services/github.service';
import { formatRepos } from './utils/formatter';

async function main() {
  try {
    const { duration, limit } = parseArgs();

    const date = getDateFromDuration(duration);
    const repos = await fetchTrendingRepos(date, Number(limit));

    formatRepos(repos);
  } catch (error: any) {
    console.error('❌ Error:', error.message);
  }
}

main();