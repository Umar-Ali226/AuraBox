import Image from "next/image";
import BrandLogo from "./BrandLogos";
import Button from "./Button";

const BigCompanies = () => {
  return (
    <section className="bg-textgrayOne w-full">
      <div className="container mx-auto mt-20 md:mt-40">
        <div className="flex flex-col justify-center items-center text-center px-6 md:mx-[4.7rem] space-y-2">
          <h3 className="font-semibold text-[2.3rem] text-[#252B42]">
            Big Companies Are Here
          </h3>
          <p className="text-[0.875rem] text-[#737373] sm:hidden">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
          <p className="text-[0.875rem] text-[#737373] hidden sm:flex">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>

        <div className="container mx-auto mt-10">
          <BrandLogo />
        </div>

        <div className="bg-[#2A7CC7] mt-20 md:mt-44 -mb-24">
          <div 
          className="flex flex-col md:flex-row justify-center items-center md:justify-around px-6 md:px-0 lg:pl-11 2xl:-ml-12 mx-11 sm:mx-0 pb-24 md:pb-24 lg:pb-0">
            <div className="max-w-md mt-10 md:mt-20 space-y-7 text-center md:text-center lg:text-left">
              <p className="text-[0.875rem] font-semibold uppercase text-white">
                WORK WITH US
              </p>
              <h1 className="text-white text-3xl md:text-4xl font-semibold leading-tight mx-2 sm:mx-0">
                Now Let’s grow Yours
              </h1>
              <p className="text-[1rem] md:text-[0.875rem] text-white mx-[0.375rem] sm:mx-0">
                The gradual accumulation of information about atomic and
                small-scale behavior during the first quarter of the 20th
              </p>
              <div className="flex flex-col md:flex-row md:space-x-2 space-y-4 md:space-y-0 justify-center lg:justify-start">
                <Button
                  text="Button"
                  paddingY="11px"
                  paddingL="28px"
                  paddingR="28px"
                  rounded="rounded-sm rounded-bl-sm"
                  backgroundColor="bg-transparent"
                  outline={true}
                />
              </div>
            </div>

            <div className="hidden sm:hidden lg:flex mt-10 md:mt-0 md:mr-0 lg:-mr-[6.3rem] 2xl:-mr-[12rem]">
              <Image
                src={"/images/productImages/work.png"}
                alt="Girl-image"
                width={590}
                height={640}
                className="w-[20rem] md:w-[30rem] lg:w-[29.3rem] 2xl:w-[39rem] h-[28rem] md:h-[32rem] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigCompanies;