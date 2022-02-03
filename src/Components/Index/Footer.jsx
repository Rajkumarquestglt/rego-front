import React from "react";
import bgLight from "../../assets/images/footer/bg-light.jpg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="footer-section light-version">
        <div
          className="footer-top"
          style={{ backgroundImage: `url(${bgLight})` }}
        >
          <div className="footer-newsletter">
            <div className="container">
              <div className="row g-4 align-items-center justify-content-center">
                <div className="col-lg-6">
                  <div className="newsletter-part">
                    <div className="ft-header">
                      <h4>Get The Latest Rego NFT Updates</h4>
                    </div>
                    <form action="/">
                      <input type="email" placeholder="Your Mail Address" />
                      <button type="submit" data-blast="bgColor">
                        {" "}
                        Subscribe now
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="social-part ps-lg-5">
                    <div className="ft-header">
                      <h4>Join the Community</h4>
                    </div>
                    <ul className="social-list d-flex flex-wrap align-items-center mb-0">
                      <li className="social-link">
                        <Link to="#" data-blast="bgColor">
                          <i className="icofont-telegram"></i>
                        </Link>
                      </li>
                      <li className="social-link">
                        <Link to="#" data-blast="bgColor">
                          <i className="icofont-twitter"></i>
                        </Link>
                      </li>
                      <li className="social-link">
                        <Link to="#" data-blast="bgColor">
                          <i className="icofont-facebook"></i>
                        </Link>
                      </li>

                      <li className="social-link">
                        <Link to="#" data-blast="bgColor">
                          <i className="icofont-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-links padding-top padding-bottom">
            <div className="container">
              <div className="row ">
                <div className="col-md-4 col-sm-6">
                  <div className="footer-link-item">
                    <h5>THE RegoNFT</h5>
                    <p>
                      Hello. An artist needs only two things in return for his
                      work – Appreciation of the effort and fair price of his
                      artwork. Currently, an artist needs to create his artwork
                      and then keep on moving to various cities in order to sell
                      the artwork.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-md-2 col-sm-6">
                  <div className="footer-link-item">
                    <h5>General</h5>
                    <ul className="footer-link-list">
                      <li>
                        <Link to="#" className="footer-link">
                          How it Works
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="footer-link">
                          How to connect wallet
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="footer-link">
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="footer-link">
                          Faqs
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="footer-link">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact" className="footer-link">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-2 col-sm-6">
                  <div className="footer-link-item">
                    <h5>NFT Marketplace</h5>
                    <ul className="footer-link-list">
                      <li>
                        <Link to="#" className="footer-link">
                          All NFTs
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="footer-link">
                          New
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="footer-link">
                          Art
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="footer-link">
                          Collectibles
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="footer-link">
                          More
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-2 col-sm-6">
                  <div className="footer-link-item">
                    <h5>My Account</h5>
                    <ul className="footer-link-list">
                      <li>
                        <Link to="#" className="footer-link">
                          Create
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="footer-link">
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="footer-link">
                          Favorites
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="footer-link">
                          My Collections
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="footer-link">
                          Settings
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-2 col-sm-6">
                  <div className="footer-link-item">
                    <h5>Resources</h5>
                    <ul className="footer-link-list">
                      <li>
                        <Link to="#" className="footer-link">
                          Terms of Service
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="footer-link">
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="footer-link">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="footer-link">
                          RegoNFT Contract
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p className="text-center py-4 mb-0 black-color">
              All rights reserved &copy;RegoNFT || Design By:{" "}
              <Link className="theme-color" to="https://questglt.com">
                Questglt
              </Link>
            </p>
          </div>
        </div>
      </footer>
      {/* // <!-- scrollToTop start here --> */}
      <Link to="#" className="scrollToTop light-version">
        <i className="icofont-stylish-up"></i>
      </Link>
      {/* // <!-- scrollToTop ending here --> */}
    </>
  );
}
