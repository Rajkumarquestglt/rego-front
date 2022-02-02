import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Header from "../Components/Index/Header";
import UpperStrip from "../Components/Index/UpperStrip";
import Singlenft from "../Components/ExplorerComponents/NftExplore/Singlenft";

const url = "http://nft.regoex.com:3001/users/search";

const SearchResult = () => {
  const { search } = useLocation();

  let search_tag = search.split("=")[1];

  const [searchData, setSearchData] = useState({
    list: [],
    total: "",
    loading: true,
  });
  const { list, total, loading } = searchData;

  const getData = async () => {
    const res = await axios.post(url, { search_tag });
    setSearchData({
      list: [...res.data],
      total: res.data?.length,
      loading: false,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <UpperStrip />
      <Header />
      <section className="explore-section light-version padding-top padding-bottom">
        <div className="container">
          <div className="section-header light-version">
            <div className="nft-filter d-flex flex-wrap justify-content-center">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="catSelect"
                  aria-label="Floating label select example"
                >
                  <option selected>All Category</option>
                  <option value="1">Art</option>
                  <option value="2">Music</option>
                  <option value="3">Video</option>
                  <option value="3">Digital Anime</option>
                </select>
                <label htmlFor="catSelect">Select a Category</label>
              </div>
              <div className="form-floating">
                <select
                  className="form-select"
                  id="sortSelect"
                  aria-label="Floating label select example"
                >
                  <option selected>Newest</option>
                  <option value="1">Oldest</option>
                  <option value="2">Trending</option>
                  <option value="3">Most Viewed</option>
                  <option value="4">Less Viewed</option>
                  <option value="5">Ending Soon</option>
                  <option value="6">Recently Sold </option>
                  <option value="7">Recently Created </option>
                  <option value="8">Recently Viewed </option>
                </select>
                <label htmlFor="sortSelect">Sort By</label>
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
              You Searched For : {search_tag}
              <div className="row justify-content-center gx-4 gy-3">
                {/*Name is for nft-top paramater and  detail,price,likes is for nftBottom   */}
                {loading == false &&
                  list?.length > 0 &&
                  list?.map((item, i) => (
                    <Singlenft
                      key={i}
                      item={item}
                      name="Gucci Lucas"
                      Detail="EUPHORIA de"
                      price="0.34"
                      likes="230"
                    />
                  ))}
                {loading == false && list?.length === 0 && (
                  <div> No Data Found</div>
                )}
              </div>
              {loading == false && list?.length > 0 && (
                <div className="load-btn mt-5">
                  <Link to="#" className="default-btn move-bottom">
                    <span>Load More</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchResult;
