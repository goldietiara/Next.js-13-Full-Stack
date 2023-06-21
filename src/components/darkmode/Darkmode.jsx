import React from "react";
import { TbMoonStars, TbSun } from "react-icons/tb";

export default function Darkmode() {
  const mode = "dark";
  return (
    <div className=" relative bg-sky-900 flex items-center justify-between p-1 w-13 h-6 rounded-3xl text-slate-50 text-lg">
      <div
        className=" bg-emerald-200 w-4 h-4 rounded-xl absolute mx-1"
        style={mode === "dark" ? { left: "1px" } : { right: "1px" }}
      ></div>
      <TbSun />
      <TbMoonStars />
    </div>
  );
}
