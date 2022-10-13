import React from "react";
import { FaBuilding } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row py-12 md:justify-around mt-16">
      <div className="m-6">
        <h2 className="text-white text-xl">Contact</h2>
        <p className="border-b-2 border-orange-600 w-12 mt-1 mb-4 h-1"></p>

        <h3 className="text-[#bbbbbb] italic">
          <FaBuilding className="inline-block" /> 414 Rte Beaver Dams, New
          York(NY), 14812, USA
        </h3>
        <p className="text-[#bbbbbb]">
          <FaPhoneAlt className="inline-block" /> 350 590 897 235 3655
        </p>
        <p className="text-[#bbbbbb]">
          <FaEnvelope className="inline-block" /> Petcare_info@Petcare.Com
        </p>
      </div>

      <div className="m-6">
        <h2 className="text-white text-xl">Products</h2>
        <p className="border-b-2 border-orange-600 w-12 mt-1 mb-4 h-1"></p>
        <p className="footer-text">Accessories</p>
        <p className="footer-text">Dry food</p>
        <p className="footer-text">Fresh Food</p>
        <p className="footer-text">Shampoo</p>
      </div>

      <div className="m-6">
        <h2 className="text-white text-xl">Our Company</h2>
        <p className="border-b-2 border-orange-600 w-12 mt-1 mb-4 h-1"></p>
        <p className="footer-text">Terms and Conditions</p>
        <p className="footer-text">About us</p>
        <p className="footer-text">Secure Payments</p>
      </div>

      <div className="m-6">
        <h2 className="text-white text-xl">Services</h2>
        <p className="border-b-2 border-orange-600 w-12 mt-1 mb-4 h-1"></p>
        <p className="footer-text">Traning</p>
        <p className="footer-text">Spa and Grooming</p>
        <p className="footer-text">Health</p>
        <p className="footer-text">Treatment</p>
        <p className="footer-text">Boarding</p>
        <p className="footer-text">Feeding</p>
      </div>
    </footer>
  );
}

export default Footer;
