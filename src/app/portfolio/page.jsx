import React from "react";
import Link from "next/link";

const Porto = [
  {
    id: 1,
    title: "Ilustration",
    url: "/portfolio/ilustration",
  },
  {
    id: 2,
    title: "UI/UX Design",
    url: "/portfolio/ui-ux-design",
  },
  {
    id: 3,
    title: "Application",
    url: "/portfolio/application",
  },
  {
    id: 4,
    title: "Website",
    url: "/portfolio/website",
  },
  {
    id: 5,
    title: "Others",
    url: "/portfolio/others",
  },
];

export default function Portfolio() {
  return (
    <div className=" w-full h-full">
      <p className="text-base font-light text-center pb-5">Choose a gallery</p>
      <div className=" grid grid-cols-4 gap-5">
        {Porto.map((v, i, a) => {
          return (
            <Link
              className=" rounded-md shadow-md shadow-gray-200 opacity-80 hover:opacity-100 hover:shadow-xl  text-2xl font-bold flex justify-end items-end px-5 py-5 w-full h-96 text-white cursor-pointe transition-all ease-in-out duration-300 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-teal-200 to-lime-200"
              key={i}
              href={v.url}
            >
              {v.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
