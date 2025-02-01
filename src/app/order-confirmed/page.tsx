'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import TopHeader from '@/components/TopHeader';
import MobileNavTwo from '@/components/MobNavTwo';
import Image from 'next/image';

const OrderConfirmedPage = () => {
  return (
    <main>
     <div className="hidden sm:flex"> <TopHeader /></div>
      <MobileNavTwo />
      <Header />
      <section className="w-full h-auto mt-8">
        <div className="container mx-auto text-center">
          <div className="flex flex-col items-center">
            <Image
              src="/images/icons/tick.png"
              alt="Order Confirmed"
              width={150}
              height={150}
              className="mb-8"
            />
            <h1 className="text-2xl font-semibold text-green-600">Thank You for Your Order!</h1>
            <p className="text-gray-600 mt-4">
              Your order has been placed successfully. We’re preparing it for shipping and will notify you once it’s on its way.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-semibold">Order Summary</h2>
            <p className="text-gray-700 mt-2">Order ID: <span className="font-semibold">#123456789</span></p>
            <p className="text-gray-700 mt-2">Estimated Delivery: <span className="font-semibold">3-5 Business Days</span></p>
          </div>

          <div className="mt-10 space-x-5">
            <Link href="/shipment">
              <button className="px-4 sm:px-6 py-2 bg-blue-600 text-white  rounded-md hover:bg-blue-700">
                Track Shipment
              </button>
            </Link>
            <Link href="/shop">
              <button className="px-4 sm:px-6 py-2 bg-blue-600 text-white  rounded-md hover:bg-blue-700">
                Continue Shopping
              </button>
            </Link>
            
          </div>
        </div>
      </section>
    </main>
  );
};

export default OrderConfirmedPage;
