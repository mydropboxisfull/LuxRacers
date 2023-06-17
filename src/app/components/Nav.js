import React from "react";

const Nav = () => {
  return (
    <nav className="bg-[#161616] h-16 flex items-center justify-between px-8 fixed top-0 w-full z-50">
      <div className="flex items-center">
        
        <h1 className="text-white ml-0 font-semibold glow-blue italic">LUXRacers</h1>
      </div>
      <div>
        <a href="https://shop.luxracers.com" className="bg-red-500 text-white font-bold px-4 py-2 rounded-full">
          🇺🇸 Shop now
        </a>
      </div>
    </nav>
  );
};

export default Nav;
