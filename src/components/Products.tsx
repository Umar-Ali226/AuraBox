import Image from "next/image";
import Pagination from "./Pagination";

const Products = () => {
  // DEFINES PRODUCT DATA WITH INDIVIDUAL COLORS
  const products = [
    {
      id: 1,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      image: "/images/productImages/product-six.png",
      colors: [
        { name: "Sky Blue", colorClass: "bg-[#23A6F0]" },
        { name: "Green", colorClass: "bg-[#23856D]" },
        { name: "Orange", colorClass: "bg-[#E77C40]" },
        { name: "Sky Blue", colorClass: "bg-[#252B42]" },
      ],
    },
    {
      id: 2,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      pricetwo: "$16.48",
      image: "/images/productImages/product-seven.png",
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
      pricetwo: "$16.48",
      image: "/images/productImages/product-one.png",
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
      pricetwo: "$16.48",
      image: "/images/productImages/product.png",
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
      pricetwo: "$16.48",
      image: "/images/productImages/product-two.png",
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
      pricetwo: "$16.48",
      image: "/images/productImages/product-three.png",
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
      pricetwo: "$16.48",
      image: "/images/productImages/product-four.png",
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
      pricetwo: "$16.48",
      image: "/images/productImages/product-eight.png",
      colors: [
        { name: "Sky Blue", colorClass: "bg-[#23A6F0]" },
        { name: "Green", colorClass: "bg-[#23856D]" },
        { name: "Orange", colorClass: "bg-[#E77C40]" },
        { name: "Sky Blue", colorClass: "bg-[#252B42]" },
      ],
    },
    {
      id: 9,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      pricetwo: "$16.48",
      image: "/images/productImages/product-nine.png",
      colors: [
        { name: "Sky Blue", colorClass: "bg-[#23A6F0]" },
        { name: "Green", colorClass: "bg-[#23856D]" },
        { name: "Orange", colorClass: "bg-[#E77C40]" },
        { name: "Sky Blue", colorClass: "bg-[#252B42]" },
      ],
    },
    {
      id: 10,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      pricetwo: "$16.48",
      image: "/images/productImages/product-ten.png",
      colors: [
        { name: "Sky Blue", colorClass: "bg-[#23A6F0]" },
        { name: "Green", colorClass: "bg-[#23856D]" },
        { name: "Orange", colorClass: "bg-[#E77C40]" },
        { name: "Sky Blue", colorClass: "bg-[#252B42]" },
      ],
    },
    {
      id: 11,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      pricetwo: "$16.48",
      image: "/images/productImages/product-eleven.png",
      colors: [
        { name: "Sky Blue", colorClass: "bg-[#23A6F0]" },
        { name: "Green", colorClass: "bg-[#23856D]" },
        { name: "Orange", colorClass: "bg-[#E77C40]" },
        { name: "Sky Blue", colorClass: "bg-[#252B42]" },
      ],
    },
    {
      id: 12,
      name: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      pricetwo: "$16.48",
      image: "/images/productImages/product-twelve.png",
      colors: [
        { name: "Sky Blue", colorClass: "bg-[#23A6F0]" },
        { name: "Green", colorClass: "bg-[#23856D]" },
        { name: "Orange", colorClass: "bg-[#E77C40]" },
        { name: "Sky Blue", colorClass: "bg-[#252B42]" },
      ],
    },
  ];

  return (
    <section className="w-full h-auto mt-8">
      <div className="container mx-auto px-4 md:px-[5rem] lg:px-[10rem]">
        {/* --- PRODUCTS --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 gap-y-14 sm:gap-y-9">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center space-y-4"
            >
              {/* --- PRODUCT IMAGES --- */}
              <Image
                src={product.image}
                width={240}
                height={300}
                alt={product.name}
                className="w-80"
              />
              {/* --- PRODUCT NAMES --- */}
              <p className="text-[1rem] font-semibold text-[#252B42]">
                {product.name}
              </p>
              <p className="text-[#737373] font-semibold text-[0.875rem]">
                {product.department}
              </p>
              <div className="font-semibold text-[1rem] space-x-3">
                <span className="text-gray-400">{product.price}</span>
                <span className="text-[#23856D]">{product.price}</span>
              </div>
              {/* --- PRODUCT COLORS --- */}
              <div className="flex space-x-3 mt-2">
                {product.colors.map((color, index) => (
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
        <Pagination />
      </div>
    </section>
  );
};

export default Products;