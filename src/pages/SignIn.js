import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../reducers/authReducer";
import signInImg from "../assets/images/account/01.png";

import Header from "../Components/Index/Header";
import UpperStrip from "../Components/Index/UpperStrip";

// import "../assets/css/bootstrap.min.css"
import "../assets/css/icofont.min.css";
import "../assets/css/lightcase.css";
import "../assets/css/animate.css";
import "../assets/css/swiper-bundle.min.css";
import "../assets/css/style.min.css";
import "../assets/css/custom.css";

export default function SignIn() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleFormInput = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    // console.log(formData);
    if (email === "" || password === "") {
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

    const response = await axios.post("http://regoex.com/NFT-login", {
      email: email,
      password: password,
    });
    console.log("data", response);
    if (response.data.status) {
      toast.success("Login Successful", {
        position: "top-center",
      });

      dispatch(
        login({
          user: response.data,
          isAuthenticated: true,
        })
      );

      navigate("/explore");
    } else {
      toast.error("Please enter Valid Cradential", {
        position: "top-center",
      });
    }

    setFormData({
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
            <div className="col-lg-6">
              <ToastContainer />
              <div className="account-wrapper">
                <h3 className="title">Sign In</h3>
                <form className="account-form" onSubmit={formSubmitHandler}>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      value={email}
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      name="email"
                      onChange={(e) => handleFormInput(e)}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={(e) => handleFormInput(e)}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>

                  <div className="form-group">
                    <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                      <div className="checkgroup">
                        <input type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember">Remember Me</label>
                      </div>
                      <Link to="/forgot-pass">Forgot Password?</Link>
                    </div>
                  </div>
                  <div className="form-group signup-three-btn">
                    <button
                      className="d-block default-btn move-top"
                      type="submit"
                    >
                      <span>Signin Now</span>
                    </button>
                    <Link to="#" className="d-block default-btn move-top">
                      <span>Signin with Rego</span>
                    </Link>
                    <Link to="#" className="d-block default-btn move-top">
                      <span>
                        <i className="icofont-google"></i> Signin with Google{" "}
                      </span>
                    </Link>
                  </div>
                </form>
                <div className="account-bottom">
                  <span className="d-block cate pt-10">
                    Don,t have an Account? <Link to="/signup"> Sign Up</Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="account-img">
                <img src={signInImg} alt="shape" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
