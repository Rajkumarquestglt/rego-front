import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import UpperStrip from '../Components/UpperStrip'
import {Link} from "react-router-dom";
import {useEffect, useState} from 'react';

import axios from "axios"

import "../assets/css/icofont.min.css"
import "../assets/css/lightcase.css"
import "../assets/css/animate.css"
import "../assets/css/swiper-bundle.min.css"
import "../assets/css/style.min.css"
import "../assets/css/custom.css"
import AllCategory from '../Components/ExplorerComponents/AllCategory';
import SortBy from '../Components/ExplorerComponents/SortBy';
import SearchNft from '../Components/ExplorerComponents/SearchNft';
import Singlenft from '../Components/ExplorerComponents/NftExplore/Singlenft';
import TripleNft from '../Components/ExplorerComponents/NftExplore/TripleNft';
import Doublenft from '../Components/ExplorerComponents/NftExplore/Doublenft';

export default function Explorer() {
    const url = "http://nft.regoex.com:3001/users/content"

    const Collection = () => {
        
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
            setCollectionData({
              list: res.data.data,
              total: res.data.total,
              loading: false,
            });
          };
          useEffect(() => {
            setCollectionData({ ...collectionData, loading: true });
            getData(1,20,"");
          }, []);
          setCollectionData({
            ...collectionData,
            list: [],
            loading: true,
          });

        }
        
    return (
        <>
        
        <UpperStrip />
        <Header />
        <section className="explore-section light-version padding-top padding-bottom">
        <div className='container'>
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
                        <Singlenft name="Gucci Lucas" Detail="EUPHORIA de" price="0.34" likes="230"/>
                        <TripleNft  name="Ecalo jers" Detail="Mewao com de" price="0.34" likes="278"/>
                        <TripleNft  name="Hola moc" Detail="pet mice rio" price="0.34" likes="340"/>
                        <Doublenft name= "Logicto pen" Detail="Logical Impact" price= "0.34" likes ="330"/>
                        <TripleNft  name="unique lo" Detail="Fly on high" price="0.34" likes="355"/>
                        <Singlenft name="Monica bel" Detail="kiara rodri de" price="0.34" likes="60"/>
                        <TripleNft  name="Gucci L." Detail="EUPHORIA de" price="0.34" likes="230"/>
                        <TripleNft  name="ptrax elm." Detail="Homies wall" price="0.34" likes="930"/>
                        <Doublenft name= "Logicto pen" Detail="Logical Impact" price= "0.34" likes ="330"/>
                        <TripleNft  name="Hola moc" Detail="pet mice rio" price="0.34" likes="340"/>
                        <TripleNft  name="Ecalo jers" Detail="Mewao com de" price="0.34" likes="278"/>
                        <Singlenft name="Gucci Lucas" Detail="EUPHORIA de" price="0.34" likes="230"/>
                    </div>
                    <div className="load-btn mt-5">
                        <Link to="#" className="default-btn move-bottom">
                            <span>Load More</span>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
        </section>
        <Footer />
        <Link to="#" className="scrollToTop light-version"><i className="icofont-stylish-up"></i></Link>
        </>
    )
}
