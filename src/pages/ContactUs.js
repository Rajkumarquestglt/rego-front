import React from 'react';
import ContactHeader from '../Components/ContactUs/ContactHeader';
import ContactSection from '../Components/ContactUs/ContactSection';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import UpperStrip from '../Components/UpperStrip';

export default function ContactUs() {
  return( 
  <div>
      <UpperStrip />
      <Header />
      <ContactHeader />
      <ContactSection />
      <Footer />
  </div>
  )

}
