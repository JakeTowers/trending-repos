import RepositoryCard from "@/components/RepositoryCard";
import { GitHubRepositoryResponse, Repository } from "@/interfaces/repository";
import { getDateLastSevenDays } from "@/services/date";

async function getData() {
  const response = await fetch(
    `https://api.github.com/search/repositories?q=created:>${getDateLastSevenDays()}&sort=stars&order=desc`,
  );

  if (!response.ok) {
    return [];
  }

  const gitHubRepositoryResponse =
    (await response.json()) as GitHubRepositoryResponse;

  const repositories: Repository[] = gitHubRepositoryResponse.items.map(
    (repository) => ({
      description: repository.description,
      id: repository.id,
      name: repository.name,
      starCount: repository.stargazers_count,
      url: repository.html_url,
    }),
  );

  return repositories;
}

export default async function Page() {
  const repositories = await getData();

  return (
    <main>
      {repositories.map((repository) => (
        <RepositoryCard key={repository.id} repository={repository} />
      ))}
    </main>
  );
}
