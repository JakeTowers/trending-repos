"use client";

import { Favourite } from "@/interfaces/favourite";
import { getFavourites } from "@/services/favourites";
import { useEffect, useState } from "react";
import RepositoryCardList from "./RepositoryCardList";
import ErrorMessage from "./ErrorMessage";

const FavouritesList = () => {
  const [favourites, setFavourites] = useState<Favourite[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setFavourites(getFavourites());
    }
  }, []);

  return favourites.length ? (
    <RepositoryCardList
      repositories={favourites.map((favourite) => favourite.repository)}
    />
  ) : (
    <ErrorMessage text="Please favourite some repositories first" />
  );
};

export default FavouritesList;
