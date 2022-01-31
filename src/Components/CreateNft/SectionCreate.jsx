import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {ipfsMint} from "../../helpers/ipfs"
import { Mint } from "../../helpers/Mint";
function SectionCreate() {
  const url = "http://nft.regoex.com:3001/users/add-content";
  const [photoUrl, setPhotoUrl] = useState(null);
  const [contentImage,setContentImage]=useState(null);
  const [formData, setFormData] = useState({
    title: "",
    file: "",
    price: "",
    category: "",
    metadata: "",
    description: "",
  });

  const { title, file, price, category, metadata, description } = formData;

  const handleFile=(e)=>{

    const { files } = e.target;


      
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(files[0]);
     
    reader.onloadend = () => {
      setContentImage(reader.result)
     }




     if (files[0]) { 

      
      
      if (files[0].type.includes("image")) {
        const filename = files[0].name;
        const fileExtension = filename.substr(
          filename.lastIndexOf(".") + 1
        );
        if (
          fileExtension.toLowerCase() === "png" ||
          fileExtension.toLowerCase() === "jpg" ||
          fileExtension.toLowerCase() === "gif" ||
          fileExtension.toLowerCase() === "jpeg"
        ) {
          setFormData({
            ...formData,
            file: e.currentTarget.files[0],
          });
          setPhotoUrl(
            URL.createObjectURL(files[0])
          );
        }
      }
    }

  }  
  const handleFormInput = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    // console.log(formData);
    if (
      title === "" ||
      price === "" ||
      category === "" ||
      metadata === "" ||
      description === ""
    ) {
      toast.warn("Please Fill All Values", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    console.log(formData);
    const DataObj={name:title,price:price,description:description}
    const hash=await ipfsMint(contentImage,DataObj);

    const voucher= await Mint(hash,price);
    console.log('voucher',voucher)
    const dataToSubmit = new FormData();
    dataToSubmit.append("email", "amantotla@questglt.org");
    dataToSubmit.append("title", title);
    dataToSubmit.append("price", price);
    dataToSubmit.append("file", file);
    dataToSubmit.append("metadata", metadata);
    dataToSubmit.append("category", category);
    dataToSubmit.append("description", description);
    dataToSubmit.append("wallet_address",voucher.address);
    dataToSubmit.append("ipfs_hash", hash);
     
    dataToSubmit.append("tokenId",voucher.voucher.tokenId);

    dataToSubmit.append("signature",voucher.voucher.signature);


    console.log(dataToSubmit);

    const response = await axios.post(url, dataToSubmit);
    // console.log(response)
    if (response.status === 200) {
      toast.success("Created Successfully", {
        position: "top-center",
      });
    } else {
      toast.error("Something went wrong", {
        position: "top-center",
      });
    }

    setFormData({
      title: "",
      file: "",
      price: "",
      category: "",
      metadata: "",
      description: "",
    });
    return;
  };

  return (
    <div>
      {/* <!-- Create Section Start Here --> */}
      <div className="contact-section light-version">
        <div className="contact-top padding-top padding-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <ToastContainer />
                <article className="contact-form-wrapper">
                  <div className="contact-form">
                    <h4>Create NFT</h4>
                    <p className="mb-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis, alias sint! Velit suscipit alias totam
                      repellendus enim, vero architecto harum maiores aut
                      mollitia nulla eos error.{" "}
                    </p>
                    <form
                      action="#"
                      method="POST"
                      id="commentform"
                      className="comment-form"
                      onSubmit={formSubmitHandler}
                    >
                      <div className="row g-3">
                        <div className="col-md-6 d-none">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Name"
                            />
                            <label>Name</label>
                          </div>
                        </div>
                        
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              value={title}
                              name="title"
                              onChange={(e) => handleFormInput(e)}
                              className="form-control"
                              placeholder="Title"
                            />
                            <label>Title</label>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-floating">
                            <select
                              className="form-control"
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  category: e.target.value,
                                })
                              }
                            >
                              <option value="category">Category</option>
                              <option value="text">Text</option>
                              <option value="text">File</option>
                            </select>

                            <label>Category</label>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-floating file-input-outer">
                            <div className="input-group file-input">
                              <input
                                type="text"
                                className="form-control file-upload-text "
                                disabled=""
                                placeholder="Select a File..."
                                // onChange={(e) =>handleFile(e)}
                              />
                              <button
                                type="button"
                                className="btn btn-common light-green file-upload-btn upload-btn p-0"
                              >
                                <input
                                  type="file"
                                  className="file-upload"
                                  data-rule-required="true"
                                  data-msg-required="Please upload Payment Screenshot"
                                  name="transactionImage"
                                  id="file-input-1"
                                  style={{ width: "0" }}
                                  placeholder="No File Selected"
                                  onChange={(e) =>handleFile(e)}
                                  aria-required="true"
                                />
                                <span className="input-group-btn"></span>
                              </button>
                            </div>
                            <label>File</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Price"
                              name="price"
                              onChange={(e) => handleFormInput(e)}
                            />
                            <label>Price</label>
                          </div>
                        </div>
                        
                        <div className="col-md-6 d-none">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Status"
                            />
                            <label>Status</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Meta Data"
                              name="metadata"
                              onChange={(e) => handleFormInput(e)}
                            />
                            <label>Meta Data</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating">
                            <textarea
                              className="form-control"
                              placeholder="Description"
                              id="msgBox"
                              name="description"
                              onChange={(e) => handleFormInput(e)}
                            ></textarea>
                            <label>Description</label>
                          </div>
                        </div>
                      </div>

                      <button type="submit" className="default-btn move-right">
                        <span>Send Message</span>
                      </button>
                    </form>
                  </div>
                </article>
              </div>
              <div className="col-lg-4">
                <div className="contact-info-wrapper">
                  <div className="contact-info-title">
                    <h5>Preview Item</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="contact-info-content">
                    <div>
                      <div className="nft-item light-version">
                        <div className="nft-inner">
                          {/* <!-- nft top part --> */}
                          <div className="nft-item-top d-flex justify-content-between align-items-center">
                            <div className="author-part">
                              <ul className="author-list d-flex">
                                <li className="single-author d-flex align-items-center">
                                  <Link to="/author" className="veryfied">
                                    <img
                                      loading="lazy"
                                      src={("../../assets/images/seller/04.png")}
                                      alt="author-img"
                                    />
                                  </Link>
                                  <h6>
                                    <Link to="/author">Gucci Lucas</Link>
                                  </h6>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* <!-- nft-bottom part --> */}
                          <div className="nft-item-bottom">
                            <div className="nft-thumb">
                              <img
                                loading="lazy"
                                src={
                                  photoUrl ||
                                  require("../../assets/images/nft-item/02.gif")
                                }
                                alt="nft-img"
                              />
                            </div>
                            <div className="nft-content">
                              <h4>
                                <Link to="/item-details">EUPHORIA de</Link>{" "}
                              </h4>
                              <div className="price-like d-flex justify-content-between align-items-center">
                                <p className="nft-price">
                                  Price:{" "}
                                  <span className="yellow-color">0.34 ETH</span>
                                </p>
                                <Link to="/" className="nft-like">
                                  <i className="icofont-heart"></i>
                                  230
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Create Section ENding Here --> */}
    </div>
  );
}

export default SectionCreate;
