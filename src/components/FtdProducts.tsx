import Image from "next/image";

const FeaturedProducts = () => {
  // DEFINE PRODUCT DATA WITH INDIVIDUAL COLORS
  const products = [
    {
      // Each product has unique attributes
      id: 1,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      image: "/images/productImages/product-1.png",
      colors: [
        // Array of color options with a name and CSS class
        { name: "Sky Blue", colorClass: "bg-[#23A6F0]" },
        { name: "Green", colorClass: "bg-[#23856D]" },
        { name: "Orange", colorClass: "bg-[#E77C40]" },
        { name: "Sky Blue", colorClass: "bg-[#252B42]" },
      ],
    },
    {
      // EACH PRODUCT HAVE UNIQUE ATTRIBUTE
      id: 2,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      image: "/images/productImages/product-2.png",
      colors: [
        { name: "Sky Blue", colorClass: "bg-[#23A6F0]" },
        { name: "Green", colorClass: "bg-[#23856D]" },
        { name: "Orange", colorClass: "bg-[#E77C40]" },
        { name: "Sky Blue", colorClass: "bg-[#252B42]" },
      ],
    },
    {
      id: 3,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      image: "/images/productImages/product-3.png",
      colors: [
        { name: "Sky Blue", colorClass: "bg-[#23A6F0]" },
        { name: "Green", colorClass: "bg-[#23856D]" },
        { name: "Orange", colorClass: "bg-[#E77C40]" },
        { name: "Sky Blue", colorClass: "bg-[#252B42]" },
      ],
    },
    {
      id: 4,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      image: "/images/productImages/product-4.png",
      colors: [
        { name: "Sky Blue", colorClass: "bg-[#23A6F0]" },
        { name: "Green", colorClass: "bg-[#23856D]" },
        { name: "Orange", colorClass: "bg-[#E77C40]" },
        { name: "Sky Blue", colorClass: "bg-[#252B42]" },
      ],
    },
    {
      id: 5,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      image: "/images/productImages/product-5.png",
      colors: [
        { name: "Sky Blue", colorClass: "bg-[#23A6F0]" },
        { name: "Green", colorClass: "bg-[#23856D]" },
        { name: "Orange", colorClass: "bg-[#E77C40]" },
        { name: "Sky Blue", colorClass: "bg-[#252B42]" },
      ],
    },
    {
      id: 6,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      image: "/images/productImages/product-6.png",
      colors: [
        { name: "Sky Blue", colorClass: "bg-[#23A6F0]" },
        { name: "Green", colorClass: "bg-[#23856D]" },
        { name: "Orange", colorClass: "bg-[#E77C40]" },
        { name: "Sky Blue", colorClass: "bg-[#252B42]" },
      ],
    },
    {
      id: 7,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      image: "/images/productImages/product-7.png",
      colors: [
        { name: "Sky Blue", colorClass: "bg-[#23A6F0]" },
        { name: "Green", colorClass: "bg-[#23856D]" },
        { name: "Orange", colorClass: "bg-[#E77C40]" },
        { name: "Sky Blue", colorClass: "bg-[#252B42]" },
      ],
    },
    {
      id: 8,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      image: "/images/productImages/product-8.png",
      colors: [
        { name: "Sky Blue", colorClass: "bg-[#23A6F0]" },
        { name: "Green", colorClass: "bg-[#23856D]" },
        { name: "Orange", colorClass: "bg-[#E77C40]" },
        { name: "Sky Blue", colorClass: "bg-[#252B42]" },
      ],
    },
  ];

  return (
    <section className="w-full h-auto">
      {/* --- MAIN CONTAINER FOR COMPONENT */}
      <div className="container mx-auto px-4 md:px-[5rem] lg:px-[10rem]">
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col items-center justify-center space-y-[0.3rem] mb-8 mx-20 text-center">
          <p className="text-[#737373] font-normal text-[0.950rem]">
            Featured Products
          </p>
          <h2 className="font-bold text-[#252B42] text-[1.1rem]">
            BEST SELLER PRODUCTS
          </h2>
          <p className="text-[#737373] text-[0.950rem] font-normal">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>
        {/* --- PRODUCTS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 gap-y-14 sm:gap-y-9">
          {products.map((product) => (
            // EACH PRODUCT CARD
            <div
              key={product.id}
              className="flex flex-col items-center space-y-4"
            >
              {/* --- PRODUCT IMAGE --- */}
              <Image
                src={product.image}
                width={239}
                height={437}
                alt={product.name}
                className="w-80"
              />
              {/* --- PRODUCT NAME --- */}
              <p className="text-[1rem] font-semibold text-[#252B42]">
                {product.name}
              </p>
              {/* --- DEPARTMENT NAME --- */}
              <p className="text-[#737373] font-semibold text-[0.875rem]">
                {product.department}
              </p>
              {/* --- PRICING SECTION --- */}
              <div className="font-semibold text-[1rem] space-x-3">
                <span className="text-gray-400">{product.price}</span>
                <span className="text-[#23856D]">{product.price}</span>
              </div>
              {/* --- PRODUCT COLORS --- */}
              <div className="flex space-x-3 mt-2">
                {product.colors.map((color, index) => (
                  // COLOR INDICATE CIRCLES 
                  <div
                    key={index}
                    title={color.name}
                    className={`${color.colorClass} w-5 h-5 rounded-full cursor-pointer border-2 border-transparent hover:border-gray-400 transition`}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;