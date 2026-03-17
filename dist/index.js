#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parseArgs_1 = require("./cli/parseArgs");
async function main() {
    const { duration, limit } = (0, parseArgs_1.parseArgs)();
    console.log('🚀 GitHub Trending CLI');
    console.log('Duration:', duration);
    console.log('Limit:', limit);
}
main();
