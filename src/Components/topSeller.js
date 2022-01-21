import React from "react";
import {Link} from "react-router-dom";

export default function topSeller() {
  return (
    <section className="topseller-section padding-bottom">
      <div className="container">
        <div className="section-header style-3">
          <div className="header-shape">
            <span></span>
          </div>
          <h3>Top Sellers</h3>
        </div>
        <div className="section-wrapper">
          <div className="nft-sell-wrapper">
            <div className="row justify-content-center gx-4 gy-3">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="nft-item light-version style-2">
                  <div className="nft-inner">
                    <div className="nft-thumb">
                      <img
                        src={require("../assets/images/nft-item/style-2/01.jpg")}
                        alt="nft-img"
                      />
                    </div>
                    <div className="nft-content">
                      <div className="author-thumb">
                        <Link to="author.html" className="veryfied">
                          <img
                            src={require("../assets/images/seller/04.png")}
                            alt="author-img"
                          />
                        </Link>
                      </div>
                      <div className="author-details d-flex flex-wrap align-items-center gap-15">
                        <div className="author-number">
                          <h3 className="fs-36">01</h3>
                        </div>
                        <div className="author-det-info">
                          <h5>
                            <Link to="author.html">Gihan Fernindo</Link>{" "}
                          </h5>
                          <p className="nft-price yellow-color">$23,002.98</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="nft-item light-version style-2">
                  <div className="nft-inner">
                    <div className="nft-thumb">
                      <img loading="lazy" src={require("../assets/images/nft-item/style-2/02.jpg")} alt="nft-img"/>
                    </div>
                    <div className="nft-content">
                      <div className="author-thumb">
                        <Link to="author.html" className="veryfied">
                          <img
                            loading="lazy"
                            src={require("../assets/images/seller/02.gif")}
                            alt="author-img"
                          />
                        </Link>
                      </div>
                      <div className="author-details d-flex flex-wrap align-items-center gap-15">
                        <div className="author-number">
                          <h3 className="fs-36">02</h3>
                        </div>
                        <div className="author-det-info">
                          <h5>
                            <Link to="author.html">liao 5er</Link>{" "}
                          </h5>
                          <p className="nft-price yellow-color">$23,002.98</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="nft-item light-version style-2">
                  <div className="nft-inner">
                    <div className="nft-thumb">
                      <img
                        loading="lazy"
                        src={require("../assets/images/nft-item/style-2/03.jpg")}
                        alt="nft-img"
                      />
                    </div>
                    <div className="nft-content">
                      <div className="author-thumb">
                        <Link to="author.html" className="veryfied">
                          <img
                            loading="lazy"
                            src={require("../assets/images/seller/03.png")}
                            alt="author-img"
                          />
                        </Link>
                      </div>
                      <div className="author-details d-flex flex-wrap align-items-center gap-15">
                        <div className="author-number">
                          <h3 className="fs-36">03</h3>
                        </div>
                        <div className="author-det-info">
                          <h5>
                            <Link to="author.html">xox3 nindo</Link>{" "}
                          </h5>
                          <p className="nft-price yellow-color">$23,002.98</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="nft-item light-version style-2">
                  <div className="nft-inner">
                    <div className="nft-thumb">
                      <img
                        loading="lazy"
                        src={require("../assets/images/nft-item/style-2/04.jpg")}
                        alt="nft-img"
                      />
                    </div>
                    <div className="nft-content">
                      <div className="author-thumb">
                        <Link to="author.html" className="veryfied">
                          <img
                            loading="lazy"
                            src={require("../assets/images/seller/05.gif")}
                            alt="author-img"
                          />
                        </Link>
                      </div>
                      <div className="author-details d-flex flex-wrap align-items-center gap-15">
                        <div className="author-number">
                          <h3 className="fs-36">04</h3>
                        </div>
                        <div className="author-det-info">
                          <h5>
                            <Link to="author.html">raxel mrh</Link>{" "}
                          </h5>
                          <p className="nft-price yellow-color">$23,002.98</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="nft-item light-version style-2">
                  <div className="nft-inner">
                    <div className="nft-thumb">
                      <img
                        loading="lazy"
                        src={require("../assets/images/nft-item/style-2/05.jpg")}
                        alt="nft-img"
                      />
                    </div>
                    <div className="nft-content">
                      <div className="author-thumb">
                        <Link to="author.html" className="veryfied">
                          <img
                            loading="lazy"
                            src={require("../assets/images/seller/05.gif")}
                            alt="author-img"
                          />
                        </Link>
                      </div>
                      <div className="author-details d-flex flex-wrap align-items-center gap-15">
                        <div className="author-number">
                          <h3 className="fs-36">05</h3>
                        </div>
                        <div className="author-det-info">
                          <h5>
                            <Link to="author.html">lsr 33xr</Link>{" "}
                          </h5>
                          <p className="nft-price yellow-color">$23,002.98</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="nft-item light-version style-2">
                  <div className="nft-inner">
                    <div className="nft-thumb">
                      <img
                        loading="lazy"
                        src={require("../assets/images/nft-item/style-2/06.jpg")}
                        alt="nft-img"
                      />
                    </div>
                    <div className="nft-content">
                      <div className="author-thumb">
                        <Link to="author.html" className="veryfied">
                          <img
                            loading="lazy"
                            src={require("../assets/images/seller/07.gif")}
                            alt="author-img"
                          />
                        </Link>
                      </div>
                      <div className="author-details d-flex flex-wrap align-items-center gap-15">
                        <div className="author-number">
                          <h3 className="fs-36">06</h3>
                        </div>
                        <div className="author-det-info">
                          <h5>
                            <Link to="author.html">Gihan Fernindo</Link>{" "}
                          </h5>
                          <p className="nft-price yellow-color">$23,002.98</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="nft-item light-version style-2">
                  <div className="nft-inner">
                    <div className="nft-thumb">
                      <img
                        loading="lazy"
                        src={require("../assets/images/nft-item/style-2/07.jpg")}
                        alt="nft-img"
                      />
                    </div>
                    <div className="nft-content">
                      <div className="author-thumb">
                        <Link to="author.html" className="veryfied">
                          <img
                            loading="lazy"
                            src={require("../assets/images/seller/05.png")}
                            alt="author-img"
                          />
                        </Link>
                      </div>
                      <div className="author-details d-flex flex-wrap align-items-center gap-15">
                        <div className="author-number">
                          <h3 className="fs-36">07</h3>
                        </div>
                        <div className="author-det-info">
                          <h5>
                            <Link to="author.html">xihan f3rd</Link>{" "}
                          </h5>
                          <p className="nft-price yellow-color">$23,002.98</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="nft-item light-version style-2">
                  <div className="nft-inner">
                    <div className="nft-thumb">
                      <img
                        loading="lazy"
                        src={require("../assets/images/nft-item/style-2/08.jpg")}
                        alt="nft-img"
                      />
                    </div>
                    <div className="nft-content">
                      <div className="author-thumb">
                        <Link to="author.html" className="veryfied">
                          <img
                            loading="lazy"
                            src={require("../assets/images/seller/04.gif")}
                            alt="author-img"
                          />
                        </Link>
                      </div>
                      <div className="author-details d-flex flex-wrap align-items-center gap-15">
                        <div className="author-number">
                          <h3 className="fs-36">08</h3>
                        </div>
                        <div className="author-det-info">
                          <h5>
                            <Link to="author.html">Leo F3s </Link>{" "}
                          </h5>
                          <p className="nft-price yellow-color">$23,002.98</p>
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
