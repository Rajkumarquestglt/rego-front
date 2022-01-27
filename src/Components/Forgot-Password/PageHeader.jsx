import React from 'react';
import { Link } from 'react-router-dom';

function PageHeader() {
  return (
      <>
          {/* <!-- ==========Page Header Section Start Here========== --> */}
          <section className="page-header-section style-1 light-version">
              <div className="container">
                  <div className="page-header-content">
                      <div className="page-header-inner">
                          <div className="page-title">
                              <h2>Forgot Password? </h2>
                          </div>
                          <ol className="breadcrumb">
                              <li><Link to="/index">Home</Link></li>
                              <li className="active">Forgot Password </li>
                          </ol>
                      </div>
                  </div>
              </div>
          </section>
          {/* <!-- ==========Page Header Section Ends Here========== --> */}
      </>
  );
}

export default PageHeader;
