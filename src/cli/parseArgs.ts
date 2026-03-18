import { Command } from 'commander';

const ALLOWED_DURATIONS = ['day', 'week', 'month', 'year'];

export function parseArgs() {
  const program = new Command();

  program
    .name('trending-repos')
    .description('CLI to fetch trending GitHub repositories')
    .option('--duration <type>', 'day | week | month | year', 'week')
    .option('--limit <number>', 'number of repositories', '10')
    .parse();

  const options = program.opts();

  const duration = options.duration;
  const limit = Number(options.limit);

  // ✅ duration validation
  if (!ALLOWED_DURATIONS.includes(duration)) {
    throw new Error(
      `Invalid duration: "${duration}". Use one of: ${ALLOWED_DURATIONS.join(', ')}`
    );
  }

  // ✅ limit validation
  if (isNaN(limit) || limit <= 0) {
    throw new Error('Limit must be a positive number');
  }

  if (limit > 100) {
    throw new Error('Limit cannot be greater than 100');
  }

  return { duration, limit };
}