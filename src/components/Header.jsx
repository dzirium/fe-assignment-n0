import React from "react";
import {NavLink} from "react-router-dom"

function Header() {
  return (
    <div className="bg-green-300 ">
      <nav className=" px-20 py-5 top-0 shadow flex justify-between  ">
        <div className="text-3xl font-normal font-serif  px-8"> LOGO</div>
        <ul className="flex flex-row justify-between ">
          <NavLink to='/' className="text-3xl font-normal font-serif text-green-950 px-8 active:text-green-950   ">Main</NavLink>
          <NavLink to='/about' className="text-3xl font-normal font-serif text-black px-8 active:font-black ">About</NavLink>
          <NavLink to='/contactus' className="text-3xl font-normal font-serif text-black px-8 active:font-black  ">Contact</NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
