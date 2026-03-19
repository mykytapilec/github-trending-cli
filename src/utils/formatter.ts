import chalk from 'chalk';

export function formatRepos(repos: any[]) {
  repos.forEach((repo, index) => {
    console.log(
      `
${chalk.blueBright.bold(`${index + 1}. ${repo.full_name}`)}
${chalk.yellow('⭐')} ${chalk.bold(repo.stargazers_count)}  |  ${chalk.cyan(repo.language || 'N/A')}
${chalk.gray(repo.description || 'No description')}
`
    );
  });
}