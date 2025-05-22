"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  if (pathname.includes("dashboard")) return <></>;
  else {
    return (
      <div>
        <nav className="flex justify-center">
          <ul className="flex justify-between ">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/services">
              <li>Services</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
};

export default NavBar;
