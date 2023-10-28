import FavouritesList from "@/components/FavouritesList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favourites",
};

export default function Page() {
  return <FavouritesList />;
}
