import Image from "next/image";

const Trail = () => {
  return (
    <section className="container mx-auto">
      <div className="mt-24 sm:mt-28">
        <div className="space-y-5 text-center">
          {/* --- HEADING --- */}
          <h3 className="text-[#252B42] font-semibold text-[2.3rem] flex sm:hidden justify-center">
            Start your <br /> 14 days free trial
          </h3>
          <h3 className="text-[#252B42] font-semibold text-[2.3rem] justify-center hidden sm:flex">
            Start your 14 days free trial
          </h3>
          <p className="hidden sm:flex text-[#737373] justify-center text-[0.875rem]">
            Met minim Mollie non desert Alamo est sit cliquey dolor <br /> do
            met sent. RELIT official consequent.
          </p>
          <p className="flex sm:hidden text-secondtextColor  text-[0.875rem] mx-[3.4rem] sm:mx-auto">
            We focus on ergonomics and meeting you where you work. It`s only a
            keystroke away.
          </p>
          <button className="bg-[#23A6F0] text-white font-semibold pl-[2.5rem] pr-[2.5rem] py-[1rem] rounded-sm">
          Try it free now
          </button>
         
          <div className="flex justify-center gap-x-4 pt-3">
            <Image
              src={"/images/icons/twitter-mob.png"}
              alt="Twitter-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/facebook-pricing.png"}
              alt="Facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/insta-blk.png"}
              alt="Instagram-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/linkedin.png"}
              alt="Linkedin-icon"
              width={23}
              height={23}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trail;