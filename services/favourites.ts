import { Favourite } from "@/interfaces/favourite";
import { Repository } from "@/interfaces/repository";

const FAVOURITES_KEY = "favourites";
const FAVOURITES_DEFAULT_VALUE = "[]";

export const getFavourites = () => {
  const currentFavourites: Favourite[] = JSON.parse(
    localStorage.getItem(FAVOURITES_KEY) ?? FAVOURITES_DEFAULT_VALUE,
  );

  return currentFavourites;
};

export const isFavourited = (repositoryId: number) => {
  const currentFavourites = getFavourites();

  // An object might be more efficient to look up than an array
  return currentFavourites.some(
    (favourite) => favourite.id === repositoryId.toString(),
  );
};

export const updateFavourites = (
  repository: Repository,
  favourited: boolean,
) => {
  let currentFavourites = getFavourites();

  if (favourited) {
    currentFavourites.push({ id: repository.id.toString(), repository });
  } else {
    currentFavourites = currentFavourites.filter(
      (favourite) => favourite.id !== repository.id.toString(),
    );
  }

  localStorage.setItem(FAVOURITES_KEY, JSON.stringify(currentFavourites));
};
