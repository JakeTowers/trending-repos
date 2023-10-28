import { GitHubRepositoryResponse, Repository } from "@/interfaces/repository";

async function getData() {
  const response = await fetch(
    "https://api.github.com/search/repositories?q=created:>2017-01-10&sort=stars&order=desc",
    { next: { revalidate: 0 } },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch repository data");
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
        <p key={repository.id}>{repository.name}</p>
      ))}
    </main>
  );
}
