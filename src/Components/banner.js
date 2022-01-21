import React from "react";
import {Link} from "react-router-dom";

export default function Banner() {
  return (
    <section
      className="banner-section light-version"
      style={{backgroundImage: `url(${require('../assets/images/banner/bg-4.png')}`}}
    >
      <div className="container">
        <div className="banner-wrapper">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="banner-content">
                <h1>
                  <span className="theme-color" data-blast="color">
                    Discover
                  </span>{" "}
                  Collect <br />
                  And Sell{" "}
                  <span className="theme-color" data-blast="color">
                    NFT
                  </span>{" "}
                  Assets
                </h1>
                <p>
                  Digital Marketplace For Crypto Collectibles And Non-Fungible
                  Tokens. Buy, Sell, And Discover Exclusive Digital Assets.
                </p>
                <div className="banner-btns d-flex flex-wrap">
                  <Link
                    data-blast="bgColor"
                    to="/explore"
                    className="default-btn move-top"
                  >
                    <span>Explore</span>{" "}
                  </Link>
                  <Link to="/signin" className="default-btn move-right">
                    <span>Create</span>{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="nft-slider-wrapper">
                <div className="banner-item-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="nft-item light-version">
                        <div className="nft-inner">
                          {/* <!-- nft top part --> */}
                          <div className="nft-item-top d-flex justify-content-between align-items-center">
                            <div className="author-part">
                              <ul className="author-list d-flex">
                                <li className="single-author d-flex align-items-center">
                                  <Link to="author.html" className="veryfied">
                                    <img
                                      loading="lazy"
                                      src={require("../assets/images/seller/04.png")}
                                      alt="author-img"
                                    />
                                  </Link>
                                  <h6>
                                    <Link to="author.html">rasselmrh</Link>
                                  </h6>
                                </li>
                              </ul>
                            </div>
                            <div className="more-part">
                              <div className=" dropstart">
                                <Link
                                  className=" dropdown-toggle"
                                  to="#"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                  data-bs-offset="25,0"
                                >
                                  <i className="icofont-flikr"></i>
                                </Link>

                                <ul className="dropdown-menu">
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <span>
                                        <i className="icofont-warning"></i>
                                      </span>{" "}
                                      Report{" "}
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <span>
                                        <i className="icofont-reply"></i>
                                      </span>
                                      Share
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* <!-- nft-bottom part --> */}
                          <div className="nft-item-bottom">
                            <div className="nft-thumb">
                              <img
                                loading="lazy"
                                src={require("../assets/images/banner/01.gif")}
                                alt="nft-img"
                              />
                            </div>
                            <div className="nft-content">
                              <h4>
                                <Link to="item-details.html">Black Cat </Link>{" "}
                              </h4>
                              <div className="price-like d-flex justify-content-between align-items-center">
                                <p className="nft-price">
                                  Price:{" "}
                                  <span className="yellow-color">0.34 ETH</span>
                                </p>
                                <Link to="#" className="nft-like">
                                  <i className="icofont-heart"></i>
                                  230
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="nft-item light-version">
                        <div className="nft-inner">
                          {/* <!-- nft top part --> */}
                          <div className="nft-item-top d-flex justify-content-between align-items-center">
                            <div className="author-part">
                              <ul className="author-list d-flex">
                                <li className="single-author d-flex align-items-center">
                                  <Link to="author.html" className="veryfied">
                                    <img
                                      loading="lazy"
                                      src={require("../assets/images/seller/04.png")}
                                      alt="author-img"
                                    />
                                  </Link>
                                  <h6>
                                    <Link to="author.html">Gucci Lucas</Link>
                                  </h6>
                                </li>
                              </ul>
                            </div>
                            <div className="more-part">
                              <div className=" dropstart">
                                <Link
                                  className=" dropdown-toggle"
                                  to="#"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                  data-bs-offset="25,0"
                                >
                                  <i className="icofont-flikr"></i>
                                </Link>

                                <ul className="dropdown-menu">
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <span>
                                        <i className="icofont-warning"></i>
                                      </span>{" "}
                                      Report{" "}
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <span>
                                        <i className="icofont-reply"></i>
                                      </span>
                                      Share
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* <!-- nft-bottom part --> */}
                          <div className="nft-item-bottom">
                            <div className="nft-thumb">
                              <img
                                loading="lazy"
                                src={require("../assets/images/banner/01.png")}
                                alt="nft-img"
                              />

                              {/* <!-- nft countdwon --> */}
                              {/* <!-- <ul className="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
                                                                                                                            <li>
                                                                                                                                <span className="days">34</span><span className="count-txt">D</span>
                                                                                                                            </li>
                                                                                                                            <li>
                                                                                                                                <span className="hours">09</span><span className="count-txt">H</span>
                                                                                                                            </li>
                                                                                                                            <li>
                                                                                                                                <span className="minutes">32</span><span className="count-txt">M</span>
                                                                                                                            </li>
                                                                                                                            <li>
                                                                                                                                <span className="seconds">32</span><span className="count-txt">S</span>
                                                                                                                            </li>
                                                                                                                        </ul> --> */}
                            </div>
                            <div className="nft-content">
                              <h4>
                                <Link to="item-details.html">EUPHORIA de</Link>{" "}
                              </h4>
                              <div className="price-like d-flex justify-content-between align-items-center">
                                <p className="nft-price">
                                  Price:{" "}
                                  <span className="yellow-color">0.34 ETH</span>
                                </p>
                                <Link to="#" className="nft-like">
                                  <i className="icofont-heart"></i>
                                  230
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="nft-item light-version">
                        <div className="nft-inner">
                          {/* <!-- nft top part --> */}
                          <div className="nft-item-top d-flex justify-content-between align-items-center">
                            <div className="author-part">
                              <ul className="author-list d-flex">
                                <li className="single-author d-flex align-items-center">
                                  <Link to="author.html" className="veryfied">
                                    <img
                                      loading="lazy"
                                      src={require("../assets/images/seller/04.png")}
                                      alt="author-img"
                                    />
                                  </Link>
                                  <h6>
                                    <Link to="author.html">lcus x3</Link>
                                  </h6>
                                </li>
                              </ul>
                            </div>
                            <div className="more-part">
                              <div className=" dropstart">
                                <Link
                                  className=" dropdown-toggle"
                                  to="#"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                  data-bs-offset="25,0"
                                >
                                  <i className="icofont-flikr"></i>
                                </Link>

                                <ul className="dropdown-menu">
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <span>
                                        <i className="icofont-warning"></i>
                                      </span>{" "}
                                      Report{" "}
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <span>
                                        <i className="icofont-reply"></i>
                                      </span>
                                      Share
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* <!-- nft-bottom part --> */}
                          <div className="nft-item-bottom">
                            <div className="nft-thumb">
                              <img
                                loading="lazy"
                                src={require("../assets/images/banner/02.gif")}
                                alt="nft-img"
                              />

                              {/* <!-- nft countdwon --> */}
                              {/* <!-- <ul className="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
                                                                                                                            <li>
                                                                                                                                <span className="days">34</span><span className="count-txt">D</span>
                                                                                                                            </li>
                                                                                                                            <li>
                                                                                                                                <span className="hours">09</span><span className="count-txt">H</span>
                                                                                                                            </li>
                                                                                                                            <li>
                                                                                                                                <span className="minutes">32</span><span className="count-txt">M</span>
                                                                                                                            </li>
                                                                                                                            <li>
                                                                                                                                <span className="seconds">32</span><span className="count-txt">S</span>
                                                                                                                            </li>
                                                                                                                        </ul> --> */}
                            </div>
                            <div className="nft-content">
                              <h4>
                                <Link to="item-details.html">Silly C4T de</Link>{" "}
                              </h4>
                              <div className="price-like d-flex justify-content-between align-items-center">
                                <p className="nft-price">
                                  Price:{" "}
                                  <span className="yellow-color">0.34 ETH</span>
                                </p>
                                <Link to="#" className="nft-like">
                                  <i className="icofont-heart"></i>
                                  230
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="nft-item light-version">
                        <div className="nft-inner">
                          {/* <!-- nft top part --> */}
                          <div className="nft-item-top d-flex justify-content-between align-items-center">
                            <div className="author-part">
                              <ul className="author-list d-flex">
                                <li className="single-author d-flex align-items-center">
                                  <Link to="author.html" className="veryfied">
                                    <img
                                      loading="lazy"
                                      src={require("../assets/images/seller/03.png")}
                                      alt="author-img"
                                    />
                                  </Link>
                                  <h6>
                                    <Link to="author.html">Imo35 ucas</Link>
                                  </h6>
                                </li>
                              </ul>
                            </div>
                            <div className="more-part">
                              <div className=" dropstart">
                                <Link
                                  className=" dropdown-toggle"
                                  to="#"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                  data-bs-offset="25,0"
                                >
                                  <i className="icofont-flikr"></i>
                                </Link>

                                <ul className="dropdown-menu">
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <span>
                                        <i className="icofont-warning"></i>
                                      </span>{" "}
                                      Report{" "}
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <span>
                                        <i className="icofont-reply"></i>
                                      </span>
                                      Share
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* <!-- nft-bottom part --> */}
                          <div className="nft-item-bottom">
                            <div className="nft-thumb">
                              <img
                                loading="lazy"
                                src={require("../assets/images/banner/04.jpg")}
                                alt="nft-img"
                              />

                              {/* <!-- nft countdwon --> */}
                              {/* <!-- <ul className="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
                                                                                                                            <li>
                                                                                                                                <span className="days">34</span><span className="count-txt">D</span>
                                                                                                                            </li>
                                                                                                                            <li>
                                                                                                                                <span className="hours">09</span><span className="count-txt">H</span>
                                                                                                                            </li>
                                                                                                                            <li>
                                                                                                                                <span className="minutes">32</span><span className="count-txt">M</span>
                                                                                                                            </li>
                                                                                                                            <li>
                                                                                                                                <span className="seconds">32</span><span className="count-txt">S</span>
                                                                                                                            </li>
                                                                                                                        </ul> --> */}
                            </div>
                            <div className="nft-content">
                              <h4>
                                <Link to="item-details.html">Future Rocket</Link>{" "}
                              </h4>
                              <div className="price-like d-flex justify-content-between align-items-center">
                                <p className="nft-price">
                                  Price:{" "}
                                  <span className="yellow-color">0.34 ETH</span>
                                </p>
                                <Link to="#" className="nft-like">
                                  <i className="icofont-heart"></i>
                                  230
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
