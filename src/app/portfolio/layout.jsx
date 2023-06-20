import React from "react";

export default function Layout({ children }) {
  return (
    // <div className=" flex flex-col pb-10 px-5 lg:px-40 md:px-20 text-sky-900 w-full h-full">
    <div className=" grid grid-cols-1 pb-10 px-5 lg:px-40 md:px-20 text-sky-900 w-full h-fit">
      <h3 className=" row-span-1 font-extrabold text-6xl py-5 text-center">
        Our Works
      </h3>
      <div className=" row-span-2">{children}</div>
    </div>
  );
}
