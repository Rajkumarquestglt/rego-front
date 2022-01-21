import React from 'react';
import { Link } from 'react-router-dom';

export default function Auction() {
  return (
    <section className="auction-section padding-bottom">
      <div className="container">
        <div className="section-header style-3">
          <div className="header-shape">
            <span></span>
          </div>
          <h3>Live Auctions</h3>
        </div>
        <div className="section-wrapper">
          <div className="auction-holder">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="nft-item light-version">
                  <div className="nft-inner">
                    {/* <!-- nft top part --> */}
                    <div className="nft-item-top d-flex justify-content-between align-items-center">
                      <div className="author-part">
                        <ul className="author-list d-flex">
                          <li className="single-author">
                            <Link to="author.html">
                              <img
                                src={require('../assets/images/seller/01.png')}
                                alt="author-img"
                              />
                            </Link>
                          </li>
                          <li className="single-author d-flex align-items-center">
                            <Link to="author.html" className="veryfied">
                              <img
                                src={require('../assets/images/seller/01.gif')}
                                alt="author-img"
                              />
                            </Link>
                            <h6>
                              <Link to="author.html">Jhon Doe</Link>
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
                                </span>{' '}
                                Report{' '}
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <span>
                                  <i className="icofont-reply"></i>
                                </span>{' '}
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
                        <img src={require('../assets/images/nft-item/04.gif')} alt="nft-img" />

                        {/* <!-- nft countdwon --> */}
                        <ul
                          className="nft-countdown count-down"
                          data-date="July 05, 2022 21:14:01"
                          data-blast="bgColor"
                        >
                          <li>
                            <span className="days">34</span>
                            <span className="count-txt">D</span>
                          </li>
                          <li>
                            <span className="hours">09</span>
                            <span className="count-txt">H</span>
                          </li>
                          <li>
                            <span className="minutes">32</span>
                            <span className="count-txt">M</span>
                          </li>
                          <li>
                            <span className="seconds">32</span>
                            <span className="count-txt">S</span>
                          </li>
                        </ul>
                      </div>
                      <div className="nft-content">
                        <h4>
                          <Link to="item-details.html">Walking On Air</Link>{' '}
                        </h4>
                        <div className="price-like d-flex justify-content-between align-items-center">
                          <p className="nft-price">
                            Price: <span className="yellow-color">0.34 ETH</span>
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
                          <li className="single-author">
                            <Link to="author.html">
                              <img
                                src={require('../assets/images/seller/01.png')}
                                alt="author-img"
                              />
                            </Link>
                          </li>
                          <li className="single-author">
                            <Link to="author.html">
                              <img
                                src={require('../assets/images/seller/02.gif')}
                                alt="author-img"
                              />
                            </Link>
                          </li>
                          <li className="single-author d-flex align-items-center">
                            <Link to="author.html" className="veryfied">
                              <img
                                src={require('../assets/images/seller/02.png')}
                                alt="author-img"
                              />
                            </Link>
                            <h6>
                              <Link to="author.html">Gucci L.</Link>
                            </h6>
                          </li>
                        </ul>
                      </div>
                      <div className="more-part">
                        <div className=" dropstart">
                          <Link
                            className="dropdown-toggle"
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
                                </span>{' '}
                                Report{' '}
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <span>
                                  <i className="icofont-reply"></i>
                                </span>{' '}
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
                        <img src={'../assets/images/nft-item/03.jpg'} alt="nft-img" />

                        {/* <!-- nft countdwon --> */}
                        <ul
                          className="nft-countdown count-down"
                          data-date="July 05, 2022 21:14:01"
                          data-blast="bgColor"
                        >
                          <li>
                            <span className="days">34</span>
                            <span className="count-txt">D</span>
                          </li>
                          <li>
                            <span className="hours">09</span>
                            <span className="count-txt">H</span>
                          </li>
                          <li>
                            <span className="minutes">32</span>
                            <span className="count-txt">M</span>
                          </li>
                          <li>
                            <span className="seconds">32</span>
                            <span className="count-txt">S</span>
                          </li>
                        </ul>
                      </div>
                      <div className="nft-content">
                        <h4>
                          <Link to="item-details.html">EUPHORIA de</Link>{' '}
                        </h4>
                        <div className="price-like d-flex justify-content-between align-items-center">
                          <p className="nft-price">
                            Price: <span className="yellow-color">0.34 ETH</span>
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
                                src={require('../assets/images/seller/04.png')}
                                alt="author-img"
                              />
                            </Link>
                            <h6>
                              <Link to="author.html">Rassel mrh</Link>
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
                                </span>{' '}
                                Report{' '}
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <span>
                                  <i className="icofont-reply"></i>
                                </span>{' '}
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
                        <img src={require('../assets/images/nft-item/04.jpg')} alt="nft-img" />

                        {/* <!-- nft countdwon --> */}
                        <ul
                          className="nft-countdown count-down"
                          data-date="July 05, 2022 21:14:01"
                          data-blast="bgColor"
                        >
                          <li>
                            <span className="days">34</span>
                            <span className="count-txt">D</span>
                          </li>
                          <li>
                            <span className="hours">09</span>
                            <span className="count-txt">H</span>
                          </li>
                          <li>
                            <span className="minutes">32</span>
                            <span className="count-txt">M</span>
                          </li>
                          <li>
                            <span className="seconds">32</span>
                            <span className="count-txt">S</span>
                          </li>
                        </ul>
                      </div>
                      <div className="nft-content">
                        <h4>
                          <Link to="item-details.html">Futuristic cols</Link>{' '}
                        </h4>
                        <div className="price-like d-flex justify-content-between align-items-center">
                          <p className="nft-price">
                            Price: <span className="yellow-color">0.34 ETH</span>
                          </p>
                          <Link to="#" className="nft-like">
                            <i className="icofont-heart"></i>
                            130
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
                          <li className="single-author">
                            <Link to="author.html">
                              <img
                                src={require('../assets/images/seller/04.png')}
                                alt="author-img"
                              />
                            </Link>
                          </li>
                          <li className="single-author">
                            <Link to="author.html">
                              <img
                                src={require('../assets/images/seller/05.png')}
                                alt="author-img"
                              />
                            </Link>
                          </li>
                          <li className="single-author d-flex align-items-center">
                            <Link to="author.html" className="veryfied">
                              <img
                                src={require('../assets/images/seller/04.gif')}
                                alt="author-img"
                              />
                            </Link>
                            <h6>
                              <Link to="author.html">Blexa z</Link>
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
                                </span>{' '}
                                Report{' '}
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <span>
                                  <i className="icofont-reply"></i>
                                </span>{' '}
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
                        <img src={require('../assets/images/nft-item/05.gif')} alt="nft-img" />

                        {/* <!-- nft countdwon --> */}
                        <ul
                          className="nft-countdown count-down"
                          data-date="July 05, 2022 21:14:01"
                          data-blast="bgColor"
                        >
                          <li>
                            <span className="days">34</span>
                            <span className="count-txt">D</span>
                          </li>
                          <li>
                            <span className="hours">09</span>
                            <span className="count-txt">H</span>
                          </li>
                          <li>
                            <span className="minutes">32</span>
                            <span className="count-txt">M</span>
                          </li>
                          <li>
                            <span className="seconds">32</span>
                            <span className="count-txt">S</span>
                          </li>
                        </ul>
                      </div>
                      <div className="nft-content">
                        <h4>
                          <Link to="item-details.html">Space Crafts</Link>{' '}
                        </h4>
                        <div className="price-like d-flex justify-content-between align-items-center">
                          <p className="nft-price">
                            Price: <span className="yellow-color">0.34 ETH</span>
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
    </section>
  );
}
