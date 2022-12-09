import React from "react";
import { MdDashboard } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { HiStatusOnline } from "react-icons/hi";
import { RiUserSettingsFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 bg-white w-[13rem] h-[100vh] pt-[4rem] pl-[1rem]">
      <div className="mb-[4rem] flex flex-col">
        <h1>Popcard</h1>
      </div>
      <div>
        <ul className="flex flex-col">
          <NavLink to="/" className="flex items-center mb-5 text-secondary">
            <MdDashboard className="mr-6 " />
            <span className="font-semibold">Dashboard</span>
          </NavLink>
          <NavLink to="/profile" className="flex items-center mb-5 text-secondary">
            <CgProfile className="mr-6 " />
            <span className=" font-semibold">
              Profils
            </span>
          </NavLink>
          <NavLink to="/" className="flex items-center mb-5">
            <HiUsers className="mr-6 text-secondary" />
            <span className="active:text-primary text-secondary font-semibold">
              Utilisateurs
            </span>
          </NavLink>
          <NavLink to="/" className="flex items-center mb-5">
            <HiStatusOnline className="mr-6 text-secondary" />
            <span className="active:text-primary text-secondary font-semibold">
              Live Stats
            </span>
          </NavLink>
          <NavLink to="/" className="flex items-center mb-5">
            <RiUserSettingsFill className="mr-6 text-secondary" />
            <span className="active:text-primary text-secondary font-semibold">
              {" "}
              Gestionnaires
            </span>
          </NavLink>
          <NavLink to="/" className="flex items-center">
            <FaShoppingCart className="mr-6 text-secondary" />
            <span className="active:text-primary text-secondary font-semibold">
              Commandes
            </span>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
