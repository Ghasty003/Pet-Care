import React, { useState } from "react";
import item1 from "../images/item30.jpg";
import item2 from "../images/item31.jpg";
import item3 from "../images/item32.jpg";
import Beef from "../images/item33.jpg";
import Salmon from "../images/item34.jpg";
import Venison from "../images/item35.jpg";
import Whisper from "../images/item36.jpg";
import ChickenSoup from "../images/item1.jpg";
import Calcium from "../images/item2.jpg";
import Dogsee from "../images/item3.jpg";
import Pedigree1 from "../images/item4.jpg";
import Natural from "../images/item19.jpg";
import Pedigree2 from "../images/item20.jpg";
import Zenith from "../images/item5.jpg";
import Calcium2 from "../images/item6.jpg";
import Natural2 from "../images/item7.jpg";
import Ganador from "../images/item8.jpg";
import Meoul from "../images/item9.jpg";
import { BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Icons = () => {
  return (
    <span className="absolute top-2 right-2">
      <BiUser className="bg-white w-12 h-12 px-4 font-bold hover:bg-orange-400 transition duration-500" />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="bg-white w-12 h-12 px-4 my-4 font-bold hover:bg-orange-400 transition duration-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
      <AiOutlineShoppingCart className="bg-white w-12 h-12 px-4 font-bold hover:bg-orange-400 transition duration-500" />
    </span>
  );
};

const Divs = ({ imgSrc, h2Text, h3Text }) => {
  const [render, setRender] = useState(false);

  const showIcons = () => {
    setRender(true);
  };

  const hideIcons = () => {
    setRender(false);
  };
  return (
    <div
      className="relative md:mb-0 mb-6"
      onTouchEnd={hideIcons}
      onMouseLeave={hideIcons}
      onTouchStart={showIcons}
      onMouseMove={showIcons}
    >
      <img
        src={imgSrc}
        className="hover:scale-105 transition duration-500 w-[400px] h-[450px]"
      />
      {render && <Icons />}
      <div className="text-center">
        <h2 className="font-bold text-2xl mt-6">{h2Text}</h2>
        <h3 className="text-orange-500 font-semibold text-xl">{h3Text}</h3>
      </div>
    </div>
  );
};

function Products() {
  return (
    <>
      <section className="mt-8">
        <h2 className="text-orange-600 text-4xl font-bold capitalize text-center">
          premium <span className="text-black">products</span>
        </h2>
        <div className="flex flex-wrap justify-around mt-10">
          <Divs imgSrc={item1} h2Text="Chicken Dried Food" h3Text="$20.00" />
          <Divs imgSrc={item2} h2Text="Beef Dried Food" h3Text="$35.00" />
          <Divs imgSrc={item3} h2Text="Lamb Dried Food" h3Text="$55.00" />
          <Divs imgSrc={Beef} h2Text="Beef Dried Food" h3Text="$50.00" />
          <Divs imgSrc={Salmon} h2Text="Salmon Dried Food" h3Text="$60.00" />
          <Divs imgSrc={item1} h2Text="Chicken Dried Food" h3Text="$40.00" />
          <Divs imgSrc={ChickenSoup} h2Text="Chicken Soup" h3Text="$18.00" />
          <Divs imgSrc={Meoul} h2Text="Meoul Mix" h3Text="$15.00" />
          <Divs imgSrc={Natural} h2Text="Natural Food" h3Text="$30.00" />
          <Divs imgSrc={Venison} h2Text="Venison" h3Text="$26.00" />
          <Divs imgSrc={Whisper} h2Text="Pet Whisper" h3Text="$42.00" />
          <Divs imgSrc={Dogsee} h2Text="Dogsee Chew" h3Text="$18.00" />
          <Divs imgSrc={Pedigree1} h2Text="Pedigree" h3Text="$19.00" />
          <Divs imgSrc={Pedigree2} h2Text="Pedigree (Adult)" h3Text="$25.00" />
          <Divs imgSrc={Calcium} h2Text="Calcium" h3Text="$15.00" />
          <Divs imgSrc={Zenith} h2Text="Zenith" h3Text="$25.00" />
          <Divs imgSrc={Calcium2} h2Text="Calcium" h3Text="$18.00" />
          <Divs imgSrc={Natural2} h2Text="Natural" h3Text="$10.00" />
          <Divs imgSrc={Ganador} h2Text="Ganador" h3Text="$30.00" />
        </div>
      </section>
    </>
  );
}

export default Products;
