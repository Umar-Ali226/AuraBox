'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import TopHeader from '@/components/TopHeader';
import MobileNavTwo from '@/components/MobNavTwo';

const ShipmentPage = () => {
  const shipmentDetails = {
    orderId: '#123456789',
    status: 'In Transit',
    estimatedDelivery: 'Jan 25, 2025',
    shippingAddress: '123 Main Street, Springfield, IL 62704, USA',
    trackingNumber: 'TRACK123456789',
    courier: 'FedEx',
    items: [
      { name: 'Product 1', quantity: 2, price: 50 },
      { name: 'Product 2', quantity: 1, price: 30 },
    ],
  };

  const calculateTotal = () =>
    shipmentDetails.items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <main>
      <TopHeader />
      <MobileNavTwo />
      <Header />
      <section className="w-full h-auto mt-8">
        <div className="container mx-auto px-4 md:px-[5rem] lg:px-[10rem]">
          <h1 className="text-2xl font-semibold text-[#252B42]">Shipment Details</h1>
          <p className="text-gray-500 mt-2">
            Track your shipment and view all details about your order.
          </p>

          {/* Shipment Overview */}
          <div className="bg-white shadow-md rounded-md p-6 mt-6">
            <h2 className="text-lg font-semibold text-[#252B42]">Order Information</h2>
            <p className="text-gray-700 mt-2">Order ID: <span className="font-semibold">{shipmentDetails.orderId}</span></p>
            <p className="text-gray-700 mt-1">Order Status: <span className="text-green-600 font-semibold">{shipmentDetails.status}</span></p>
            <p className="text-gray-700 mt-1">Estimated Delivery: <span className="font-semibold">{shipmentDetails.estimatedDelivery}</span></p>
          </div>

          {/* Shipping Address */}
          <div className="bg-white shadow-md rounded-md p-6 mt-6">
            <h2 className="text-lg font-semibold text-[#252B42]">Shipping Address</h2>
            <p className="text-gray-700 mt-2">{shipmentDetails.shippingAddress}</p>
          </div>

          {/* Tracking Information */}
          <div className="bg-white shadow-md rounded-md p-6 mt-6">
            <h2 className="text-lg font-semibold text-[#252B42]">Tracking Information</h2>
            <p className="text-gray-700 mt-2">Tracking Number: <span className="font-semibold">{shipmentDetails.trackingNumber}</span></p>
            <p className="text-gray-700 mt-1">Courier: <span className="font-semibold">{shipmentDetails.courier}</span></p>
            <Link
              href={`https://www.fedex.com/fedextrack/?tracknumbers=${shipmentDetails.trackingNumber}`}
              target="_blank"
            >
              <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 mt-4">
                Track Shipment
              </button>
            </Link>
          </div>

          {/* Order Items */}
          <div className="bg-white shadow-md rounded-md p-6 mt-6">
            <h2 className="text-lg font-semibold text-[#252B42]">Order Items</h2>
            <ul className="mt-4 space-y-4">
              {shipmentDetails.items.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span className="text-gray-700">{item.name} (x{item.quantity})</span>
                  <span className="text-gray-700 font-semibold">${item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-6 border-t pt-4">
              <span className="text-gray-700 font-semibold">Total:</span>
              <span className="text-gray-700 font-semibold">${calculateTotal()}</span>
            </div>
          </div>

          {/* Customer Support */}
          <div className="bg-white shadow-md rounded-md p-6 mt-6">
            <h2 className="text-lg font-semibold text-[#252B42]">Need Help?</h2>
            <p className="text-gray-700 mt-2">If you have any questions about your shipment, feel free to contact our customer support team.</p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 mt-4">
              <a
                href="mailto:support@example.com"
                className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700"
              >
                Email Support
              </a>
              <a
                href="tel:+123456789"
                className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 mt-4 sm:mt-0"
              >
                Call Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ShipmentPage;
