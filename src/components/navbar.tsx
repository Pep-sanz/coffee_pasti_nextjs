"use client";

import Link from "next/link";
import { useState } from "react";
import { HamburgerMenu } from "./ui/hamburger-menu";
import { Button } from "antd";
import { auth } from "@/lib/firebase/firebase.config";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const router = useRouter();
  const [isMenuShow, setIsMenuShow] = useState(false);

  const navbarContent = [
    { label: "Home", href: "/", logo: "" },
    { label: "Menu", href: "/menu", logo: "" },
    { label: "About As", href: "/", logo: "" },
    { label: "Contact As", href: "/", logo: "" },
  ];
  const navbarContentAdmin = [
    { label: "Dashboard", href: "/dashboard", logo: "" },
    { label: "Products", href: "/products", logo: "" },
    { label: "About As", href: "/dashboard", logo: "" },
    { label: "Contact As", href: "/dashboard", logo: "" },
  ];

  const handleClickMenu = () => {
    setIsMenuShow(!isMenuShow);
  };

  const handleLogOuth = () => {
    auth.signOut();
  };

  return (
    <nav className="bg-bgPrimary backdrop-blur-md fixed z-40 min-w-[100vw] h-20 flex justify-between items-center px-6 ">
      <div className=" flex justify-between items-center px-3 w-full">
        <div className="">
          <h1 className="text-3xl font-bold text-primary ">
            Coffee <span className="text-white">Pasti</span>
          </h1>
        </div>
        <div className="hidden md:flex justify-center items-center gap-4">
          {navbarContent.map(({ label, href }) => (
            <Link href={href} key={label}>
              <div className="text-neutral-100 text-lg hover:text-primary cursor-pointer">{label}</div>
            </Link>
          ))}
        </div>
        <div className="">
          <Button onClick={() => handleLogOuth()}>Sign out</Button>
        </div>
      </div>
      {/* mobile */}
      <div className="md:hidden">
        <HamburgerMenu handleClick={handleClickMenu} isMenuShow={isMenuShow} />
        <ul
          className="absolute top-20 px-6 space-y-6 text-lg text-neutral-100 bg-bgPrimary backdrop-blur-md w-full min-h-screen transition-all duration-300 ease-in-out "
          style={{
            left: isMenuShow ? 0 : "100%",
          }}
        >
          {navbarContent.map((item, i) => (
            <li key={i} onClick={() => handleClickMenu()} className="border-b-2 border-primary">
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
