"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

enum Routes {
  HOME = "/",
  FAVOURITES = "/favourites",
}

const Header = () => {
  const pathname = usePathname();

  const getSelectedLinkClassName = (route: Routes, pathname: string) =>
    pathname === route ? "font-bold underline underline-offset-8" : "";

  return (
    <header>
      <nav className="flex justify-end space-x-10 border-b-2 p-6 pr-12 shadow-2xl shadow-slate-900">
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
