# GitHub Trending CLI

Simple CLI tool built with **Node.js**, **TypeScript**, and **Commander** that fetches and displays trending GitHub repositories.  
Allows users to **filter repositories by time range** and **limit the number of results**.

---

## Features

* Fetch trending repositories using **GitHub REST API**
* Filter by time range:
  * `day`
  * `week` (default)
  * `month`
  * `year`
* Limit number of results (`--limit`)
* Sort repositories by **stars**
* Clean and colored CLI output using **chalk**
* Input validation and error handling
* Simple and user-friendly interface

---

## Setup

1. Clone the repo:

~~~bash
git clone https://github.com/mykytapilec/github-trending-cli.git
cd github-trending-cli
~~~

2. Install dependencies:

~~~bash
npm install
~~~

3. Build the project:

~~~bash
npm run build
~~~

4. Link CLI globally:

~~~bash
npm link
~~~

---

## Usage

### Basic usage

~~~bash
trending-repos
~~~

---

### With options

~~~bash
trending-repos --duration month --limit 20
~~~

---

## Options

| Option | Description | Default |
|--------|------------|---------|
| `--duration` | Time range (`day`, `week`, `month`, `year`) | `week` |
| `--limit` | Number of repositories to display (max 100) | `10` |

---

## Example Output

~~~bash
🚀 GitHub Trending Repositories

Duration: week | Limit: 5

1. user/repo
⭐ 12345 | TypeScript
Awesome project description
~~~

---

## Scripts

~~~bash
npm run start   # run with ts-node
npm run build   # compile TypeScript to dist
~~~

---

## Project Structure

~~~
src/
├─ cli/
│  └─ parseArgs.ts
├─ services/
│  └─ github.service.ts
├─ utils/
│  ├─ date.ts
│  └─ formatter.ts
├─ types/
├─ index.ts
~~~

---

## Error Handling

The CLI handles:

* Invalid `duration` values
* Invalid or out-of-range `limit`
* GitHub API errors
* Network issues

Example:

~~~bash
❌ Error: Invalid duration: "invalid". Use one of: day, week, month, year
~~~

---

## Notes

* GitHub does not provide a direct "trending" API endpoint.  
  This project uses the **search API** with filters:
  * `created:>DATE`
  * sorted by `stars`
* Maximum `limit` is **100** due to GitHub API restrictions.
* No authentication is required for public repositories (but rate limits may apply).

---

## Project link

https://roadmap.sh/projects/github-trending-cli