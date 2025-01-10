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
      <TopHeader bgClass="bg-[#23856D]" />
      <MobileNavTwo />
      <Header />
      <Shop />

      <div className="hidden sm:block">
        <BrandLogo />
        <Footer topBgColor="bg-text-white" bottomBgColor="bg-textgrayOne" />
      </div>

      <Products />

      <div className="block sm:hidden">
        <BrandLogo />
        <Footer topBgColor="bg-text-white" bottomBgColor="bg-textgrayOne" />
      </div>
    </div>
  );
};

export default Shoppage;