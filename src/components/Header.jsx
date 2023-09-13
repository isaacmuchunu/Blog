import { images } from "../constants";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
const navItems = [
  { name: "home", type: "link" },
  { name: "articles", type: "link" },
  { name: "pages", type: "dropdown", items: ["about us", "contact us"] },
  { name: "Pricing", type: "link" },
  { name: "faq", type: "link" },
];
const Navbar = ({ navItem }) => {
  const [dropdown, setDropdown] = useState(false);
  const handleToggleDropDown = () => {
    setDropdown((currState) => {
      return !currState;
    });
  };
  return (
    <li className="hover:text-blue-700 relative group">
      {navItem.type === "link" ? (
        <div>
          <a href="/">{navItem.name}</a>
        </div>
      ) : (
        <div className="flex flex-cols  items-center">
          <button
            className="py-2 px-4 flex items-center uppercase space-x-1"
            onClick={handleToggleDropDown}
          >
            <span>{navItem.name}</span>
            <MdOutlineKeyboardArrowDown />
          </button>
          <div
            className={`${
              dropdown ? "block" : "hidden"
            } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
          >
            <ul className=" bg-dark-soft lg:bg-transparent flex flex-col text-center shadow-lg rounded-md overflow-hidden">
              {navItem.items.map((page, index) => (
                <a
                  href="/"
                  key={index}
                  className="hover:bg-dark-hard hover:text-white py-2 px-4 text-white lg:text-dark-soft"
                >
                  {page}
                </a>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

const Header = () => {
  const [visibleNavbar, setVisibleNavbar] = useState(false);

  const handleNavbarVisibility = () => {
    setVisibleNavbar((currState) => {
      return !currState;
    });
  };
  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-white">
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div className="flex items-center">
          <a href="/">
            <img
              src={images.Logo}
              alt="logo"
              className="w-20 h-12 object-center brightness-110"
            />
          </a>
        </div>
        <div className="z-50 lg:hidden">
          {visibleNavbar ? (
            <AiOutlineClose
              onClick={handleNavbarVisibility}
              className="w-6 h-6"
            />
          ) : (
            <AiOutlineMenu
              onClick={handleNavbarVisibility}
              className="w-6 h-6"
            />
          )}
        </div>
        <div
          className={`${
            visibleNavbar ? "right-0" : "-right-full"
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static space-x-9 items-center`}
        >
          <ul className="text-white items-center uppercase gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row space-x-8 tracking-tight lg:tracking-wide font-poppins font-semibold">
            {navItems.map((navItem, index) => (
              <Navbar key={index} navItem={navItem} />
            ))}
          </ul>
          <button className=" mt-2 uppercase font-poppins font-semibold tracking-tight lg:tracking-wide bg-dark-soft px-4 py-1 rounded-md ring-1 ring-blue-950 hover:outline-none hover:bg-dark-hard hover:ease-in-out text-gray-200 focus:outline-none active:bg-blue-800 ">
            sign in
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
