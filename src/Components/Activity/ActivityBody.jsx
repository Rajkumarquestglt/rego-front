import React from 'react';
import {Link} from "react-router-dom"

export default function ActivityBody() {
  return (
  <div>
      {/* <!-- ==========Activity Section start Here========== --> */}
    <section className="activity-section padding-top padding-bottom">
        <div className="container">

            <div className="section-wrapper">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="section-header light-version">
                            <h3>Sitewide Activites</h3>
                            <div className="nft-filter d-flex flex-wrap justify-content-center gap-15">
                                <div className="form-floating">
                                    <select className="form-select" id="sortSelect"
                                        aria-label="Floating label select example">
                                        <option selected>Newest</option>
                                        <option value="1">Trending</option>
                                        <option value="2">Most Viewed</option>
                                        <option value="3">Less Viewed</option>
                                        <option value="3">Ending Soon</option>
                                        <option value="3">Recently Sold </option>
                                        <option value="3">Recently Created </option>
                                        <option value="3">Recently Viewed </option>
                                        <option value="3">Ending Soon</option>
                                    </select>
                                    <label for="sortSelect">Sort By</label>
                                </div>
                            </div>
                        </div>
                        <div className="activity-wrapper">
                            <div className="row gy-3">
                                <div className="col-12">
                                    <div className="activity-item light-version">
                                        <div className="lab-inner d-flex flex-wrap align-items-center p-3 p-md-4">
                                            <div className="lab-thumb me-3 me-md-4">
                                                <img src={("../../assets/images/activity/01.gif")} alt="img" />
                                            </div>
                                            <div className="lab-content">
                                                <h4><Link to="nft-single.html">Gold digger x</Link>
                                                </h4>
                                                <p className="mb-2">GOLD DIGGER (x Antoni Tudisco)
                                                    #44/44 was put up for sale for
                                                    <b>0.0991
                                                        ETH</b>
                                                </p>
                                                <p className="user-id">By: <Link to="author.html">@rasselmrh</Link></p>
                                                <p>At: 10/07/2021, 10:03 am</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="activity-item light-version">
                                        <div className="lab-inner d-flex flex-wrap align-items-center p-3 p-md-4">
                                            <div className="lab-thumb me-3 me-md-4">
                                                <img src={("../../assets/images/activity/02.gif")} alt="img" />
                                            </div>
                                            <div className="lab-content">
                                                <h4><Link to="nft-single.html">ghost lix xrf</Link>
                                                </h4>
                                                <p className="mb-2">two rare collection purchased for
                                                    <b>0.001
                                                        ETH</b>
                                                </p>
                                                <p className="user-id">By: <Link to="author.html">@reo2lxsr</Link></p>
                                                <p>At: 10/07/2021, 08:23 am</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="activity-item light-version">
                                        <div className="lab-inner d-flex flex-wrap align-items-center p-3 p-md-4">
                                            <div className="lab-thumb me-3 me-md-4">
                                                <img src={("../../assets/images/activity/04.gif")} alt="img" />
                                            </div>
                                            <div className="lab-content">
                                                <h4><Link to="nft-single.html">Trust In meh </Link>
                                                </h4>
                                                <p className="mb-2">The Shopping Cart #54/65 was put up
                                                    for sale for <b>0.021
                                                        ETH</b>
                                                </p>
                                                <p className="user-id">By: <Link to="author.html">@reo2lxsr</Link></p>
                                                <p>At: 10/07/2021, 12:03 am</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="activity-item light-version">
                                        <div className="lab-inner d-flex flex-wrap align-items-center p-3 p-md-4">
                                            <div className="lab-thumb me-3 me-md-4">
                                                <img src={("../../assets/images/activity/05.gif")} alt="img" />
                                            </div>
                                            <div className="lab-content">
                                                <h4><Link to="nft-single.html">Sysytan #0le </Link>
                                                </h4>
                                                <p className="mb-2">A offer of $200.00 was placed for
                                                    ÜNDERSTANDING (Sean Williams) #1/20
                                                </p>
                                                <p className="user-id">By: <Link to="author.html">@reo2lxsr</Link></p>
                                                <p>At: 10/07/2021, 10:03 am</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="activity-item light-version">
                                        <div className="lab-inner d-flex flex-wrap align-items-center p-3 p-md-4">
                                            <div className="lab-thumb me-3 me-md-4">
                                                <img src={("../../assets/images/activity/03.gif")} alt="img" />
                                            </div>
                                            <div className="lab-content">
                                                <h4><Link to="nft-single.html">ghost lix xrf</Link>
                                                </h4>
                                                <p className="mb-2">two rare collection purchased for
                                                    <b>0.001
                                                        ETH</b>
                                                </p>
                                                <p className="user-id">By: <Link to="author.html">@reo2lxsr</Link></p>
                                                <p>At: 10/07/2021, 02:03 pm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="load-btn mt-5">
                                <Link to="#" className="default-btn move-bottom">
                                    <span>Load More</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Aside Part --> */}
                    <div className="col-xl-4">
                        <aside className="mt-5 mt-xl-0">
                            <div className="widget light-version widget-tags">
                                <div className="widget-header">
                                    <h5 className="title">Filters By</h5>
                                </div>

                                <ul className="widget-wrapper justify-content-start">
                                    <li><Link to="#"><i className="icofont-listine-dots"></i> Listing</Link></li>
                                    <li><Link to="#" className="active"><i className="icofont-cart"></i> Purchases</Link></li>
                                    <li><Link to="#"><i className="icofont-sale-discount"></i> Sales</Link></li>
                                    <li><Link to="#"><i className="icofont-retweet"></i> Transfers</Link></li>
                                    <li><Link to="#"><i className="icofont-fire-burn"></i> Burns</Link></li>
                                    <li><Link to="#"><i className="icofont-court-hammer"></i> Bids</Link></li>
                                    <li><Link to="#"><i className="icofont-like"></i> Likes</Link></li>
                                    <li><Link to="#"><i className="icofont-favourite"></i> Following</Link></li>
                                    <li><Link to="#"><i className="icofont-history"></i> Recent</Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>

            </div>
        </div>
    </section>
    {/* <!-- ==========explore Section ends Here========== --> */}
  </div>)
}
