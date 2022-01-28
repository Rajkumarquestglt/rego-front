import React from 'react';
import AllAuthorExplore from '../Components/AllAuthor/AllAuthorExplore';
import AllAuthorHeader from '../Components/AllAuthor/AllAuthorHeader';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import UpperStrip from '../Components/UpperStrip';

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
      <AllAuthorHeader />
      <AllAuthorExplore />

      <Footer />
    </div>
  )
}
