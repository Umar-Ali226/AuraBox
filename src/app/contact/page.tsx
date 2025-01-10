import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileNavOne from "@/components/MobNavOne";
import NavTwo from "@/components/NavTwo";

const Contactpage = () => {
  return (
    <div>
      <NavTwo />
      <MobileNavOne />
      <Contact />
      <Footer topBgColor="bg-white" />
    </div>
  );
};

export default Contactpage;