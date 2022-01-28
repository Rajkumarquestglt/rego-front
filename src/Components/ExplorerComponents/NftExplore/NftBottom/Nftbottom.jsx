import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";

import { BuyNFT } from "../../../../helpers/BuyNFT";
const url = "http://regoex.com/Buy-NFT";

export default function Nftbottom({ item }) {
  const isAuthenticated = useSelector(
    (state) => state.auth.value.isAuthenticated
  );
  const loginUser = useSelector((state) => state.auth.value.user);
  //   console.log(collectionData)
  let navigate = useNavigate();

  const buyNowHandler = async (item) => {
    console.log("loginUser", loginUser);

    if (isAuthenticated) {
      const res = await axios.post(url, {
        email: loginUser.user.email,
        amount: item.price,
        content_price: item.price,
      });

      if (res.data.status == true) {
        let hash = await BuyNFT(
          item.tokenId,
          item.ipfs_hash,
          item.price,
          item.signature
        );

        console.log("hash", hash);
        
        toast.success("Transaction Successful", {
          position: "top-center",
        });


        const buyRes = await axios.post(
          "http://nft.regoex.com:3001/users/buy",
          {
            content_id: item._id,
            amount: item.price,
            token_id: item.tokenId,
            to_address: null,
            from_address: null,
            hash: hash.transactionHash,
            nft_url: item.ipfs_hash,
          }
         );

        if (buyRes.status === true) {
          toast.success("Transaction Successful", {
            position: "top-center",
          });
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        }
      } else {
        toast.error("You do not have sufficient Fund", {
          position: "top-center",
        });
      }
    } else {
      navigate("/signin");
    }
  };

  return (
    <div className="nft-item-bottom">
      <div className="nft-thumb">
        <img
          loading="lazy"
          src={`http://nft.regoex.com:3001/content/${item.image}`}
          // src={`https://images.unsplash.com/photo-1643236294618-d60e33412802?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}
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
          {item.is_sold === "No" ? (
            <button onClick={() => buyNowHandler(item)} className="btn">
              Buy Now
            </button>
          ) : (
            "Sold Out"
          )}
          {/* <Link to="#" className="nft-like">
            <i className="icofont-heart"></i>
            {item.likes}
          </Link> */}
        </div>
      </div>
    </div>
  );
}
