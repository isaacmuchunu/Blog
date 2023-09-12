import { images } from "../../../constants";

import { FiSearch } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col py-5 px-5 lg:flex-row">
      <div className="mt-10 lg:w-1/2">
        <h1 className="font-poppins text-center text-3xl text-dark-soft font-bold lg:text-left md:text-5xl lg:text-4xl xl:text-5xl lg:max-w-[540px] capitalize">
          Read the most interesting articles
        </h1>
        <p className="text-dark-light text-center mt-4 lg:text-base lg:text-left md:text-xl xl:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div className="flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
            <input
              className="placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4"
              type="text"
              placeholder="Search article"
            />
          </div>
          <button className="w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2">
            Search
          </button>
        </div>
        <div className="flex flex-col mt-4 lg:flex-row lg:items-start lg:flex-nowrap lg:space-x-4 lg:mt-7">
          <span className="text-dark-light mt:2 font-semibold italic lg:mt-4 xl:text-base lg:text-sm">
            Popular tags:
          </span>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
            <li className="bg-primary px-3 py-1.5 font-semibold rounded-lg text-primary bg-opacity-10">
              Design
            </li>
            <li className="bg-primary px-3 py-1.5 font-semibold rounded-lg text-primary bg-opacity-10">
              User Experience
            </li>
            <li className="bg-primary px-3 py-1.5 font-semibold rounded-lg text-primary bg-opacity-10">
              User Interface
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2">
        <img
          src={images.hero}
          alt=" cyber analysts"
          className="w-full rounded-sm brightness-75"
        />
      </div>
    </section>
  );
};

export default Hero;
