'use client'
import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const client = createClient({
  projectId: "itewl73m", // Replace with your project ID
  dataset: "production",       // Replace with your dataset
  useCdn: true,                // Use the CDN for faster response times
});

interface FooterData {
  topBgColor: string;
  bottomBgColor: string;
  brandName: string;
  socialMedia: { platform: string; icon: string; url: string }[];
  sections: { title: string; links: { label: string; url: string }[] }[];
  subscribeForm: { placeholder: string; buttonText: string; description: string };
  footerNote: string;
}

const Footer = () => {
  const [footerData, setFooterData] = useState<FooterData | null>(null);

  useEffect(() => {
    const fetchFooterData = async () => {
      const query = `*[_type == "footer"][0] {
        topBgColor,
        bottomBgColor,
        brandName,
        socialMedia[] {
          platform,
          icon,
          url
        },
        sections[] {
          title,
          links[] {
            label,
            url
          }
        },
        subscribeForm {
          placeholder,
          buttonText,
          description
        },
        footerNote
      }`;

      const data = await client.fetch(query);
      setFooterData(data);
    };

    fetchFooterData();
  }, []);

  if (!footerData) return null; // Or a loading spinner

  return (
    <footer className="mt-24">
      {/* TOP SECTION */}
      <div className={`${footerData.topBgColor} h-[7.9rem] py-11`}>
        <div className="container mx-auto px-4 sm:px-36 flex justify-between items-center">
          <div className="font-bold text-[1.4rem] text-[#252B42]">
            {footerData.brandName}
          </div>
          <div className="flex space-x-4">
           <div className="text-[#23A6F0] text-lg"><FaFacebook /></div>
           <div className="text-[#23A6F0] text-lg"><FaInstagram /></div>
           <div className="text-[#23A6F0] text-lg"><FaTwitter /></div>

          </div>
        </div>
        <div className="w-[80vw] pt-11 pl-7 pr-14 mx-auto">
          <hr className="hidden sm:flex" />
    </div>
      </div>

      {/* MIDDLE SECTION */}
      <div className="py-12">
        <div className="container mx-auto px-6 lg:px-36 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {footerData.sections?.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold mb-4 text-[#252B42]">{section.title}</h3>
              <ul className="space-y-2 text-gray-500 font-semibold text-sm">
                {section.links?.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.url}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* SUBSCRIBE FORM */}
          <div>
            <h3 className="font-bold mb-4 text-[#252B42]">Get In Touch</h3>
            <form className="flex flex-col space-y-3">
              <div className="flex flex-row">
                <input
                  type="email"
                  placeholder={footerData.subscribeForm.placeholder}
                  className="border border-gray-300 p-2 rounded-l-md"
                />
                <button className="bg-[#23A6F0] text-white px-2 py-2 rounded-r-md">
                  {footerData.subscribeForm.buttonText}
                </button>
              </div>
              <p className="text-gray-500 text-sm">
                {footerData.subscribeForm.description}
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className={`${footerData.bottomBgColor} py-6`}>
        <div className="container mx-auto text-center">
          <p className="text-gray-500 text-sm">{footerData.footerNote}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";

// interface FooterProps {
//   topBgColor?: string;
//   bottomBgColor?: string;
// }

// const Footer: React.FC<FooterProps> = ({
//   topBgColor = "bg-textgrayOne",
//   bottomBgColor = "bg-darkgray",
// }) => {
//   return (
//     <footer className="mt-24">
//       {/* --- TOP SECTION --- */}
//       <div className={`${topBgColor} h-[7.9rem] py-11`}>
//         <div className="container mx-auto px-4 sm:px-36 flex flex-col sm:flex-row justify-between items-start sm:items-center">
//           {/* --- BRANDS --- */}
//           <div className="font-bold text-[1.4rem] mb-0 lg:mb-0 text-[#252B42]">
//             <Link href="/">AuraBox</Link>
//           </div>
//           {/* --- ICONS --- */}
//           <div className="flex items-center space-x-4 mr-0 sm:mr-20">
//             <div className="text-[#23A6F0] text-lg"><FaFacebook /></div>
//             <div className="text-[#23A6F0] text-lg"><FaInstagram /></div>
//             <div className="text-[#23A6F0] text-lg"><FaTwitter /></div>
//           </div>
//         </div>
//         <div className="w-[80vw] pt-11 pl-7 pr-14 mx-auto">
//           <hr className="hidden sm:flex" />
//         </div>
//       </div>

//       {/* --- MIDDLE SECTION --- */}
//       <div className="py-12">
//         <div className="container mx-auto px-6 lg:px-36">
//           <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-left">
//             {/* --- LINKS --- */}
//             <div>
//               <h3 className="font-bold mb-4 text-[#252B42]">Company Info</h3>
//               <ul className="space-y-2 text-gray-500 font-semibold font text-sm">
//                 <li> <Link href="/about">About Us</Link> </li>
//                 <li> <Link href="/contact">Contact</Link> </li>
//                 <li> <Link href="/">We are hiring</Link> </li>
//                 <li> <Link href="/">Blog</Link> </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-bold mb-4 text-[#252B42]">Legal</h3>
//               <ul className="space-y-2 text-gray-500 font-semibold font text-sm">
//                 <li> <Link href="/about">About Us</Link> </li>
//                 <li> <Link href="/contact">Contact</Link> </li>
//                 <li> <Link href="/">We are hiring</Link> </li>
//                 <li> <Link href="/">Blog</Link> </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-bold mb-4 text-[#252B42]">Features</h3>
//               <ul className="space-y-2 text-gray-500 font-semibold font text-sm">
//                 <li> <Link href="/">Business Marketing</Link> </li>
//                 <li> <Link href="/">User Analytic</Link> </li>
//                 <li> <Link href="/">Live Chat</Link> </li>
//                 <li> <Link href="/">Unlimited Support</Link> </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-bold mb-4 text-[#252B42]">Resources</h3>
//               <ul className="space-y-2 text-gray-500 font-semibold font text-sm">
//                 <li> <Link href="/">iOS & Android</Link> </li>
//                 <li> <Link href="/">Watch a Demo</Link> </li>
//                 <li> <Link href="/">Customers</Link> </li>
//                 <li> <Link href="/">API</Link> </li>
//               </ul>
//             </div>

//             {/* --- SUBSCRIBE FORM --- */}

//             <div>
//               <h3 className="font-bold mb-4 text-[#252B42]">Get In Touch</h3>
//               <form className="flex flex-col space-y-3">
//                 <div className="flex flex-row md:flex-col xl:flex-row">
//                   <input
//                     type="email"
//                     placeholder="Your Email"
//                     className="border border-outlineColor text-[0.875rem] pl-5 text-left rounded-md p-1 bg-lightbgColor"
//                   />
//                   <button className="bg-[#23A6F0] text-white rounded-md px-2 py-4">
//                     Subscribe
//                   </button>
//                 </div>
//                 <p className="text-gray-500 text-[0.75rem]">
//                   Lore imp sum dolor Amit
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* --- BOTTOM SECTION --- */}

//       <div className={`${bottomBgColor} py-6`}>
//         <div className="container mx-auto text-center sm:text-left">
//           <p className="text-gray-500 text-sm mx-[5.8rem] sm:mx-36">
//             Made With Love By UMAR ALI. All Right Reserved
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;