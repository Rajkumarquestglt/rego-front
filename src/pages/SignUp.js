import React from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Header from '../Components/Header'
import UpperStrip from '../Components/UpperStrip'

// import "../assets/css/bootstrap.min.css"
import "../assets/css/icofont.min.css"
import "../assets/css/lightcase.css"
import "../assets/css/animate.css"
import "../assets/css/swiper-bundle.min.css"
import "../assets/css/style.min.css"
import "../assets/css/custom.css"

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword:"",
  });

  const { name, email, password, confirmPassword } = formData;

  const handleFormInput = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const formSubmitHandler = async (e) => {
      e.preventDefault();
      // console.log(formData);
      if (name === "" || email === "" || password === "" || confirmPassword ==="") {
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

      if(password !== confirmPassword){
        toast.warn("Password Does not Match", {
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

      // const temp = await axios.get("http://nft.regoex.com:3001/users/crypto-price");

      // console.log(temp)
      const response = await axios.post("http://nft.regoex.com:3001/users/signup", {
        name:name,
        email:email,
        password:password,

      });
      // console.log(response)
      if (response.status === 200) {
        toast.success("Message Has Been Sent Successfully", {
          position: "top-center",
        });
      } else {
        toast.error("Something went wrong", {
          position: "top-center",
        });
      }

      setFormData({
        name: "",
        email: "",
        password: "",
      });
      return;
    };
  
    return (
      <>
        <UpperStrip />
        <Header />
        <div className="login-section light-version padding-top">
          <div className=" container">
            <div className="row g-5 align-items-center flex-md-row-reverse">
              <div className="col-lg-7"><ToastContainer />
                <div className="account-wrapper">
                  <h3 className="title">Sign Up</h3>
                  <form className="account-form" onSubmit={formSubmitHandler}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            name = "name"
                            value = {name} 
                            onChange={(e) => handleFormInput(e)}
                            className="form-control"
                            id="userIdInput"
                            placeholder="user-id"
                          />
                          <label htmlFor="userIdInput">User ID</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            name = "email"
                            value = {email} 
                            onChange={(e) => handleFormInput(e)}
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                          />
                          <label htmlFor="floatingInput">Email address</label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-floating mb-3">
                          <input
                            type="password"
                            name = "password"
                            value = {password} 
                            onChange={(e) => handleFormInput(e)}
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                          />
                          <label htmlFor="floatingPassword">Password</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating mb-3">
                          <input
                            type="password"
                            name = "confirmPassword"
                            value = {confirmPassword} 
                            onChange={(e) => handleFormInput(e)}
                            className="form-control"
                            id="confirmPass"
                            placeholder="Confirm Password"
                          />
                          <label htmlFor="confirmPass">Confirm Password</label>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                        <div className="checkgroup">
                          <input
                            type="checkbox"
                            name="remember"
                            id="remember"
                            defaultChecked={false}
                          />
                          <label htmlFor="remember">Remember Me</label>
                        </div>
                        <Link to="/forgot-pass">Forgot Password?</Link>
                      </div>
                    </div>
                    <div className="form-group signup-three-btn">
                      <button className="d-block default-btn move-top" type="submit">
                        <span>Signup Now</span>
                      </button>
                      <Link to="#" className="d-block default-btn move-top">
                        <span>Signup with Rego</span>
                      </Link>
                      <Link to="#" className="d-block default-btn move-top">
                        <span>
                          <i className="icofont-google"></i> Signup with Google{" "}
                        </span>
                      </Link>
                    </div>
                  </form>
                  <div className="account-bottom">
                    <span className="d-block cate pt-10">
                      Already Have an Account?{" "}
                      <Link to="/signin"> Sign In</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="account-img">
                  <img
                    src={require("../assets/images/account/01.png")}
                    alt="shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
