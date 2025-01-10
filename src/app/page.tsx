import TopHeader from "@/components/TopHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNavOne from "@/components/MobNavOne";
import Hero from "@/components/Hero";
import EditorsPick from "@/components/EditorsPick";
import FeaturedProducts from "@/components/FtdProducts";
import Vitaclassicproduct from "@/components/VitaProduct";
import Neuraluniverse from "@/components/NeuralUniverse";
import FeaturedPosts from "@/components/FtPosts";
const Homepage = () => {
  return (
    <section>
      <TopHeader />
      <Header />
      <MobileNavOne />
      <Hero />
      <EditorsPick />
      <FeaturedProducts />
      <Vitaclassicproduct />
      <Neuraluniverse />
      <FeaturedPosts />
      <Footer />
    </section>
  );
};

export default Homepage;