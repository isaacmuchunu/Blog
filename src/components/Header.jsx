import { images } from "../constants";
const navItems = [
    {name: "home"},
    {name: "articles"},
    {name: "pages"},
    {name: "Pricing"},
    {name: "faq"}
]
const Navbar = ({name}) => {
return(
    <li className="hover:text-blue-700">
  <a href="/">{name}</a>
</li>
)}

const Header = () => {
  return (
    <section>
      <header className=" container px-5 mx-auto flex justify-between items-center ">
        <div>
          <img src={images.Logo} alt="logo" className="w-24 h-18" />
        </div>
        <div className="flex space-x-10">
          <ul className="uppercase flex space-x-8 font-poppins ">
            {navItems.map((navItem) => (
                <Navbar key={navItem.name} name={navItem.name}/>
            ))}
          </ul>
          <button className="uppercase font-poppins font-semibold bg-blue-500 px-4 py-1 rounded-md ring-1 ring-blue-950 hover:outline-none hover:bg-blue-700 hover:ease-in-out text-gray-200 focus:outline-none active:bg-blue-800 ">
            sign in
          </button>
        </div>
      </header>
    </section>
  );};

export default Header;
