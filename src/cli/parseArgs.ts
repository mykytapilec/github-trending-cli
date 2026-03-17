import { Command } from 'commander';

export function parseArgs() {
  const program = new Command();

  program
    .name('trending-repos')
    .description('CLI to fetch trending GitHub repositories')
    .option('--duration <type>', 'day | week | month | year', 'week')
    .option('--limit <number>', 'number of repositories', '10');

  program.parse();

  return program.opts();
}