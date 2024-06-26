"use client";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Logo from "@/public/assets/logo-orange.png";
import MenuContext from "@/context/MenuContext";
import Menu from "../Menu";

function Header() {
  const [showing, setShowing] = useState<boolean>(false);
  const { setShowing: setGlobalMenuShowing } = useContext(MenuContext);
  const router = useRouter();

  useEffect(() => {
    console.log("showing state:", showing);
  }, [showing]);

  const handleToggleMenuButton = () => {
    setShowing((prev) => !prev);
  };

  const handleClickButton = () => {
    setShowing((prev) => !prev);
    setGlobalMenuShowing();
  };

  const handleRegisterClick = () => {
    router.push('/register');
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 ">
          <Image src={Logo} width={32} alt="Bon Appétit Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-darkTangerine">
            Bon Appétit
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <button
            type="button"
            onClick={handleRegisterClick}
            className="text-white bg-darkTangerine hover:bg-darkerTangerine focus:ring-4 focus:outline-none focus:ring-darkTangerine font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Register
          </button>
          <button
            onClick={handleClickButton}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden
             hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={showing ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${showing ? '' : 'hidden'}`}
          id="navbar-sticky"
        >
          <Menu />
        </div>
      </div>
    </nav>
  );
}

export default Header;
