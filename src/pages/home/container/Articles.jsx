import React from "react";
import ArticleCard from "../../../components/ArticleCard";


const Articles = () => {
  return (
    <section className=" container flex flex-col mx-auto  py-10 px-5 ">
      <div className="flex flex-wrap gap-y-5 md:space-x-5 pb-10 ">
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
      </div>
    </section>
  );
};

export default Articles;
