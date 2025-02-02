import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { closeNavbar, logoutIcon, openNavbar } from "../helper/icons";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
const navigation = [
  {
    title: "Home",
    path: "/dashboard",
  },
  {
    title: "Products",
    path: "/dashboard/products",
  },
  {
    title: "About",
    path: "/dashboard/about",
  },
];

const Navbar = () => {
  const [show, setshow] = useState(false);
  const location = useLocation();
  // console.log(location.pathname);
  const { logout } = useContext(AuthContext);
  return (
    <nav className="bg-navbarColor md:text-sm">
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-5">
          <a
            href="https://clarusway.com/"
            target="true"
            className="flex items-center"
          >
            <img src={logo} alt="clarusway" width={50} height={50} />
            <span>Clarusway</span>
          </a>
          <div className="md:hidden">
            <button
              onClick={() => setshow(!show)}
              className="text-gray-500 hover:text-gray-800"
            >
              {show ? closeNavbar : openNavbar}
            </button>
          </div>
        </div>
        <div
          className={`${
            show ? "flex flex-col pb-2 " : "hidden"
          } md:flex md:flex-row flex-1 items-center`}
        >
          <ul className="md:flex md:space-x-6">
            {navigation.map((item) => (
              <li
                className="text-gray-700 font-medium flex justify-center"
                key={item.title}
                onClick={()=>setshow(false)}
              >
                <NavLink
                  className={`block hover:bg-main rounded-full py-2 px-4 hover:text-white ${
                    location.pathname === item.path ? "underline scale-110" : ""
                  }`}
                  to={item.path}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex-1 items-center justify-end gap-x-6 mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            <NavLink
              onClick={logout}
              className="flex items-center justify-center gap-x-1 py-2 px-4 font-medium text-gray-700 hover:bg-main hover:text-white rounded-full md:inline-flex "
            >
              Logout {logoutIcon}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
