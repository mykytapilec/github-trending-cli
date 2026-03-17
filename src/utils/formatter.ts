export function formatRepos(repos: any[]) {
  repos.forEach((repo, index) => {
    console.log(`
${index + 1}. ${repo.full_name}
⭐ ${repo.stargazers_count} | ${repo.language || 'N/A'}
${repo.description || 'No description'}
`);
  });
}