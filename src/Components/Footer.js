import React from 'react'
import bgLight from "../assets/images/footer/bg-light.jpg"
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer class="footer-section light-version">
        <div class="footer-top" style={{backgroundImage: `url(${bgLight})`}}>
            <div class="footer-newsletter">
                <div class="container">
                    <div class="row g-4 align-items-center justify-content-center">
                        <div class="col-lg-6">
                            <div class="newsletter-part">
                                <div class="ft-header">
                                    <h4>Get The Latest Rarible Updates</h4>
                                </div>
                                <form action="/">
                                    <input type="email" placeholder="Your Mail Address" />
                                    <button type="submit" data-blast="bgColor"> Subscribe now</button>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="social-part ps-lg-5">
                                <div class="ft-header">
                                    <h4>Join the Community</h4>
                                </div>
                                <ul class="social-list d-flex flex-wrap align-items-center mb-0">
                                     <li class="social-link"><Link to="#" data-blast="bgColor"><i
                                                class="icofont-telegram"></i></Link></li>
                                    <li class="social-link"><Link to="#" data-blast="bgColor"><i
                                                class="icofont-twitter"></i></Link></li>
                                    <li class="social-link"><Link to="#" data-blast="bgColor"><i
                                                class="icofont-facebook"></i></Link></li>
                                    
                                    <li class="social-link"><Link to="#" data-blast="bgColor"><i
                                                class="icofont-instagram"></i></Link></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div class="footer-links padding-top padding-bottom">
                <div class="container">
                    <div class="row ">
                        <div class="col-md-4 col-sm-6">
                            <div class="footer-link-item">
                                <h5>THE RegoNFT</h5>
                                <p>Hello. An artist needs only two things in return for his work – Appreciation of the effort and fair price of his artwork. Currently, an artist needs to create his artwork and then keep on moving to various cities in order to sell the artwork. </p>
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-6">
                            <div class="footer-link-item">
                                <h5>General</h5>
                                <ul class="footer-link-list">
                                    <li><Link to="#" class="footer-link">How it Works</Link></li>
                                    <li><Link to="#" class="footer-link">How to connect wallet</Link></li>
                                    <li><Link to="#" class="footer-link">Services</Link></li>
                                    <li><Link to="#" class="footer-link">Faqs</Link></li>
                                    <li><Link to="#" class="footer-link">About Us</Link></li>
                                    <li><Link to="#" class="footer-link">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="col-md-2 col-sm-6">
                            <div class="footer-link-item">
                                <h5>NFT Marketplace</h5>
                                <ul class="footer-link-list">
                                    <li><Link to="#" class="footer-link">All NFTs</Link></li>
                                    <li><Link to="#" class="footer-link">New</Link></li>
                                    <li><Link to="#" class="footer-link">Art</Link></li>
                                    <li><Link to="#" class="footer-link">Collectibles</Link></li>
                                    <li><Link to="#" class="footer-link">More</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-6">
                            <div class="footer-link-item">
                                <h5>My Account</h5>
                                <ul class="footer-link-list">
                                    <li><Link to="#" class="footer-link">Create</Link></li>
                                    <li><Link to="#" class="footer-link">Profile</Link></li>
                                    <li><Link to="#" class="footer-link">Favorites</Link></li>
                                    <li><Link to="#" class="footer-link">My Collections</Link></li>
                                    <li><Link to="#" class="footer-link">Settings</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-6">
                            <div class="footer-link-item">
                                <h5>Resources</h5>
                                <ul class="footer-link-list">
                                    <li><Link to="#" class="footer-link">Terms of Service</Link></li>
                                    <li><Link to="#" class="footer-link">Privacy Policy</Link></li>
                                    <li><Link to="#" class="footer-link">Blog</Link></li>
                                    <li><Link to="#" class="footer-link">RegoNFT Contract</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <p class="text-center py-4 mb-0 black-color">All rights reserved &copy;RegoNFT || Design By: <Link
                        class="theme-color" to="https://questglt.com">Questglt</Link>
                </p>
            </div>
        </div>
    </footer>
    )
}
