import Image from "next/image";
import React from "react";

const BrandLogo = () => {
  return (
    // --- MAIN SECTION FOR BRAND LOGOS
    <section className="bg-lightbgColor h-[40rem] sm:h-[8rem] mt-12 sm:mt-3 -mb-20">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row gap-x-[2rem] md:gap-x-[2rem] lg:gap-x-[4.5rem] xl:gap-x-[5.5rem] 2xl:gap-x-[7.5rem] items-center justify-center pt-10 sm:pt- space-y-10 sm:space-y-0">
          <Image
            src={"/images/brandLogos/brand-logo-one.png"}
            alt="hooli-logo"
            width={75.5}
            height={71.86}
          />
          <Image
            src={"/images/brandLogos/brand-logo-two.png"}
            alt="hooli-logo"
            width={83}
            height={59}
          />
          <Image
            src={"/images/brandLogos/brand-logo-three.png"}
            alt="hooli-logo"
            width={102}
            height={74.84}
          />
          <Image
            src={"/images/brandLogos/brand-logo-four.png"}
            alt="hooli-logo"
            width={103.68}
            height={61.75}
          />
          <Image
            src={"/images/brandLogos/brand-logo-five.png"}
            alt="hooli-logo"
            width={103.68}
            height={61.75}
          />
          <Image
            src={"/images/brandLogos/brand-logo-six.png"}
            alt="hooli-logo"
            width={75.75}
            height={71.86}
          />
        </div>
      </div>
    </section>
  );
};

export default BrandLogo;