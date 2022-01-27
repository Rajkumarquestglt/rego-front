import { Link } from "react-router-dom";
import axios from "axios";
// import { ToastContainer,toast } from "react-toastify";

export default function Nftbottom({ item }) {
  //   console.log(collectionData)

  const buyNowHandler = (item) => {
    console.log(item);
  };

  return (
    <div className="nft-item-bottom">
      <div className="nft-thumb">
        <img
          loading="lazy"
          //   src={`http://nft.regoex.com:3001/content/${item.image}`}
          src={`https://images.unsplash.com/photo-1643236294618-d60e33412802?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}
          alt="nft-img"
        />

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
          <Link to="/item-details">{item.description}</Link>{" "}
        </h4>
        <div className="price-like d-flex justify-content-between align-items-center">
          <p className="nft-price">
            Price: <span className="yellow-color">{item.price} Rego</span>
          </p>
          <button onClick={() => buyNowHandler(item)} className="btn">
            Buy Now
          </button>
          {/* <Link to="#" className="nft-like">
            <i className="icofont-heart"></i>
            {item.likes}
          </Link> */}
        </div>
      </div>
    </div>
  );
}
