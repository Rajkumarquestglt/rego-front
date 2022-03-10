import React from "react";
import AuctionBody from "../Components/auction/AuctionBody";
import CommonHeader from "../Components/CommonHeader/CommonHeader";
import Footer from "../Components/Index/Footer";
import Header from "../Components/Index/Header";
import UpperStrip from "../Components/Index/UpperStrip";

function Auction() {
  return (
    <div>
      <UpperStrip />
      <Header />
      <CommonHeader heading="NFT's Live Auction" name="Home" active="auction" />
      <AuctionBody />
      <Footer />
    </div>
  );
}

export default Auction;
