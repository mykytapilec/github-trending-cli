#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parseArgs_1 = require("./cli/parseArgs");
const date_1 = require("./utils/date");
const github_service_1 = require("./services/github.service");
const formatter_1 = require("./utils/formatter");
async function main() {
    try {
        const { duration, limit } = (0, parseArgs_1.parseArgs)();
        const date = (0, date_1.getDateFromDuration)(duration);
        const repos = await (0, github_service_1.fetchTrendingRepos)(date, limit);
        if (!repos.length) {
            console.log('⚠️ No repositories found for the selected period.');
            return;
        }
        (0, formatter_1.formatRepos)(repos);
    }
    catch (error) {
        console.error('\n❌ Error:', error.message);
        process.exit(1);
    }
}
main();
