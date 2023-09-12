import React from "react";
import ArticleCard from "../../../components/ArticleCard";

import { FaArrowRight } from "react-icons/fa";

const Articles = () => {
  return (
    <section className=" container flex flex-col mx-auto  py-10 px-5 ">
      <div className="flex flex-wrap gap-y-5 md:space-x-5 pb-10 ">
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
      </div>
      <button className="flex items-center mx-auto text-primary font-bold space-x-2 border-2 border-primary px-6 py-3 rounded-lg">
        <span>More Articles</span>
        <FaArrowRight className="w-3 h-3" />
      </button>
    </section>
  );
};

export default Articles;
