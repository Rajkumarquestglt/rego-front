import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
// import { ToastContainer,toast } from "react-toastify";

export default function Nftbottom(props) {
    
      
    

      
    //   console.log(collectionData)
       
  return (
      <div className="nft-item-bottom">
          <div className="nft-thumb">
              <img loading="lazy" src={require()} alt="nft-img" />

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
                  <Link to="/item-details">{props.nftDetail}</Link>{" "}
              </h4>
              <div className="price-like d-flex justify-content-between align-items-center">
                  <p className="nft-price">
                      Price: <span className="yellow-color">{props.price} ETH</span>
                  </p>
                  <Link to="#" className="nft-like"><i className="icofont-heart"></i>{props.likes}</Link>
              </div>
          </div>
      </div>
  )
}
