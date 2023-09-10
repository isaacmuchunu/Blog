import { images } from "../constants";

const Header = () => {
  return (
    <section>
      <header className="px-5 mx-auto flex justify-between items-center border-b-2 border-b-gray-800/4">
        <div>
          <img src={images.Logo} alt="logo" className="w-24 h-18" />
        </div>
        <div className="flex space-x-10">
          <ul className="uppercase flex space-x-5 ">
            <li className="hover:text-blue-700">
              <a href="/">home</a>
            </li>
            <li className="hover:text-blue-700">
              <a href="">Articles</a>
            </li>
            <li className="hover:text-blue-700">
              <a href="">pages</a>
            </li>
            <li className="hover:text-blue-700">
              <a href="">pricing</a>
            </li>
            <li className="hover:text-blue-700">
              <a href="">faq</a>
            </li>
          </ul>
          <button className="uppercase font-semibold bg-blue-500 px-4 py-1 rounded-md ring-1 ring-blue-950 hover:outline-none hover:bg-blue-700 hover:ease-in-out text-gray-200 focus:outline-none active:bg-blue-800 ">
            sign in
          </button>
        </div>
      </header>
    </section>
  );};

export default Header;
