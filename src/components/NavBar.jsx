"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  if (pathname.includes("dashboard")) return <></>;
  else {
    return (
      <div className="w-full">
        <nav className="flex items-between justify-center gap-5">
          <ul className="flex justify-between w-1/3">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/posts">
              <li>posts</li>
            </Link>
            <Link href="/meals">
              <li>Meals</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
};

export default NavBar;
