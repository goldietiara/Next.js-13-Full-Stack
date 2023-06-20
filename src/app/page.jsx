import Image from "next/image";

export default function Home() {
  return (
    <div className=" grid grid-cols-2 w-full h-screen">
      <div className=" w-full flex flex-col justify-center items-center px-20 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-teal-200 to-lime-200">
        <p className="text-white text-center font-light text-6xl">ᕙ(‾̀³‾́)ᕗ</p>
      </div>
      <div className=" bg-sky-900 w-full flex flex-col justify-start items-start px-20 py-14">
        <h3 className=" text-white text-left font-bold text-6xl leading-tight pb-5">
          Better Design for your digital products.
        </h3>
        <p className=" text-sky-50 text-left font-light text-2xl leading-tight pb-10">
          Turning your idea into Reality. We bring together. the same team form
          the global industry
        </p>
        <a
          className=" bg-emerald-500 py-2 px-10 w-fit rounded-md text-sky-50 cursor-pointer text-lg hover:bg-yellow-300 hover:shadow-yellow-200 shadow-sm hover:text-sky-900 transition-all ease-in-out duration-300"
          href="/about"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
