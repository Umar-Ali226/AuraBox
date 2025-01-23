'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TopHeader from '@/components/TopHeader';
import MobileNavTwo from '@/components/MobNavTwo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Define types for cart item
interface CartItem {
  _id: string;
  title: string;
  price: number;
  quantity: number;
  productImage?: {
    url: string;
  };
}

// Define types for billing details
interface BillingDetails {
  name: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
}

const CheckoutPage = () => {
  const [cart, setCart] = useState<CartItem[]>([]); // Typed cart state
  const [billingDetails, setBillingDetails] = useState<BillingDetails>({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
  });

  // Fetch the cart from localStorage
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(cartData);
  }, []);

  // Handle form input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBillingDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Handle checkout form submission
  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(billingDetails).some((field) => field === '')) {
      alert('Please fill out all billing details');
      return;
    }
    // Process the checkout (e.g., send data to server)
    console.log('Order submitted:', billingDetails);
    console.log('Cart items:', cart);
    // You can redirect to a confirmation page or payment gateway here
  };

  return (
    <main>
      <div className="hidden sm:flex"><TopHeader /></div>
      <MobileNavTwo />
      <Header />
      <section className="w-full h-auto mt-8">
        <div className="container mx-auto">
          {/* --- HEADER SECTION --- */}
          <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-y-6 sm:gap-y-0">
            <h2 className="text-[1.3rem] text-[#252B42] font-semibold md:ml-7 xl:ml-24 2xl:ml-36 mt-11 sm:mt-5 mb-6">
              Checkout
            </h2>
            <div className="flex items-center font-semibold text-sm space-x-3 md:mr-2 xl:mr-24 2xl:mr-36 mb-14 sm:mb-0">
              <span className="text-[#252B42]">Shop</span>
              <span>
                <Image
                  src={"/images/icons/shoprightarrow-icon.png"}
                  width={8.62}
                  height={16}
                  alt="Rightarrow-icon"
                />
              </span>
              <Link href="/shop"><span className="text-[#252B42]">Cart</span></Link>
              <span>
                <Image
                  src={"/images/icons/shoprightarrow-icon.png"}
                  width={8.62}
                  height={16}
                  alt="Rightarrow-icon"
                />
              </span>
              <span className="text-gray-400">Checkout</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-[5rem] lg:px-[10rem]">
          {cart.length === 0 ? (
            <div className="text-center text-xl font-semibold">Your cart is empty. Add items to cart first.</div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 gap-y-14 sm:gap-y-9">
                {/* Order Summary */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">Order Summary</h2>
                  <div>
                    {cart.map((item) => (
                      <div key={item._id} className="flex justify-between items-center border-b py-2">
                        <div className="flex items-center space-x-4">
                          <Image
                            src={item.productImage?.url || '/placeholder.png'}
                            alt={item.title}
                            width={48}
                            height={48}
                            className="w-12 h-12 object-cover"
                          />
                          <div>
                            <p>{item.title}</p>
                            <p className="text-sm text-gray-500">x {item.quantity}</p>
                          </div>
                        </div>
                        <p className="font-semibold">${item.price * item.quantity}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center py-2 mt-4">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">${calculateTotal()}</span>
                  </div>
                </div>

                {/* Billing Details Form */}
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>
                  <form onSubmit={handleCheckout} className="space-y-4">
                    <div>
                      <label className="block text-lg font-medium" htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={billingDetails.name}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 border border-gray-400 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-lg font-medium" htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={billingDetails.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 border border-gray-400 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-lg font-medium" htmlFor="address">Address</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={billingDetails.address}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 border border-gray-400 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-lg font-medium" htmlFor="city">City</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={billingDetails.city}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 border border-gray-400 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-lg font-medium" htmlFor="zipCode">Zip Code</label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={billingDetails.zipCode}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 border border-gray-400 rounded-md"
                      />
                    </div>
                    <div className="flex justify-between mt-6">
                      <Link href="/order-confirmed">
                        <button
                          type="submit"
                          className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700"
                        >
                          Place Order
                        </button>
                      </Link>
                      <Link href="/cart" className="text-blue-600 hover:text-blue-700">
                        Back to Cart
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default CheckoutPage;
// 'use client';

// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import TopHeader from '@/components/TopHeader';
// import MobileNavTwo from '@/components/MobNavTwo';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// const CheckoutPage = () => {
//   const [cart, setCart] = useState<any[]>([]);
//   const [billingDetails, setBillingDetails] = useState({
//     name: '',
//     email: '',
//     address: '',
//     city: '',
//     zipCode: '',
//   });

//   // Fetch the cart from localStorage
//   useEffect(() => {
//     const cartData = JSON.parse(localStorage.getItem('cart') || '[]');
//     setCart(cartData);
//   }, []);

//   // Handle form input change
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setBillingDetails((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Calculate total price
//   const calculateTotal = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
//   };

//   // Handle checkout form submission
//   const handleCheckout = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (Object.values(billingDetails).some((field) => field === '')) {
//       alert('Please fill out all billing details');
//       return;
//     }
//     // Process the checkout (e.g., send data to server)
//     console.log('Order submitted:', billingDetails);
//     console.log('Cart items:', cart);
//     // You can redirect to a confirmation page or payment gateway here
//   };

//   return (
//     <main>
//         <TopHeader />
//         <MobileNavTwo />
//         <Header />
//     <section className="w-full h-auto mt-8">
//         <div className="container mx-auto">
//                         {/* --- HEADER SECTION --- */}
//                         <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-y-6 sm:gap-y-0">
//                           <h2 className="text-[1.3rem] text-[#252B42] font-semibold md:ml-7 xl:ml-24 2xl:ml-36 mt-11 sm:mt-5 mb-6">
//                             Checkout
//                           </h2>
//                           <div className="flex items-center font-semibold text-sm space-x-3 md:mr-2 xl:mr-24 2xl:mr-36 mb-14 sm:mb-0">
//                             <span className="text-[#252B42]">Shop</span>
//                             <span>
//                               <Image
//                                 src={"/images/icons/shoprightarrow-icon.png"}
//                                 width={8.62}
//                                 height={16}
//                                 alt="Rightarrow-icon"
//                               />
//                             </span>
//                             <span className="text-[#252B42]">Cart</span>
//                             <span>
//                               <Image
//                                 src={"/images/icons/shoprightarrow-icon.png"}
//                                 width={8.62}
//                                 height={16}
//                                 alt="Rightarrow-icon"
//                               />
//                             </span>
//                             <span className="text-gray-400">Checkout</span>
//                           </div>
//                         </div>
//                         </div>
//       <div className="container mx-auto px-4 md:px-[5rem] lg:px-[10rem]">
//         {cart.length === 0 ? (
//           <div className="text-center text-xl font-semibold">Your cart is empty. Add items to cart first.</div>
//         ) : (
//           <>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 gap-y-14 sm:gap-y-9">
//               {/* Order Summary */}
//               <div className="space-y-4">
//                 <h2 className="text-2xl font-semibold">Order Summary</h2>
//                 <div>
//                   {cart.map((item) => (
//                     <div key={item._id} className="flex justify-between items-center border-b py-2">
//                       <div className="flex items-center space-x-4">
//                         <img
//                           src={item.productImage?.url || '/placeholder.png'}
//                           alt={item.title}
//                           className="w-12 h-12 object-cover"
//                         />
//                         <div>
//                           <p>{item.title}</p>
//                           <p className="text-sm text-gray-500">x {item.quantity}</p>
//                         </div>
//                       </div>
//                       <p className="font-semibold">${item.price * item.quantity}</p>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="flex justify-between items-center py-2 mt-4">
//                   <span className="font-semibold">Total</span>
//                   <span className="font-semibold">${calculateTotal()}</span>
//                 </div>
//               </div>

//               {/* Billing Details Form */}
//               <div>
//                 <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>
//                 <form onSubmit={handleCheckout} className="space-y-4">
//                   <div>
//                     <label className="block text-lg font-medium" htmlFor="name">Full Name</label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={billingDetails.name}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full p-2 border border-gray-400 rounded-md"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-lg font-medium" htmlFor="email">Email Address</label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={billingDetails.email}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full p-2 border border-gray-400 rounded-md"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-lg font-medium" htmlFor="address">Address</label>
//                     <input
//                       type="text"
//                       id="address"
//                       name="address"
//                       value={billingDetails.address}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full p-2 border border-gray-400 rounded-md"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-lg font-medium" htmlFor="city">City</label>
//                     <input
//                       type="text"
//                       id="city"
//                       name="city"
//                       value={billingDetails.city}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full p-2 border border-gray-400 rounded-md"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-lg font-medium" htmlFor="zipCode">Zip Code</label>
//                     <input
//                       type="text"
//                       id="zipCode"
//                       name="zipCode"
//                       value={billingDetails.zipCode}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full p-2 border border-gray-400 rounded-md"
//                     />
//                   </div>
//                   <div className="flex justify-between mt-6">
//                     <Link href="/order-confirmed">
//                     <button
//                       type="submit"
//                       className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700"
//                     >
//                       Place Order
//                     </button></Link>
//                     <Link href="/cart" className="text-blue-600 hover:text-blue-700">
//                       Back to Cart
//                     </Link>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </section>
//     <Footer />
//     </main>
//   );
// };

// export default CheckoutPage;
