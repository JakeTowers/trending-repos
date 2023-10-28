import { Repository } from "@/interfaces/repository";

interface RepositoryCardProps {
  repository: Repository;
}

const RepositoryCard = ({ repository }: RepositoryCardProps) => {
  return (
    <div className="mb-2 rounded-md border p-2">
      <p>{repository.name}</p>
      <p>{repository.url}</p>
      <p>{repository.description}</p>
      <p>{repository.starCount}</p>
    </div>
  );
};

export default RepositoryCard;
