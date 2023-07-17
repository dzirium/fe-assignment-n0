import React from "react";

function Header() {
  return (
    <div className="bg-green-300 ">
      <nav className=" px-20 py-5 top-0 shadow flex justify-between  ">
        <div className="text-3xl font-normal font-serif  px-8"> LOGO</div>
        <ul className="flex flex-row justify-between ">
          <a className="text-3xl font-normal font-serif text-black px-8   ">Main</a>
          <a className="text-3xl font-normal font-serif text-black px-8">About</a>
          <a className="text-3xl font-normal font-serif text-black px-8">Contact</a>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
