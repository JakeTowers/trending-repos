"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

enum Routes {
  HOME = "/",
  FAVOURITES = "/favourites",
}

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <nav className="flex justify-end space-x-10 border-b-2 p-6 pr-12">
        <Link
          className={`${pathname === Routes.HOME && "font-bold"}`}
          href={Routes.HOME}
        >
          Repositories
        </Link>
        <Link
          className={`${pathname === Routes.FAVOURITES && "font-bold"}`}
          href={Routes.FAVOURITES}
        >
          Favourites
        </Link>
      </nav>
    </header>
  );
};

export default Header;
