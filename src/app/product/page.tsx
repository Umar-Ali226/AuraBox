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
      <div className="hidden sm:flex"><TopHeader /></div>
      <Nav />
      <MobileNavTwo />
      <Productcard />
      <ProductDescription />
      <BestSellerProducts />

      <Footer />
    </div>
  );
};

export default Productpage;