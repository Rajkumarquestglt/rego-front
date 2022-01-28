import "../assets/js/createnft.js";


import React from 'react';
// import PreLoader from "../Components/PreLoader"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import SectionHeader from "../Components/CreateNft/SectionHeader"
import SectionCreate from "../Components/CreateNft/SectionCreate"
import UpperStrip from "../Components/UpperStrip.jsx";

function Create() {
  return (
    <>

      {/* <PreLoader /> */}
      <UpperStrip />
      <Header />
      <SectionHeader />
      <SectionCreate />
      <Footer />
    </>
  );
}

export default Create;
