#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const parseArgs_1 = require("./cli/parseArgs");
const date_1 = require("./utils/date");
const github_service_1 = require("./services/github.service");
const formatter_1 = require("./utils/formatter");
async function main() {
    try {
        const { duration, limit } = (0, parseArgs_1.parseArgs)();
        console.log(chalk_1.default.green.bold('\n🚀 GitHub Trending Repositories\n'));
        console.log(chalk_1.default.gray(`Duration: ${duration} | Limit: ${limit}\n`));
        const date = (0, date_1.getDateFromDuration)(duration);
        const repos = await (0, github_service_1.fetchTrendingRepos)(date, limit);
        if (!repos.length) {
            console.log(chalk_1.default.yellow('⚠️ No repositories found for the selected period.'));
            return;
        }
        (0, formatter_1.formatRepos)(repos);
    }
    catch (error) {
        console.error(chalk_1.default.red(`\n❌ Error: ${error.message}`));
        process.exit(1);
    }
}
main();
