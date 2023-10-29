"use client";

import { useState } from "react";
import RepositoryCard from "./RepositoryCard";
import { Repository } from "@/interfaces/repository";
import LanguageFilter, { DEFAULT_LANGUAGE } from "./LanguagesFilter";

interface RepositoryCardListProps {
  repositories: Repository[];
}

const RepositoryCardList = ({ repositories }: RepositoryCardListProps) => {
  const [filteredRepositories, setFilteredRepositories] =
    useState(repositories);

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
      <ul>
        {filteredRepositories.map((repository, index) => (
          <RepositoryCard
            key={repository.id}
            repository={repository}
            id={index}
          />
        ))}
      </ul>
    </>
  );
};

export default RepositoryCardList;
