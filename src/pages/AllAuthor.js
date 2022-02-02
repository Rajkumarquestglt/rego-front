import React from 'react';
import AllAuthorExplore from '../Components/AllAuthor/AllAuthorExplore';
import CommonHeader from '../Components/CommonHeader/CommonHeader'
import Footer from '../Components/Index/Footer';
import Header from '../Components/Index/Header';
import UpperStrip from '../Components/Index/UpperStrip';

// import "../assets/css/bootstrap.min.css"
// import "../assets/css/icofont.min.css"
// import "../assets/css/lightcase.css"
// import "../assets/css/animate.css"
// import "../assets/css/swiper-bundle.min.css"
// import "../assets/css/style.min.css"
// import "../assets/css/custom.css"

export default function AllAuthor() {
  return (
    <div>
      <UpperStrip />
      <Header />
      
      <CommonHeader heading="All of our Authors" name="Home" active="All-authors"/>
      <AllAuthorExplore />

      <Footer />
    </div>
  )
}
