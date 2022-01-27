import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"

export default function Nftbottom(props) {
    const url = "http://nft.regoex.com:3001/users/content"

    const [collectionData, setCollectionData] = useState({
        list: [],
        total: "",
        loading: true,
      });
    
      const getData = async () => {
        console.log("get data hit");
        const res = await axios.post(url, {

        });
        setCollectionData({
          list: res.data.data,
          total: res.data.total,
          loading: false,
        });
      };
    
      useEffect(() => {
        setCollectionData({ ...collectionData, loading: true });
        getData();
      }, []);
       
    

      
      console.log(collectionData)
       
  return (
      <div className="nft-item-bottom">
          <div className="nft-thumb">
              <img loading="lazy" src={require("../../../../assets/images/nft-item/02.gif")} alt="nft-img" />

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
