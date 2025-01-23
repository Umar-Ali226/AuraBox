import Image from "next/image";


const About = () => {
  return (
    <section className="container mx-auto">
      {/* --- FOR MEDIUM SCREEN --- */}
      <div className="hidden sm:flex justify-center md:justify-around px-6 md:px-0 lg:px-0">
        <div className="max-w-md mt-16 md:mt-24 md:ml-6 space-y-8">
          <p className="text-[0.875rem] font-semibold uppercase text-[#252B42]">
            ABOUT COMPANY
          </p>
          {/* --- TITLE --- */}
          <h1 className="text-[#252B42] text-3xl md:text-4xl font-semibold leading-tight">
            ABOUT US
          </h1>
          {/* --- DESCRIPTION --- */}
          <p className="text-[1rem] md:text-[0.875rem] text-[#737373] max-w-[17rem]">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex  flex-col md:flex-row md:space-x-2 space-y-4 md:space-y-0">
          <button className="py-[11px] pl-[28px] pr-[28px]  rounded-sm rounded-bl-sm bg-[#23A6F0] text-white text-sm font-bold">
            Get Quote Now
          </button>
          </div>
        </div>
        {/* --- IMAGE FOR ( md ) SCREEN --- */}
        <div className="relative mr-2">
          <Image
            src={"/images/team/blob.png"}
            alt="Blob"
            width={632}
            height={612}
            className="w-[20rem] md:w-[50rem] absolute top-12 z-0"
          />
          <Image
            src={"/images/team/girl.png"}
            alt="Girl-image"
            width={571}
            height={668}
            className="w-[20rem] md:w-[25rem] relative z-10"
          />
        </div>
      </div>

      <div className="hidden sm:flex justify-around items-center px-[2rem] md:px-[2rem] lg:px-[7rem] xl:px-[11rem]">
        <div className="space-y-4">
          <p className="text-[0.875rem] text-[#E74040]">Problems trying</p>
          <h3 className="text-[1.3rem] text-[#252B42] font-semibold max-w-[23rem]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>
        <div>
          <p className="text-[0.875rem] text-[#737373] max-w-[25rem] md:max-w-[21rem] lg:max-w-[25rem]  xl:max-w-[32rem]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
      </div>

      {/* --- REVIEWS ( md & lg ) SCREEN --- */}
      <div className="hidden sm:flex justify-around px-[0rem] md:px-[2rem] lg:px-[7rem] xl:px-[8rem] text-center mt-[4.5rem]">
        <div>
          <h2 className="text-[#252B42] text-[3rem] font-semibold">15K</h2>
          <p className="text-[0.875rem] text-[#737373] font-semibold">
            Happy Customers
          </p>
        </div>
        <div>
          <h2 className="text-[#252B42] text-[3rem] font-semibold">150K</h2>
          <p className="text-[0.875rem] text-[#737373] font-semibold">
            Monthly Visitors
          </p>
        </div>
        <div>
          <h2 className="text-[#252B42] text-[3rem] font-semibold">15</h2>
          <p className="text-[0.875rem] text-[#737373] font-semibold">
            Countries Worldwide
          </p>
        </div>
        <div>
          <h2 className="text-[#252B42] text-[3rem] font-semibold">100+</h2>
          <p className="text-[0.875rem] text-[#737373] font-semibold">
            Top Partners
          </p>
        </div>
      </div>
      {/* --- VIDEO PLAYER ( md & lg ) SCREEN --- */}
      <div className="hidden sm:flex justify-center mt-36 mr-4">
        <div className="relative">
          <Image
            src={"/images/bgimages/video.png"}
            alt="playButton"
            width={989}
            height={540}
            className="rounded-xl  md:w-[45rem] lg:w-[50rem] xl:w-[58rem] 2xl:w-[70rem]"
          />
          <Image
            src={"/images/bgimages/filter.png"}
            alt="playButton"
            width={989}
            height={540}
            className="absolute -top-4 rounded-xl  md:w-[45rem] lg:w-[50rem] xl:w-[58rem] 2xl:w-[70rem]"
          />
          <button
            className="w-20 h-20 rounded-full bg-primaryColor flex items-center justify-center shadow-md hover:scale-105 transition-transform absolute top-[9rem] md:top-[10.5rem] lg:top-[12rem] xl:top-[13rem] 2xl:top-[16rem] left-[17rem] md:left-[20rem] lg:left-[22rem] xl:left-[26rem] 2xl:left-[32rem]"
            aria-label="Play Video"
          >
            <Image
              src={"/images/icons/playButton.png"}
              alt="playButton"
              width={19}
              height={22}
              className="w-4 h-w-4"
            />
          </button>
        </div>
      </div>
      {/* --- FOR (sm & lg) --- */}
      <div className="flex sm:hidden flex-col justify-center items-center px-4 text-center">
        <div className="mt-20 space-y-8 text-center">
          <h1 className="text-[#252B42] text-2xl font-semibold text-center">
            ABOUT US
          </h1>
          <p className="text-[0.875rem] md:text-[1rem] text-[#737373] mx-[4.5rem]">
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </p>
          <div className="flex flex-col justify-center space-y-4">
          <button className="py-[11px] pl-[28px] pr-[28px] rounded-sm rounded-bl-sm bg-[#23A6F0]">
            Get Quote Now
          </button>
          </div>
        </div>

        {/* --- IMAGE ( ALL SCREENS ) --- */}
        <div className="relative mt-24 md:mt-0 flex justify-center">
          <Image
            src={"/images/team/blob.png"}
            alt="Blob"
            width={632}
            height={612}
            className="w-[15rem] absolute top-8 md:top-12 z-0"
          />
          <Image
            src={"/images/team/girl.png"}
            alt="Girl-image"
            width={571}
            height={668}
            className="w-[12rem] relative z-10"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center sm:hidden space-y-16 mt-16">
        <div className="space-y-4 text-center">
          <p className="text-[0.875rem] text-[#E74040]">Problems trying</p>
          <h3 className="text-[1.3rem] text-textColor font-semibold max-w-[15rem]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>
        <div className="text-left mx-20">
          <p className="text-[0.875rem] text-[#737373]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
      </div>
      {/* --- REVIEWS ( MOBILE ) --- */}
      <div className="flex sm:hidden flex-col px-[0rem] justify-center items-center text-center space-y-20 mt-36">
        <div>
          <h2 className="text-textColor text-[3rem] font-semibold">15K</h2>
          <p className="text-[0.875rem] text-[#737373] font-semibold">
            Happy Customers
          </p>
        </div>
        <div>
          <h2 className="text-textColor text-[3rem] font-semibold">150K</h2>
          <p className="text-[0.875rem] text-[#737373] font-semibold">
            Monthly Visitors
          </p>
        </div>
        <div>
          <h2 className="text-textColor text-[3rem] font-semibold">15</h2>
          <p className="text-[0.875rem] text-[#737373] font-semibold">
            Countries Worldwide
          </p>
        </div>
        <div>
          <h2 className="text-textColor text-[3rem] font-semibold">100+</h2>
          <p className="text-[0.875rem] text-[#737373] font-semibold">
            Top Partners
          </p>
        </div>
      </div>
      {/* --- VIDEO PLAYER ( MOBILE ) */}
      <div className="flex sm:hidden justify-center mt-40">
        <div className="relative">
          <Image
            src={"/images/bgimages/mobvideo.png"}
            alt="playButton"
            width={989}
            height={540}
            className="rounded-xl  w-[19rem]"
          />
          <Image
            src={"/images/bgimages/mobfilter.png"}
            alt="playButton"
            width={989}
            height={540}
            className="absolute -top-1 rounded-xl  w-[19rem]"
          />
          <button
            className="w-20 h-20 rounded-full bg-primaryColor flex items-center justify-center shadow-md hover:scale-105 transition-transform absolute top-[6.7rem] left-[7rem]"
            aria-label="Play Video"
          >
            <Image
              src={"/images/icons/playbutton.png"}
              alt="playButton"
              width={19}
              height={22}
              className="w-4 h-w-4"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;