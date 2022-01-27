import React from 'react';
import { Link } from 'react-router-dom';

function Header404() {
  return (
      <div>
          {/* <!-- ==========Page Header Section Start Here========== --> */}
          <section className="page-header-section style-1 light-version">
              <div className="container">
                  <div className="page-header-content">
                      <div className="page-header-inner">
                          <div className="page-title">
                              <h2>404 Error Page </h2>
                          </div>
                          <ol className="breadcrumb">
                              <li><Link tp="/index">Home</Link></li>
                              <li className="active">404 </li>
                          </ol>
                      </div>
                  </div>
              </div>
          </section>
          {/* <!-- ==========Page Header Section Ends Here========== --> */}

      </div>
  )
}

export default Header404;
