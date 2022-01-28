import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Header from "../Components/Header";
import UpperStrip from "../Components/UpperStrip";
import AllCategory from "../Components/ExplorerComponents/AllCategory";
import SortBy from "../Components/ExplorerComponents/SortBy";
import Singlenft from "../Components/ExplorerComponents/NftExplore/Singlenft";
import SearchNft from "../Components/ExplorerComponents/SearchNft";

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
              <AllCategory />
              <SortBy />
            </div>
            <SearchNft />
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
