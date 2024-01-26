import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import images from "../images";

const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <nav>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <div className="flex items-center gap-5 font-inter font-semibold">
          <img src={images.Logo} alt="Logo" style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="flex items-center gap-12  font-inter font-semibold">
          {isDesktop ? (
            <>
              <a href="#" className="text-black font-medium hover:underline">
                About Us
              </a>
              <a href="#" className="text-black font-medium hover:underline">
                Shop
              </a>
              <a href="#" className="text-black font-medium hover:underline">
                Programs
              </a>
              <a href="#" className="text-black font-medium hover:underline">
                Partner
              </a>
              <a href="#" className="text-black font-medium hover:underline">
                News
              </a>
              <a href="#" className="text-black font-medium hover:underline">
                Contact
              </a>
            </>
          ) : (
            // Hamburger Icon
            <div className="w-10 h-10 flex items-center justify-center text-black font-bold shadow-md rounded-full">
              <FaBars className="text-black" size={24} onClick={() => setIsMenuToggled(!isMenuToggled)} />
            </div>
          )}
        </div>

        {/* Mobile Nav */}
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full w-[250px]">
            {/* Close icon */}
            <div className="w-10 h-10 ms-[68%] mt-3 flex items-center justify-center  text-white font-bold shadow-md rounded-full">
              <div className="flex justify-end items-center">
                <IoMdClose className="text-black" size={28} onClick={() => setIsMenuToggled(!isMenuToggled)} />
              </div>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-5 mt-[25%] ml-[33%] text-xl text-white">
              <a href="#" className="text-black font-medium">
                About Us
              </a>
              <a href="#" className="text-black font-medium">
                Shop
              </a>
              <a href="#" className="text-black font-medium">
                Programs
              </a>
              <a href="#" className="text-black font-medium">
                Partner
              </a>
              <a href="#" className="text-black font-medium">
                News
              </a>
              <a href="#" className="text-black font-medium">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
