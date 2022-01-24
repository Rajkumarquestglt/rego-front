import React from 'react';

export default function SearchNft() {
  return (
    <div className="nft-search">
      <div className="form-floating nft-search-input">
        <input type="text" className="form-control" id="nftSearch" placeholder="Search NFT"/>
        <label htmlFor="nftSearch">Search NFT</label>
        <button type="button">{" "}
          <i className="icofont-search-1"></i>
        </button>
      </div>
    </div>
  );
}
