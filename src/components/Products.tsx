'use client';

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
function urlFor(source: any) {
  return builder.image(source);
}

interface Product {
  _id: string;
  title: string;
  price: number;
  isNew: boolean;
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
  const [categories, setCategories] = useState<string[]>([]); // Category filter state
  const [priceRange, setPriceRange] = useState<string>(""); // Price range filter state
  const [selectedCategory, setSelectedCategory] = useState<string>(""); // Selected category
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>(""); // Selected price range

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;

  // Fetch categories
  const fetchCategories = async () => {
    const query = `*[_type == "category"]{title}`;
    const data = await sanity.fetch(query);
    setCategories(data.map((category: any) => category.title));
  };

  // Fetch products with filters
  const fetchProducts = async () => {
    try {
      const categoryFilter = selectedCategory ? `&& category == "${selectedCategory}"` : "";
      const priceFilter = selectedPriceRange
        ? `&& price >= ${selectedPriceRange.split("-")[0]} && price <= ${selectedPriceRange.split("-")[1]}`
        : "";

      const query = `*[_type == "product" ${categoryFilter} ${priceFilter}]{
        _id,
        title,
        price,
        isNew,
        description,
        discountPercentage,
        productImage,
        tags
      }`;

      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error while fetching products:", error);
    }
  };

  // Add item to cart function
  const addToCart = (product: Product) => {
    let cart = JSON.parse(localStorage.getItem('cart') || "[]");
    const existingProduct = cart.find((item: any) => item._id === product._id);

    if (existingProduct) {
      existingProduct.quantity += 1; // Increase quantity if product already in cart
    } else {
      cart.push({ ...product, quantity: 1 }); // Add new product to cart
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.title} has been added to the cart!`);
  };

  // Truncate description function
  const truncateDescription = (description: string): string => {
    return description.length > 50 ? description.substring(0, 50) + "..." : description;
  };

  // Fetch products and categories on mount
  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, [selectedCategory, selectedPriceRange]); // Dependency on selected category and price range

  // Calculate displayed products based on current page
  const displayedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle Next Page
  const handleNextPage = () => {
    if (currentPage < Math.ceil(products.length / itemsPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // Handle Previous Page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <section className="w-full h-auto mt-8">
      <div className="container mx-auto px-4 md:px-[5rem] lg:px-[10rem]">
        {/* Filter Section */}
        <div className="mb-4">
          <div className="flex gap-x-4 mb-5">
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-400 text-[0.875rem] rounded-md py-3 bg-lightbgColor pl-3 pr-6"
            >
              <option value="">Select Category</option>
              <option value="bed">Bed</option>
              <option value="sofa & chair">Sofa & Chair</option>
              <option value="decoration">Decoration</option>

              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {/* Price Range Filter */}
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="border border-gray-400 text-[0.875rem] rounded-md py-3 bg-lightbgColor pl-3 pr-6"
            >
              <option value="">Select Price Range</option>
              <option value="0-50">Under $50</option>
              <option value="50-100">$50 - $100</option>
              <option value="100-200">$100 - $200</option>
              <option value="200-500">$200 - $300</option>
              <option value="500-10000">Above $400</option>
            </select>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 gap-y-14 sm:gap-y-9">
          {displayedProducts.map((product) => (
            <div key={product._id} className="flex flex-col items-center space-y-4">
              <div>
                <Image
                  src={urlFor(product.productImage?.asset?._ref).url() || "/placeholder.png"}
                  alt={product.title || "Product Image"}
                  width={240}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="mt-4">
                  <Link href={`/productdetail/${product._id}`}>
                    <h2 className="text-[1rem] font-semibold text-[#252B42]">{product.title}</h2>
                  </Link>
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
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-4 w-full bg-blue-600 text-white py-2 hover:bg-blue-700"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-12 mb-4">
  {/* First Button */}
  <button
    onClick={() => setCurrentPage(1)}
    disabled={currentPage === 1}
    className={`px-[0.8rem] py-4 text-[0.785rem] text-gray-400 bg-paginationBg border-t-[0.1rem] border-l-[0.1rem] border-b-[0.1rem] border-gray-400 rounded-l-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 font-semibold ${
      currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
    }`}
  >
    First
  </button>

  {/* Dynamic Page Numbers */}
  {Array.from(
    { length: Math.ceil(products.length / itemsPerPage) },
    (_, i) => i + 1
  ).map((page) => (
    <button
      key={page}
      onClick={() => setCurrentPage(page)}
      className={`px-[0.8rem] py-4 text-[0.785rem] font-semibold ${
        currentPage === page
          ? "text-white bg-[#23A6F0]"
          : "text-[#23A6F0] bg-white hover:bg-blue-100"
      } border-t-[0.1rem] border-l-[0.1rem] border-b-[0.1rem] border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400`}
    >
      {page}
    </button>
  ))}

  {/* Next Button */}
  <button
    onClick={handleNextPage}
    disabled={currentPage === Math.ceil(products.length / itemsPerPage)}
    className={`px-[0.8rem] py-4 text-[0.785rem] font-semibold text-[#23A6F0] bg-white border-[0.1rem] border-gray-400 rounded-r-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
      currentPage === Math.ceil(products.length / itemsPerPage)
        ? "cursor-not-allowed opacity-50"
        : ""
    }`}
  >
    Next
  </button>
</div>

      </div>
    </section>
  );
};

export default ProductCards;

