import React from 'react';
import CommonHeader from '../Components/CommonHeader/CommonHeader';
import ContactSection from '../Components/ContactUs/ContactSection';
import Footer from '../Components/Index/Footer';
import Header from '../Components/Index/Header';
import UpperStrip from '../Components/Index/UpperStrip';

export default function ContactUs() {
  return( 
  <div>
      <UpperStrip />
      <Header />
      <CommonHeader  heading="Contact Us" name="Home" active="Contact"/>
      <ContactSection />
      <Footer />
  </div>
  )

}
