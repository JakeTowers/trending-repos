import { Repository } from "@/interfaces/repository";

export const getLanguages = (repositories: Repository[]) => {
  const languageList = repositories
    .map((repository) => (repository.language ? repository.language : ""))
    .filter((language) => language);

  const languagesWithoutDuplicates = new Set(languageList);

  return Array.from(languagesWithoutDuplicates);
};
