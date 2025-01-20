'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full h-auto -mt-3 pt-6 bg-textgrayOne sm:bg-white">
      <div className="container mx-auto flex flex-col sm:hidden justify-between items-center px-4">
        <div className="flex items-center justify-between w-full mb-4">
          {/* --- LOGO --- */}
          <div className="font-bold text-[1rem]">
            <Link href="/">AuraBox</Link>
          </div>
          {/* --- ICONS --- */}
          <div className="flex space-x-5">
            <Image
              src={"/images/icons/mob-search-icon.png"}
              alt="Mobile-icon"
              width={20}
              height={20}
            />
            <Image
              src={"/images/icons/mob-cart-icon.png"}
              alt="Cart-icon"
              width={20}
              height={20}
            />
            {/* --- MENU ICON TOGGLE --- */}
            <div onClick={toggleMenu} className="cursor-pointer">
              <Image
                src={
                  isMenuOpen
                    ? "/images/icons/close-icon.png" // Cross icon
                    : "/images/icons/menu-icon.png" // Menu icon
                }
                alt="Menu-toggle-icon"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>

        {/* --- NAVIGATION LINKS --- */}
        <nav
          className={`w-full transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center text-[1.1rem] gap-y-4 text-[#737373] font-bold">
            {[
              { label: "Home", href: "/" },
              { label: "Product", href: "/product" },
              { label: "Pricing", href: "/pricing" },
              { label: "Contact", href: "/contact" },
              { label: "Team", href: "/team" },
            ].map((item, index) => (
              <li key={index} className="w-full text-center">
                <Link href={item.href}>
                  <p
                    className={`hover:text-textColor ${
                      item.label === "Home" ? "text-[#252B42]" : ""
                    }`}
                  >
                    {item.label}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
