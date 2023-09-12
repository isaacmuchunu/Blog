import { images } from "../constants";

import {BsCheckLg} from "react-icons/bs"

const ArticleCard = ({ className }) => {
  return (
    <section
      className={`rounded-lg overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}
    >
      <img
        src={images.post1}
        alt="post1"
        className="w-full h-auto md:h-52 lg:h-48 xl:h-60 object-cover object-center"
      />
      <div className="p-5">
        <h2 className="font-poppins text-xl md:text-2xl  lg:text-[28px] font-bold text-dark-soft">
          Future of Work
        </h2>
        <p className="text-dark-light mt-x text-sm md:text-lg">
          Majority of peole will work in jobs that do not exist today.
        </p>
        <div className="flex justify-between flex-nowrap mt-6 items-center">
          <div className="flex items-center  space-x-2 md:space-x-2.5">
            <img src={images.post1profile} alt="post profile" className="w-9 h-9 md:w-10 md:h-10"/>
            <div className="flex flex-col">
              <h4 className=" font-bold italic text-dark-soft text-sm md:text-base">
                Viola Manisa
              </h4>
              <div className="flex items-center space-x-2">
                <span className="bg-[#36B37E] rounded-full bg-opacity-20 p-1.5 w-fit">
                  <BsCheckLg className="w-1.5 h-1.5 text-[#36B37E]" />
                </span>
                <span className="text-xs text-dark-light italic md:text-sm">Verified writer</span>
              </div>
            </div>
          </div>
          <span className="text-sm text-dark-light font-bold italic md:text-base">02 May</span>
        </div>
      </div>
    </section>
  );
};

export default ArticleCard;
