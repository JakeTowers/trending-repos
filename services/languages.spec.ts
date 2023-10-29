import { Repository } from "@/interfaces/repository";
import { getLanguages } from "./languages";

describe("languages", () => {
  describe("getLanguages", () => {
    const mockRepositories: Repository[] = [
      {
        id: 1,
        description: "mock repo 1",
        language: "TypeScript",
        name: "mock repo 1",
        url: "https://mockurl.com",
        starCount: 1,
      },
      {
        id: 2,
        description: "mock repo 2",
        language: "C#",
        name: "mock repo 2",
        url: "https://mockurl.com",
        starCount: 2,
      },
      {
        id: 3,
        description: "mock repo 3",
        language: "C#",
        name: "mock repo 3",
        url: "https://mockurl.com",
        starCount: 3,
      },
      {
        id: 4,
        description: "mock repo 4",
        language: "JavaScript",
        name: "mock repo 4",
        url: "https://mockurl.com",
        starCount: 4,
      },
    ];

    it("should get the languages used by the repositories", () => {
      expect(getLanguages(mockRepositories)).toEqual([
        "TypeScript",
        "C#",
        "JavaScript",
      ]);
    });

    it("should filter out language duplicates", () => {
      expect(getLanguages(mockRepositories)).toEqual([
        "TypeScript",
        "C#",
        "JavaScript",
      ]);
      expect(getLanguages(mockRepositories).length).toEqual(3);
    });
  });
});
