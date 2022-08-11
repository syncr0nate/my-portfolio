import Link from "next/link";
import { useState } from "react";
import ButtonPrimary from "./ButtonPrimary";

export default function Navbar() {
  const menuLinks = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Skills", url: "#skills" },
    { id: 3, name: "Projects", url: "#projects" },
    { id: 4, name: "Hobby", url: "#hobby" },
  ];
  const [menu, setMenu] = useState(false);
  return (
    <nav className="flex items-center justify-between px-5 lg:px-36 py-4 lg:py-5 bg-white/10 backdrop-blur-xl">
      <div>
        <h1 className="text-lg lg:text-xl font-josefin font-bold text-slate-900">
          Syncr0nate
        </h1>
      </div>
      <div>
        <ul
          className={`hidden lg:flex space-x-7 text-sm font-inter font-light`}
        >
          {menuLinks.map((menu) => (
            <li key={menu.id}>
              <Link href={menu.url}>
                <a className={`text-gray-500 hover:text-gray-700`}>
                  {menu.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden lg:block">
        <ButtonPrimary href="#contact" name="Contact Me" />
      </div>

      {/* for mobile */}
      <span className={`lg:hidden`} onClick={() => setMenu(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </span>
      {/* end for mobile */}

      {/* overlay */}
      <div
        className={`absolute top-0 right-0 ${
          menu ? "translate-x-0" : "-translate-x-full"
        } w-full min-h-screen bg-white p-5 transition`}
      >
        <span className="absolute right-5" onClick={() => setMenu(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
        <ul className={`space-y-4 font-inter font-light mt-10 z-50`}>
          {menuLinks.map((menu) => (
            <li key={menu.id}>
              <Link href={menu.url}>
                <a className={`text-gray-500 hover:text-gray-700`}>
                  {menu.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 block">
          <ButtonPrimary href="#contact" name="Contact Me" />
        </div>
      </div>
    </nav>
  );
}
