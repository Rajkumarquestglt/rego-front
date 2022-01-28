import "../assets/js/createnft.js";

import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SectionHeader from "../Components/CreateNft/SectionHeader";
import SectionCreate from "../Components/CreateNft/SectionCreate";
function Create() {
  return (
    <>
      <Header />
      <SectionHeader />
      <SectionCreate />
      <Footer />
    </>
  );
}

export default Create;
