import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbs = ({ data }) => {
  return (
    <div className="flex items-center whitespace-no-wrap overflow-x-auto ">
      {data.map((item, index) => (
        <div
          key={index}
          className="text-black opacity-50 text-xs font-poppins md:text-sm"
        >
          <Link to={item.link}>{item.name}</Link>
          {index !== data.length - 1 && <span className="px-2">/</span>}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumbs;
