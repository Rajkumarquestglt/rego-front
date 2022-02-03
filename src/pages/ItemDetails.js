import React, { useEffect, useState } from "react";
import Footer from "../Components/Index/Footer";
import Header from "../Components/Index/Header";
import UpperStrip from "../Components/Index/UpperStrip";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

// import "../assets/css/bootstrap.min.css"
import "../assets/css/icofont.min.css";
import "../assets/css/lightcase.css";
import "../assets/css/animate.css";
import "../assets/css/swiper-bundle.min.css";
import "../assets/css/style.min.css";
import "../assets/css/custom.css";
import nft_img from "../assets/images/nft-item/item-details-light.gif";
import author_img from "../assets/images/seller/02.gif";

export default function ItemDetails() {
  const url = "http://nft.regoex.com:3001/users/content-detail";
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState();

  const getData = async () => {
    console.log("get data hit");

    const res = await axios.post(url, { content_id: id });
    console.log("data", res);
    setItemDetail(res.data.data);
  };
  console.log(itemDetail);
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <UpperStrip />
      <Header />
      <div className="item-details-section light-version padding-top padding-bottom">
        <div className="container">
          <div className="item-details-wrapper">
            <div className="row g-5">
              <div className="col-lg-6">
                <div className="item-desc-part">
                  <div className="item-desc-inner">
                    <div className="item-desc-thumb">
                      <img
                        src={`http://nft.regoex.com:3001/content/${itemDetail?.content.image}`}
                        alt="item-img"
                      />
                    </div>
                    <div className="item-desc-content">
                      <nav>
                        <div
                          className="nav nav-tabs"
                          id="nav-tab"
                          role="tablist"
                        >
                          <button
                            className="nav-link active"
                            id="nav-details-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-details"
                            type="button"
                            role="tab"
                            aria-controls="nav-details"
                            aria-selected="true"
                          >
                            Details
                          </button>
                          <button
                            className="nav-link"
                            id="nav-bids-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-bids"
                            type="button"
                            role="tab"
                            aria-controls="nav-bids"
                            aria-selected="false"
                          >
                            Bids
                          </button>
                          <button
                            className="nav-link"
                            id="nav-history-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-history"
                            type="button"
                            role="tab"
                            aria-controls="nav-history"
                            aria-selected="false"
                          >
                            History
                          </button>
                        </div>
                      </nav>
                      <div className="tab-content" id="nav-tabContent">
                        <div
                          className="details-tab tab-pane fade show active"
                          id="nav-details"
                          role="tabpanel"
                          aria-labelledby="nav-details-tab"
                        >
                          <p>
                            This is the second batch of Cybertino Genesis NFTs
                            for early adopters and is 1 of 5. This Genesis NFT
                            will be interactive: hold and wait for future
                            exclusive benefits and early access to new drops!
                          </p>
                          <div className="author-profile d-flex flex-wrap align-items-center gap-15">
                            <div className="author-p-thumb">
                              <Link to="author.html">
                                <img src={author_img} alt="author-img " />
                              </Link>
                            </div>
                            <div className="author-p-info">
                              <p className="mb-0">Owner</p>
                              <h6>
                                <Link to="author.html">Alex joe</Link>
                              </h6>
                            </div>
                          </div>
                          <ul className="other-info-list">
                            <li className="item-other-info">
                              <div className="item-info-title">
                                <h6>Contact Address</h6>
                              </div>
                              <div className="item-info-details">
                                <div id="cryptoCode" className="crypto-page">
                                  <input
                                    id="cryptoLink"
                                    value="0x00c5F809606EB7867e3FB4cF22DA5FD258f5C8E0"
                                    readonly
                                  />
                                  <div
                                    id="cryptoCopy"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="Copy Address"
                                  >
                                    <span className="copy-icon">
                                      <i
                                        className="icofont-ui-copy"
                                        aria-hidden="true"
                                        data-copytarget="#cryptoLink"
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="item-other-info">
                              <div className="item-info-title">
                                <h6>Token ID</h6>
                              </div>
                              <div className="item-info-details">
                                <p>{itemDetail?.content.tokenId}</p>
                              </div>
                            </li>
                            <li className="item-other-info">
                              <div className="item-info-title">
                                <h6>Blockchain</h6>
                              </div>
                              <div className="item-info-details">
                                <p>Ethereum (ETH)</p>
                              </div>
                            </li>

                            <li className="item-other-info">
                              <div className="item-info-title">
                                <h6>Size</h6>
                              </div>
                              <div className="item-info-details">
                                <p>1000 x 1000 px.VIDEO (19.85MB)</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="bids-tab tab-pane fade"
                          id="nav-bids"
                          role="tabpanel"
                          aria-labelledby="nav-bids-tab"
                        >
                          <span>
                            <i className="icofont-law-order"></i>
                          </span>
                          <p>No active bids yet. Be the first to make a bid!</p>
                        </div>
                        <div
                          className="history-tab tab-pane fade"
                          id="nav-history"
                          role="tabpanel"
                          aria-labelledby="nav-history-tab"
                        >
                          <ul className="item-histo-list">
                            <li className="histo-item">
                              <p>
                                Created by{" "}
                                <Link to="author.html">@alex joe</Link>
                              </p>
                              <time>2021-08-04 23:05:07</time>
                            </li>
                            <li className="histo-item">
                              <p>
                                Listed by{" "}
                                <Link to="author.html">@alex joe</Link>
                              </p>
                              <time>2021-08-04 20:05:07</time>
                            </li>
                            <li className="histo-item">
                              <p>
                                Owned by <Link to="author.html">@alex joe</Link>
                              </p>
                              <time>2021-08-04 22:05:07</time>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="item-buy-part">
                  <div className="nft-item-title">
                    <h3>{itemDetail?.content.description}</h3>
                    <div className="share-btn">
                      <div className=" dropstart">
                        <Link
                          className=" dropdown-toggle"
                          to="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          data-bs-offset="25,0"
                        >
                          <i className="icofont-share-alt"></i>
                        </Link>

                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to="#">
                              <span>
                                <i className="icofont-twitter"></i>
                              </span>{" "}
                              Twitter{" "}
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <span>
                                <i className="icofont-telegram"></i>
                              </span>{" "}
                              Telegram
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <span>
                                <i className="icofont-envelope"></i>
                              </span>{" "}
                              Email
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>{" "}
                    {/* <li className="share-active">
                      <Link className="share-btn" to="">
                        <i className="fa fa-share-alt"></i>
                      </Link>
                      <div
                        className="button-share"
                        style={{ backgroundSize: "cover" }}
                      >
                        <ul>
                          <li className="facebook">
                            <Link
                              to=""
                              onclick="fbshareCurrentPage()"
                              target="_blank"
                              alt="Share on Facebook"
                            >
                              <i className="fa fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li className="twitter">
                            <Link
                              className="tweet"
                              to=""
                              onclick="tweetCurrentPage()"
                              target="_blank"
                              alt="Tweet this page"
                            >
                              {" "}
                              <i className="icon fab fa fa-twitter"></i>
                            </Link>
                          </li>
                          <li className="whatsapp">
                            <Link
                              className="w-inline-block social-share-btn pin"
                              to="https://api.whatsapp.com/send?text=http://18.223.117.55/nft-detail/ART-DFF-629"
                              target="_blank"
                              title="WhatsApp"
                            >
                              {" "}
                              <i className="fa fa-whatsapp"></i>
                            </Link>
                          </li>
                          <li className="linkedin">
                            <Link
                              className="w-inline-block social-share-btn pin"
                              to="#"
                              title="Linked In"
                              onclick="linkedCurrentPage()"
                            >
                              {" "}
                              <i className="fa fa-linkedin"></i>
                            </Link>
                          </li>
                          <li className="telegram">
                            <Link
                              className="w-inline-block social-share-btn pin"
                              to="#"
                              onclick="teleCurrentPage()"
                              target="_blank"
                              title="Telegram"
                            >
                              {" "}
                              <i className="fa fa-telegram"></i>
                            </Link>
                          </li>
                          <li className="instagram">
                            <Link
                              className="w-inline-block social-share-btn pin"
                              to="#"
                              target="_blank"
                              title="Instagram"
                              onclick="instaCurrentPage()"
                            >
                              {" "}
                              <i className="fa fa-instagram"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li> */}
                  </div>
                  <div className="item-details-countdown">
                    <h4>Ends In:</h4>
                    <ul
                      className="item-countdown-list count-down"
                      data-date="June 05, 2022 21:14:01"
                    >
                      <li>
                        <span className="days">34</span>
                        <span className="count-txt">Days</span>
                      </li>
                      <li>
                        <span className="hours">09</span>
                        <span className="count-txt">Hours</span>
                      </li>
                      <li>
                        <span className="minutes">32</span>
                        <span className="count-txt">Mins</span>
                      </li>
                      <li>
                        <span className="seconds">32</span>
                        <span className="count-txt">Secs</span>
                      </li>
                    </ul>
                  </div>
                  <div className="item-price">
                    <h4>Price</h4>
                    <p>
                      <span>
                        <i className="icofont-coins"></i>
                        {itemDetail?.content.price} ETH
                      </span>
                      ($ 6,227.15)
                    </p>
                  </div>
                  <div className="buying-btns d-flex flex-wrap">
                    <Link to="wallet.html" className="default-btn move-right">
                      <span>Buy Now</span>{" "}
                    </Link>
                    <Link to="wallet.html" className="default-btn move-right">
                      <span>Make a Offer</span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
