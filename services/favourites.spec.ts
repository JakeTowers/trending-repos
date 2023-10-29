import { Favourite } from "@/interfaces/favourite";
import {
  getFavourites,
  isFavourited,
  updateFavourites,
} from "@/services/favourites";

describe("favourites", () => {
  const mockFavouriteRepositories: Favourite[] = [
    {
      id: "1",
      repository: {
        id: 1,
        description: "mock repo 1",
        language: "TypeScript",
        name: "mock repo 1",
        url: "https://mockurl.com",
        starCount: 1,
      },
    },
    {
      id: "2",
      repository: {
        id: 2,
        description: "mock repo 2",
        language: "C#",
        name: "mock repo 2",
        url: "https://mockurl.com",
        starCount: 2,
      },
    },
  ];

  describe("getFavourites", () => {
    const getItemSpy = jest.spyOn(Storage.prototype, "getItem");

    it("should return empty array if no favourites", () => {
      getItemSpy.mockReturnValueOnce(null);

      expect(getFavourites()).toEqual([]);
    });

    it("should return favourites", () => {
      getItemSpy.mockReturnValueOnce(JSON.stringify(mockFavouriteRepositories));

      expect(getFavourites()).toEqual(mockFavouriteRepositories);
    });
  });

  describe("isFavourited", () => {
    const getItemSpy = jest.spyOn(Storage.prototype, "getItem");

    it("should return true if repository is favourited", () => {
      getItemSpy.mockReturnValueOnce(JSON.stringify(mockFavouriteRepositories));

      expect(isFavourited(mockFavouriteRepositories[0].repository.id)).toEqual(
        true,
      );
    });

    it("should return false if repository is not favourited", () => {
      getItemSpy.mockReturnValueOnce(JSON.stringify(mockFavouriteRepositories));

      expect(isFavourited(3)).toEqual(false);
    });
  });

  describe("updateFavourites", () => {
    const setItemSpy = jest.spyOn(Storage.prototype, "setItem");
    const mockFavourites: Favourite[] = [
      {
        id: "3",
        repository: {
          id: 3,
          description: "test repo 3",
          name: "test repo 3",
          language: "Python",
          url: "https://mockurl.com",
          starCount: 3,
        },
      },
    ];

    it("should add a new favourite if favourited", () => {
      updateFavourites(mockFavourites[0].repository, true);

      expect(setItemSpy).toHaveBeenCalledWith(
        "favourites",
        JSON.stringify(mockFavourites),
      );
    });

    it("should remove a favourite if un-favourited", () => {
      updateFavourites(mockFavourites[0].repository, false);

      expect(setItemSpy).toHaveBeenCalledWith(
        "favourites",
        JSON.stringify(mockFavourites),
      );
    });
  });
});
