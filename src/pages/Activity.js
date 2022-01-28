import React from 'react';
import ActivityBody from '../Components/Activity/ActivityBody';
import ActivityHeader from '../Components/Activity/ActivityHeader';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import UpperStrip from '../Components/UpperStrip';

export default function Activity() {
  return (
  <div>
      <UpperStrip />
      <Header />
      <ActivityHeader />
      <ActivityBody />
      <Footer />
  </div>
  )
}
