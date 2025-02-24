import About from "@/components/About";
import BigCompanies from "@/components/BigCompanies";
import Footer from "@/components/Footer";
import MobileNavOne from "@/components/MobNavOne";
import NavTwo from "@/components/NavTwo";
import Team from "@/components/Team";
import React from "react";

const Aboutpage = () => {
  return (
    <div>
      <NavTwo />
      <MobileNavOne />
      <About />
      <Team />
      <BigCompanies />
      <Footer />
    </div>
  );
};

export default Aboutpage;