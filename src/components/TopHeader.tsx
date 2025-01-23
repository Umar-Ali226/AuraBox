'use client';
import { useEffect, useState } from 'react';
import { client } from '../sanity/lib/client'; // Make sure this is your sanity client setup
import Image from 'next/image';
import { IoLogoInstagram } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";

// Define types for the data
interface ContactInfo {
  icon: {
    asset: {
      url: string;
    };
  };
  text: string;
}

interface TopHeaderData {
  bgClass?: string;
  contactInfo: ContactInfo[];
  freeShippingText: string;
}

const TopHeader = () => {
  const [topHeaderData, setTopHeaderData] = useState<TopHeaderData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`
        *[_type == "topHeader"][0] {
          bgClass,
          contactInfo[] {
            icon {
              asset -> {
                url
              }
            },
            text
          },
          freeShippingText
        }
      `);
      setTopHeaderData(data);
    };
    
    fetchData();
  }, []);

  if (!topHeaderData) return <div>Loading...</div>;

  return (
    <header
      className={`${topHeaderData.bgClass || " bg-[#252B42]"} flex items-center w-full h-10`}
    >
      <div className="container mx-auto font-semibold text-[0.550rem] md:text-[0.9rem] text-lighttextColor">
        <div className="flex justify-around items-center">
          {/* Contact Info */}
          <div className="flex gap-x-[1.7rem]">
            {topHeaderData.contactInfo.map((contactItem, index) => (
              <div key={index} className="flex items-center gap-x-1">
                <Image
                  src={contactItem.icon.asset.url}
                  alt="Icon"
                  width={16}
                  height={16}
                />
                <p className="text-white">{contactItem.text}</p>
              </div>
            ))}
          </div>

          {/* Free Shipping Text */}
          <p className="text-white">{topHeaderData.freeShippingText}</p>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-1">
            <p className="text-white">Follow Us &nbsp; :</p>
            <div className="flex gap-x-2 items-center">
             <div className="text-xl text-white"><IoLogoInstagram /></div>
             <div className="text-xl text-white"><FaWhatsapp /></div>
             <div className="text-xl text-white"><TiSocialFacebookCircular /></div>
             <div className="text-lg text-white"><FaTwitter /></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
// 'use client'
// import { useEffect, useState } from 'react';
// import { client } from '../sanity/lib/client'; // Make sure this is your sanity client setup
// import Image from 'next/image';

// const TopHeader = () => {
//   const [topHeaderData, setTopHeaderData] = useState<any>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await client.fetch(`
//         *[_type == "topHeader"][0] {
//           bgClass,
//           contactInfo[] {
//             icon {
//               asset -> {
//                 url
//               }
//             },
//             text
//           },
//           freeShippingText
//         }
//       `);
//       setTopHeaderData(data);
//     };
    
//     fetchData();
//   }, []);

//   if (!topHeaderData) return <div>Loading...</div>;

//   return (
//     <header
//       className={`${topHeaderData.bgClass || " bg-[#252B42]"} flex items-center w-full h-10`}
//     >
//       <div className="container mx-auto font-semibold text-[0.550rem] md:text-[0.9rem] text-lighttextColor">
//         <div className="flex justify-around items-center">
//           {/* Contact Info */}
//           <div className="flex gap-x-[1.7rem]">
//             {topHeaderData.contactInfo.map((contactItem: any, index: number) => (
//               <div key={index} className="flex items-center gap-x-1">
//                 <Image
//                   src={contactItem.icon.asset.url}
//                   alt="Icon"
//                   width={16}
//                   height={16}
//                 />
//                 <p className="text-white">{contactItem.text}</p>
//               </div>
//             ))}
//           </div>

//           {/* Free Shipping Text */}
//           <p className="text-white">{topHeaderData.freeShippingText}</p>

//           {/* Social Media Icons */}
//           <div className="flex items-center space-x-1">
//             <p className="text-white">Follow Us &nbsp; :</p>
//             <div className="flex gap-x-1 items-center">
//               {/* Add your social media icons here */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default TopHeader;
// import Image from "next/image";

// /// COMPONENT FOR ( phone & e-mail )
// const ContactInfo = () => (
//   <div className="flex gap-x-[1.7rem]">
//     <div className="flex items-center gap-x-1">
//       <Image
//         src="/images/icons/call-icon.png"
//         alt="Call-icon"
//         width={16}
//         height={16}
//       />
//       <p className="text-white">+92 317-8924035</p>
//     </div>
//     <div className="flex items-center gap-x-1">
//       <Image
//         src="/images/icons/mail-icon.png"
//         alt="Mail-icon"
//         width={16}
//         height={16}
//       />
//       <p className="text-white">aurabox226@gmail.com</p>
//     </div>
//   </div>
// );

// // COMPONENTS FOR SOCIAL MEDIA ICONS 
// const SocialMediaIcons = () => (
//   <div className="flex gap-x-1 items-center">
//     <Image
//       src="/images/icons/instagram-icon.png"
//       alt="Instagram-icon"
//       width={25}
//       height={25}
//     />
//     <Image
//       src="/images/icons/youtube-icon.png"
//       alt="YouTube-icon"
//       width={25}
//       height={25}
//     />
//     <Image
//       src="/images/icons/facebook-icon.png"
//       alt="Facebook-icon"
//       width={25}
//       height={25}
//     />
//     <Image
//       src="/images/icons/twitter-icon.png"
//       alt="Twitter-icon"
//       width={25}
//       height={25}
//     />
//   </div>
// );

// // TOP HEADER COMPNENT FOR DYNAMIC STYLING
// const TopHeader = ({ bgClass }: { bgClass?: string }) => {
//   return (
//     <header
//       className={`hidden sm:flex items-center w-full h-10 ${
//         bgClass || "bg-[#252B42]"
//       }`}
//     >
//       <div className="container mx-auto font-semibold text-[0.550rem] md:text-[0.9rem] text-lighttextColor">
//         <div className="flex justify-around items-center">
//           <ContactInfo />
//           <p className="text-white">Free shipping over PKR 5000+</p>
//           <div className="flex items-center space-x-1">
//             <p className="text-white">Follow Us &nbsp; :</p>
//             <SocialMediaIcons />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default TopHeader;