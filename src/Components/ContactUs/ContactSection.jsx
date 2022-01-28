import React from 'react';
import address from '../../assets/images/contact/01.png'
import phone from '../../assets/images/contact/02.png'
import email from '../../assets/images/contact/03.png'
import world from '../../assets/images/contact/04.png'

export default function ContactSection() {
  return (
  <div>
      {/* <!-- Contact Us Section Start Here --> */}
    <div className="contact-section light-version">
        <div className="contact-top padding-top padding-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <article className="contact-form-wrapper">
                            <div className="contact-form">
                                <h4>Don't Be A Stranger Just Say Hello.</h4>
                                <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
                                    alias sint! Velit suscipit alias totam repellendus enim, vero architecto harum
                                    maiores aut mollitia nulla eos error. </p>
                                <form action="#" method="POST" id="commentform" className="comment-form">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="contactName"
                                                    placeholder="Name" />
                                                <label for="contactName">Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="password" className="form-control" id="floatingPassword"
                                                    placeholder="Password" />
                                                <label for="floatingPassword">Password</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="inputSub"
                                                    placeholder="Subject" />
                                                <label for="inputSub">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="contactNumber"
                                                    placeholder="Number" />
                                                <label for="contactNumber">Number</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Message"
                                                    id="msgBox"></textarea>
                                                <label for="msgBox">Message</label>
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
                                <h5>Get Information</h5>
                                <p>Our Contact information Details and
                                    Follow us on social media</p>
                            </div>
                            <div className="contact-info-content">
                                <div className="contact-info-item">
                                    <div className="contact-info-inner">
                                        <div className="contact-info-thumb">
                                            <img src={address} alt="address" />
                                        </div>
                                        <div className="contact-info-details">
                                            <span className="fw-bold">Office Address</span>
                                            <p>1201 park street, 5th Avenue</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-info-inner">
                                        <div className="contact-info-thumb">
                                            <img src={phone} alt="address" />
                                        </div>
                                        <div className="contact-info-details">
                                            <span className="fw-bold">Phone Number</span>
                                            <p>+22698 745 632,02 982 745</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-info-inner">
                                        <div className="contact-info-thumb">
                                            <img src={email} alt="address" />
                                        </div>
                                        <div className="contact-info-details">
                                            <span className="fw-bold">Send Mail</span>
                                            <p>example@yourmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-info-inner">
                                        <div className="contact-info-thumb">
                                            <img src={world} alt="address" />
                                        </div>
                                        <div className="contact-info-details">
                                            <span className="fw-bold">Our Website</span>
                                            <p>www.example.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="contact-bottom">
            <div className="contac-bottom">
                <div className="row justify-content-center g-0">
                    <div className="col-12">
                        <div className="location-map">
                            <div id="map">
                                <iframe
                                    src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228225.89119998863!2d-82.1359357856101!3d26.64753629985287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db44a7e78016f5%3A0xafd1a4163a9b6ff2!2sCape%20Coral%2C%20FL%2C%20USA!5e0!3m2!1sen!2sbd!4v1616562014411!5m2!1sen!2sbd"}
                                    allowfullscreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    {/* <!-- Contact Us Section ENding Here --> */}

  </div>
  )
}
