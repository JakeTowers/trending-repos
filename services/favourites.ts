const FAVOURITES_KEY = "favourites";
const FAVOURITES_DEFAULT_VALUE = "[]";

export const isFavourited = (repositoryId: number) => {
  const currentFavourites: string[] = JSON.parse(
    localStorage.getItem(FAVOURITES_KEY) ?? FAVOURITES_DEFAULT_VALUE,
  );

  return currentFavourites.includes(repositoryId.toString());
};

export const updateFavourites = (repositoryId: number, favourited: boolean) => {
  let currentFavourites: string[] = JSON.parse(
    localStorage.getItem(FAVOURITES_KEY) ?? FAVOURITES_DEFAULT_VALUE,
  );

  if (favourited) {
    currentFavourites.push(repositoryId.toString());
  } else {
    currentFavourites = currentFavourites.filter(
      (favouriteIds) => favouriteIds !== repositoryId.toString(),
    );
  }

  localStorage.setItem(FAVOURITES_KEY, JSON.stringify(currentFavourites));
};
