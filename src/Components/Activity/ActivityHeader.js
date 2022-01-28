import React from 'react';

export default function ActivityHeader() {
  return (
  <div>
      {/* <!-- ==========Page Header Section Start Here========== --> */}
    <section className="page-header-section style-1 light-version">
        <div className="container">
            <div className="page-header-content">
                <div className="page-header-inner">
                    <div className="page-title">
                        <h2>All Activities </h2>
                    </div>
                    <ol className="breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li className="active">Activity</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ==========Page Header Section Ends Here========== --> */}
  </div>
  )
}
