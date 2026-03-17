"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseArgs = parseArgs;
const commander_1 = require("commander");
function parseArgs() {
    const program = new commander_1.Command();
    program
        .name('trending-repos')
        .description('CLI to fetch trending GitHub repositories')
        .option('--duration <type>', 'day | week | month | year', 'week')
        .option('--limit <number>', 'number of repositories', '10');
    program.parse();
    return program.opts();
}
