'use client'
import Shop from "@/components/Shop";
import TopHeader from "@/components/TopHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNavTwo from "@/components/MobNavTwo";
import BrandLogo from "@/components/BrandLogos";
import Products from "@/components/Products";

const Shoppage = () => {
  return (
    <div>
     <div className="hidden sm:flex"> <TopHeader /></div>
      <MobileNavTwo />
      <Header />
      <Shop />
      <Products/>

      <div className="hidden sm:block">
        <BrandLogo />
        <Footer />
      </div>

      <div className="block sm:hidden">
        <BrandLogo />
        <Footer />
      </div>
    </div>
  );
};

export default Shoppage;