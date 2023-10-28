"use client";

import { Repository } from "@/interfaces/repository";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

interface RepositoryCardProps {
  repository: Repository;
}

const RepositoryCard = ({ repository }: RepositoryCardProps) => {
  const [favourited, setFavourited] = useState(false);

  return (
    <div className="m-2 rounded-md border p-2">
      <div className="flex">
        <p className="flex-1">{repository.name}</p>
        <button onClick={() => setFavourited(!favourited)}>
          {favourited ? (
            <SolidHeartIcon className="h-6 w-6 text-red-500" />
          ) : (
            <OutlineHeartIcon className="h-6 w-6 text-red-500" />
          )}
        </button>
      </div>
      <p>{repository.url}</p>
      <p>{repository.description}</p>
      <p>{repository.starCount}</p>
    </div>
  );
};

export default RepositoryCard;
