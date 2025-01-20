'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import TopHeader from '@/components/TopHeader';
import MobileNavTwo from '@/components/MobNavTwo';
import Image from 'next/image';
import Footer from '@/components/Footer';

// Define the type for Cart Item
interface CartItem {
  _id: string;
  title: string;
  price: number;
  quantity: number;
  imageUrl?: string;
}

const CartPage = () => {
  const [cart, setCart] = useState<CartItem[]>([]);  // Updated state type

  // Fetch the cart from localStorage
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(cartData);
  }, []);

  // Remove item from cart
  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter((item) => item._id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Update quantity of an item
  const updateQuantity = (productId: string, quantity: number) => {
    const updatedCart = cart.map((item) => {
      if (item._id === productId) {
        item.quantity = quantity;
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <main>
      <TopHeader />
      <MobileNavTwo />
      <Header />
      <section className="w-full h-auto mt-8">
        <div className="container mx-auto">
          {/* --- HEADER SECTION --- */}
          <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-y-6 sm:gap-y-0">
            <h2 className="text-[1.3rem] text-[#252B42] font-semibold md:ml-7 xl:ml-24 2xl:ml-36 mt-11 sm:mt-5 mb-6">
              Cart
            </h2>
            <div className="flex items-center font-semibold text-sm space-x-3 md:mr-2 xl:mr-24 2xl:mr-36 mb-14 sm:mb-0">
              <span className="text-[#252B42]">Shop</span>
              <span>
                <Image
                  src={'/images/icons/shoprightarrow-icon.png'}
                  width={8.62}
                  height={16}
                  alt="Rightarrow-icon"
                />
              </span>
              <span className="text-gray-400">Cart</span>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-[5rem] lg:px-[10rem]">
          {cart.length === 0 ? (
            <div className="text-center text-xl font-semibold">
              Your cart is empty.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-7 gap-y-14 sm:gap-y-9">
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-col sm:flex-row items-center space-y-4 sm:space-x-6 sm:space-y-0"
                >
                  <div className="w-24 h-24 relative">
                    <Image
                      src={item.imageUrl || '/placeholder.png'}
                      alt={item.title || 'Product Image'}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full">
                    <div className="flex flex-col sm:flex-row sm:space-x-6">
                      <h2 className="text-[1rem] font-semibold text-[#252B42]">
                        {item.title}
                      </h2>
                      <p className="text-[#23856D] font-semibold">
                        ${item.price}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                      <button
                        onClick={() =>
                          updateQuantity(item._id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                        className="bg-gray-200 px-4 py-2 rounded-md"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(e) =>
                          updateQuantity(item._id, parseInt(e.target.value))
                        }
                        className="w-12 text-center border rounded-md"
                      />
                      <button
                        onClick={() =>
                          updateQuantity(item._id, item.quantity + 1)
                        }
                        className="bg-gray-200 px-4 py-2 rounded-md"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="mt-4 sm:mt-0 bg-red-600 text-white py-2 px-4 rounded-md"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-between items-center mt-6">
                <div className="text-xl font-semibold">
                  Total: ${calculateTotal()}
                </div>
                <Link
                  href="/checkout"
                  className="bg-blue-600 text-white py-2 px-6 rounded-md"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default CartPage;


// 'use client'
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import Header from '@/components/Header';
// import TopHeader from '@/components/TopHeader';
// import MobileNavTwo from '@/components/MobNavTwo';
// import Image from 'next/image';
// import Footer from '@/components/Footer';

// const CartPage = () => { 
//   const [cart, setCart] = useState<any[]>([]);

//   // Fetch the cart from localStorage
//   useEffect(() => {
//     const cartData = JSON.parse(localStorage.getItem('cart') || '[]');
//     setCart(cartData);
//   }, []);

//   // Remove item from cart
//   const removeFromCart = (productId: string) => {
//     const updatedCart = cart.filter((item) => item._id !== productId);
//     setCart(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   // Update quantity of an item
//   const updateQuantity = (productId: string, quantity: number) => {
//     const updatedCart = cart.map((item) => {
//       if (item._id === productId) {
//         item.quantity = quantity;
//       }
//       return item;
//     });
//     setCart(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   // Calculate total price
//   const calculateTotal = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
//   };

//   return (
//     <main>
//         <TopHeader />
//         <MobileNavTwo />
//         <Header />
//     <section className="w-full h-auto mt-8">
//         <div className="container mx-auto">
//                 {/* --- HEADER SECTION --- */}
//                 <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-y-6 sm:gap-y-0">
//                   <h2 className="text-[1.3rem] text-[#252B42] font-semibold md:ml-7 xl:ml-24 2xl:ml-36 mt-11 sm:mt-5 mb-6">
//                     Cart
//                   </h2>
//                   <div className="flex items-center font-semibold text-sm space-x-3 md:mr-2 xl:mr-24 2xl:mr-36 mb-14 sm:mb-0">
//                     <span className="text-[#252B42]">Shop</span>
//                     <span>
//                       <Image
//                         src={"/images/icons/shoprightarrow-icon.png"}
//                         width={8.62}
//                         height={16}
//                         alt="Rightarrow-icon"
//                       />
//                     </span>
//                     <span className="text-gray-400">Cart</span>
//                   </div>
//                 </div>
//                 </div>
//       <div className="container mx-auto px-4 md:px-[5rem] lg:px-[10rem]">
//         {cart.length === 0 ? (
//           <div className="text-center text-xl font-semibold">Your cart is empty.</div>
//         ) : (
//           <div className="grid grid-cols-1 gap-7 gap-y-14 sm:gap-y-9">
//             {cart.map((item) => (
//               <div key={item._id} className="flex flex-col sm:flex-row items-center space-y-4 sm:space-x-6 sm:space-y-0">
//                 <div className="w-24 h-24 relative">
//                   <Image
//                     src={item.imageUrl || '/placeholder.png'}
//                     alt={item.title}
//                     layout="fill"
//                     objectFit="cover"
//                   />
//                 </div>
//                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full">
//                   <div className="flex flex-col sm:flex-row sm:space-x-6">
//                     <h2 className="text-[1rem] font-semibold text-[#252B42]">{item.title}</h2>
//                     <p className="text-[#23856D] font-semibold">${item.price}</p>
//                   </div>
//                   <div className="flex items-center space-x-4 mt-4 sm:mt-0">
//                     <button
//                       onClick={() => updateQuantity(item._id, item.quantity - 1)}
//                       disabled={item.quantity <= 1}
//                       className="bg-gray-200 px-4 py-2 rounded-md"
//                     >
//                       -
//                     </button>
//                     <input
//                       type="number"
//                       value={item.quantity}
//                       min="1"
//                       onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
//                       className="w-12 text-center border rounded-md"
//                     />
//                     <button
//                       onClick={() => updateQuantity(item._id, item.quantity + 1)}
//                       className="bg-gray-200 px-4 py-2 rounded-md"
//                     >
//                       +
//                     </button>
//                   </div>
//                   <button
//                     onClick={() => removeFromCart(item._id)}
//                     className="mt-4 sm:mt-0 bg-red-600 text-white py-2 px-4 rounded-md"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//             <div className="flex justify-between items-center mt-6">
//               <div className="text-xl font-semibold">Total: ${calculateTotal()}</div>
//               <Link href="/checkout" className="bg-blue-600 text-white py-2 px-6 rounded-md">
//                 Proceed to Checkout
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//     <Footer />
//     </main>
//   );
// };

// export default CartPage;
// 'use client';

// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import Header from '@/components/Header';
// import TopHeader from '@/components/TopHeader';
// import MobileNavTwo from '@/components/MobNavTwo';
// import Image from 'next/image';

// const CartPage = () => {
//   const [cart, setCart] = useState<any[]>([]);

//   // Fetch the cart from localStorage
//   useEffect(() => {
//     const cartData = JSON.parse(localStorage.getItem('cart') || '[]');
//     setCart(cartData);
//   }, []);

//   // Remove item from cart
//   const removeFromCart = (productId: string) => {
//     const updatedCart = cart.filter((item) => item._id !== productId);
//     setCart(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   // Update quantity of an item
//   const updateQuantity = (productId: string, quantity: number) => {
//     const updatedCart = cart.map((item) => {
//       if (item._id === productId) {
//         item.quantity = quantity;
//       }
//       return item;
//     });
//     setCart(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   // Calculate total price
//   const calculateTotal = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
//   };

//   return (
//     <main>
//         <TopHeader />
//         <MobileNavTwo />
//         <Header />
//     <section className="w-full h-auto mt-8">
//         <div className="container mx-auto">
//                 {/* --- HEADER SECTION --- */}
//                 <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-y-6 sm:gap-y-0">
//                   <h2 className="text-[1.3rem] text-[#252B42] font-semibold md:ml-7 xl:ml-24 2xl:ml-36 mt-11 sm:mt-5 mb-6">
//                     Cart
//                   </h2>
//                   <div className="flex items-center font-semibold text-sm space-x-3 md:mr-2 xl:mr-24 2xl:mr-36 mb-14 sm:mb-0">
//                     <span className="text-[#252B42]">Shop</span>
//                     <span>
//                       <Image
//                         src={"/images/icons/shoprightarrow-icon.png"}
//                         width={8.62}
//                         height={16}
//                         alt="Rightarrow-icon"
//                       />
//                     </span>
//                     <span className="text-gray-400">Cart</span>
//                   </div>
//                 </div>
//                 </div>
//       <div className="container mx-auto px-4 md:px-[5rem] lg:px-[10rem]">
//         {cart.length === 0 ? (
//           <div className="text-center text-xl font-semibold">Your cart is empty.</div>
//         ) : (
//           <>
//             <div className="grid grid-cols-1 gap-7 gap-y-14 sm:gap-y-9">
//               {cart.map((item) => (
//                 <div key={item._id} className="flex flex-col sm:flex-row items-center space-y-4 sm:space-x-6 sm:space-y-0">
//                   <img
//                     src={item.productImage.url || '/placeholder.png'}
//                     alt={item.title}
//                     className="w-24 h-24 object-cover"
//                   />
//                   <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full">
//                     <div className="flex flex-col sm:flex-row sm:space-x-6">
//                       <h2 className="text-[1rem] font-semibold text-[#252B42]">{item.title}</h2>
//                       <p className="text-[#23856D] font-semibold">${item.price}</p>
//                     </div>
//                     <div className="flex items-center space-x-4 mt-4 sm:mt-0">
//                       <button
//                         onClick={() => updateQuantity(item._id, item.quantity - 1)}
//                         disabled={item.quantity <= 1}
//                         className="bg-gray-200 px-4 py-2 rounded-md"
//                       >
//                         -
//                       </button>
//                       <input
//                         type="number"
//                         value={item.quantity}
//                         min="1"
//                         onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
//                         className="w-12 text-center border rounded-md"
//                       />
//                       <button
//                         onClick={() => updateQuantity(item._id, item.quantity + 1)}
//                         className="bg-gray-200 px-4 py-2 rounded-md"
//                       >
//                         +
//                       </button>
//                     </div>
//                     <button
//                       onClick={() => removeFromCart(item._id)}
//                       className="mt-4 sm:mt-0 bg-red-600 text-white py-2 px-4 rounded-md"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="flex justify-between items-center mt-6">
//               <div className="text-xl font-semibold">Total: ${calculateTotal()}</div>
//               <Link href="/checkout" className="bg-blue-600 text-white py-2 px-6 rounded-md">
//                 Proceed to Checkout
//               </Link>
//             </div>
//           </>
//         )}
//       </div>
//     </section>
//     </main>
//   );
// };
// export default CartPage;
