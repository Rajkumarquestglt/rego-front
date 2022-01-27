import React from "react";
import Oneuser from "./Nft-top/Oneuser";
import Nftbottom from "./NftBottom/Nftbottom";

export default function Singlenft(props) {
  return (
    <div className="col-xl-3 col-lg-4 col-sm-6">
      <div className="nft-item light-version">
        <div className="nft-inner">
          {/* <!-- nft top part --> */}
          <Oneuser name={props.item.title} />
          {/* <!-- nft-bottom part --> */}
          {/* <Nftbottom nftDetail = {props.Detail} price ={props.price} likes={props.likes}/> */}
          <Nftbottom item={props.item} />
        </div>
      </div>
    </div>
  );
}
