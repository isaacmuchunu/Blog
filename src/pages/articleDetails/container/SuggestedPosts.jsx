import React from "react";
import { Link } from "react-router-dom";

const suggestedPosts = ({ className, header, posts = [], tags }) => {
  return (
    <div
      className={`w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-lg p-4 ${className}`}
    >
      <h2 className="font-poppins text-dark-hard font-medium md:text-xl">
        {header}
      </h2>
      <div className="grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
        {posts.map((item, index) => (
          <div
            key={index}
            className="flex space-x-3 flex-nowrap items-center"
          >
            <img
              src={item.image}
              alt="post"
              className="aspect-square object-cover rounded-lg w-1/5"
            />
            <div className="text-sm font-poppins font-medium text-dark-hard">
              <h3 className=" font-dark-hard font-poppins text-sm font-medium md:text-base lg:text-lg">
                {item.title}
              </h3>
              <span className="text-xs opacity-60">
                {new Date(item.createdAt).toLocaleDateString("en-US", {
                  date: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
      <h2 className="mt-8 font-poppins font-medium text-dark-hard md:text-lg">
        Tags
      </h2>
      <div className="capitalize flex flex-wrap gap-x-2 gap-y-2  mt-4 mb-2">
        {tags.map((item, index) => (
          <Link
            to="/"
            key={index} // Add a unique key for each tag
            className="inline-block py-1.5 px-3 font-semibold font-poppins bg-primary rounded-lg text-white text-xs md:text-sm"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default suggestedPosts;
