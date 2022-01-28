import React from "react";
import Header404 from "../Components/404/Header404";
import Section404 from "../Components/404/Section404";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import PreLoader from "../Components/PreLoader";
import UpperStrip from "../Components/UpperStrip";

export default function Fourofour() {
  return (
    <div>
      <UpperStrip />
      <Header />
      <Header404 />
      <Section404 />

      <Footer />
    </div>
  );
}
