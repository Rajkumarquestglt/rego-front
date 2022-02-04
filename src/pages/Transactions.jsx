import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Footer from "../Components/Index/Footer";
import Header from "../Components/Index/Header";
import UpperStrip from "../Components/Index/UpperStrip";

const url = "http://nft.regoex.com:3001/users/transaction";

const Transactions = () => {
  const [showFull, setShowFull] = useState(false);
  const [collectionData, setCollectionData] = useState({
    list: [],
    total: "",
    loading: true,
  });

  const { list, total, loading } = collectionData;

  const { user, isAuthenticated } = useSelector((state) => state.auth.value);

  const getData = async () => {
    const res = await axios.post(url, {
      wallet_address: user.data.address,
    });
    setCollectionData({
      list: res.data.data,
      total: res.data.total,
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

      <div className="row" style={{ color: "black" }}>
        <div className="container">
          <div className="row mt-3 mt-lg-5 pt-3 pt-lg-5">
            <div className="col-md-12 d-flex justify-content-between">
              <h2 className="headingWh mb-4">All Transactions</h2>

              <button
                className="btn btndarkblue"
                style={{ height: "40px", minWidth: "160px" }}
                onClick={() => setShowFull(!showFull)}
              >
                {showFull ? "Show Compact" : "Show Full"}
              </button>
            </div>
          </div>
          {loading && "Loading ..."}
          {!loading && (
            <div
              className="row mt-2 mt-md-3"
              style={{ width: "100%", overflowX: "scroll", color: "black" }}
            >
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">NFT Name</th>
                    <th scope="col">Token Id</th>
                    <th scope="col">Wallet Address</th>
                    <th scope="col">IPFS Hash</th>
                    <th scope="col">Image</th>
                    <th scope="col">Address From</th>
                  </tr>
                </thead>
                <tbody>
                  {list.length > 0 &&
                    list?.map((item, i) => (
                      <tr key={item._id}>
                        <th scope="row">{i + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.token_id}</td>
                        <td>
                          {showFull
                            ? item.address_to
                            : `${item["address_to"]?.substr(0, 10)}.........`}
                        </td>
                        <td style={{ color: "black" }}>
                          {showFull ? (
                            <a
                              style={{ color: "black" }}
                              href={`https://gateway.ipfs.io/ipfs/${item.ipfs_hash}`}
                              target="_blank"
                            >
                              {item.ipfs_hash}
                            </a>
                          ) : (
                            <a
                              style={{ color: "black" }}
                              href={`https://gateway.ipfs.io/ipfs/${item.ipfs_hash}`}
                              target="_blank"
                            >
                              ${item["ipfs_hash"]?.substr(0, 10)}.....
                            </a>
                          )}
                        </td>

                        <td>
                          <a
                            style={{ color: "black" }}
                            href={item.image}
                            target="_blank"
                          >
                            <img
                              src={item.image}
                              alt="nft image"
                              height={50}
                              width={50}
                            />
                          </a>
                        </td>
                        <td>
                          {showFull
                            ? item.address_from
                            : `${item["address_from"]?.substr(0, 10)}.........`}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Transactions;
