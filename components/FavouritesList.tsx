"use client";

import { Favourite } from "@/interfaces/favourite";
import { getFavourites } from "@/services/favourites";
import { useEffect, useState } from "react";
import RepositoryCardList from "./RepositoryCardList";
import ErrorMessage from "./ErrorMessage";
import LoadingSpinner from "./LoadingSpinner";

const FavouritesList = () => {
  const [favourites, setFavourites] = useState<Favourite[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setFavourites(getFavourites());
    setLoading(false);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return favourites.length ? (
    <RepositoryCardList
      repositories={favourites.map((favourite) => favourite.repository)}
    />
  ) : (
    <ErrorMessage text="Please favourite some repositories first" />
  );
};

export default FavouritesList;
