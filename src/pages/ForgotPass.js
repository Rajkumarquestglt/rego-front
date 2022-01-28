import React from "react";

import Footer from "../Components/Footer";
import PageHeader from "../Components/Forgot-Password/PageHeader";
import ResetPass from "../Components/Forgot-Password/ResetPass";
import Header from "../Components/Header";
import PreLoader from "../Components/PreLoader";
import UpperStrip from "../Components/UpperStrip";

export default function FougotPass() {
  return (
    <div>
      <UpperStrip />
      <Header />
      <PageHeader />
      <ResetPass />

      <Footer />
    </div>
  );
}
