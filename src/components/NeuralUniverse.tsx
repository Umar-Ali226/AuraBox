import Image from "next/image";

const Neuraluniverse = () => {
  return (
    <section className="container mx-auto">
      {/* --- FOR ( md ) --- */}
      <div className="hidden md:flex justify-center md:justify-around px-6 md:px-0 lg:px-32">
        <div>
          <Image
            src={"/images/productImages/summer-2020.png"}
            alt="Summer-2020"
            width={725}
            height={774}
            className="w-[20rem] md:w-[25rem]"
          />
        </div>
        <div className="max-w-md mt-16 md:mt-24 md:ml-6 space-y-4">
          <p className="text-sm font-semibold uppercase text-gray-400">
            Summer 2020
          </p>
          <h1 className="text-[#252B42] text-3xl md:text-4xl font-semibold leading-tight">
            Part of the Neural Universe
          </h1>
          <p className="text-[1rem] md:text-[1.1rem] text-[#737373] max-w-[20rem]">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex flex-col md:flex-row md:space-x-2 space-y-4 md:space-y-0">
            <button className="px-6 py-3 bg-[#2DC071] text-white font-semibold rounded-sm hover:bg-green-600 transition uppercase">
              Buy Now
            </button>
            <button className="px-6 py-3 border-2 border-[#2DC071] text-[#2DC071] hover:text-white font-semibold rounded-sm hover:bg-sucessColor transition uppercase">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* --- FOR ( sm & lg ) --- */}
      <div className="sm:flex md:hidden flex flex-col justify-center items-center">
        <div className="max-w-sm mt-16 space-y-4 text-center">
          <p className="text-sm font-semibold uppercase text-gray-400">
            Summer 2020
          </p>
          <h1 className="text-[#252B42] text-3xl font-semibold leading-tight">
            Part of the Neural Universe
          </h1>
          <p className="text-[1rem] text-[#737373] max-w-[18rem] mx-auto">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <button className="px-8 py-3 bg-[#2DC071] text-white font-semibold rounded-sm hover:bg-green-600 transition uppercase">
              Buy Now
            </button>
            <button className="px-8 py-3 border-2 border-[#2DC071] text-[#2DC071] hover:text-white font-semibold rounded-sm hover:bg-primary transition uppercase">
              Learn More
            </button>
          </div>
        </div>
        <div className="mt-8">
          <Image
            src={"/images/productImages/summer-2020.png"}
            alt="Summer-2020"
            width={725}
            height={774}
            className="w-[18rem] sm:w-[22rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Neuraluniverse;