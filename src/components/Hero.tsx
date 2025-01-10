import React from "react";

const Hero = () => {
  return (
    <section className="container mx-auto">
      {/* --- HERO SECTION ( DESKTOP ) --- */}
      <div className="relative bg-[url('../../public/shop-now.jpeg')] bg-cover bg-top h-[39rem] hidden sm:flex items-center -mt-4 px-6 md:px-12 lg:px-40">
        {/* --- CONTENT CONTAINER --- */}
        <div className="text-white max-w-lg md:max-w-2xl mt-24 space-y-6">
             <p className="text-lg font-semibold uppercase">Summer 2020</p>
           <h1 className="text-6xl uppercase font-semibold leading-tight">
            New Collection </h1>
          <p className="text-lg font-bold max-w-lg text-lighttextGray1">
            We know how large objects will act, <br /> but things on a small scale. </p>
          
          <button className="mt-6 px-10 py-4  bg-green-400 text-white font-semibold rounded-sm hover:bg-green-600 transition">
            Shop Now </button>
        </div>
      </div>

      {/* --- HERO SECTION ( MOBILE ) --- */}
      <div className="relative bg-[url('../../public/shop-now.jpeg')] bg-cover bg-top h-[39rem] flex sm:hidden items-center mt-20 px-0">
        {/* --- CONTENT CONTAINER --- */}
        <div className="text-white max-w-lg mt-32 space-y-6 text-center">
          <p className="text-sm font-semibold uppercase">Summer 2020</p>
          <h1 className="text-3xl max-w-sm uppercase font-semibold leading-tight">
            New Collection </h1>
          <p className="text-sm max-w-xs text-lighttextGray1">
            We know how large objects will act, but things on a small scale. </p>
         <button className="mt-6 px-8 py-3 bg-green-400 text-white font-semibold rounded-sm hover:bg-green-600 transition">
            Shop Now </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;