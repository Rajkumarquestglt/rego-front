import { useEffect, useState } from "react";
import Footer from "../Components/Index/Footer";
import Header from "../Components/Index/Header";
import UpperStrip from "../Components/Index/UpperStrip";
import { Link } from "react-router-dom";

import axios from "axios";

import "../assets/css/icofont.min.css";
import "../assets/css/lightcase.css";
import "../assets/css/animate.css";
import "../assets/css/swiper-bundle.min.css";
import "../assets/css/style.min.css";
import "../assets/css/custom.css";

import Singlenft from "../Components/ExplorerComponents/NftExplore/Singlenft";

import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

export default function Explorer() {
  const url = "http://nft.regoex.com:3001/users/content";

  const isAuthenticated = useSelector(
    (state) => state.auth.value.isAuthenticated
  );
  const loginUser = useSelector((state) => state.auth.value.user);
  const [catagory, setCatagory] = useState("");
  const [sortBy, setSortBy] = useState("");

  const [collectionData, setCollectionData] = useState({
    list: [],
    total: "",
    loading: true,
  });
  const { list, total, loading } = collectionData;

  const getData = async (page, limit, tag, sortBy) => {
    console.log("get data hit");
    const res = await axios.post(url, {
      page,
      limit,
      search_tag: tag,
      sortBy,
    });
    console.log("data", res);
    setCollectionData({
      list: res.data.data,
      total: res.data.total,
      loading: false,
    });
  };
  console.log(list);

  useEffect(() => {
    setCollectionData({ ...collectionData, loading: true });
    getData(1, 20, catagory, sortBy);
  }, [catagory, sortBy]);

  return (
    <>
      <UpperStrip />
      <Header />
      <ToastContainer />
      <section className="explore-section light-version padding-top padding-bottom">
        <div className="container">
          <div className="section-header light-version">
            <div className="nft-filter d-flex flex-wrap justify-content-center">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="catSelect"
                  aria-label="Floating label select example"
                  onChange={(e) => setCatagory(e.target.value)}
                >
                  <option value="" selected>
                    All Category
                  </option>
                  <option value="Art">Art</option>
                  <option value="Music">Music</option>
                  <option value="Video">Video</option>
                  <option value="Digital Anime">Digital Anime</option>
                </select>
                <label htmlFor="catSelect">Select a Category</label>
              </div>
              <div className="form-floating">
                <select
                  className="form-select"
                  id="sortSelect"
                  aria-label="Floating label select example"
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="Newest" selected>
                    Newest
                  </option>
                  <option value="Oldest">Oldest</option>
                  {/* <option value="2">Trending</option>
                  <option value="3">Most Viewed</option>
                  <option value="4">Less Viewed</option>
                  <option value="5">Ending Soon</option>
                  <option value="6">Recently Sold </option>
                  <option value="7">Recently Created </option>
                  <option value="8">Recently Viewed </option> */}
                </select>
                <label htmlFor="sortSelect">Sort By</label>
              </div>
              <div className="form-floating">
                <select
                  className="form-select"
                  id="sortSelect"
                  aria-label="Floating label select example"
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="Low" selected>
                    Price: Low to High
                  </option>
                  <option value="High">Price: High to Low</option>
                  {/* <option value="2">Last Price: High to Low</option>
                  <option value="3">Last Price: Low to High</option>
                  <option value="4">Offer: High to Low</option>
                  <option value="5">Offer: Low To High</option> */}
                </select>
                <label htmlFor="sortSelect">Sort By Price</label>
              </div>
            </div>
            <div className="nft-search">
              <form action="/search-result">
                <div className="form-floating nft-search-input">
                  <input
                    type="text"
                    className="form-control"
                    id="nftSearch"
                    placeholder="Search NFT"
                    name="search"
                  />
                  <label htmlFor="nftSearch">Search NFT</label>
                  <button type="button">
                    <i className="icofont-search-1"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="section-wrapper">
            <div className="explore-wrapper">
              <div className="row justify-content-center gx-4 gy-3">
                {/*Name is for nft-top paramater and  detail,price,likes is for nftBottom   */}

                {loading == false &&
                  list?.content.map((item, i) => (
                    <Singlenft
                      key={i}
                      item={item}
                      name="Gucci Lucas"
                      Detail="EUPHORIA de"
                      price="0.34"
                      likes="230"
                    />
                  ))}
                {!loading && list.content.length === 0 && (
                  <div
                    className="text-center text-black"
                    style={{
                      color: "#000",
                      fontSize: "large",
                      fontFamily: "inherit",
                    }}
                  >
                    {" "}
                    No Data Available With Selected Category
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Link to="#" className="scrollToTop light-version">
        <i className="icofont-stylish-up"></i>
      </Link>
    </>
  );
}
