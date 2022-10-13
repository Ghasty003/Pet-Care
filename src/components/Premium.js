import React from "react";
import { FaDog, FaBath } from "react-icons/fa";
import { MdHealthAndSafety, MdOutlineFoodBank } from "react-icons/md";
import { GiCrystalBall } from "react-icons/gi";
import { IoHome } from "react-icons/io5";

const Divs = ({ Icon, text }) => {
  return (
    <div className="w-[350px] mt-8 rounded bg-white hover:shadow-2xl transition duration-300 p-2">
      <div className="flex justify-center items-center text-orange-500 text-6xl">
        {Icon}
      </div>
      <h2 className="my-2 text-xl font-bold text-center">{text}</h2>
      <p>
        Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Aliquid Illum
        Non Debitis Nisi Provident, Magni Quia Vel. Eius Minus Soluta Quo
        Mollitia Repudiandae Rem Modi Dolores Culpa, Tempore Suscipit Commodi.
      </p>
      <p className="text-lg text-orange-500 text-center">Read More </p>
    </div>
  );
};

function Premium() {
  return (
    <>
      <section className="mt-[5rem] ">
        <h2 className="text-orange-600 text-4xl font-bold capitalize text-center">
          premium <span className="text-black">services</span>
        </h2>
        <main className="flex flex-wrap justify-around items-center  mt-16">
          <Divs text="Pet Training" Icon={<FaDog />} />
          <Divs text="Spa & Grooming" Icon={<FaBath />} />
          <Divs text="Health Care" Icon={<MdHealthAndSafety />} />
          <Divs text="Pet Treatment" Icon={<GiCrystalBall />} />
          <Divs text="Pet Boarding" Icon={<IoHome />} />
          <Divs text="Pet Feeding" Icon={<MdOutlineFoodBank />} />
        </main>
      </section>
    </>
  );
}

export default Premium;
