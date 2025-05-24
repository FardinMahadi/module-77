"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  // if (pathname.includes("dashboard")) return <></>;
  // else {
  return (
    <div className="w-full">
      <nav className="flex items-between justify-center gap-5">
        <ul className="flex justify-between px-5 flex-wrap gap-5">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/posts">
            <li>Posts</li>
          </Link>
          <Link href="/products">
            <li>Products</li>
          </Link>
          <Link href="/products/add">
            <li>Add Products</li>
          </Link>
          <Link href="/meals">
            <li>Meals</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
// };

export default NavBar;
