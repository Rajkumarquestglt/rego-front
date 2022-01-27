import React from 'react';

function AuctionHeader() {
  return (
  <div>
      {/* <!-- ==========Page Header Section Start Here========== --> */}
    <section className="page-header-section style-1 light-version">
        <div className="container">
            <div className="page-header-content">
                <div className="page-header-inner">
                    <div className="page-title">
                        <h2>NFT's Live Auction </h2>
                    </div>
                    <ol className="breadcrumb">
                        <li><a href="/index">Home</a></li>
                        <li className="active">auction</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ==========Page Header Section Ends Here========== --> */}
  </div>
  )
}

export default AuctionHeader;
