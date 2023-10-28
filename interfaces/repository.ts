interface GitHubRepositoryInformation {
  description: string | null;
  id: number;
  language: string | null;
  name: string;
  html_url: string;
  stargazers_count: number;
}

export interface GitHubRepositoryResponse {
  items: GitHubRepositoryInformation[];
  total_count: number;
}

export interface Repository {
  description: string | null;
  id: number;
  language: string | null;
  name: string;
  url: string;
  starCount: number;
}
