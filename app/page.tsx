import ErrorMessage from "@/components/ErrorMessage";
import RepositoryCardList from "@/components/RepositoryCardList";
import { GitHubRepositoryResponse, Repository } from "@/interfaces/repository";
import { getDateLastSevenDays } from "@/services/date";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Repositories",
};

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
      language: repository.language,
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
    <>
      {repositories.length ? (
        <RepositoryCardList repositories={repositories} />
      ) : (
        <ErrorMessage
          text={
            "Sorry, no repository information could be fetched at this time"
          }
        />
      )}
    </>
  );
}
