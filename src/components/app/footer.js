import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faTwitter,faInstagram, faLinkedinIn} from "@fortawesome/free-brands-svg-icons"
import Logo from "../../assets/images/formula-logo.png";
import Suraksha from "../../assets/images/Suraksha.jpg";
import rental from "../../assets/images/Formula-Car-Rental.jpg";
import Travel from "../../assets/images/The-Travel-Formula.jpg";
import Apartment from "../../assets/images/Formula-Serviced-Apartment.jpg";
import Holiday from "../../assets/images/Holiday-Representations.jpg";
const Footer = () => {
    return (
        <>
      <section className="home-section">
            <div className="container">
                <div className="heading-section">
                    <h2 className="home-section-title mb-3">Other Services</h2>
                    <div className="row">
                        <div className="d-flex flex-wrap aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">

                            <div className="w-lg-20 box-pad">
                                <a href="https://www.suraksha4u.com/" target="_blank">
                                    <div className="service-overlay text-center">
                                        <img className="image img-fluid img-rounded" src={Suraksha}/>
                                        <h3 className="text">Suraksha</h3>
                                    </div>
                                </a>
                            </div>

                            <div className="w-lg-20 box-pad">
                                <a href="https://www.formulacarrental.com/" target="_blank">
                                    <div className="service-overlay text-center">
                                        <img className="image img-fluid img-rounded" src={rental}/>
                                        <h3 className="text">Formula <br/> Car Rental</h3>
                                    </div>
                                </a>
                            </div>

                            <div className="w-lg-20 box-pad">
                                <a href="https://www.thetravelformula.com/" target="_blank">
                                    <div className="service-overlay text-center">
                                        <img className="image img-fluid img-rounded" src={Travel}/>
                                        <h3 className="text">The <br/> Travel Formula</h3>
                                    </div>
                                </a>
                            </div>

                            <div className="w-lg-20 box-pad">
                                <a href="https://www.formulaservicedapartment.com/" target="_blank">
                                    <div className="service-overlay text-center">
                                        <img className="image img-fluid img-rounded"
                                            src={Apartment}/>
                                        <h3 className="text">Formula <br/> Serviced Apartment</h3>
                                    </div>
                                </a>
                            </div>

                            <div className="w-lg-20 box-pad">
                                <a href="https://www.holidayrepresentations.com/" target="_blank">
                                    <div className="service-overlay text-center">
                                        <img className="image img-fluid img-rounded" src={Holiday}/>
                                        <h3 className="text">Holiday <br/> Representations</h3>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="vl-1"></div>
            </div>
        </section>
   
        <footer className="site-footer" id="colophon">
            <div className="footer-section ">
            <div className="container ">
                <div className="row ">
                    <div className="col-md-3 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                        <a href="index.html">
                            <img className="img-responsive mb-3" alt="formulaindia" title="formulaindia"
                                src={Logo}/>
                        </a>
                        <h5 className="footer-title ">Get In Touch</h5>
                        <ul className="list-inline footer-links-list footer-links-git ">
                            <li><span>Call: </span><a href="tel:+91-9650003642 ">+91-9650003642</a></li>
                            <li><span>Whatsapp: </span><a href="tel:+91-11-4502-8318 ">+91-11-4502-8318</a></li>
                            <li><span>Mail: </span><a
                                    href="mailto:enquiry@formulaindia.com ">enquiry@formulaindia.com</a></li>
                            <li><span>Reach Us: </span><a href="https://goo.gl/maps/StmqCt1bMxfywa2b9 ">27, Community
                                    Centre, East of Kailash, New Delhi: 110065, India</a></li>
                        </ul>
                        <h5 className="footer-title ">Follow Us</h5>
                        <ul className="nav footer-social-links mb-3">
                            <li><a href="https://www.facebook.com/formulaindia" target="_blank" className="social-links "><FontAwesomeIcon icon={faFacebook} size='lg'/></a></li>
                            <li><a href="https://twitter.com/formulaindia/" target="_blank" className="social-links "><FontAwesomeIcon icon={faTwitter} size='lg'/></a></li>
                            <li><a href="https://www.instagram.com/formulaindia/" target="_blank"
                                    className="social-links "><FontAwesomeIcon icon={faInstagram} size='lg'/></a></li>
                            <li><a href="https://www.linkedin.com/company/formula-group/" target="_blank"
                                    className="social-links "><FontAwesomeIcon icon={faLinkedinIn} size='lg'/></a></li>
                        </ul>
                    </div>
                    <div className="col-md-2 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                        <h5 className="footer-title ">Company</h5>
                        <ul className="list-inline footer-links-list ">
                            <li><a href="# ">About Us</a></li>
                            <li><a href="# ">Careers</a></li>
                            <li><a href="# ">News/Media</a></li>
                            <li><a href="# ">Blog</a></li>
                            <li><a href="# ">Clients Speak</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                        <h5 className="footer-title ">Terms & Policies</h5>
                        <ul className="list-inline footer-links-list ">
                            <li><a href="# ">Privacy Policy</a></li>
                            <li><a href="# ">Disclaimer</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                        <h5 className="footer-title ">Need Help?</h5>
                        <ul className="list-inline footer-links-list ">
                            <li><a href="# ">Faq</a></li>
                            <li><a href="contact-us.html ">Contact Us</a></li>
                            <li><a href="# ">Sitemap</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                        <h5 className="footer-title ">Subscribe</h5>
                        <div className="footer-newsletter ">
                            <p>Get latest stories, info &amp; titbits right in your inbox</p>
                            <form className="footer-newsletter-form " action=" " method="post ">
                                <input className="form-control " type="email " name="EMAIL " placeholder="Email address "/>
                                <button className="btn btn-primary " type="submit ">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr/>

        <div className="footer-copyright ">
            <div className="container ">
                <span className="footer-copyright-span ">Copyright &copy; 2021</span> Formula Corporate Solutions India Pvt.
                Ltd
            </div>
        </div>
        </footer>
        </>
        );
}

export default Footer;