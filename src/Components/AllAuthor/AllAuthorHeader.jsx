import React from 'react';
import {Link} from "react-router-dom";

export default function AllAuthorHeader() {
  return (
  <div>
      {/* <!-- ==========Page Header Section Start Here========== --> */}
      <section className="page-header-section style-1 light-version">
        <div className="container">
          <div className="page-header-content">
            <div className="page-header-inner">
              <div className="page-title">
                <h2> All of our Authors</h2>
              </div>
              <ol className="breadcrumb">
                <li><Link to="/">Home</Link></li>
                <li className="active">All-authors</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ==========Page Header Section Ends Here========== --> */}
  </div>
  )
}
