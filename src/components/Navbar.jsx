import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-start">
      <div className="logo flex items-center   space-x-1 cursor-pointer">
        <i class="c-page-title__prepend blink"></i>
        <img src="/logo.png" className="lg:w-14 md:w-8 w-14 logo" alt="" />
        <h2 className="opacity-90 lg:mt-0 mt-1 hidden md:block text-[18px]  pt-2 pl-2 logo-title">
          AGENCY
        </h2>
      </div>
      <div className="links flex text-[14px] leading-7 md:text-lg xl:w-2/5 lg:items-center lg:w-1/2 lg:flex-row flex-col md:justify-between underline">
        <a
          href="mailto:newbiz@phoenixagency.ae"
          className="opacity-90 text-right"
        >
          <span className=" w-0 sm:w-fit sm:block font-medium md:font-normal">
            newbiz@phoenixagency.ae
          </span>
          {/*<span className="sm:hidden">Email ↗</span>*/}
        </a>
        <div className="rightLinks text-[14px] leading-7 md:text-lg lg:flex-row flex-col flex justify-center items-end space-x-6">
          <a href="" className="opacity-90">
            <span className="font-medium md:font-normal">LinkedIn</span>↗
          </a>
          <a href="" className="opacity-90">
            <span className="font-medium md:font-normal">Instagram</span>↗
          </a>
        </div>
      </div>
    </nav>
  );
}
