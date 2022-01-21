import React from 'react'
import Footer from './Footer'
import Header from './Header'
import UpperStrip from './upperStrip'
import {Link} from "react-router-dom";
// import "../assets/css/bootstrap.min.css"
import "../assets/css/icofont.min.css"
import "../assets/css/lightcase.css"
import "../assets/css/animate.css"
import "../assets/css/swiper-bundle.min.css"
import "../assets/css/style.min.css"
import "../assets/css/custom.css"

export default function Explorer() {
    return (
        <>
        
        <UpperStrip />
        <Header />
        <section className="explore-section light-version padding-top padding-bottom">
        <div className="container">
            <div className="section-header light-version">
                <div className="nft-filter d-flex flex-wrap justify-content-center">
                    <div className="form-floating">
                        <select className="form-select" id="catSelect" aria-label="Floating label select example">
                            <option selected>All Category</option>
                            <option value="1">Art</option>
                            <option value="2">Music</option>
                            <option value="3">Video</option>
                            <option value="3">Digital Anime</option>
                        </select>
                        <label for="catSelect">Select a Category</label>
                    </div>
                    <div className="form-floating">
                        <select className="form-select" id="sortSelect" aria-label="Floating label select example">
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
                <div className="nft-search">
                    <div className="form-floating nft-search-input">
                        <input type="text" className="form-control" id="nftSearch" placeholder="Search NFT"/>
                        <label for="nftSearch">Search NFT</label>
                        <button type="button"> <i className="icofont-search-1"></i></button>
                    </div>
                </div>
            </div>
            <div className="section-wrapper">
                <div className="explore-wrapper">
                    <div className="row justify-content-center gx-4 gy-3">
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="nft-item light-version">
                                <div className="nft-inner">
                                    {/* <!-- nft top part --> */}
                                    <div className="nft-item-top d-flex justify-content-between align-items-center">
                                        <div className="author-part">
                                            <ul className="author-list d-flex">
                                                <li className="single-author d-flex align-items-center">
                                                    <Link to="author.html" className="veryfied"><img loading="lazy"
                                                            src={require("../assets/images/seller/04.png")} alt="author-img"/></Link>
                                                    <h6><Link to="author.html">Gucci Lucas</Link></h6>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="more-part">
                                            <div className=" dropstart">
                                                <Link className=" dropdown-toggle" to="#" role="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false"
                                                    data-bs-offset="25,0">
                                                    <i className="icofont-flikr"></i>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li><Link className="dropdown-item" to="#"><span>
                                                                <i className="icofont-warning"></i>
                                                            </span> Report </Link>
                                                    </li>
                                                    <li><Link className="dropdown-item" to="#"><span><i
                                                                    className="icofont-reply"></i></span> Share</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- nft-bottom part --> */}
                                    <div className="nft-item-bottom">
                                        <div className="nft-thumb">
                                            <img loading="lazy" src={require("../assets/images/nft-item/02.gif")} alt="nft-img" />

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
                                            <h4><Link to="item-details.html">EUPHORIA de</Link> </h4>
                                            <div className="price-like d-flex justify-content-between align-items-center">
                                                <p className="nft-price">Price: <span className="yellow-color">0.34 ETH</span>
                                                </p>
                                                <Link to="#" className="nft-like"><i className="icofont-heart"></i>
                                                    230</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="nft-item light-version">
                                <div className="nft-inner">
                                    {/* <!-- nft top part --> */}
                                    <div className="nft-item-top d-flex justify-content-between align-items-center">
                                        <div className="author-part">
                                            <ul className="author-list d-flex">
                                                <li className="single-author">
                                                    <Link to="author.html"><img loading="lazy"
                                                            src={require("../assets/images/seller/01.png")} alt="author-img" /></Link>
                                                </li>
                                                <li className="single-author">
                                                    <Link to="author.html"><img loading="lazy"
                                                            src={require("../assets/images/seller/01.gif")} alt="author-img"/></Link>
                                                </li>
                                                <li className="single-author d-flex align-items-center">
                                                    <Link to="author.html" className="veryfied"><img loading="lazy"
                                                            src={require("../assets/images/seller/02.png")} alt="author-img" /></Link>
                                                    <h6><Link to="author.html">Ecalo jers</Link></h6>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="more-part">
                                            <div className=" dropstart">
                                                <Link className=" dropdown-toggle" to="#" role="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false"
                                                    data-bs-offset="25,0">
                                                    <i className="icofont-flikr"></i>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li><Link className="dropdown-item" to="#"><span>
                                                                <i className="icofont-warning"></i>
                                                            </span> Report </Link>
                                                    </li>
                                                    <li><Link className="dropdown-item" to="#"><span><i
                                                                    className="icofont-reply"></i></span> Share</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- nft-bottom part --> */}
                                    <div className="nft-item-bottom">
                                        <div className="nft-thumb">
                                            <img loading="lazy" src={require("../assets/images/nft-item/01.jpg")} alt="nft-img"/>

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
                                            <h4><Link to="item-details.html">Mewao com de</Link> </h4>
                                            <div className="price-like d-flex justify-content-between align-items-center">
                                                <p className="nft-price">Price: <span className="yellow-color">0.34 ETH</span>
                                                </p>
                                                <Link to="#" className="nft-like"><i className="icofont-heart"></i>
                                                    278</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="nft-item light-version">
                                <div className="nft-inner">
                                    {/* <!-- nft top part --> */}
                                    <div className="nft-item-top d-flex justify-content-between align-items-center">
                                        <div className="author-part">
                                            <ul className="author-list d-flex">
                                                <li className="single-author">
                                                    <Link to="author.html"><img loading="lazy"
                                                            src={require("../assets/images/seller/02.png")} alt="author-img" /></Link>
                                                </li>
                                                <li className="single-author">
                                                    <Link to="author.html"><img loading="lazy"
                                                            src={require("../assets/images/seller/05.png")} alt="author-img"/></Link>
                                                </li>
                                                <li className="single-author d-flex align-items-center">
                                                    <Link to="author.html" className="veryfied"><img loading="lazy"
                                                            src={require("../assets/images/seller/04.png")} alt="author-img" /></Link>
                                                    <h6><Link to="author.html">Hola moc</Link></h6>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="more-part">
                                            <div className=" dropstart">
                                                <Link className=" dropdown-toggle" to="#" role="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false"
                                                    data-bs-offset="25,0">
                                                    <i className="icofont-flikr"></i>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li><Link className="dropdown-item" to="#"><span>
                                                                <i className="icofont-warning"></i>
                                                            </span> Report </Link>
                                                    </li>
                                                    <li><Link className="dropdown-item" to="#"><span><i
                                                                    className="icofont-reply"></i></span> Share</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- nft-bottom part --> */}
                                    <div className="nft-item-bottom">
                                        <div className="nft-thumb">
                                            <img loading="lazy" src={require("../assets/images/nft-item/06.gif")} alt="nft-img"/>

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
                                            <h4><Link to="item-details.html">pet mice rio</Link> </h4>
                                            <div className="price-like d-flex justify-content-between align-items-center">
                                                <p className="nft-price">Price: <span className="yellow-color">0.34 ETH</span>
                                                </p>
                                                <Link to="#" className="nft-like"><i className="icofont-heart"></i>
                                                    340</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="nft-item light-version">
                                <div className="nft-inner">
                                    {/* <!-- nft top part --> */}
                                    <div className="nft-item-top d-flex justify-content-between align-items-center">
                                        <div className="author-part">
                                            <ul className="author-list d-flex">
                                                <li className="single-author">
                                                    <Link to="author.html"><img loading="lazy"
                                                            src={require("../assets/images/seller/06.png")} alt="author-img" /></Link>
                                                </li>
                                                <li className="single-author d-flex align-items-center">
                                                    <Link to="author.html" className="veryfied"><img loading="lazy"
                                                            src={require("../assets/images/seller/05.gif")} alt="author-img"/></Link>
                                                    <h6><Link to="author.html">Logicto pen</Link></h6>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="more-part">
                                            <div className=" dropstart">
                                                <Link className=" dropdown-toggle" to="#" role="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false"
                                                    data-bs-offset="25,0">
                                                    <i className="icofont-flikr"></i>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li><Link className="dropdown-item" to="#"><span>
                                                                <i className="icofont-warning"></i>
                                                            </span> Report </Link>
                                                    </li>
                                                    <li><Link className="dropdown-item" to="#"><span><i
                                                                    className="icofont-reply"></i></span> Share</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- nft-bottom part --> */}
                                    <div className="nft-item-bottom">
                                        <div className="nft-thumb">
                                            <img loading="lazy" src={require("../assets/images/nft-item/04.jpg")} alt="nft-img"/>

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
                                            <h4><Link to="item-details.html">Logical Impact </Link> </h4>
                                            <div className="price-like d-flex justify-content-between align-items-center">
                                                <p className="nft-price">Price: <span className="yellow-color">0.34 ETH</span>
                                                </p>
                                                <Link to="#" className="nft-like"><i className="icofont-heart"></i>
                                                    330</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="nft-item light-version">
                                <div className="nft-inner">
                                    {/* <!-- nft top part --> */}
                                    <div className="nft-item-top d-flex justify-content-between align-items-center">
                                        <div className="author-part">
                                            <ul className="author-list d-flex">
                                                <li className="single-author">
                                                    <Link to="author.html"><img loading="lazy"
                                                            src={require("../assets/images/seller/06.png")} alt="author-img" /></Link>
                                                </li>
                                                <li className="single-author">
                                                    <Link to="author.html"><img loading="lazy"
                                                            src={require("../assets/images/seller/07.gif")} alt="author-img" /></Link>
                                                </li>
                                                <li className="single-author d-flex align-items-center">
                                                    <Link to="author.html" className="veryfied"><img loading="lazy"
                                                            src={require("../assets/images/seller/09.png")} alt="author-img" /></Link>
                                                    <h6><Link to="author.html">unique lo</Link></h6>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="more-part"><i className="icofont-flikr"></i></div>
                                    </div>
                                    {/* <!-- nft-bottom part --> */}
                                    <div className="nft-item-bottom">
                                        <div className="nft-thumb">
                                            <img loading="lazy" src={require("../assets/images/nft-item/03.jpg")} alt="nft-img" />

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
                                            <h4><Link to="item-details.html">Fly on high</Link> </h4>
                                            <div className="price-like d-flex justify-content-between align-items-center">
                                                <p className="nft-price">Price: <span className="yellow-color">0.34 ETH</span>
                                                </p>
                                                <Link to="#" className="nft-like"><i className="icofont-heart"></i>
                                                    355</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="nft-item light-version">
                                <div className="nft-inner">
                                    {/* <!-- nft top part --> */}
                                    <div className="nft-item-top d-flex justify-content-between align-items-center">
                                        <div className="author-part">
                                            <ul className="author-list d-flex">
                                                <li className="single-author d-flex align-items-center">
                                                    <Link to="author.html" className="veryfied"><img loading="lazy"
                                                            src={require("../assets/images/seller/05.gif")} alt="author-img" /></Link>
                                                    <h6><Link to="author.html">Monica bel</Link></h6>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="more-part">
                                            <div className=" dropstart">
                                                <Link className=" dropdown-toggle" to="#" role="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false"
                                                    data-bs-offset="25,0">
                                                    <i className="icofont-flikr"></i>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li><Link className="dropdown-item" to="#"><span>
                                                                <i className="icofont-warning"></i>
                                                            </span> Report </Link>
                                                    </li>
                                                    <li><Link className="dropdown-item" to="#"><span><i
                                                                    className="icofont-reply"></i></span> Share</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- nft-bottom part --> */}
                                    <div className="nft-item-bottom">
                                        <div className="nft-thumb">
                                            <img loading="lazy" src={require("../assets/images/nft-item/04.gif")} alt="nft-img"/>

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
                                            <h4><Link to="item-details.html">kiara rodri de</Link> </h4>
                                            <div className="price-like d-flex justify-content-between align-items-center">
                                                <p className="nft-price">Price: <span className="yellow-color">0.34 ETH</span>
                                                </p>
                                                <Link to="#" className="nft-like"><i className="icofont-heart"></i>
                                                    60</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="nft-item light-version">
                                <div className="nft-inner">
                                    {/* <!-- nft top part --> */}
                                    <div className="nft-item-top d-flex justify-content-between align-items-center">
                                        <div className="author-part">
                                            <ul className="author-list d-flex">
                                                <li className="single-author">
                                                    <Link to="author.html"><img loading="lazy"
                                                            src={require("../assets/images/seller/08.gif")} alt="author-img" /></Link>
                                                </li>
                                                <li className="single-author">
                                                    <Link to="author.html"><img loading="lazy"
                                                            src={require("../assets/images/seller/01.png")} alt="author-img" /></Link>
                                                </li>
                                                <li className="single-author d-flex align-items-center">
                                                    <Link to="author.html" className="veryfied"><img loading="lazy"
                                                            src={require("../assets/images/seller/11.png")} alt="author-img" /></Link>
                                                    <h6><Link to="author.html">Gucci L.</Link></h6>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="more-part">
                                            <div className=" dropstart">
                                                <Link className=" dropdown-toggle" to="#" role="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false"
                                                    data-bs-offset="25,0">
                                                    <i className="icofont-flikr"></i>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li><Link className="dropdown-item" to="#"><span>
                                                                <i className="icofont-warning"></i>
                                                            </span> Report </Link>
                                                    </li>
                                                    <li><Link className="dropdown-item" to="#"><span><i
                                                                    className="icofont-reply"></i></span> Share</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- nft-bottom part --> */}
                                    <div className="nft-item-bottom">
                                        <div className="nft-thumb">
                                            <img loading="lazy" src={require("../assets/images/nft-item/05.jpg")} alt="nft-img" />

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
                                            <h4><Link to="item-details.html">EUPHORIA de</Link> </h4>
                                            <div className="price-like d-flex justify-content-between align-items-center">
                                                <p className="nft-price">Price: <span className="yellow-color">0.34 ETH</span>
                                                </p>
                                                <Link to="#" className="nft-like"><i className="icofont-heart"></i>
                                                    230</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="nft-item light-version">
                                <div className="nft-inner">
                                    {/* <!-- nft top part --> */}
                                    <div className="nft-item-top d-flex justify-content-between align-items-center">
                                        <div className="author-part">
                                            <ul className="author-list d-flex">
                                                <li className="single-author">
                                                    <Link to="author.html"><img loading="lazy"
                                                            src={require("../assets/images/seller/01.png")} alt="author-img"/></Link>
                                                </li>
                                                <li className="single-author">
                                                    <Link to="author.html"><img loading="lazy"
                                                            src={require("../assets/images/seller/07.png")} alt="author-img" /></Link>
                                                </li>
                                                <li className="single-author d-flex align-items-center">
                                                    <Link to="author.html" className="veryfied"><img loading="lazy"
                                                            src={require("../assets/images/seller/09.png")} alt="author-img" /></Link>
                                                    <h6><Link to="author.html">ptrax elm.</Link></h6>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="more-part">
                                            <div className=" dropstart">
                                                <Link className=" dropdown-toggle" to="#" role="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false"
                                                    data-bs-offset="25,0">
                                                    <i className="icofont-flikr"></i>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li><Link className="dropdown-item" to="#"><span>
                                                                <i className="icofont-warning"></i>
                                                            </span> Report </Link>
                                                    </li>
                                                    <li><Link className="dropdown-item" to="#"><span><i
                                                                    className="icofont-reply"></i></span> Share</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- nft-bottom part --> */}
                                    <div className="nft-item-bottom">
                                        <div className="nft-thumb">
                                            <img loading="lazy" src={require("../assets/images/nft-item/05.gif")} alt="nft-img" />

                                            {/* <!-- nft countdwon -->
                                            <!-- <ul className="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
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
                                            <h4><Link to="item-details.html">Homies wall</Link> </h4>
                                            <div className="price-like d-flex justify-content-between align-items-center">
                                                <p className="nft-price">Price: <span className="yellow-color">0.34 ETH</span>
                                                </p>
                                                <Link to="#" className="nft-like"><i className="icofont-heart"></i>
                                                    930</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="nft-item light-version">
                                <div className="nft-inner">
                                    {/* <!-- nft top part --> */}
                                    <div className="nft-item-top d-flex justify-content-between align-items-center">
                                        <div className="author-part">
                                            <ul className="author-list d-flex">
                                                <li className="single-author">
                                                    <Link to="author.html"><img loading="lazy"
                                                            src={require("../assets/images/seller/06.png")} alt="author-img" /></Link>
                                                </li>
                                                <li className="single-author d-flex align-items-center">
                                                    <Link to="author.html" className="veryfied"><img loading="lazy"
                                                            src={require("../assets/images/seller/05.gif")} alt="author-img" /></Link>
                                                    <h6><Link to="author.html">Logicto pen</Link></h6>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="more-part">
                                            <div className=" dropstart">
                                                <Link className=" dropdown-toggle" to="#" role="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false"
                                                    data-bs-offset="25,0">
                                                    <i className="icofont-flikr"></i>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li><Link className="dropdown-item" to="#"><span>
                                                                <i className="icofont-warning"></i>
                                                            </span> Report </Link>
                                                    </li>
                                                    <li><Link className="dropdown-item" to="#"><span><i
                                                                    className="icofont-reply"></i></span> Share</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- nft-bottom part --> */}
                                    <div className="nft-item-bottom">
                                        <div className="nft-thumb">
                                            <img loading="lazy" src={require("../assets/images/nft-item/01.gif")} alt="nft-img"/>

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
                                            <h4><Link to="item-details.html">Logical Impact </Link> </h4>
                                            <div className="price-like d-flex justify-content-between align-items-center">
                                                <p className="nft-price">Price: <span className="yellow-color">0.34 ETH</span>
                                                </p>
                                                <Link to="#" className="nft-like"><i className="icofont-heart"></i>
                                                    330</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="nft-item light-version">
                                <div className="nft-inner">
                                    {/* <!-- nft top part --> */}
                                    <div className="nft-item-top d-flex justify-content-between align-items-center">
                                        <div className="author-part">
                                            <ul className="author-list d-flex">
                                                <li className="single-author">
                                                    <Link to="author.html"><img loading="lazy"
                                                            src={require("../assets/images/seller/02.png")} alt="author-img"/></Link>
                                                </li>
                                                <li className="single-author">
                                                    <Link to="author.html"><img loading="lazy"
                                                            src={require("../assets/images/seller/05.png")} alt="author-img"/></Link>
                                                </li>
                                                <li className="single-author d-flex align-items-center">
                                                    <Link to="author.html" className="veryfied"><img loading="lazy"
                                                            src={require("../assets/images/seller/04.png")} alt="author-img"/></Link>
                                                    <h6><Link to="author.html">Hola moc</Link></h6>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="more-part">
                                            <div className=" dropstart">
                                                <Link className=" dropdown-toggle" to="#" role="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false"
                                                    data-bs-offset="25,0">
                                                    <i className="icofont-flikr"></i>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li><Link className="dropdown-item" to="#"><span>
                                                                <i className="icofont-warning"></i>
                                                            </span> Report </Link>
                                                    </li>
                                                    <li><Link className="dropdown-item" to="#"><span><i
                                                                    className="icofont-reply"></i></span> Share</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- nft-bottom part --> */}
                                    <div className="nft-item-bottom">
                                        <div className="nft-thumb">
                                            <img loading="lazy" src={require("../assets/images/nft-item/06.jpg")} alt="nft-img"/>

                                            {/* <!-- nft countdwon -->
                                            <!-- <ul className="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
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
                                            <h4><Link to="item-details.html">pet mice rio</Link> </h4>
                                            <div className="price-like d-flex justify-content-between align-items-center">
                                                <p className="nft-price">Price: <span className="yellow-color">0.34 ETH</span>
                                                </p>
                                                <Link to="#" className="nft-like"><i className="icofont-heart"></i>
                                                    340</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="nft-item light-version">
                                <div className="nft-inner">
                                    {/* <!-- nft top part --> */}
                                    <div className="nft-item-top d-flex justify-content-between align-items-center">
                                        <div className="author-part">
                                            <ul className="author-list d-flex">
                                                <li className="single-author">
                                                    <Link to="author.html"><img loading="lazy"
                                                            src={require("../assets/images/seller/01.png")} alt="author-img"/></Link>
                                                </li>
                                                <li className="single-author">
                                                    <Link to="author.html"><img loading="lazy"
                                                            src={require("../assets/images/seller/01.gif")} alt="author-img"/></Link>
                                                </li>
                                                <li className="single-author d-flex align-items-center">
                                                    <Link to="author.html" className="veryfied"><img loading="lazy"
                                                            src={require("../assets/images/seller/02.png")} alt="author-img"/></Link>
                                                    <h6><Link to="author.html">Ecalo jers</Link></h6>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="more-part">
                                            <div className=" dropstart">
                                                <Link className=" dropdown-toggle" to="#" role="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false"
                                                    data-bs-offset="25,0">
                                                    <i className="icofont-flikr"></i>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li><Link className="dropdown-item" to="#"><span>
                                                                <i className="icofont-warning"></i>
                                                            </span> Report </Link>
                                                    </li>
                                                    <li><Link className="dropdown-item" to="#"><span><i
                                                                    className="icofont-reply"></i></span> Share</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- nft-bottom part --> */}
                                    <div className="nft-item-bottom">
                                        <div className="nft-thumb">
                                            <img loading="lazy" src={require("../assets/images/nft-item/03.gif")} alt="nft-img"/>

                                            {/* <!-- nft countdwon -->
                                            <!-- <ul className="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
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
                                            <h4><Link to="item-details.html">Mewao com de</Link> </h4>
                                            <div className="price-like d-flex justify-content-between align-items-center">
                                                <p className="nft-price">Price: <span className="yellow-color">0.34 ETH</span>
                                                </p>
                                                <Link to="#" className="nft-like"><i className="icofont-heart"></i>
                                                    278</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="nft-item light-version">
                                <div className="nft-inner">
                                    {/* <!-- nft top part --> */}
                                    <div className="nft-item-top d-flex justify-content-between align-items-center">
                                        <div className="author-part">
                                            <ul className="author-list d-flex">
                                                <li className="single-author d-flex align-items-center">
                                                    <Link to="author.html" className="veryfied"><img loading="lazy"
                                                            src={require("../assets/images/seller/04.png")} alt="author-img" /></Link>
                                                    <h6><Link to="author.html">Gucci Lucas</Link></h6>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="more-part">
                                            <div className=" dropstart">
                                                <Link className=" dropdown-toggle" to="#" role="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false"
                                                    data-bs-offset="25,0">
                                                    <i className="icofont-flikr"></i>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li><Link className="dropdown-item" to="#"><span>
                                                                <i className="icofont-warning"></i>
                                                            </span> Report </Link>
                                                    </li>
                                                    <li><Link className="dropdown-item" to="#"><span><i
                                                                    className="icofont-reply"></i></span> Share</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- nft-bottom part --> */}
                                    <div className="nft-item-bottom">
                                        <div className="nft-thumb">
                                            <img loading="lazy" src={require("../assets/images/nft-item/08.jpg")} alt="nft-img"/>

                                            {/* <!-- nft countdwon -->
                                            <!-- <ul className="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
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
                                            <h4><Link to="item-details.html">EUPHORIA de</Link> </h4>
                                            <div className="price-like d-flex justify-content-between align-items-center">
                                                <p className="nft-price">Price: <span className="yellow-color">0.34 ETH</span>
                                                </p>
                                                <Link to="#" className="nft-like"><i className="icofont-heart"></i>230</Link>
                                            </div>
                                        </div>
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
        </div>
        </section>
        <Footer />
        <Link to="#" className="scrollToTop light-version"><i className="icofont-stylish-up"></i></Link>
        </>
    )
}
