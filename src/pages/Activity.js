import React from 'react';
import ActivityBody from '../Components/Activity/ActivityBody.jsx';
import CommonHeader from '../Components/CommonHeader/CommonHeader.jsx';
import Footer from '../Components/Index/Footer';
import Header from '../Components/Index/Header';
import UpperStrip from '../Components/Index/UpperStrip';

export default function Activity() {
  return (
  <div>
      <UpperStrip />
      <Header />
      <CommonHeader heading="All Activities" name="Home" active="Activity" />
      <ActivityBody />
      <Footer />
  </div>
  )
}
