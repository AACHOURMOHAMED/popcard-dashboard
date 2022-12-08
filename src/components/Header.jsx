import React from "react";
import { IoIosHelpBuoy } from "react-icons/io";
import imgProfile from "../assets/profile.webp";

const Header = () => {
  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.toLocaleString("default", { weekday: "long" });
  const dayOfMonth = date.getDate();
  const year = date.getFullYear();
  return (
    <header className="flex items-center justify-between">
      <div className="flex flex-col">
        <h1 className="font-bold text-[2rem]">Bonjour Aymane!</h1>
        <p>
          Nous somme le {day} {dayOfMonth} {month} {year}
        </p>
      </div>
      <div className="flex flex-row-reverse justify-between rounded-full bg-white shadow-lg py-2  px-4 w-[15rem]">
        <img
          src={imgProfile}
          alt="profile"
          className="rounded-full w-[4rem] h-[4rem] object-cover"
        />
        <h2 className="flex items-center text-primary font-medium text-[1.4rem]">
          <IoIosHelpBuoy className="mr-1" />
          Aide
        </h2>
      </div>
    </header>
  );
};

export default Header;
