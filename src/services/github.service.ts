import axios from 'axios';

export async function fetchTrendingRepos(date: string, limit: number) {
  try {
    const response = await axios.get('https://api.github.com/search/repositories', {
      params: {
        q: `created:>${date}`,
        sort: 'stars',
        order: 'desc',
        per_page: limit,
      },
    });

    return response.data.items;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`GitHub API error: ${error.response.status}`);
    }

    throw new Error('Network error while fetching repositories');
  }
}