import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import slideImage from "../assets/images/nft-item/category/02.jpg";

const url = "http://nft.regoex.com:3001/users/categories-nft";

export default function Category() {
  const [collectionData, setCollectionData] = useState({
    list: [],
    total: "",
    loading: true,
  });
  const { list, total, loading } = collectionData;

  const getData = async () => {
    console.log("get data hit");
    const res = await axios.get(url);
    console.log("data", res);
    setCollectionData({
      list: res.data,
      total: res.data.total,
      loading: false,
    });
  };
  console.log(list);

  useEffect(() => {
    setCollectionData({ ...collectionData, loading: true });
    getData();
  }, []);
  return (
    <section className="category-section padding-top padding-bottom">
      <div className="container">
        <div className="section-header style-3">
          <div className="header-shape">
            <span></span>
          </div>
          <h3>Browse By Catergory</h3>
        </div>
        <div className="section-wrapper">
          <div className="category-wrapper">
            <div className="row justify-content-center g-4">
              <div className="col-lg-4 col-sm-6">
                <div className="nft-item light-version cat-item">
                  <div className="nft-inner">
                    <div className="nft-cat-thumb ">
                      <div className="thumb-list swiper-wrapper">
                        {list?.artData?.content.map((item, i) => (
                          <div className="swiper-slide" key={i}>
                            <div className="single-thumb">
                              <img
                                src={`http://nft.regoex.com:3001/content/${item.image}`}
                                alt="cat"
                                style={{
                                  width: "106px",
                                  height: "160px",
                                }}
                              />
                            </div>
                          </div>
                        ))}
                        {/* <div className="swiper-slide">
                          <div className="single-thumb">
                            <img src={slideImage} alt="cat" />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="single-thumb">
                            <img src={slideImage} alt="cat" />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="single-thumb">
                            <img src={slideImage} alt="cat" />
                          </div>
                        </div> */}
                      </div>
                    </div>
                    <div className="nft-content">
                      <div className="author-details">
                        <h4>
                          <Link to="/explore">Digital Art</Link>{" "}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="nft-item light-version cat-item">
                  <div className="nft-inner">
                    <div className="nft-cat-thumb ">
                      <div className="thumb-list swiper-wrapper">
                        {list?.musicData?.content.map((item, i) => (
                          <div className="swiper-slide" key={i}>
                            <div className="single-thumb">
                              <img
                                src={`http://nft.regoex.com:3001/content/${item.image}`}
                                alt="cat"
                                style={{
                                  width: "106px",
                                  height: "160px",
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="nft-content">
                      <div className="author-details">
                        <h4>
                          <Link to="/explore">Music</Link>{" "}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="nft-item light-version cat-item">
                  <div className="nft-inner">
                    <div className="nft-cat-thumb ">
                      <div className="thumb-list swiper-wrapper">
                        {list?.artData?.content.map((item, i) => (
                          <div className="swiper-slide" key={i}>
                            <div className="single-thumb">
                              <img
                                src={`http://nft.regoex.com:3001/content/${item.image}`}
                                alt="cat"
                                style={{
                                  width: "106px",
                                  height: "160px",
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="nft-content">
                      <div className="author-details">
                        <h4>
                          <Link to="/explore">Domain Name </Link>{" "}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="nft-item light-version cat-item">
                  <div className="nft-inner">
                    <div className="nft-cat-thumb ">
                      <div className="thumb-list swiper-wrapper">
                        {list?.sportData?.content.map((item, i) => (
                          <div className="swiper-slide" key={i}>
                            <div className="single-thumb">
                              <img
                                src={`http://nft.regoex.com:3001/content/${item.image}`}
                                alt="cat"
                                style={{
                                  width: "106px",
                                  height: "160px",
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="nft-content">
                      <div className="author-details">
                        <h4>
                          <Link to="/explore">Sports </Link>{" "}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="nft-item light-version cat-item">
                  <div className="nft-inner">
                    <div className="nft-cat-thumb ">
                      <div className="thumb-list swiper-wrapper">
                        {list?.utilitiesData?.content.map((item, i) => (
                          <div className="swiper-slide" key={i}>
                            <div className="single-thumb">
                              <img
                                src={`http://nft.regoex.com:3001/content/${item.image}`}
                                alt="cat"
                                style={{
                                  width: "106px",
                                  height: "160px",
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="nft-content">
                      <div className="author-details">
                        <h4>
                          <Link to="/explore">Utilities</Link>{" "}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="nft-item light-version cat-item">
                  <div className="nft-inner">
                    <div className="nft-cat-thumb ">
                      <div className="thumb-list swiper-wrapper">
                        {list?.artData?.content.map((item, i) => (
                          <div className="swiper-slide" key={i}>
                            <div className="single-thumb">
                              <img
                                src={`http://nft.regoex.com:3001/content/${item.image}`}
                                alt="cat"
                                style={{
                                  width: "106px",
                                  height: "160px",
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="nft-content">
                      <div className="author-details">
                        <h4>
                          <Link to="explore.html">All NFT's</Link>{" "}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
