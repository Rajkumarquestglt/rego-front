import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/logo-white.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../reducers/authReducer";
import logoImage from "../assets/images/logo/logo-2.png";

export default function Header() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.auth.value.isAuthenticated
  );
  const loginUser = useSelector((state) => state.auth.value.user);
  console.log(loginUser);
  return (
    // <!-- ===============// header section start here \\================= -->
    <header className="header light-version">
      <div className="container-fluid">
        <div className="header__content">
          <div className="header__logo">
            <Link to="/">
              <img
                src={logoImage}
                alt="logo"
                style={{ height: "45px", maxWidth: "initial" }}
              />
            </Link>
          </div>

          <form action="/search-result" className="header__search">
            <input
              type="text"
              name="search"
              placeholder="Search items, collections, and creators"
            />
            <button type="button">
              <i className="icofont-search-2"></i>
            </button>
            <button type="button" className="close">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
              </svg>
            </button>
          </form>
          <div className="header__menu ms-auto">
            <ul className="header__nav mb-0">
              <li className="header__nav-item">
                <Link to="/" className="header__nav-link">
                  Drop
                </Link>
              </li>
              <li className="header__nav-item">
                <Link
                  className="header__nav-link"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-offset="0,10"
                >
                  Explore
                </Link>

                <ul className="dropdown-menu header__nav-menu">
                  <li>
                    <Link className="drop-down-item" to="/explore">
                      Explore NFT's
                    </Link>
                  </li>
                  <li>
                    <Link className="drop-down-item" to="/auction">
                      Auction
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="header__nav-item">
                <Link
                  className="header__nav-link"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-offset="0,10"
                >
                  Platform
                </Link>

                <ul className="dropdown-menu header__nav-menu">
                  <li>
                    <Link className="drop-down-item" to="#">
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link className="drop-down-item" to="#">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link className="drop-down-item" to="#">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link className="drop-down-item" to="#">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="drop-down-item" to="#">
                      Terms and Conditions
                    </Link>
                  </li>
                  <li>
                    <Link className="drop-down-item" to="#">
                      Enquiry
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="header__nav-item">
                <Link to="/all-authors" className="header__nav-link">
                  Creaters
                </Link>
              </li>

              {/* <!--   <li className="header__nav-item">
                            <Link className="header__nav-link" to="#" role="button" data-bs-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">Pages</Link>

                            <ul className="dropdown-menu header__nav-menu">
                                <li><Link className="drop-down-item" to="item-details.html">NFT Details</Link></li>
                                <li><Link className="drop-down-item" to="all-authors.html">ALL Authors</Link></li>
                                <li><Link className="drop-down-item" to="all-authors-2.html">ALL Authors 2</Link></li>
                                <li><Link className="drop-down-item" to="author.html">Author Profile</Link></li>
                                <li><Link className="drop-down-item" to="wallet.html">Wallet Connect</Link></li>
                                <li><Link className="drop-down-item" to="404.html">404</Link></li>
                                <li><Link className="drop-down-item" to="forgot-pass.html">Forgot Password</Link></li>

                            </ul>
                        </li> --> */}

              <li className="header__nav-item d-none">
                <Link
                  className="header__nav-link"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-offset="0,10"
                >
                  Category
                </Link>

                <ul className="dropdown-menu header__nav-menu">
                  <li>
                    <Link className="drop-down-item" to="#">
                      Art
                    </Link>
                  </li>
                  <li>
                    <Link className="drop-down-item" to="#">
                      Music
                    </Link>
                  </li>
                  <li>
                    <Link className="drop-down-item" to="#">
                      Video
                    </Link>
                  </li>
                  <li>
                    <Link className="drop-down-item" to="#">
                      Digital Anime
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="header__nav-item">
                <Link to="https://regoex.com/buy" target="_blank" className="header__nav-link sign-up-btn">
                  Buy Rego
                </Link>
              </li>
              {isAuthenticated ? (
                ""
              ) : (
                <li className="header__nav-item">
                  <Link to="/signin" className="header__nav-link sign-up-btn">
                    Login
                  </Link>
                </li>
              )}
              <li className="header__nav-item">
                <Link to="/create" className="header__nav-link sign-up-btn">
                  Create NFT
                </Link>
              </li>
            </ul>
          </div>
          {isAuthenticated && (
            <div className="header__actions">
              <div className="header__action header__action--search">
                <button className="header__action-btn" type="button">
                  <i className="icofont-search-1"></i>
                </button>
              </div>

              <div className="header__action header__action--profile">
                <div className="dropdown">
                  <Link
                    className="dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-offset="-100,10"
                  >
                    <span data-blast="bgColor">
                      <i className="icofont-user"></i>
                    </span>{" "}
                    <span className="d-none d-md-inline">
                      {loginUser?.data.user.name}
                    </span>
                  </Link>

                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="author.html">
                        <span className="me-1">
                          <i className="icofont-options"></i>
                        </span>
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/activity">
                        <span className="me-1">
                          <i className="icofont-lightning-ray"></i>
                        </span>
                        Activity
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>

                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => {
                          dispatch(logout());
                        }}
                      >
                        {" "}
                        Sign Out{" "}
                        <span className="ms-1">
                          <i className="icofont-logout"></i>
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="wallet-btn">
                <Link to="wallet.html">
                  <span>
                    <i className="icofont-wallet" data-blast="color"></i>
                  </span>{" "}
                  <span className="d-none d-md-inline">
                    {loginUser?.data.balance}Rego
                  </span>{" "}
                </Link>
              </div>
            </div>
          )}
          <button className="menu-trigger header__btn" id="menu05">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
