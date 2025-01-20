'use client'
import Image from "next/image";
import Filters from "./Filter";

const Shop = () => {
  return (
    <section className="w-full bg-textgrayOne mt-3 h-auto">
      <div className="container mx-auto">
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-y-6 sm:gap-y-0">
          <h2 className="text-[1.3rem] text-[#252B42] font-semibold md:ml-7 xl:ml-24 2xl:ml-36 mt-11 sm:mt-5 mb-6">
            Shop
          </h2>
          <div className="flex items-center font-semibold text-sm space-x-3 md:mr-2 xl:mr-24 2xl:mr-36 mb-14 sm:mb-0">
            <span className="text-[#252B42]">Home</span>
            <span>
              <Image
                src={"/images/icons/shoprightarrow-icon.png"}
                width={8.62}
                height={16}
                alt="Rightarrow-icon"
              />
            </span>
            <span className="text-gray-400">Shop</span>
          </div>
        </div>
        {/* --- PRODUCT SECTION --- */}
        {/* <div className="grid grid-cols-1 place-items-center sm:grid-cols-3 md:grid-cols-3 space-y-4 sm: md:space-y-4 lg:space-y-0 lg:grid-cols-5 xl:w-[70rem] 2xl:w-[70rem] xl:ml-[5rem] 2xl:ml-[12rem]">
          <div className="text-white relative">
            <Image
              src={"/images/productImages/cloth-1.png"}
              width={205}
              height={223}
              alt="Rightarrow-icon"
              className="relative top-0 hidden sm:flex"
            />
            <Image
              src={"/images/productImages/cloth-1.png"}
              width={205}
              height={223}
              alt="Rightarrow-icon"
              className="relative top-0 w-[20rem] flex sm:hidden"
            />
            <div className="absolute top-[40%] left-[35%] text-center">
              <p className="uppercase font-semibold text-[1.3rem] sm:text-[1rem]">
                Cloths
              </p>
              <p className="text-[0.900rem] sm:text-[0.790rem] font-extralight">
                5 Items
              </p>
            </div>
          </div>

          <div className="text-white relative">
            <Image
              src={"/images/productImages/cloth-2.png"}
              width={205}
              height={223}
              alt="Rightarrow-icon"
              className="relative top-0 hidden sm:flex"
            />
            <Image
              src={"/images/productImages/cloth-2.png"}
              width={205}
              height={223}
              alt="Rightarrow-icon"
              className="relative top-0 w-[20rem] flex sm:hidden"
            />
            <div className="absolute top-[40%] left-[35%] text-center">
              <p className="uppercase font-semibold text-[1.3rem] sm:text-[1rem]">
                Cloths
              </p>
              <p className="text-[0.900rem] sm:text-[0.790rem] font-extralight">
                5 Items
              </p>
            </div>
          </div>

          <div className="text-white relative">
            <Image
              src={"/images/productImages/cloth-3.png"}
              width={205}
              height={223}
              alt="Rightarrow-icon"
              className="relative top-0 hidden sm:flex"
            />
            <Image
              src={"/images/productImages/cloth-3.png"}
              width={205}
              height={223}
              alt="Rightarrow-icon"
              className="relative top-0 w-[20rem] flex sm:hidden"
            />
            <div className="absolute top-[40%] left-[35%] text-center">
              <p className="uppercase font-semibold text-[1.3rem] sm:text-[1rem]">
                Cloths
              </p>
              <p className="text-[0.900rem] sm:text-[0.790rem] font-extralight">
                5 Items
              </p>
            </div>
          </div>
          <div className="text-white relative">
            <Image
              src={"/images/productImages/cloth-4.png"}
              width={205}
              height={223}
              alt="Rightarrow-icon"
              className="relative top-0 hidden sm:flex"
            />
            <Image
              src={"/images/productImages/cloth-4.png"}
              width={205}
              height={223}
              alt="Rightarrow-icon"
              className="relative top-0 w-[20rem] flex sm:hidden"
            />
            <div className="absolute top-[40%] left-[35%] text-center">
              <p className="uppercase font-semibold text-[1.3rem] sm:text-[1rem]">
                Cloths
              </p>
              <p className="text-[0.900rem] sm:text-[0.790rem] font-extralight">
                5 Items
              </p>
            </div>
          </div>
          <div className="text-white relative">
            <Image
              src={"/images/productImages/cloth-5.png"}
              width={205}
              height={223}
              alt="Rightarrow-icon"
              className="relative top-0 hidden sm:flex"
            />
            <Image
              src={"/images/productImages/cloth-5.png"}
              width={205}
              height={223}
              alt="Rightarrow-icon"
              className="relative top-0 w-[20rem] flex sm:hidden"
            />
            <div className="absolute top-[40%] left-[35%] text-center">
              <p className="uppercase font-semibold text-[1.3rem] sm:text-[1rem]">
                Cloths
              </p>
              <p className="text-[0.900rem] sm:text-[0.790rem] font-extralight">
                5 Items
              </p>
            </div>
          </div>
        </div> */}
      </div>
      {/* --- FOOTER SECTION --- */}
     
    </section>
  );
};

export default Shop;