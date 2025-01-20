import Link from "next/link";
import Image from "next/image";

const NavTwo = () => {
  return (
    <header className="w-full h-auto mt-3 ml-auto md:-ml-3 xl:-ml-10">
      <div className="container mx-auto hidden sm:flex justify-around items-center px-0 md:px-[0rem] lg:px-[5rem] xl:px-[8rem] lg:gap-x-28 ">
        {/* --- LOGO --- */}
        <div className="font-bold text-[1rem] xl:text-[1.3rem] text-darkbackgroundColor self-center pl-6 xl:pl-6 2xl:pl-14">
          <Link href="/">AuraBox</Link>
        </div>

        {/* --- NAVIGATION LINKS --- */}
        <nav>
          <ul className="flex items-center text-[0.700rem] xl:text-[0.875rem] gap-x-3 font-semibold text-[#737373] ml-2 xl:-ml-40">
            {[
              { label: "Home", href: "/" },
              { label: "Product", href: "/product" },
              { label: "Pricing", href: "/pricing" },
              { label: "Team", href: "/team" },
              { label: "Contact", href: "/contact" },
            ].map((item, index) => (
              <li key={index}>
                {" "}
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* --- ICONS & LOGIN/REGISTER --- */}
        <div className="flex items-center text-[0.700rem] xl:text-[0.875rem] gap-x-[1.5rem] xl:gap-x-[2.5rem]">
          <div className="flex items-center gap-x-1 text-[#23A6F0] font-bold">
            <p>Login</p>
          </div>
          <div className="relative flex items-center">
            <button className="bg-[#23A6F0] py-[11px] pl-[20px] pr-[40px] rounded-l-sm text-white font-semibold">
              Become a member
            </button>
            <Image
              src={"/images/icons/btn-right-arrow.png"}
              width={12}
              height={10}
              alt="right-arrow"
              className="absolute top-5.5 left-[10.8rem]"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavTwo;