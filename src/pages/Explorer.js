import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import UpperStrip from "../Components/UpperStrip";
import { Link } from "react-router-dom";

import axios from "axios";

import "../assets/css/icofont.min.css";
import "../assets/css/lightcase.css";
import "../assets/css/animate.css";
import "../assets/css/swiper-bundle.min.css";
import "../assets/css/style.min.css";
import "../assets/css/custom.css";
import AllCategory from "../Components/ExplorerComponents/AllCategory";
import SortBy from "../Components/ExplorerComponents/SortBy";
import SearchNft from "../Components/ExplorerComponents/SearchNft";
import Singlenft from "../Components/ExplorerComponents/NftExplore/Singlenft";

import { useSelector } from "react-redux";

export default function Explorer() {
  const url = "http://nft.regoex.com:3001/users/content";

  const isAuthenticated = useSelector(
    (state) => state.auth.value.isAuthenticated
  );
  const loginUser = useSelector((state) => state.auth.value.user);

  const [collectionData, setCollectionData] = useState({
    list: [],
    total: "",
    loading: true,
  });
  const { list, total, loading } = collectionData;

  const getData = async (page, limit, tag) => {
    console.log("get data hit");
    const res = await axios.post(url, {
      page,
      limit,
      search_tag: tag,
    });
    console.log("data", res);
    setCollectionData({
      list: res.data.data,
      total: res.data.total,
      loading: false,
    });
  };
  console.log(list);

  useEffect(async () => {
    setCollectionData({ ...collectionData, loading: true });
    await getData(1, 20, "");
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
