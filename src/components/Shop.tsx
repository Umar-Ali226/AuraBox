import Image from "next/image";

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
        <div className="grid grid-cols-1 place-items-center sm:grid-cols-3 md:grid-cols-3 space-y-4 sm: md:space-y-4 lg:space-y-0 lg:grid-cols-5 xl:w-[70rem] 2xl:w-[70rem] xl:ml-[5rem] 2xl:ml-[12rem]">
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
        </div>
      </div>
      {/* --- FOOTER SECTION --- */}
      <div className="container mx-auto bg-white">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-y-6 sm:gap-y-0 pt-5 pb-7">
          {/* --- RESULT COUNT --- */}
          <h2 className="text-[0.875rem] text-[#737373] font-semibold md:ml-7 xl:ml-24 2xl:ml-36 mb-7 sm:mb-0 ">
            Showing all 12 results
          </h2>
          {/* --- VIEW TOGGLE --- */}
          <div className="flex items-center space-x-3">
            <p>Views:</p>
            <div className="border-2 px-4 py-4 rounded-md border-borderColor">
              <Image
                src={"/images/icons/btn-icon.png"}
                width={16}
                height={16}
                alt="btn-icon"
              />
            </div>
            <div className="border-2 px-4 py-[1.0870rem] rounded-md  border-borderColor">
              <Image
                src={"/images/icons/todo-icon.png"}
                width={16}
                height={16}
                alt="todo-icon"
              />
            </div>
          </div>
          <div className="mr-0 sm:mr-16">
            <div className="flex items-center sm: space-x-3">
              <div className="border border-gray-400 text-[0.875rem] rounded-md py-3 bg-lightbgColor flex pl-3 pr-6 items-center gap-x-2">
                <p className="text-[#737373]">Popularity</p>
                <Image
                  src={"/images/icons/dropdown-icon-two.png"}
                  width={8}
                  height={14}
                  alt="btn-icon"
                  className="w-3 h-2"
                />
              </div>
              <button className="bg-[#23A6F0] text-white rounded-md px-5 py-3 font-semibold text-sm ">
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;