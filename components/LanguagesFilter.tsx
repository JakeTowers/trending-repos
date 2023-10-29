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
        className="ml-auto h-8 rounded-md pl-2 pr-2 text-black shadow shadow-slate-100"
        name="language-filter"
        id="language-filter"
        onChange={(e) => handleSelectedLanguage(e.target.value)}
        value={selectedLanguage}
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
