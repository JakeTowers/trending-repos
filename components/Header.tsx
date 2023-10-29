"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CodeBracketIcon as OutlineCodeBracketIcon } from "@heroicons/react/24/outline";

enum Routes {
  HOME = "/",
  FAVOURITES = "/favourites",
}

const Header = () => {
  const pathname = usePathname();

  const getSelectedLinkClassName = (route: Routes, pathname: string) =>
    pathname === route ? "font-bold underline underline-offset-8" : "";

  return (
    <header className="flex border-b-2 p-6 shadow-2xl shadow-slate-900">
      <OutlineCodeBracketIcon className="h-6 w-6 justify-start" />
      <nav className="flex flex-1 justify-end space-x-10">
        <Link
          className={getSelectedLinkClassName(Routes.HOME, pathname)}
          href={Routes.HOME}
        >
          Repositories
        </Link>
        <Link
          className={getSelectedLinkClassName(Routes.FAVOURITES, pathname)}
          href={Routes.FAVOURITES}
        >
          Favourites
        </Link>
      </nav>
    </header>
  );
};

export default Header;
