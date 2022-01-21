import React from 'react'
import Header from './Header'
import UpperStrip from './upperStrip'
import {Link} from "react-router-dom";
// import "../assets/css/bootstrap.min.css"
import "../assets/css/icofont.min.css"
import "../assets/css/lightcase.css"
import "../assets/css/animate.css"
import "../assets/css/swiper-bundle.min.css"
import "../assets/css/style.min.css"
import "../assets/css/custom.css"

export default function signIn() {
    return (
        <>
        
        <UpperStrip />
        <Header />
        <div className="login-section light-version padding-top">
        <div className=" container">
            <div className="row g-5 align-items-center flex-md-row-reverse">
                <div className="col-lg-6">
                    <div className="account-wrapper">
                        <h3 className="title">Sign In</h3>
                        <form className="account-form">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput"
                                    placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword"
                                    placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                            </div>
                           
                           
                           
                            <div className="form-group">
                                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                                    <div className="checkgroup">
                                        <input type="checkbox" name="remember" id="remember" />
                                        <label for="remember">Remember Me</label>
                                    </div>
                                    <Link to="forgot-pass.html">Forgot Password?</Link>
                                </div>
                            </div>
                            <div className="form-group signup-three-btn">
                                <button className="d-block default-btn move-top"><span>Signin Now</span></button>
                                 <Link to="#" className="d-block default-btn move-top"><span>Signin with Rego</span></Link>
                                 <Link to="#" className="d-block default-btn move-top"><span><i
                                                className="icofont-google"></i> Signin with Google </span></Link>
                            </div>
                        </form>
                        <div className="account-bottom">
                            <span className="d-block cate pt-10">Already Have an Account? <Link to="signin.html"> Sign
                                    Up</Link></span>
                         
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="account-img">
                        <img src={require("../assets/images/account/01.png")} alt="shape" />
                    </div>
                </div>
            </div>

        </div>
    </div>
            
        </>
    )
}
