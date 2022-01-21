import React from 'react'
import PreLoader from './PreLoader'
import Header from './Header';
import UpperStrip from './upperStrip';
import Category from './category';
import Auction from './auction';
import TopSeller from './topSeller';
import Exclusivedrop from './Exclusivedrop';
import BlogSection from './blogSection';
import Footer from './Footer';
import Banner from './banner';

export default function Index() {
    return (
      <div>
        <PreLoader />
        <UpperStrip />
        <Header />
        <Banner />
        <Category />
        <Auction />
        <TopSeller />
        <Exclusivedrop />
        <BlogSection />
        <Footer />
      </div>
    );
}
