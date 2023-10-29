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
      <nav className="flex justify-end space-x-10 border-b-2 p-6 pr-12 shadow-2xl shadow-slate-900">
        <Link
          className={`${
            pathname === Routes.HOME && "font-bold underline underline-offset-8"
          }`}
          href={Routes.HOME}
        >
          Repositories
        </Link>
        <Link
          className={`${
            pathname === Routes.FAVOURITES &&
            "font-bold underline underline-offset-8"
          }`}
          href={Routes.FAVOURITES}
        >
          Favourites
        </Link>
      </nav>
    </header>
  );
};

export default Header;
