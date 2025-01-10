import Image from "next/image";

const SupportSection = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 my-12 px-4 bg-textgrayOne sm:bg-white">
        {/* --- CARD 1 --- */}
        <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white">
          {/* --- ICON --- */}
          <Image
            src="/images/icons/call-icon-office.png"
            alt="Phone Icon"
            width={60}
            height={60}
          />
          {/* --- EMAIL --- */}
          <div className="text-textColor">
            <p className="text-[0.875rem] font-semibold">
              georgia.young@example.com
            </p>
            <p className="text-[0.875rem] font-semibold">
              georgia.young@ple.com
            </p>
          </div>
          <h3 className="font-bold text-[1rem]">Get Support</h3>
          <button className="pl-[2.2rem] pr-[2.2rem] py-[1rem] rounded-full bg-white text-[#23A6F0]  border-[#23A6F0] border-[1px]"
          > Submit Request</button>
        </div>

        {/* --- CARD 2 --- */}
        <div className="bg-[#252B42] flex flex-col items-center text-center space-y-4 py-[4.2rem] px-10 w-full md:w-auto">
          {/* --- ICON --- */}
          <Image
            src="/images/icons/location-icon-office.png"
            alt="Location Icon"
            width={65}
            height={65}
          />
          {/* --- EMAIL --- */}
          <div className="text-white">
            <p className="text-[0.875rem] font-semibold">
              georgia.young@example.com
            </p>
            <p className="text-[0.875rem] font-semibold">
              georgia.young@ple.com
            </p>
          </div>
          <h3 className="font-bold text-[1rem] text-white">Get Support</h3>
          <button className="pl-[2.2rem] pr-[2.2rem] py-[1rem] rounded-full bg-[#252B42] text-[#23A6F0]  border-[#23A6F0] border-[1px]"
          > Submit Request</button>
        </div>

        {/* --- CARD 3 --- */}
        <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white">
          {/* --- ICON --- */}
          <Image
            src="/images/icons/mail-icon-office.png"
            alt="Mail Icon"
            width={60}
            height={60}
          />
          {/* --- EMAIL --- */}
          <div className="text-textColor">
            <p className="text-[0.875rem] font-semibold">
              georgia.young@example.com
            </p>
            <p className="text-[0.875rem] font-semibold">
              georgia.young@ple.com
            </p>
          </div>
          <h3 className="font-bold text-[1rem]">Get Support</h3>
          <button className="pl-[2.2rem] pr-[2.2rem] py-[1rem] rounded-full bg-white text-[#23A6F0]  border-[#23A6F0] border-[1px]"
          > Submit Request</button>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center gap-y-2">
        <div className="w-12 h-12 mb-2">
          <Image
            src="/images/icons/Arrow-2.png"
            alt="Mail Icon"
            width={72.56}
            height={21.84}
          />
        </div>

        {/* Text */}
        <p className="text-[0.8rem] font-semibold text-[#252B42] uppercase tracking-wider text-center">
          WE CAN'T WAIT TO MEET YOU
        </p>

        {/* Title */}
        <h1 className="text-[3rem] font-bold text-center text-[#252B42]">
          Let’s Talk
        </h1>

        <button className=" pl-[1.9rem] pr-[1.9rem] py-[0.9rem] rounded-sm bg-[#23A6F0] text-white font-semibold">
          Try for free now 
        </button>
      </div>
    </section>
  );
};

export default SupportSection;