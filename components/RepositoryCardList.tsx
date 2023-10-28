"use client";

import { useEffect, useState } from "react";
import RepositoryCard from "./RepositoryCard";
import { Repository } from "@/interfaces/repository";
import LanguageFilter, { DEFAULT_LANGUAGE } from "./LanguagesFilter";

interface RepositoryCardListProps {
  repositories: Repository[];
}

const RepositoryCardList = ({ repositories }: RepositoryCardListProps) => {
  const [filteredRepositories, setFilteredRepositories] =
    useState(repositories);

  useEffect(() => {
    setFilteredRepositories(repositories);
  }, [repositories]);

  const handleSelectedLanguage = (language: string) => {
    setFilteredRepositories(
      repositories.filter((repository) =>
        language === DEFAULT_LANGUAGE ? true : repository.language === language,
      ),
    );
  };

  return (
    <>
      <LanguageFilter
        repositories={repositories}
        onSelect={(language) => handleSelectedLanguage(language)}
      />
      {filteredRepositories.map((repository) => (
        <RepositoryCard key={repository.id} repository={repository} />
      ))}
    </>
  );
};

export default RepositoryCardList;
