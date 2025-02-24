import Image from "next/image";

const PricingCards = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center my-20 px-0 gap-y-6 sm:gap-y-0">
      {/* --- FREE PLAN --- */}
      <div className="md:w-1/2 xl:w-1/4 h-[40rem] pt-7 border-[0.1rem] border-primaryColor rounded-lg shadow-lg bg-white text-white">
        <div className="p-8 text-center">
          <h3 className="text-[1.3rem] text-black font-bold">FREE</h3>
          <p className="text-[#737373] font-semibold mt-7">
            Organize across all <br /> apps by hand
          </p>
          <div>
            <h2 className="text-[#23A6F0] text-[2.5rem] font-extrabold mt-6 mr-20">
              0
            </h2>
            <div className="text-sm -mt-12 ml-[6.5rem] sm:ml-[9rem] md:ml-[4.7rem] lg:ml-[7.2rem] xl:ml-[6.5rem] 2xl:ml-[8.5rem] flex flex-col font-semibold gap-y-1 text-left">
              <span className="text-[1.5rem] text-[#23A6F0]">$</span>
              <p className="text-[#23A6F0] text-[0.875rem]">
                Per Month
              </p>
            </div>
          </div>
        </div>
        {/* --- FEATURES --- */}
        <ul className="space-y-4 px-6 text-[0.875rem] font-semibold text-textColor">
          <li className="flex items-center text-black">
            <Image
              src="/images/icons/greentick.png"
              alt="Tick"
              width={32}
              height={32}
              className="mr-2"
            />
            Unlimited product
          </li>
          <li className="flex items-center text-black">
            <Image
              src="/images/icons/greentick.png"
              alt="Tick"
              width={32}
              height={32}
              className="mr-2"
            />
            Unlimited product
          </li>
          <li className="flex items-center text-black">
            <Image
              src="/images/icons/greentick.png"
              alt="Tick"
              width={32}
              height={32}
              className="mr-2"
            />
            Unlimited product
          </li>
          <li className="flex items-center text-black">
            <Image
              src="/images/icons/mutetick.png"
              alt="Cross"
              width={32}
              height={32}
              className="mr-2"
            />
            1GB Cloud storage
          </li>
          <li className="flex items-center text-black">
            <Image
              src="/images/icons/mutetick.png"
              alt="Cross"
              width={32}
              height={32}
              className="mr-2"
            />
            Email and community support
          </li>
        </ul>
        <div className="text-center mt-6 mb-8">
         <button className="pl-[5rem] pr-[5rem] py-[0.9rem] rounded-sm bg-[#252B42] font-semibold">
          Try for free
         </button>
        </div>
      </div>
      {/* --- STANDARD PLAN --- */}
      <div className="md:w-1/2 xl:w-1/4 h-[42rem] -mt-0 sm:-mt-8 pt-7 border rounded-lg shadow-lg bg-[#252B42] text-white">
        <div className="p-8 pt-14 text-center">
          <h3 className="text-[1.3rem] font-bold">STANDARD</h3>
          <p className="text-white font-semibold mt-7">
            Organize across all <br /> apps by hand
          </p>
          <div>
            <h2 className="text-[#23A6F0] text-[2.5rem] font-extrabold mt-6 mr-20">
              9.99
            </h2>
            <div className="text-sm -mt-12 ml-[8.5rem] sm:ml-[9rem] md:ml-[6.7rem] lg:ml-[9.4rem] xl:ml-[8.5rem] 2xl:ml-[10.5rem] flex flex-col font-semibold gap-y-1 text-left">
              <span className="text-[1.5rem] text-[#23A6F0]">$</span>
              <p className="text-[#23A6F0] text-[0.875rem]">
                Per Month
              </p>
            </div>
          </div>
        </div>
        {/* --- FEATURES --- */}
        <ul className="space-y-4 px-6 text-[0.875rem] font-semibold text-white">
          <li className="flex items-center">
            <Image
              src="/images/icons/greentick.png"
              alt="Tick"
              width={32}
              height={32}
              className="mr-2"
            />
            Unlimited product
          </li>
          <li className="flex items-center">
            <Image
              src="/images/icons/greentick.png"
              alt="Tick"
              width={32}
              height={32}
              className="mr-2"
            />
            Unlimited product
          </li>
          <li className="flex items-center">
            <Image
              src="/images/icons/greentick.png"
              alt="Tick"
              width={32}
              height={32}
              className="mr-2"
            />
            Unlimited product
          </li>
          <li className="flex items-center">
            <Image
              src="/images/icons/mutetick.png"
              alt="Cross"
              width={32}
              height={32}
              className="mr-2"
            />
            1GB Cloud storage
          </li>
          <li className="flex items-center">
            <Image
              src="/images/icons/mutetick.png"
              alt="Cross"
              width={32}
              height={32}
              className="mr-2"
            />
            Email and community support
          </li>
        </ul>
        <div className="text-center mt-6 mb-8">
        <button className="pl-[5rem] pr-[5rem] py-[0.9rem] rounded-sm bg-[#23A6F0] font-semibold">
          Try for free
         </button>
        </div>
      </div>

      {/* --- PREMIUM PLAN --- */}
      <div className="md:w-1/2 lg:w-2/2 xl:w-1/4 h-[40rem] pt-7 border-[0.1rem] border-primaryColor rounded-lg shadow-lg bg-white text-white">
        <div className="p-8 text-center">
          <h3 className="text-[1.3rem] text-black font-bold">PREMIUM</h3>
          <p className="text-black font-semibold mt-7">
            Organize across all <br /> apps by hand
          </p>
          <div>
            <h2 className="text-[#23A6F0] text-[2.5rem] font-extrabold mt-6 mr-20">
              19.99
            </h2>
            <div className="text-sm -mt-12 ml-[8.9rem] sm:ml-[9rem] md:ml-[7rem] lg:ml-[9.7rem] xl:ml-[8.9rem] 2xl:ml-[11rem] flex flex-col font-semibold gap-y-1 text-left">
              <span className="text-[1.5rem] text-[#23A6F0]">$</span>
              <p className="text-[#23A6F0] text-[0.875rem]">
                Per Month
              </p>
            </div>
          </div>
        </div>
        {/* --- FEATURES --- */}
        <ul className="space-y-4 px-6 text-[0.875rem] font-semibold text-textColor">
          <li className="flex items-center text-black">
            <Image
              src="/images/icons/greentick.png"
              alt="Tick"
              width={32}
              height={32}
              className="mr-2"
            />
            Unlimited product
          </li>
          <li className="flex items-center text-black">
            <Image
              src="/images/icons/greentick.png"
              alt="Tick"
              width={32}
              height={32}
              className="mr-2"
            />
            Unlimited product
          </li>
          <li className="flex items-center text-black">
            <Image
              src="/images/icons/greentick.png"
              alt="Tick"
              width={32}
              height={32}
              className="mr-2"
            />
            Unlimited product
          </li>
          <li className="flex items-center text-black">
            <Image
              src="/images/icons/mutetick.png"
              alt="Cross"
              width={32}
              height={32}
              className="mr-2"
            />
            1GB Cloud storage
          </li>
          <li className="flex items-center text-black">
            <Image
              src="/images/icons/mutetick.png"
              alt="Cross"
              width={32}
              height={32}
              className="mr-2"
            />
            Email and community support
          </li>
        </ul>
        <div className="text-center mt-6 mb-8">
        <button className="pl-[5rem] pr-[5rem] py-[0.9rem] rounded-sm bg-[#252B42] font-semibold">
          Try for free
         </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;