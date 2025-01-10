import Image from "next/image";
import GridOverlay from "@/components/GridOverlay"; // Adjust path as necessary

const ProductDescription = () => {
  return (
    <section className="container mx-auto relative">
      <div className="flex justify-center text-secondarycolorOne font-semibold text-[0.875rem] gap-x-2 sm: lg:gap-x-14 lg:mr-40 pt-12">
        <div className="hidden sm:hidden lg:hidden xl:flex">
          <GridOverlay />
        </div>
        <p className="underline text-gray-500 decoration-secondtextColor sm:no-underline font-normal sm:font-semibold">
          Description
        </p>
        <p className="text-gray-500 font-semibold">Additional Information</p>
        <p className="text-gray-500 ">Reviews (0)</p>
      </div>

      <hr className="mt-9" />

      <div className="mt-10">
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:pr-[7.5rem] place-content-center sm:place-content-start place-items-center sm:place-items-start">
          {/* --- PRODUCT IMAGE --- */}
          <Image
            src={"/images/productImages/card-item.png"}
            alt="Card-item"
            width={316}
            height={372}
            className="w-[321px] sm:w-[316px]"
          />
          {/* --- BACKGROUND FOR PRODUCT IMAGE --- */}
          <Image
            src={"/images/productImages/card-item-bg.png"}
            alt="Card-item"
            width={337}
            height={392}
            className="absolute top-1 sm:-top-1  left-6 sm:-left-[0.5rem] w-[325px] sm:w-[337px]"
          />

          <div>
            <h2 className="text-textColor font-semibold  text-[1.3rem] pt-14 sm:pt-0">
              the quick fox jumps over
            </h2>
            <div className="text-secondtextColor text-[0.875rem] max-w-[18.6rem] sm:max-w-80 mt-6 space-y-3">
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met
              </p>
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met
              </p>
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met
              </p>
            </div>
          </div>

          <div className="text-secondtextColor  text-[0.875rem] font-semibold space-y-5">
            <h2 className="text-textColor font-semibold  text-[1.3rem] pb-2 pt-14 sm:pt-0">
              the quick fox jumps over
            </h2>
            <div className="flex gap-x-3 items-center">
              <Image
                src={"/images/icons/right-arrow-product-icon.png"}
                alt="Card-item"
                width={8.62}
                height={16}
                className="w-[0.5rem]"
              />
              <p className="text-[#737373] ">the quick fox jumps over the lazy dog</p>
            </div>
            <div className="flex gap-x-3 items-center">
              <Image
                src={"/images/icons/right-arrow-product-icon.png"}
                alt="Card-item"
                width={8.62}
                height={16}
                className="w-[0.5rem]"
              />
              <p className="text-[#737373] ">the quick fox jumps over the lazy dog</p>
            </div>
            <div className="flex gap-x-3 items-center">
              <Image
                src={"/images/icons/right-arrow-product-icon.png"}
                alt="Card-item"
                width={8.62}
                height={16}
                className="w-[0.5rem]"
              />
              <p className="text-[#737373] ">the quick fox jumps over the lazy dog</p>
            </div>
            <div className="flex gap-x-3 items-center">
              <Image
                src={"/images/icons/right-arrow-product-icon.png"}
                alt="Card-item"
                width={8.62}
                height={16}
                className="w-[0.5rem]"
              />
              <p className="text-[#737373]">the quick fox jumps over the lazy dog</p>
            </div>
            <div className="text-secondtextColor text-[0.875rem] font-semibold space-y-4">
              <h2 className="text-textColor font-semibold  text-[1.3rem] pb-2">
                the quick fox jumps over
              </h2>
              <div className="flex gap-x-3 items-center">
                <Image
                  src={"/images/icons/right-arrow-product-icon.png"}
                  alt="Card-item"
                  width={8.62}
                  height={16}
                  className="w-[0.5rem]"
                />
                <p className="text-[#737373] ">the quick fox jumps over the lazy dog</p>
              </div>
              <div className="flex gap-x-3 items-center">
                <Image
                  src={"/images/icons/right-arrow-product-icon.png"}
                  alt="Card-item"
                  width={8.62}
                  height={16}
                  className="w-[0.5rem]"
                />
                <p className="text-[#737373] ">the quick fox jumps over the lazy dog</p>
              </div>
              <div className="flex gap-x-3 items-center">
                <Image
                  src={"/images/icons/right-arrow-product-icon.png"}
                  alt="Card-item"
                  width={8.62}
                  height={16}
                  className="w-[0.5rem]"
                />
                <p className="text-[#737373]" >the quick fox jumps over the lazy dog</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;