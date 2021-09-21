import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight } from '@fortawesome/free-solid-svg-icons';
import serviceImage from "../../../assets/images/RELOCATION.jpg";
const Services = (props) => {
  const [index, setIndex] = useState(0);
  return (
    <>
   
   <section className="home-section">
            <div className="container">
                <div className="heading-section aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                    <h2 className="home-section-title">Services</h2>
                    <p className="text-left p-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                        molestie.</p>
                </div>

                <div className="home-section-content">
                    <div className="row">

                        <div className="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                            <div className="abt-org-col">
                                <div className="abt-org-col-text">
                                    <div className="sbc-banner">
                                        <a href="#">
                                            <img className="img-fluid img-rounded" alt="..." src={serviceImage}/>
                                        </a>
                                    </div>
                                    <h3 className="h3Service">RELOCATION
                                    </h3>
                                    <div className="p-text service">Lorem ipsum
                                        dolor sit amet, consectetur adipiscing elit. Nullam quis tempor nisi. Mauris
                                        commodo luctus risus non.</div>
                                    <div className="res-circle">
                                        <div className="circle-icon">
                                            <a href="single-services.html"><FontAwesomeIcon icon={faArrowRight} size='md' /></a>
                                            <a href="single-services.html" className="circle-txt">
                                                <p>Read more</p>
                                            </a>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                            <div className="abt-org-col">
                                <div className="abt-org-col-text">
                                    <div className="sbc-banner">
                                        <a href="#">
                                            <img className="img-fluid img-rounded" alt="..." src={serviceImage}/>
                                        </a>
                                    </div>
                                    <h3 className="h3Service">
                                        IMMIGRATION</h3>
                                    <div className="p-text service">Lorem ipsum
                                        dolor sit amet, consectetur adipiscing elit. Nullam quis tempor nisi. Mauris
                                        commodo luctus risus non.</div>
                                    <div className="res-circle">
                                        <div className="circle-icon">
                                            <a href="single-services.html"><FontAwesomeIcon icon={faArrowRight} size='md' /></a>
                                            <a href="single-services.html" className="circle-txt">
                                                <p>Read more</p>
                                            </a>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                            <div className="abt-org-col">
                                <div className="abt-org-col-text">
                                    <div className="sbc-banner">
                                        <a href="#">
                                            <img className="img-fluid img-rounded" alt="..." src={serviceImage}/>
                                        </a>
                                    </div>
                                    <h3 className="h3Service">CULTURAL
                                        TRAINING SOLUTION</h3>
                                    <div className="p-text service">Lorem ipsum
                                        dolor sit amet, consectetur adipiscing elit. Nullam quis tempor nisi. Mauris
                                        commodo luctus risus non.</div>
                                    <div className="res-circle">
                                        <div className="circle-icon">
                                            <a href="single-services.html"><FontAwesomeIcon icon={faArrowRight} size='md' /></a>
                                            <a href="single-services.html" className="circle-txt">
                                                <p>Read more</p>
                                            </a>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                            <div className="abt-org-col">
                                <div className="abt-org-col-text">
                                    <div className="sbc-banner">
                                        <a href="#">
                                            <img className="img-fluid img-rounded" alt="..."
                                                src={serviceImage}/>
                                        </a>
                                    </div>
                                    <h3 className="h3Service">CORPORATE
                                        HOUSING</h3>
                                    <div className="p-text service">Lorem ipsum
                                        dolor sit amet, consectetur adipiscing elit. Nullam quis tempor nisi. Mauris
                                        commodo luctus risus non.</div>
                                    <div className="res-circle">
                                        <div className="circle-icon">
                                            <a href="single-services.html"><FontAwesomeIcon icon={faArrowRight} size='md' /></a>
                                            <a href="single-services.html" className="circle-txt">
                                                <p>Read more</p>
                                            </a>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                            <div className="abt-org-col">
                                <div className="abt-org-col-text">
                                    <div className="sbc-banner">
                                        <a href="#">
                                            <img className="img-fluid img-rounded" alt="..." src={serviceImage}/>
                                        </a>
                                    </div>
                                    <h3 className="h3Service">FURNITURE
                                        RENTAL</h3>
                                    <div className="p-text service">Lorem ipsum
                                        dolor sit amet, consectetur adipiscing elit. Nullam quis tempor nisi. Mauris
                                        commodo luctus risus non.</div>
                                    <div className="res-circle">
                                        <div className="circle-icon">
                                            <a href="single-services.html"><FontAwesomeIcon icon={faArrowRight} size='md' /></a>
                                            <a href="single-services.html" className="circle-txt">
                                                <p>Read more</p>
                                            </a>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                            <div className="abt-org-col">
                                <div className="abt-org-col-text">
                                    <div className="sbc-banner">
                                        <a href="#">
                                            <img className="img-fluid img-rounded" alt="..." src={serviceImage}/>
                                        </a>
                                    </div>
                                    <h3 className="h3Service">TRAVEL
                                    </h3>
                                    <div className="p-text service">Lorem ipsum
                                        dolor sit amet, consectetur adipiscing elit. Nullam quis tempor nisi. Mauris
                                        commodo luctus risus non.</div>
                                    <div className="res-circle">
                                        <div className="circle-icon">
                                            <a href="single-services.html"><FontAwesomeIcon icon={faArrowRight} size='md' /></a>
                                            <a href="single-services.html" className="circle-txt">
                                                <p>Read more</p>
                                            </a>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="vl"></div>
        </section>
    </>
  );


};

export default Services;
