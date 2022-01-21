import React from 'react';
import Threeuser from './Nft-top/Threeuser';
import Nftbottom from './NftBottom/Nftbottom';

export default function TripleNft(props) {
  return (
    <div className="col-xl-3 col-lg-4 col-sm-6">
      <div className="nft-item light-version">
        <div className="nft-inner">
          {/* <!-- nft top part --> */}
          <Threeuser name={props.name}/>
          {/* <!-- nft-bottom part --> */}
          <Nftbottom nftDetail = {props.Detail} price ={props.price} likes={props.likes}/>
          {/* <div className="nft-item-bottom">
            <div className="nft-thumb">
              <img loading="lazy" src={require("../../../assets/images/nft-item/01.jpg")} alt="nft-img" /> */}

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
            {/* </div>
            <div className="nft-content">
              <h4>
                <Link to="item-details.html">Mewao com de</Link>{" "}
              </h4>
              <div className="price-like d-flex justify-content-between align-items-center">
                <p className="nft-price">
                  Price: <span className="yellow-color">0.34 ETH</span>
                </p>
                <Link to="#" className="nft-like">
                  <i className="icofont-heart"></i>
                  278
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
