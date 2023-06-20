import React from "react";

export default function Category({ params }) {
  return (
    <div className=" px-5 lg:px-40 md:px-20 grid grid-cols-2 gap-5 w-full h-full content-start text-sky-900">
      <p className="text-base font-light text-center w-full row-span1 col-start-1 col-end-3">
        {params.category}
      </p>

      <div className=" row-span-2 col-start-1 col-end-2 gap-5">
        <h3 className=" text-3xl font-bold pb-5"> What Are We?</h3>
        <p className=" leading-tight pb-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quos eum
          beatae officiis in optio eos, magni quod praesentium quis aut nisi
          voluptatem sed recusandae consequuntur esse aliquid. Et, porro.
        </p>
        <button
          className=" bg-sky-900 mt-5 py-2 px-10 w-fit rounded-md text-sky-50 cursor-pointer hover:bg-yellow-300 hover:shadow-yellow-200 shadow-sm hover:text-sky-900 transition-all ease-in-out duration-300 "
          href="/"
        >
          send
        </button>
      </div>
      <div className=" row-span-2 col-start-2 col-end-3 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-teal-200 to-lime-200 rounded-xl"></div>
    </div>
  );
}
