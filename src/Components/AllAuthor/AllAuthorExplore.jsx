import React from 'react';
import {Link} from "react-router-dom";

export default function AllAuthorExplore() {
  return( 
  <div>
      {/* <!-- ==========explore Section start Here========== --> */}
      <section className="explore-section padding-top padding-bottom">
        <div className="container">
          <div className="section-header light-version">
            <div className="nft-filter d-flex flex-wrap justify-content-center gap-15">
              <div className="form-floating">
                <select className="form-select" id="catSelect" aria-label="Floating label select example">
                  <option selected>By Rating</option>
                  <option value="1">By views</option>
                  <option value="2">By Popularity</option>
                  <option value="3">New Author</option>
                  <option value="3">Top Seller</option>
                </select>
                <label htmlFor="catSelect">Filter</label>
              </div>
              <div className="form-floating">
                <select className="form-select" id="sortSelect" aria-label="Floating label select example">
                  <option selected>All Authors</option>
                  <option value="1">Varified</option>
                  <option value="2">Unvarified</option>
                  <option value="3">Recenly joined</option>
                  <option value="3">Seller</option>
                  <option value="3">Collector </option>
                </select>
                <label htmlFor="sortSelect">Author Type</label>
              </div>
            </div>
            <div className="nft-search">
              <div className="form-floating nft-search-input">
                <input type="text" className="form-control" id="nftSearch" placeholder="Search Author" />
                <label htmlFor="nftSearch">Search Author</label>
                <button type="button"> <i className="icofont-search-1"></i></button>
              </div>
            </div>
          </div>
          <div className="section-wrapper">
            <div className="explore-wrapper">
              <div className="row justify-content-center gx-4 gy-3">
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="nft-item light-version style-2">
                    <div className="nft-inner">
                      <div className="nft-thumb">
                        <img src={("../../assets/images/nft-item/style-2/01.jpg")} alt="nft-img" />
                      </div>
                      <div className="nft-content">
                        <div className="author-thumb">
                          <Link to="author.html" className="veryfied"><img
                            src={("../../assets/images/seller/04.png")} alt="author-img" /></Link>
                        </div>
                        <div className="author-details d-flex flex-wrap align-items-center gap-15">
                          <div className="author-number">
                            <h3 className="fs-36">01</h3>
                          </div>
                          <div className="author-det-info">
                            <h5><Link to="author.html">Gihan Fernindo</Link> </h5>
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
                        <img loading="lazy" src={("../../assets/images/nft-item/style-2/02.jpg")} alt="nft-img" />
                      </div>
                      <div className="nft-content">
                        <div className="author-thumb">
                          <Link to="author.html" className="veryfied"><img loading="lazy"
                            src={("../../assets/images/seller/02.gif")} alt="author-img" /></Link>
                        </div>
                        <div className="author-details d-flex flex-wrap align-items-center gap-15">
                          <div className="author-number">
                            <h3 className="fs-36">02</h3>
                          </div>
                          <div className="author-det-info">
                            <h5><Link to="author.html">liao 5er</Link> </h5>
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
                        <img loading="lazy" src={("../../assets/images/nft-item/style-2/03.jpg")} alt="nft-img" />
                      </div>
                      <div className="nft-content">
                        <div className="author-thumb">
                          <Link to="author.html" className="veryfied"><img loading="lazy"
                            src={("../../assets/images/seller/03.png")} alt="author-img" /></Link>
                        </div>
                        <div className="author-details d-flex flex-wrap align-items-center gap-15">
                          <div className="author-number">
                            <h3 className="fs-36">03</h3>
                          </div>
                          <div className="author-det-info">
                            <h5><Link to="author.html">xox3 nindo</Link> </h5>
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
                        <img loading="lazy" src={("../../assets/images/nft-item/style-2/04.jpg")} alt="nft-img" />
                      </div>
                      <div className="nft-content">
                        <div className="author-thumb">
                          <Link to="author.html" className="veryfied"><img loading="lazy"
                            src={("../../assets/images/seller/05.gif")} alt="author-img" /></Link>
                        </div>
                        <div className="author-details d-flex flex-wrap align-items-center gap-15">
                          <div className="author-number">
                            <h3 className="fs-36">04</h3>
                          </div>
                          <div className="author-det-info">
                            <h5><Link to="author.html">raxel mrh</Link> </h5>
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
                        <img loading="lazy" src={("../../assets/images/nft-item/style-2/05.jpg")} alt="nft-img" />
                      </div>
                      <div className="nft-content">
                        <div className="author-thumb">
                          <Link to="author.html" className="veryfied"><img loading="lazy"
                            src={("../../assets/images/seller/02.png")} alt="author-img" /></Link>
                        </div>
                        <div className="author-details d-flex flex-wrap align-items-center gap-15">
                          <div className="author-number">
                            <h3 className="fs-36">05</h3>
                          </div>
                          <div className="author-det-info">
                            <h5><Link to="author.html">lsr 33xr </Link> </h5>
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
                        <img loading="lazy" src={("../../assets/images/nft-item/style-2/06.jpg")} alt="nft-img" />
                      </div>
                      <div className="nft-content">
                        <div className="author-thumb">
                          <Link to="author.html" className="veryfied"><img loading="lazy"
                            src={("../../assets/images/seller/07.gif")} alt="author-img" /></Link>
                        </div>
                        <div className="author-details d-flex flex-wrap align-items-center gap-15">
                          <div className="author-number">
                            <h3 className="fs-36">06</h3>
                          </div>
                          <div className="author-det-info">
                            <h5><Link to="author.html">Gihan Fernindo</Link> </h5>
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
                        <img loading="lazy" src={("../../assets/images/nft-item/style-2/07.jpg")} alt="nft-img" />
                      </div>
                      <div className="nft-content">
                        <div className="author-thumb">
                          <Link to="author.html" className="veryfied"><img loading="lazy"
                            src={("../../assets/images/seller/05.png")} alt="author-img" /></Link>
                        </div>
                        <div className="author-details d-flex flex-wrap align-items-center gap-15">
                          <div className="author-number">
                            <h3 className="fs-36">07</h3>
                          </div>
                          <div className="author-det-info">
                            <h5><Link to="author.html">xihan f3rd</Link> </h5>
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
                        <img loading="lazy" src={("../../assets/images/nft-item/style-2/08.jpg")} alt="nft-img" />
                      </div>
                      <div className="nft-content">
                        <div className="author-thumb">
                          <Link to="author.html" className="veryfied"><img loading="lazy"
                            src={("../../assets/images/seller/04.gif")} alt="author-img" /></Link>
                        </div>
                        <div className="author-details d-flex flex-wrap align-items-center gap-15">
                          <div className="author-number">
                            <h3 className="fs-36">08</h3>
                          </div>
                          <div className="author-det-info">
                            <h5><Link to="author.html">Leo F3s </Link> </h5>
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
                        <img src={("../../assets/images/nft-item/style-2/01.jpg")} alt="nft-img" />
                      </div>
                      <div className="nft-content">
                        <div className="author-thumb">
                          <Link to="author.html" className="veryfied"><img
                            src={("../../assets/images/seller/04.png")} alt="author-img" /></Link>
                        </div>
                        <div className="author-details d-flex flex-wrap align-items-center gap-15">
                          <div className="author-number">
                            <h3 className="fs-36">01</h3>
                          </div>
                          <div className="author-det-info">
                            <h5><Link to="author.html">Gihan Fernindo</Link> </h5>
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
                        <img loading="lazy" src={("../../assets/images/nft-item/style-2/02.jpg")} alt="nft-img" />
                      </div>
                      <div className="nft-content">
                        <div className="author-thumb">
                          <Link to="author.html" className="veryfied"><img loading="lazy"
                            src={("../../assets/images/seller/02.gif")} alt="author-img" /></Link>
                        </div>
                        <div className="author-details d-flex flex-wrap align-items-center gap-15">
                          <div className="author-number">
                            <h3 className="fs-36">02</h3>
                          </div>
                          <div className="author-det-info">
                            <h5><Link to="author.html">liao 5er</Link> </h5>
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
                        <img loading="lazy" src={("../../assets/images/nft-item/style-2/03.jpg")} alt="nft-img" />
                      </div>
                      <div className="nft-content">
                        <div className="author-thumb">
                          <Link to="author.html" className="veryfied"><img loading="lazy"
                            src={("../../assets/images/seller/03.png")} alt="author-img" /></Link>
                        </div>
                        <div className="author-details d-flex flex-wrap align-items-center gap-15">
                          <div className="author-number">
                            <h3 className="fs-36">03</h3>
                          </div>
                          <div className="author-det-info">
                            <h5><Link to="author.html">xox3 nindo</Link> </h5>
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
                        <img loading="lazy" src={("../../assets/images/nft-item/style-2/04.jpg")} alt="nft-img" />
                      </div>
                      <div className="nft-content">
                        <div className="author-thumb">
                          <Link to="author.html" className="veryfied"><img loading="lazy"
                            src={("../../assets/images/seller/05.gif")} alt="author-img" /></Link>
                        </div>
                        <div className="author-details d-flex flex-wrap align-items-center gap-15">
                          <div className="author-number">
                            <h3 className="fs-36">04</h3>
                          </div>
                          <div className="author-det-info">
                            <h5><Link to="author.html">raxel mrh</Link> </h5>
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
                        <img loading="lazy" src={("../../assets/images/nft-item/style-2/05.jpg")} alt="nft-img" />
                      </div>
                      <div className="nft-content">
                        <div className="author-thumb">
                          <Link to="author.html" className="veryfied"><img loading="lazy"
                            src={("../../assets/images/seller/02.png")} alt="author-img" /></Link>
                        </div>
                        <div className="author-details d-flex flex-wrap align-items-center gap-15">
                          <div className="author-number">
                            <h3 className="fs-36">05</h3>
                          </div>
                          <div className="author-det-info">
                            <h5><Link to="author.html">lsr 33xr </Link> </h5>
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
                        <img loading="lazy" src={("../../assets/images/nft-item/style-2/06.jpg")} alt="nft-img" />
                      </div>
                      <div className="nft-content">
                        <div className="author-thumb">
                          <Link to="author.html" className="veryfied"><img loading="lazy"
                            src={("../../assets/images/seller/07.gif")} alt="author-img" /></Link>
                        </div>
                        <div className="author-details d-flex flex-wrap align-items-center gap-15">
                          <div className="author-number">
                            <h3 className="fs-36">06</h3>
                          </div>
                          <div className="author-det-info">
                            <h5><Link to="author.html">Gihan Fernindo</Link> </h5>
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
                        <img loading="lazy" src={("../../assets/images/nft-item/style-2/07.jpg")} alt="nft-img" />
                      </div>
                      <div className="nft-content">
                        <div className="author-thumb">
                          <Link to="author.html" className="veryfied"><img loading="lazy"
                            src={("../../assets/images/seller/05.png")} alt="author-img" /></Link>
                        </div>
                        <div className="author-details d-flex flex-wrap align-items-center gap-15">
                          <div className="author-number">
                            <h3 className="fs-36">07</h3>
                          </div>
                          <div className="author-det-info">
                            <h5><Link to="author.html">xihan f3rd</Link> </h5>
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
                        <img loading="lazy" src={("../../assets/images/nft-item/style-2/08.jpg")} alt="nft-img" />
                      </div>
                      <div className="nft-content">
                        <div className="author-thumb">
                          <Link to="author.html" className="veryfied"><img loading="lazy"
                            src={("../../assets/images/seller/04.gif")} alt="author-img" /></Link>
                        </div>
                        <div className="author-details d-flex flex-wrap align-items-center gap-15">
                          <div className="author-number">
                            <h3 className="fs-36">08</h3>
                          </div>
                          <div className="author-det-info">
                            <h5><Link to="author.html">Leo F3s </Link> </h5>
                            <p className="nft-price yellow-color">$23,002.98</p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="load-btn mt-5">
                <Link to="all-authors.html" className="default-btn move-bottom">
                  <span>Load More</span>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* <!-- ==========explore Section ends Here========== --> */}
  </div>
  )
}
