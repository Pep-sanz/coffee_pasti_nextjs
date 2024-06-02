"use client";

import { useState } from "react";

export const HamburgerMenu = (params: { handleClick: () => void; isMenuShow: boolean }) => {
  return (
    <>
      <div onClick={params.handleClick} className="w-[28px] h-[20px] flex flex-col justify-between items-center md:hidden">
        <span className={`block w-full h-1 bg-white rounded transition-all duration-300 ease-in-out ${params.isMenuShow ? "origin-top-left bg-black rotate-45 translate-x-[1px] -translate-y-[1px]" : ""}`} />
        <span className={`block w-full h-1 bg-white rounded transition-all duration-300 ease-in-out ${params.isMenuShow ? "opacity-0" : ""}`} />
        <span className={`block w-full h-1 bg-white rounded transition-all duration-300 ease-in-out ${params.isMenuShow ? "origin-top-left bg-black -rotate-45 -translate-x-[1px] translate-y-[2.5px] " : ""}`} />
      </div>
    </>
  );
};
