import React from "react";

export default function About() {
  return (
    <div className="px-5 lg:px-40 md:px-20 grid grid-cols-2 gap-5 w-full h-screen text-sky-900">
      <div className=" overflow-hidden rounded-md row-span-1 col-start-1 col-end-3 flex justify-start items-end h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-teal-200 to-lime-200">
        <div className=" rounded-tr-md bg-sky-900 text-white w-fit h-fit px-10 py-5 flex flex-col justify-start items-start">
          <h3 className=" text-left text-6xl font-semibold">
            DUMMY DUMMY DUMMY
          </h3>
          <p className=" text-left text-base font-light"> Dummy dummy dummy</p>
        </div>
      </div>
      <div className=" flex flex-col justify-start items-start h-full gap-3 row-span-2 col-start-1 col-end-2">
        <h3 className=" text-lg font-semibold pb-5"> What Are We?</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quos eum
          beatae officiis in optio eos, magni quod praesentium quis aut nisi
          voluptatem sed recusandae consequuntur esse aliquid. Et, porro.
        </p>
        <p>
          Magni quod praesentium quis aut nisi voluptatem sed recusandae
          consequuntur esse aliquid. Et, porro.
        </p>
      </div>
      <div className=" flex flex-col justify-start items-start h-full gap-3 row-span-2 col-start-2 col-end-3">
        <h3 className=" text-xl font-semibold pb-5"> What We Do?</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quos eum
          beatae officiis in optio eos, magni quod praesentium quis aut nisi
          voluptatem sed recusandae consequuntur esse aliquid. Et, porro.
        </p>
        <ul className=" list-disc	 pl-5 pb-5 leading-loose">
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
        </ul>
        <a
          className=" bg-emerald-500 py-2 px-10 w-fit rounded-md text-sky-50 cursor-pointer hover:bg-yellow-300 hover:shadow-yellow-200 shadow-sm hover:text-sky-900 transition-all ease-in-out duration-300"
          href="/portfolio"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
