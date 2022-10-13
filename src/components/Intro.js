import React from "react";
import pic from "../images/dog-2.jpg";

function Intro() {
  return (
    <>
      <section className="dog-cover mt-[100px] md:mt-12 flex items-end justify-center flex-col gap-9">
        <h2 className="capitalize text-black font-bold text-4xl md:text-6xl mr-10">
          hi, welcome to <br />
          <span className="text-orange-600">PetCare</span>
        </h2>

        <button className="shop-now">shop now</button>
      </section>

      <section className="flex flex-col md:flex-row md:justify-evenly md:items-center p-10">
        <div>
          <img src={pic} className="lg:w-[3000px]" />
        </div>

        <div className="">
          <h1 className="text-6xl courier capitalize font-bold">
            put your pet first
          </h1>
          <h2 className="text-4xl text-orange-600 capitalize py-3 font-bold">
            premium <span className="text-black">care</span>
          </h2>
          <p className="pb-3">
            More Than 200 Locations In North America, Camp Bow Wow Is The
            Largest Pet Care Franchise And Offers A Fun And Safe Place Where
            Pups Can Romp Together In An Open-Play Environment And Pricing Is
            All-Inclusive. We Provide Pet Parents Peace Of Mind Because We’re
            All About Making Dogs Happy.
          </p>
          <button className="shop-now">shop now</button>
        </div>
      </section>
    </>
  );
}

export default Intro;
