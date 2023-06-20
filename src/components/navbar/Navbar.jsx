import React from "react";
import Link from "next/link";
import Darkmode from "../darkmode/Darkmode";

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
    <nav className="flex justify-between bg-white py-5 min-w-full px-5 lg:px-40 md:px-20 font-semibold text-sky-900">
      <Link
        className=" cursor-pointer hover:text-emerald-300 transition-all ease-in-out duration-300"
        href="/"
      >
        ODI
      </Link>

      <Darkmode />
      <div className="flex justify-between w-9/12 md:w-5/12 lg:w-5/12 ">
        {Links.map((v, i, a) => {
          return (
            <Link
              className=" text-inherit cursor-pointer hover:text-emerald-300 transition-all ease-in-out duration-300"
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
