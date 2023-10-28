"use client";

import { useState } from "react";
import { getLanguages } from "@/services/languages";
import { Repository } from "@/interfaces/repository";

export const DEFAULT_LANGUAGE = "All";

interface LanguageFilterProps {
  repositories: Repository[];
  onSelect(language: string): void;
}

const LanguageFilter = ({ repositories, onSelect }: LanguageFilterProps) => {
  const allLanguages = getLanguages(repositories);

  const [selectedLanguage, setSelectedLanguage] = useState(DEFAULT_LANGUAGE);

  const handleSelectedLanguage = (language: string) => {
    setSelectedLanguage(language);
    onSelect(language);
  };

  return (
    <div className="flex p-2">
      <select
        name="language-filter"
        id="language-filter"
        value={selectedLanguage}
        className="ml-auto h-8 appearance-none rounded-md pl-2 pr-2 text-black"
        onChange={(e) => handleSelectedLanguage(e.target.value)}
      >
        <option value={DEFAULT_LANGUAGE}>{DEFAULT_LANGUAGE}</option>
        {allLanguages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageFilter;
