import React from "react";
import Link from "next/link";
import { list } from "postcss";

const Links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 5,
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    id: 6,
    title: "Portfolio",
    url: "/portfolio",
  },
];

export default function Navbar() {
  return (
    <nav className="flex justify-between px-12 py-5 min-w-full">
      <Link href="/">devbyodi</Link>

      <div className="flex justify-between w-2/5">
        {Links.map((v, i, a) => {
          return (
            <Link
              className=" text-white hover:text-green-300 transition-all ease-in-out duration-300"
              key={v.id}
              href={v.url}
            >
              {v.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
