import React from "react";

const Header = () => {
  return (
    <header>
      <div className="p-4 border border-2 border-gray-200 rounded-lg m-2 relative">
        <div className="container mx-auto flex justify-between items-center">
          <h1>
            <img src="/assets/header-1.jpeg" alt="Header 1" width={300} />
          </h1>
          <h2>
            <img src="/assets/header2.jpeg" alt="Header 2" width={300} />
          </h2>
          <div>
            <div className="flex gap-2">
              <button className="rounded-full text-primary border border-2 border-primary px-4 py-2 text-xs">
                عر
              </button>
              <button className="rounded-full bg-primary text-white px-4 py-2 text-xs">
                EN
              </button>
              <button className="uppercase rounded-2xl text-white px-3 py-1 bg-primary ">
                Registrations
              </button>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-[3.5] h-7 rounded-lg bg-primary w-[80%] left-1/2 -translate-x-1/2 "></div>
      </div>
    </header>
  );
};

export default Header;
