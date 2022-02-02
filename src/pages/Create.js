import "../assets/js/createnft.js";


import React from 'react';
// import PreLoader from "../Components/PreLoader"
import Header from "../Components/Index/Header"
import Footer from "../Components/Index/Footer"
import CommonHeader from "../Components/CommonHeader/CommonHeader"
import SectionCreate from "../Components/CreateNft/SectionCreate"
import UpperStrip from "../Components/Index/UpperStrip.jsx";

function Create() {
  return (
    <>

      {/* <PreLoader /> */}
      <UpperStrip />
      <Header />
      <CommonHeader heading="Create NFT" name="Home" active="Create NFT"/>
      <SectionCreate />
      <Footer />
    </>
  );
}

export default Create;
