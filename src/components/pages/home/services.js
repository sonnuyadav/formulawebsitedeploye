import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight } from '@fortawesome/free-solid-svg-icons';
import serviceImage from "../../../assets/images/business-mobility.jpg";
import serviceImage1 from "../../../assets/images/employee-mobility.jpg";
const Services = (props) => {
  const [index, setIndex] = useState(0);
  return (
    <>
   
   <section class="home-section">
            <div class="container">
                <div class="heading-section aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                    <h2 class="home-section-title">Our Solutions</h2>
                </div>

                <div class="home-section-content">
                    <div class="row">
                        <div class="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                            <div class="abt-org-col">
                                <div class="abt-org-col-text">
                                    <div class="sbc-banner">
                                        <a href="employee-mobility.html">
                                            <img class="img-fluid img-rounded" alt="..." src={serviceImage1}/>
                                        </a>
                                    </div>
                                    <h3 class="h3Service">EMPLOYEE MOBILITY
                                    </h3>
                                    <div class="p-text service">Lorem ipsum
                                        dolor sit amet, consectetur adipiscing elit. Nullam quis tempor nisi. Mauris
                                        commodo luctus risus non.</div>
                                    <div class="res-circle">
                                        <div class="circle-icon">
                                            <a href="employee-mobility.html"><FontAwesomeIcon icon={faArrowRight} /></a>
                                            <a href="employee-mobility.html" class="circle-txt">
                                                <p>Read more</p>
                                            </a>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                            <div class="abt-org-col">
                                <div class="abt-org-col-text">
                                    <div class="sbc-banner">
                                        <a href="/">
                                            <img class="img-fluid img-rounded" alt="..." src={serviceImage}/>
                                        </a>
                                    </div>
                                    <h3 class="h3Service">
                                        BUSINESS MOBILITY</h3>
                                    <div class="p-text service">Lorem ipsum
                                        dolor sit amet, consectetur adipiscing elit. Nullam quis tempor nisi. Mauris
                                        commodo luctus risus non.</div>
                                    <div class="res-circle">
                                        <div class="circle-icon">
                                            <a href="/"><FontAwesomeIcon icon={faArrowRight} /></a>
                                            <a href="/" class="circle-txt">
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
            <div class="vl"></div>
        </section>
    </>
  );


};

export default Services;
