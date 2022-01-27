import React from 'react';
import AuctionBody from '../Components/auction/AuctionBody';
import AuctionHeader from '../Components/auction/AuctionHeader';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function Auction() {
  return (
  <div>
      <Header />
      <AuctionHeader />
      <AuctionBody />
      <Footer />

  </div>
  )
}

export default Auction;
