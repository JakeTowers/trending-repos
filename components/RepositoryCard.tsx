"use client";

import { Repository } from "@/interfaces/repository";
import { isFavourited, updateFavourites } from "@/services/favourites";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { StarIcon as SolidStarIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

interface RepositoryCardProps {
  repository: Repository;
}

const RepositoryCard = ({ repository }: RepositoryCardProps) => {
  const [favourited, setFavourited] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      setFavourited(isFavourited(repository.id));
    }
  }, [repository]);

  const handleFavouriteClick = (repository: Repository) => {
    updateFavourites(repository, !favourited);
    setFavourited(!favourited);
  };

  return (
    <div className="m-2 rounded-md border p-2">
      <div className="flex">
        <p className="flex-1 p-2 font-bold">{repository.name}</p>
        <div className="flex p-2">
          {repository.starCount}
          <SolidStarIcon className="h-6 w-6 text-yellow-500" />
        </div>
        <button onClick={() => handleFavouriteClick(repository)}>
          {favourited ? (
            <SolidHeartIcon className="h-6 w-6 text-red-500" />
          ) : (
            <OutlineHeartIcon className="h-6 w-6 text-red-500" />
          )}
        </button>
      </div>
      <a className="p-2 underline" href={repository.url}>
        {repository.url}
      </a>
      <p className="p-2">{repository.description}</p>
      <p className="p-2">{repository.language}</p>
    </div>
  );
};

export default RepositoryCard;
