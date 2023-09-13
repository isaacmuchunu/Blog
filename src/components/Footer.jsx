import { images } from "../constants";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
  AiFillHeart,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

const productItems = [
  { name: "Landing page", type: "link" },
  { name: "Features", type: "link" },
  { name: "Documentation", type: "link" },
  { name: "Referal Program", type: "link" },
  { name: "Pricing", type: "link" },
];
const servicesItems = [
  { name: "Documentation", type: "link" },
  { name: "Design", type: "link" },
  { name: "Theme", type: "link" },
  { name: "Illustrations", type: "link" },
  { name: "UI Kit", type: "link" },
];
const companyItems = [
  { name: "About", type: "link" },
  { name: "Services", type: "link" },
  { name: "Private Policy", type: "link" },
  { name: "Careers", type: "link" },
];
const MoreItems = [
  { name: "Documnetation", type: "link" },
  { name: "Licences", type: "link" },
  { name: "Changelog", type: "link" },
];

const Footer = () => {
  return (
    <section className="bg-dark-hard">
      <footer className="container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10">
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg font-poppins">
            Products
          </h3>
          <ul className="text-[#959EAD] text-sm space-y-4 mt-5 md:text-base font-poppins">
            {productItems.map((productItem, index) => (
              <a href="/" key={index} className="flex flex-col">
                {productItem.name} 
              </a>
            ))}
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg font-poppins">
            Services
          </h3>
          <ul className="text-[#959EAD] text-sm space-y-4 mt-5 md:text-base font-poppins">
            {servicesItems.map((serviceItem, index) => (
              <a href="/" key={index} className="flex flex-col">
                {serviceItem.name}
              </a>
            ))}
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 md:col-start-5 lg:col-span-2 lg:col-start-auto">
          <h3 className="text-dark-light font-bold md:text-lg font-poppins">
            Company
          </h3>
          <ul className="text-[#959EAD] text-sm space-y-4 mt-5 md:text-base font-poppins">
            {companyItems.map((companyItem, index) => (
              <a href="/" key={index} className="flex flex-col">
                {companyItem.name}
              </a>
            ))}
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg font-poppins">
            More
          </h3>
          <ul className="text-[#959EAD] text-sm space-y-4 mt-5 md:text-base font-poppins">
            {MoreItems.map((moreItem, index) => (
              <a href="/" key={index} className="flex flex-col">
                {moreItem.name}
              </a>
            ))}
          </ul>
        </div>
        <div className="col-span-10 md:order-first md:col-span-4 lg:col-span-2">
          <a href="/">
            <img
              src={images.footerLogo1}
              alt="logo"
              className="mx-auto md:mx-0 h-12 w-20"
            />
          </a>

          <p className="text-sm text-[#5A7184] text-center mt-4 md:text-base font-poppins md:text-left lg:text-sm">
            Build a modern and creative website with crealand
          </p>
          <ul className="flex items-center justify-center space-x-4 mt-5 text-gray-300">
            <li>
              <a href="/">
                <AiOutlineTwitter className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <FaFacebook className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <AiFillInstagram className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <AiFillYoutube className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <BsTelegram className="w-6 h-aut0" />
              </a>
            </li>
          </ul>
        </div>
        <div className=" hidden md:flex flex-col space-y-4 items-center md:col-span-12 lg:col-span-10">
          <div className="bg-primary text-white rounded-full p-3">
            <AiFillHeart className=" h-auto w-6  " />
          </div>
          <p className="text-dark-light italic font-bold font-poppins">
            Copyright © 2023. Crafted with love.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
