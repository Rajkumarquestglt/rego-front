import React from "react";
import CommonHeader from "../Components/CommonHeader/CommonHeader";
import SectionNotFound from "../Components/NotFound/SectionNotFound";
import Footer from "../Components/Index/Footer";
import Header from "../Components/Index/Header";
// import PreLoader from "../Components/Index/PreLoader";
import UpperStrip from "../Components/Index/UpperStrip";

export default function Fourofour() {
  return (
    <div>
      <UpperStrip />
      <Header />
      <CommonHeader heading="404 Error Page" name="Home" active="404" />

      <SectionNotFound />

      <Footer />
    </div>
  );
}
