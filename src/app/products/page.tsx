"use client";
import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";

// Initialize Sanity Client
const sanity = sanityClient({
  projectId: "itewl73m",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

// Configure Image Builder
const builder = imageUrlBuilder(sanity);

// Typing for the image source parameter
function urlFor(source: { asset: { _ref: string } }) {
  return builder.image(source);
}

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage?: number;
  productImage: {
    asset: {
      _ref: string;
    };
  };
  tags: string[];
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const query = `
        *[_type == "product"]{
          _id,
          title,
          price,
          description,
          discountPercentage,
          productImage,
          tags
        }
      `;
      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error while fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="w-full h-auto mt-8">
      <div className="container mx-auto px-4 md:px-[5rem] lg:px-[10rem]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 gap-y-14 sm:gap-y-9">
          {products.map((product) => (
            <div key={product._id} className="flex flex-col items-center space-y-4">
              <Link href={`/productdetail/${product._id}`}>
                <div>
                  <Image
                    src={urlFor(product.productImage).url() || "/placeholder.png"}
                    alt={product.title || "Product Image"}
                    width={240}
                    height={300}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <div className="mt-4">
                    <h2 className="text-[1rem] font-semibold text-[#252B42]">{product.title}</h2>
                    <div className="flex justify-between items-center mt-4">
                      <div>
                        <p className="text-[#23856D] font-semibold">${product.price}</p>
                        {product.discountPercentage && (
                          <p className="text-[#23856D]">{product.discountPercentage}% OFF</p>
                        )}
                      </div>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {product.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-sm bg-slate-300 text-black px-2 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 hover:bg-blue-700">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;
// "use client";
// import React, { useEffect, useState } from "react";
// import sanityClient from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";
// import Image from "next/image";
// import Link from "next/link";

// // Initialize Sanity Client
// const sanity = sanityClient({
//   projectId: "itewl73m",
//   dataset: "production",
//   apiVersion: "2023-01-01",
//   useCdn: true,
// });

// // Configure Image Builder
// const builder = imageUrlBuilder(sanity);
// function urlFor(source: any) {
//   return builder.image(source);
// }

// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   description: string;
//   discountPercentage?: number;
//   productImage: {
//     asset: {
//       _ref: string;
//     };
//   };
//   tags: string[];
// }

// const ProductCards: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   const fetchProducts = async () => {
//     try {
//       const query = `
//         *[_type == "product"]{
//           _id,
//           title,
//           price,
//           description,
//           discountPercentage,
//           productImage,
//           tags
//         }
//       `;
//       const data = await sanity.fetch(query);
//       setProducts(data);
//     } catch (error) {
//       console.error("Error while fetching products:", error);
//     }
//   };

//   const truncateDescription = (description: string): string => {
//     return description.length > 50 ? description.substring(0, 50) + "..." : description;
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <section className="w-full h-auto mt-8">
//       <div className="container mx-auto px-4 md:px-[5rem] lg:px-[10rem]">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 gap-y-14 sm:gap-y-9">
//           {products.map((product) => (
//             <div key={product._id} className="flex flex-col items-center space-y-4">
//               <Link href={`/productdetail/${product._id}`}>
//                 <div>
//                   <Image
//                     src={urlFor(product.productImage?.asset?._ref).url() || "/placeholder.png"}
//                     alt={product.title || "Product Image"}
//                     width={240}
//                     height={300}
//                     className="w-full h-48 object-cover rounded-md"
//                   />
//                   <div className="mt-4">
//                     <h2 className="text-[1rem] font-semibold text-[#252B42]">{product.title}</h2>
//                     <div className="flex justify-between items-center mt-4">
//                       <div>
//                         <p className="text-[#23856D] font-semibold">${product.price}</p>
//                         {product.discountPercentage && (
//                           <p className="text-[#23856D]">{product.discountPercentage}% OFF</p>
//                         )}
//                       </div>
//                     </div>
//                     <div className="mt-2 flex flex-wrap gap-2">
//                       {product.tags.map((tag, index) => (
//                         <span
//                           key={index}
//                           className="text-sm bg-slate-300 text-black px-2 py-1"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                     <button className="mt-4 w-full bg-blue-600 text-white py-2 hover:bg-blue-700">
//                       Add To Cart
//                     </button>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductCards;
