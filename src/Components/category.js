import React from 'react'
import {Link} from "react-router-dom";

export default function category() {
    return (
        <section className="category-section padding-top padding-bottom">
        <div className="container">
            <div className="section-header style-3">
                <div className="header-shape"><span></span></div>
                <h3>Browse By Catergory</h3>
            </div>
            <div className="section-wrapper">

                <div className="category-wrapper">
                    <div className="row justify-content-center g-4">
                        <div className="col-lg-4 col-sm-6">
                            <div className="nft-item light-version cat-item">
                                <div className="nft-inner">
                                    <div className="nft-cat-thumb ">
                                        <div className="thumb-list swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="single-thumb">
                                                    <img src={require("../assets/images/nft-item/category/01.jpg")} alt="cat"/>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="single-thumb">
                                                    <img src={require("../assets/images/nft-item/category/02.jpg")} alt="cat"/>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="single-thumb">
                                                    <img src={require("../assets/images/nft-item/category/03.jpg")} alt="cat"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nft-content">
                                        <div className="author-details">
                                            <h4><Link to="/explore">Digital Art</Link> </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="nft-item light-version cat-item">
                                <div className="nft-inner">
                                    <div className="nft-cat-thumb ">
                                        <div className="thumb-list swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="single-thumb"><img
                                                        src={require("../assets/images/nft-item/category/04.jpg")} alt="cat"/>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="single-thumb"><img
                                                        src={require("../assets/images/nft-item/category/05.jpg")} alt="cat"/>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="single-thumb"><img
                                                        src={require("../assets/images/nft-item/category/06.jpg")} alt="cat"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nft-content">
                                        <div className="author-details">
                                            <h4><Link to="/explore">Music</Link> </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="nft-item light-version cat-item">
                                <div className="nft-inner">
                                    <div className="nft-cat-thumb ">
                                        <div className="thumb-list swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="single-thumb"><img
                                                        src={require("../assets/images/nft-item/category/07.jpg")} alt="cat" />
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="single-thumb"><img
                                                        src={require("../assets/images/nft-item/category/08.jpg")} alt="cat" />
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="single-thumb"><img
                                                        src={require("../assets/images/nft-item/category/09.jpg")} alt="cat" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nft-content">
                                        <div className="author-details">
                                            <h4><Link to="/explore">Domain Name </Link> </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="nft-item light-version cat-item">
                                <div className="nft-inner">
                                    <div className="nft-cat-thumb ">
                                        <div className="thumb-list swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="single-thumb"><img
                                                        src={require("../assets/images/nft-item/category/10.jpg")} alt="cat" />
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="single-thumb"><img
                                                        src={require("../assets/images/nft-item/category/11.jpg")} alt="cat" />
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="single-thumb"><img
                                                        src={require("../assets/images/nft-item/category/12.jpg")} alt="cat" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nft-content">
                                        <div className="author-details">
                                            <h4><Link to="/explore">Sports </Link> </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="nft-item light-version cat-item">
                                <div className="nft-inner">
                                    <div className="nft-cat-thumb ">
                                        <div className="thumb-list swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="single-thumb"><img
                                                        src={require("../assets/images/nft-item/category/13.jpg")} alt="cat"/>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="single-thumb"><img
                                                        src={require("../assets/images/nft-item/category/14.jpg")} alt="cat"/>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="single-thumb"><img
                                                        src={require("../assets/images/nft-item/category/15.jpg")} alt="cat"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nft-content">
                                        <div className="author-details">
                                            <h4><Link to="/explore">Utilities</Link> </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="nft-item light-version cat-item">
                                <div className="nft-inner">
                                    <div className="nft-cat-thumb ">
                                        <div className="thumb-list swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="single-thumb"><img
                                                        src={require("../assets/images/nft-item/category/16.jpg")} alt="cat" />
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="single-thumb"><img
                                                        src={require("../assets/images/nft-item/category/17.jpg")} alt="cat" />
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="single-thumb"><img
                                                        src={require("../assets/images/nft-item/category/18.jpg")} alt="cat" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nft-content">
                                        <div className="author-details">
                                            <h4><Link to="explore.html">All NFT's</Link> </h4>
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
    )
}
