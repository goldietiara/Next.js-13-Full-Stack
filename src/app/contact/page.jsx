import React from "react";

export default function Contact() {
  return (
    <div className="px-5 lg:px-40 md:px-20 grid grid-cols-2 gap-5 w-full h-screen text-sky-900">
      <div className=" text-sky-900 font-extrabold text-6xl py-5 text-center row-span-1 col-start-1 col-end-3">
        Let's Keep in Touch
      </div>
      <div className=" row-span-2 col-start-1 col-end-2 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-teal-200 to-lime-200 rounded-xl mb-4"></div>
      <div className=" row-span-2 col-start-2 col-end-3 ">
        <form className="flex flex-col gap-3 h-full " action="">
          <input
            className="border-2 rounded-md border-gray-100 p-2 font-semibold"
            type="text"
            placeholder="name"
          />
          <input
            className="border-2 rounded-md border-gray-100 p-2 font-semibold"
            type="text"
            placeholder="email"
          />
          <textarea
            className="border-2 rounded-md border-gray-100 p-2 font-semibold"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="massage"
          ></textarea>

          <button
            className=" bg-sky-900 py-2 px-10 w-fit rounded-md text-sky-50 cursor-pointer hover:bg-yellow-300 hover:shadow-yellow-200 shadow-sm hover:text-sky-900 transition-all ease-in-out duration-300 "
            href="/"
          >
            send
          </button>
        </form>
      </div>
    </div>
  );
}
