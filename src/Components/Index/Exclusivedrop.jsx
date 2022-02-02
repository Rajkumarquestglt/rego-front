import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/images/logo/logo-letter.png";

const limitedCollectionUrl =
  "http://nft.regoex.com:3001/users/limited-collection";
export default function Exclusivedrop() {
  const [collectionData, setCollectionData] = useState({
    list: [],
    total: "",
    loading: true,
  });
  const { list, total, loading } = collectionData;

  const getData = async () => {
    console.log("get data hit");
    const res = await axios.post(limitedCollectionUrl, {});
    console.log("limited collection \n", res);
    setCollectionData({
      list: res.data.data,
      total: res.data.total,
      loading: false,
    });
  };
  console.log({ list });

  useEffect(() => {
    setCollectionData({ ...collectionData, loading: true });
    getData();
  }, []);
  return (
    <section className="ex-drop-section padding-bottom">
      <div className="container">
        <div className="section-header style-3">
          <div className="header-shape">
            <span></span>
          </div>
          <h3>Exclusive NFT Drops</h3>
        </div>
        <div className="section-wrapper">
          <div className="ex-drop-wrapper">
            <div className="row justify-content-center gx-4 gy-3">
              {list?.map((item, i) => (
                <div className="col-xl-3 col-lg-4 col-sm-6" key={i}>
                  <div className="nft-item light-version">
                    <div className="nft-inner">
                      {/* <!-- nft top part --> */}
                      <div className="nft-item-top d-flex justify-content-between align-items-center">
                        <div className="author-part">
                          <ul className="author-list d-flex">
                            <li className="single-author d-flex align-items-center">
                              <Link to="author.html" className="veryfied">
                                <img
                                  loading="lazy"
                                  src={logo}
                                  alt="author-img"
                                />
                              </Link>
                              <h6>
                                <Link to="author.html">Gucci Lucas</Link>
                              </h6>
                            </li>
                          </ul>
                        </div>
                        <div className="more-part">
                          <div className=" dropstart">
                            <Link
                              className=" dropdown-toggle"
                              to="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              data-bs-offset="25,0"
                            >
                              <i className="icofont-flikr"></i>
                            </Link>

                            <ul className="dropdown-menu">
                              <li>
                                <Link className="dropdown-item" to="#">
                                  <span>
                                    <i className="icofont-warning"></i>
                                  </span>{" "}
                                  Report{" "}
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to="#">
                                  <span>
                                    <i className="icofont-reply"></i>
                                  </span>{" "}
                                  Share
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* <!-- nft-bottom part --> */}
                      <div className="nft-item-bottom">
                        <div className="nft-thumb">
                          <img
                            loading="lazy"
                            src={item.image}
                            alt="nft-img"
                            style={{ width: "227px", height: "170px" }}
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
                            <Link to="item-details.html">EUPHORIA de</Link>{" "}
                          </h4>
                          <div className="price-like d-flex justify-content-between align-items-center">
                            <p className="nft-price">
                              Price:{" "}
                              <span className="yellow-color">
                                {item.price} Rego
                              </span>
                            </p>
                            <Link to="#" className="nft-like">
                              <i className="icofont-heart"></i>
                              230
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
