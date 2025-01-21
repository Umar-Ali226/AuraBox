import Nav from "@/components/Nav";
import TopHeader from "@/components/TopHeader";
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";

// Initialize Sanity Client
const sanity = sanityClient({
  projectId: "itewl73m",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

// Configure Image Builder
const builder = imageUrlBuilder(sanity);
function urlFor(source: { asset: { _ref: string } }) {
  return builder.image(source);
}

interface PageProps {
  params: { id: string };
}

// Metadata generation
export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;

  if (!id) {
    return { title: "Product Not Found" };
  }

  const query = `
    *[_type == "product" && _id == "${id}"][0]{
      title
    }
  `;
  const product = await sanity.fetch(query);

  return product ? { title: product.title } : { title: "Product Not Found" };
}

// Main product detail page component
export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;

  if (!id) {
    return <div>Product not found</div>;
  }

  const query = `
    *[_type == "product" && _id == "${id}"][0]{
      title,
      price,
      description,
      productImage,
      tags
    }
  `;
  const product = await sanity.fetch(query);

  if (!product) {
    return <div>Product not found</div>;
  }

  const truncateDescription = (description: string): string => {
    return description.length > 350 ? description.substring(0, 350) + "..." : description;
  };
console.log(params)
  return (
    <main>
      <TopHeader />
      <Nav />
      <div className="w-full bg-textgrayOne mt-3 h-[60rem] sm:h-[45rem] md:h-[36rem]">
        <div className="container mx-auto">
          {/* Breadcrumb */}
          <div className="flex justify-center sm:justify-normal items-center font-semibold text-sm space-x-3 ml-[0rem] md:ml-[1rem] lg:ml-[3.5rem] xl:ml-[5.5rem] 2xl:ml-[8.5rem] mb-2 pt-7 pb-6">
            <span className="text-[#252B42]">Home</span>
            <span>
              <Image
                src="/images/icons/shoprightarrow-icon.png"
                width={8.62}
                height={16}
                alt="Rightarrow-icon"
              />
            </span>
            <Link href="/shop">
              <span className="text-[#252B42]">Shop</span>
            </Link>
            <span>
              <Image
                src="/images/icons/shoprightarrow-icon.png"
                width={8.62}
                height={16}
                alt="Rightarrow-icon"
              />
            </span>
            <span className="text-[#737373]">Product Details</span>
          </div>

          {/* Product Details */}
          <div className="container mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-normal">
            {/* Product Image */}
            <div className="ml-[0rem] md:ml-[1rem] lg:ml-[3.5rem] xl:ml-[5.5rem] 2xl:ml-[8.5rem] relative">
              <Image
                src={urlFor(product.productImage?.asset?._ref).url() || "/placeholder.png"}
                alt={product.title || "Product Image"}
                className="w-[22rem] sm:w-[35rem] md:w-[45rem] lg:w-[25rem] rounded-sm"
                width={400}
                height={400}
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col space-y-3 max-w-md ml-5">
              <h1 className="text-[1.5rem] font-bold text-textColor">
                {product.title || "Product Title"}
              </h1>
              {/* Star Rating */}
              <div className="flex items-center gap-x-2">
                {[...Array(4)].map((_, index) => (
                  <Image
                    key={index}
                    src="/images/icons/star-1.png"
                    width={22}
                    height={22}
                    alt="Star"
                    className="w-[1.3rem]"
                  />
                ))}
                <Image
                  src="/images/icons/star-2.png"
                  width={22}
                  height={22}
                  alt="Half Star"
                  className="w-[1.3rem]"
                />
              </div>
              <p className="text-[#737373] text-sm font-semibold">10 Reviews</p>

              {/* Price and Availability */}
              <p className="font-semibold text-[1.5rem]">${product.price || "0.00"}</p>
              <div className="flex items-center space-x-2">
                <span className="text-[#737373] text-sm font-semibold">Availability:</span>
                <span className="text-[#23A6F0] text-sm font-semibold">In Stock</span>
              </div>

              {/* Description */}
              <p className="text-[#737373] text-sm">
                {truncateDescription(product.description)}
              </p>

              {/* Action Buttons */}
              <div className="flex space-x-4 mt-4">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-sm">
                  Add To Cart
                </button>
                <div className="flex space-x-2 items-center">
                  <button className="p-2 border rounded-full">
                    <FaHeart />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// import Nav from "@/components/Nav";
// import TopHeader from "@/components/TopHeader";
// import sanityClient from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";
// import Image from "next/image";
// import Link from "next/link";
// import { FaHeart } from "react-icons/fa6";

// // Initialize Sanity Client
// const sanity = sanityClient({
//   projectId: "itewl73m",
//   dataset: "production",
//   apiVersion: "2023-01-01",
//   useCdn: true,
// });

// // Configure Image Builder
// const builder = imageUrlBuilder(sanity);
// function urlFor(source: { asset: { _ref: string } }) {
//   return builder.image(source);
// }

// interface PageProps {
//   params: {
//     id: string;
//   };
// }

// // Metadata generation
// export async function generateMetadata({ params }: PageProps) {
//   const { id } = params;

//   if (!id) {
//     return { title: "Product Not Found" };
//   }

//   const query = `
//     *[_type == "product" && _id == "${id}"][0]{
//       title
//     }
//   `;
//   const product = await sanity.fetch(query);

//   return product ? { title: product.title } : { title: "Product Not Found" };
// }

// // Main product detail page component
// export default async function ProductDetailPage({ params }: PageProps) {
//   const { id } = params;

//   if (!id) {
//     return <div>Product not found</div>;
//   }

//   const query = `
//     *[_type == "product" && _id == "${id}"][0]{
//       title,
//       price,
//       description,
//       productImage,
//       tags
//     }
//   `;
//   const product = await sanity.fetch(query);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   const truncateDescription = (description: string): string => {
//     return description.length > 350 ? description.substring(0, 350) + "..." : description;
//   };

//   return (
//     <main>
//       <TopHeader />
//       <Nav />
//       <div className="w-full bg-textgrayOne mt-3 h-[60rem] sm:h-[45rem] md:h-[36rem]">
//         <div className="container mx-auto">
//           {/* Breadcrumb */}
//           <div className="flex justify-center sm:justify-normal items-center font-semibold text-sm space-x-3 ml-[0rem] md:ml-[1rem] lg:ml-[3.5rem] xl:ml-[5.5rem] 2xl:ml-[8.5rem] mb-2 pt-7 pb-6">
//             <span className="text-[#252B42]">Home</span>
//             <span>
//               <Image
//                 src="/images/icons/shoprightarrow-icon.png"
//                 width={8.62}
//                 height={16}
//                 alt="Rightarrow-icon"
//               />
//             </span>
//             <Link href="/shop">
//               <span className="text-[#252B42]">Shop</span>
//             </Link>
//             <span>
//               <Image
//                 src="/images/icons/shoprightarrow-icon.png"
//                 width={8.62}
//                 height={16}
//                 alt="Rightarrow-icon"
//               />
//             </span>
//             <span className="text-[#737373]">Product Details</span>
//           </div>

//           {/* Product Details */}
//           <div className="container mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-normal">
//             {/* Product Image */}
//             <div className="ml-[0rem] md:ml-[1rem] lg:ml-[3.5rem] xl:ml-[5.5rem] 2xl:ml-[8.5rem] relative">
//               <Image
//                 src={urlFor(product.productImage?.asset?._ref).url() || "/placeholder.png"}
//                 alt={product.title || "Product Image"}
//                 className="w-[22rem] sm:w-[35rem] md:w-[45rem] lg:w-[25rem] rounded-sm"
//                 width={400}
//                 height={400}
//               />
//             </div>

//             {/* Product Info */}
//             <div className="flex flex-col space-y-3 max-w-md ml-5">
//               <h1 className="text-[1.5rem] font-bold text-textColor">
//                 {product.title || "Product Title"}
//               </h1>
//               {/* Star Rating */}
//               <div className="flex items-center gap-x-2">
//                 {[...Array(4)].map((_, index) => (
//                   <Image
//                     key={index}
//                     src="/images/icons/star-1.png"
//                     width={22}
//                     height={22}
//                     alt="Star"
//                     className="w-[1.3rem]"
//                   />
//                 ))}
//                 <Image
//                   src="/images/icons/star-2.png"
//                   width={22}
//                   height={22}
//                   alt="Half Star"
//                   className="w-[1.3rem]"
//                 />
//               </div>
//               <p className="text-[#737373] text-sm font-semibold">10 Reviews</p>

//               {/* Price and Availability */}
//               <p className="font-semibold text-[1.5rem]">${product.price || "0.00"}</p>
//               <div className="flex items-center space-x-2">
//                 <span className="text-[#737373] text-sm font-semibold">Availability:</span>
//                 <span className="text-[#23A6F0] text-sm font-semibold">In Stock</span>
//               </div>

//               {/* Description */}
//               <p className="text-[#737373] text-sm">
//                 {truncateDescription(product.description)}
//               </p>

//               {/* Action Buttons */}
//               <div className="flex space-x-4 mt-4">
//                 <button className="bg-blue-500 text-white px-6 py-2 rounded-sm">
//                   Add To Cart
//                 </button>
//                 <div className="flex space-x-2 items-center">
//                   <button className="p-2 border rounded-full">
//                     <FaHeart />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }
// import Nav from "@/components/Nav";
// import TopHeader from "@/components/TopHeader";
// import sanityClient from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";
// import Image from "next/image";
// import Link from "next/link";
// import { FaHeart } from "react-icons/fa6";

// // Initialize Sanity Client
// const sanity = sanityClient({
//   projectId: "itewl73m",
//   dataset: "production",
//   apiVersion: "2023-01-01",
//   useCdn: true,
// });

// // Configure Image Builder
// const builder = imageUrlBuilder(sanity);
// function urlFor(source: { asset: { _ref: string}}) {
//   return builder.image(source);
// }

// // type PageParams = {
// //   params: {
// //     id: string;
// //   };
// // };
// interface Pageprops {
//   params: Partial<{
//     id:string;
//   }>;
// }
// // Metadata generation
// export async function generateMetadata({ params }: Pageprops) {
//   const { id } = await params;

//   if (!id) {
//     return { title: "Product Not Found" };
//   }

//   const query = `
//     *[_type == "product" && _id == "${id}"][0]{
//       title
//     }
//   `;
//   const product = await sanity.fetch(query);

//   return product ? { title: product.title } : { title: "Product Not Found" };
// }

// // Main product detail page component
// export default async function ProductDetailPage({ params }: Pageprops) {
//   const { id } = await params;

//   if (!id) {
//     return <div>Product not found</div>;
//   }

//   const query = `
//     *[_type == "product" && _id == "${id}"][0]{
//       title,
//       price,
//       description,
//       productImage,
//       tags
//     }
//   `;
//   const product = await sanity.fetch(query);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   const truncateDescription = (description: string): string => {
//     return description.length > 350 ? description.substring(0, 350) + "..." : description;
//   };

//   return (
//     <main>
//       <TopHeader />
//       <Nav />
//       <div className="w-full bg-textgrayOne mt-3 h-[60rem] sm:h-[45rem] md:h-[36rem]">
//         <div className="container mx-auto">
//           {/* Breadcrumb */}
//           <div className="flex justify-center sm:justify-normal items-center font-semibold text-sm space-x-3 ml-[0rem] md:ml-[1rem] lg:ml-[3.5rem] xl:ml-[5.5rem] 2xl:ml-[8.5rem] mb-2 pt-7 pb-6">
//             <span className="text-[#252B42]">Home</span>
//             <span>
//               <Image
//                 src="/images/icons/shoprightarrow-icon.png"
//                 width={8.62}
//                 height={16}
//                 alt="Rightarrow-icon"
//               />
//             </span>
//             <Link href="/shop">
//               <span className="text-[#252B42]">Shop</span>
//             </Link>
//             <span>
//               <Image
//                 src="/images/icons/shoprightarrow-icon.png"
//                 width={8.62}
//                 height={16}
//                 alt="Rightarrow-icon"
//               />
//             </span>
//             <span className="text-[#737373]">Product Details</span>
//           </div>

//           {/* Product Details */}
//           <div className="container mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-normal">
//             {/* Product Image */}
//             <div className="ml-[0rem] md:ml-[1rem] lg:ml-[3.5rem] xl:ml-[5.5rem] 2xl:ml-[8.5rem] relative">
//               <Image
//                 src={urlFor(product.productImage?.asset?._ref).url() || "/placeholder.png"}
//                 alt={product.title || "Product Image"}
//                 className="w-[22rem] sm:w-[35rem] md:w-[45rem] lg:w-[25rem] rounded-sm"
//                 width={400}
//                 height={400}
//               />
//             </div>

//             {/* Product Info */}
//             <div className="flex flex-col space-y-3 max-w-md ml-5">
//               <h1 className="text-[1.5rem] font-bold text-textColor">
//                 {product.title || "Product Title"}
//               </h1>
//               {/* Star Rating */}
//               <div className="flex items-center gap-x-2">
//                 {[...Array(4)].map((_, index) => (
//                   <Image
//                     key={index}
//                     src="/images/icons/star-1.png"
//                     width={22}
//                     height={22}
//                     alt="Star"
//                     className="w-[1.3rem]"
//                   />
//                 ))}
//                 <Image
//                   src="/images/icons/star-2.png"
//                   width={22}
//                   height={22}
//                   alt="Half Star"
//                   className="w-[1.3rem]"
//                 />
//               </div>
//               <p className="text-[#737373] text-sm font-semibold">10 Reviews</p>

//               {/* Price and Availability */}
//               <p className="font-semibold text-[1.5rem]">${product.price || "0.00"}</p>
//               <div className="flex items-center space-x-2">
//                 <span className="text-[#737373] text-sm font-semibold">Availability:</span>
//                 <span className="text-[#23A6F0] text-sm font-semibold">In Stock</span>
//               </div>

//               {/* Description */}
//               <p className="text-[#737373] text-sm">
//                 {truncateDescription(product.description)}
//               </p>

//               {/* Action Buttons */}
//               <div className="flex space-x-4 mt-4">
//                 <button className="bg-blue-500 text-white px-6 py-2 rounded-sm">
//                   Add To Cart
//                 </button>
//                 <div className="flex space-x-2 items-center">
//                   <button className="p-2 border rounded-full">
//                     <FaHeart />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// import Nav from "@/components/Nav";
// import TopHeader from "@/components/TopHeader";
// import sanityClient from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";
// import Image from "next/image";
// import Link from "next/link";
// import { FaHeart } from "react-icons/fa6";

// // Initialize Sanity Client
// const sanity = sanityClient({
//   projectId: "itewl73m",
//   dataset: "production",
//   apiVersion: "2023-01-01",
//   useCdn: true,
// });

// // Configure Image Builder
// const builder = imageUrlBuilder(sanity);
// function urlFor(source: { asset: { _ref: string } }) {
//   return builder.image(source);
// }

// export async function generateMetadata({ params }: { params: { id: string }}) {
//   const { id } = await params;

//   // Fetch product data for metadata
//   const query = `
//     *[_type == "product" && _id == "${id}"][0]{
//       title
//     }
//   `;
//   const product = await sanity.fetch(query);

//   if (!product) {
//     return { title: "Product Not Found" };
//   }

//   return { title: product.title };
// }

// interface Product {
//   title: string;
//   price: number;
//   description: string;
//   productImage: { asset: { _ref: string } };
//   tags: string[];
// }

// export default async function ProductDetailPage({ params }: { params: { id: string | any | null} }) {
//   const { id } = await params;

//   // Fetch product details
//   const query = `
//     *[_type == "product" && _id == "${id}"][0]{
//       title,
//       price,
//       description,
//       productImage,
//       tags
//     }
//   `;
//   const product: Product = await sanity.fetch(query);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   const truncateDescription = (description: string): string => {
//     return description.length > 350 ? description.substring(0, 350) + "..." : description;
//   };

//   return (
//     <main>
//       <TopHeader />
//       <Nav />
//       <div className="w-full bg-textgrayOne mt-3 h-[60rem] sm:h-[45rem] md:h-[36rem]">
//         <div className="container mx-auto">
//           <div className="flex justify-center sm:justify-normal items-center font-semibold text-sm space-x-3 ml-[0rem] md:ml-[1rem] lg:ml-[3.5rem] xl:ml-[5.5rem] 2xl:ml-[8.5rem] mb-2 pt-7 pb-6">
//             {/* Breadcrumb */}
//             <div className="flex justify-center sm:justify-start items-center font-semibold text-sm space-x-3 mb-2 pt-7 pb-6">
//               <span className="text-[#252B42]">Home</span>
//               <span>
//                 <Image
//                   src="/images/icons/shoprightarrow-icon.png"
//                   width={8.62}
//                   height={16}
//                   alt="Rightarrow-icon"
//                 />
//               </span>
//               <Link href="/shop">
//                 <span className="text-[#252B42]">Shop</span>
//               </Link>
//               <span>
//                 <Image
//                   src="/images/icons/shoprightarrow-icon.png"
//                   width={8.62}
//                   height={16}
//                   alt="Rightarrow-icon"
//                 />
//               </span>
//               <span className="text-[#737373]">Product Details</span>
//             </div>
//           </div>

//           {/* Product Details */}
//           <div className="container mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-normal">
//             {/* Product Image */}
//             <div className="ml-[0rem] md:ml-[1rem] lg:ml-[3.5rem] xl:ml-[5.5rem] 2xl:ml-[8.5rem] relative">
//               <Image
//                 src={urlFor(product.productImage)?.url() || "/placeholder.png"}
//                 alt={product.title || "Product Image"}
//                 className="w-[22rem] sm:w-[35rem] md:w-[45rem] lg:w-[25rem] rounded-sm"
//                 width={400}
//                 height={400}
//               />
//             </div>

//             {/* Product Info */}
//             <div className="flex flex-col space-y-3 max-w-md ml-5">
//               <h1 className="text-[1.5rem] font-bold text-textColor">
//                 {product.title || "Product Title"}
//               </h1>
//               {/* Star Rating */}
//               <div className="flex items-center gap-x-2">
//                 {[...Array(4)].map((_, index) => (
//                   <Image
//                     key={index}
//                     src="/images/icons/star-1.png"
//                     width={22}
//                     height={22}
//                     alt="Star"
//                     className="w-[1.3rem]"
//                   />
//                 ))}
//                 <Image
//                   src="/images/icons/star-2.png"
//                   width={22}
//                   height={22}
//                   alt="Half Star"
//                   className="w-[1.3rem]"
//                 />
//               </div>
//               <p className="text-[#737373] text-sm font-semibold">10 Reviews</p>

//               {/* Price and Availability */}
//               <p className="font-semibold text-[1.5rem]">${product.price || "0.00"}</p>
//               <div className="flex items-center space-x-2">
//                 <span className="text-[#737373] text-sm font-semibold">Availability:</span>
//                 <span className="text-[#23A6F0] text-sm font-semibold">In Stock</span>
//               </div>

//               {/* Description */}
//               <p className="text-[#737373] text-sm">
//                 {truncateDescription(product.description)}
//               </p>

//               {/* Action Buttons */}
//               <div className="flex space-x-4 mt-4">
//                 <button className="bg-blue-500 text-white px-6 py-2 rounded-sm">
//                   Add To Cart
//                 </button>
//                 <div className="flex space-x-2 items-center">
//                   <button className="p-2 border rounded-full">
//                     <FaHeart />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }
