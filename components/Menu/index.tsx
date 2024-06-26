"use client";
import React from "react";
import { usePathname } from "next/navigation";

function Menu() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Teams", path: "/teams" },
  ];

  return (
    <ul
      className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 
           md:flex-row md:mt-0 md:border-0 md:bg-white"
    >
      {menuItems.map((item) => (
        <li key={item.path}>
          <a
            href={item.path}
            className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent
              md:hover:text-darkTangerine md:p-0 ${
                pathname === item.path ? " text-tangerine" : ""
              }`}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
