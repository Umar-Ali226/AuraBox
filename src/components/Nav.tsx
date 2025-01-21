import Link from "next/link";
import Image from "next/image";
import { IoMdCart } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

const Nav = () => {
  return (
    <header className="w-full h-auto mt-2 ml-auto mb-2 md:-ml-3 md:mb-2  xl:-ml-10">
      <div className="container mx-auto hidden sm:flex justify-around items-center">
        {/* --- LOGO --- */}
        <div className="font-bold text-[1rem] xl:text-[1.3rem] text-[#252B42]">
          <Link href="/">AuraBox</Link>
        </div>

        {/* --- NAVIGATION LINKS --- */}
        <nav>
          <ul className="hidden sm:flex items-center text-[0.700rem] xl:text-[0.875rem] gap-x-3 font-semibold text-[#737373] ml-2 xl:-ml-40">
            {[
              { label: "Home", href: "/" },
              { label: "Shop", href: "/shop", hasDropdown: true },
              { label: "About", href: "/about" },
              { label: "Blog", href: "/" },
              { label: "Contact", href: "/contact" },
              { label: "Pages", href: "/" },
            ].map((item, index) => (
              <li
                key={index}
                className={`${
                  item.hasDropdown
                    ? "flex gap-x-1 items-center text-[#252B42] font-medium"
                    : ""
                }`}
              >
                <Link href={item.href}>{item.label}</Link>
                {item.hasDropdown && (
                  <Image
                    src="/images/icons/dropdown-icon.png"
                    alt="Dropdown-icon"
                    width={16}
                    height={16}
                    className="w-2 h-2"
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* --- ICONS & LOGIN / REGISTER --- */}
        <div className="hidden sm:flex items-center text-[0.700rem] xl:text-[0.875rem] gap-x-[0.3rem] -mr-2 md:-mr-14 xl:-mr-24">
          <div className="flex gap-2 items-center">
       <div className="text-[#23A6F0] text-xl"><IoIosSearch /></div>
        <Link href="/cart"><div className="text-[#23A6F0] text-xl"><IoMdCart /></div></Link>
        <div className="text-[#23A6F0] text-md"><FaHeart /></div>
        
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;