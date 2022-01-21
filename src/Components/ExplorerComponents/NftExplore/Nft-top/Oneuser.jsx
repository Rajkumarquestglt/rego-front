import React from 'react';
import { Link } from 'react-router-dom';

export default function Oneuser(props) {
  return (
      <div className="nft-item-top d-flex justify-content-between align-items-center">
          <div className="author-part">
              <ul className="author-list d-flex">
                  <li className="single-author d-flex align-items-center">
                      <Link to="author.html" className="veryfied">
                          <img loading="lazy" src={require("../../../../assets/images/seller/04.png")} alt="author-img" />
                      </Link>
                      <h6>
                          <Link to="author.html">{props.name}</Link>
                      </h6>
                  </li>
              </ul>
          </div>
          <div className="more-part">
              <div className=" dropstart">
                  <Link className=" dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="25,0" >
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
  )
}
