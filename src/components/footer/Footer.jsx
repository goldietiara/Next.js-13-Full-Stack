import React from "react";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex justify-start items-center py-5 px-5 lg:px-40 md:px-20 text-sky-900 w-full">
      <div className="w-3/6">
        <p>2023 ODI. All rights reserved.</p>
      </div>

      <div className=" flex justify-end align-middle text-2xl w-full gap-5">
        <FaGithubSquare className="cursor-pointer hover:text-emerald-300 transition-all ease-in-out duration-300" />
        <FaLinkedin className="cursor-pointer hover:text-emerald-300 transition-all ease-in-out duration-300" />
        <FaTwitterSquare className="cursor-pointer hover:text-emerald-300 transition-all ease-in-out duration-300" />
      </div>
    </div>
  );
}
