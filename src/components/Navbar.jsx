import React from "react";
import logo from "../assets/logo.png";
import { closeNavbar, openNavbar } from "../helper/icons";
import { useState } from "react";

const Navbar = () => {
  const [show, setshow] = useState(false);
  return (
    <nav className="bg-navbarColor md:text-sm">
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        <div className="">
          <a
            href="https://clarusway.com/"
            target="true"
            className="flex items-center"
          >
            <img src={logo} alt="clarusway" width={50} height={50} />
            <span>Clarusway</span>
          </a>
          <div className="md:hidden">
            <button onClick={()=>setshow(!show)} className="text-gray-500 hover:text-gray-800">
              {show ? closeNavbar : openNavbar}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
