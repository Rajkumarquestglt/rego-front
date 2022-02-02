import React from "react";
// import PreLoader from "../Components/PreLoader";
import Header from "../Components/Index/Header";
//import UpperStrip from "../Components/Index/UpperStrip";
//import Category from "../Components/Index/Category";
//import Auction from "../Components/Index/Auction";
//import TopSeller from "../Components/Index/TopSeller";
//import Exclusivedrop from "../Components/EIndex/xclusivedrop";
import BlogSection from "../Components/Index/BlogSection";
import Footer from "../Components/Index/Footer";
import Banner from "../Components/Index/Banner";



export default function Index() {
  return (
    <div>
     
      <Header />
      <Banner />
      <BlogSection />
      <Footer />
    </div>
  );
}
