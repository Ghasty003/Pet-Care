import React, { useRef, useState } from "react";
import { FaPaw, FaBars } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

function NavBar() {
  const [lists, _setLists] = useState([
    { item: "Home", id: 1 },
    { item: "About", id: 2 },
    { item: "Service", id: 3 },
    { item: "Products", id: 4 },
  ]);

  const nav = useRef("");
  const ul = useRef("");

  window.onscroll = () => {
    if (window.scrollY > 40) {
      nav.current.classList.add("bg-red-100", "shadow-md");
    } else {
      nav.current.classList.remove("bg-red-100", "shadow-md");
    }
  };

  const ToggleMenu = () => {
    if (ul.current.classList.contains("hidden")) {
      ul.current.classList.remove("hidden");
    } else {
      ul.current.classList.add("hidden");
    }
  };

  // alert(window.innerWidth);

  return (
    <>
      <nav
        ref={nav}
        className="flex justify-around z-50 items-center transition duration-500 py-4 md:px-0 px-2 sticky top-0"
      >
        <a
          className="text-xl text-blue-800 font-bold flex items-end justify-center gap-2"
          href="#"
        >
          <FaPaw className="text-orange-500 inline text-4xl md:text-6xl" />
          PetCare
        </a>
        <ul
          ref={ul}
          className="hidden md:p-0 p-6 md:bg-inherit md:text-inherit text-white md:w-fit w-[400px] bg-orange-600 absolute top-[65px] left-0 md:static justify-around md:gap-4 md:flex"
        >
          {lists.map(({ item, id }) => (
            <li className="text-xl md:m-0 m-3" key={id}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-end gap-3 text-xl">
          <i>
            <FcSearch className="hover:text-orange-500 transition duration-500" />
          </i>
          <i>
            <BiUser className="hover:text-orange-500 transition duration-500" />
          </i>
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 hover:text-orange-500 transition duration-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </i>
          <i>
            <AiOutlineShoppingCart className="hover:text-orange-500 transition duration-500" />
          </i>
          <FaBars className="block md:hidden ml-2" onClick={ToggleMenu} />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
