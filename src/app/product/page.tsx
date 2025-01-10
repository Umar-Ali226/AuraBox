import BestSellerProducts from "@/components/BestSellerProducts";
import Footer from "@/components/Footer";
import MobileNavTwo from "@/components/MobNavTwo";
import Nav from "@/components/Nav";
import Productcard from "@/components/ProductCards";
import ProductDescription from "@/components/ProductDescription";
import TopHeader from "@/components/TopHeader";

const Productpage = () => {
  return (
    <div>
      <TopHeader bgClass="bg-[#23856D]" />
      <Nav />
      <MobileNavTwo />
      <Productcard />
      <ProductDescription />
      <BestSellerProducts />

      <Footer topBgColor="bg-white" bottomBgColor="bg-textgrayOne" />
    </div>
  );
};

export default Productpage;