import React from "react";
import { Link } from "react-router-dom";
import Base from "../../base";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDoubleRight  } from '@fortawesome/free-solid-svg-icons';
import {faArrowRight  } from '@fortawesome/free-solid-svg-icons';
import awards from "../../../assets/images/awards-1.jpg";
import party_1 from "../../../assets/images/Formula-Party_1.png";
import party_2 from "../../../assets/images/Formula-Party_2.png";
import party_3 from "../../../assets/images/Formula-Party_3.png";
import party_4 from "../../../assets/images/Formula-Party_4.png";
import party_5 from "../../../assets/images/Formula-Party_5.png";
import party_6 from "../../../assets/images/Formula-Party_6.jpg";

const Csr = () => {
  return (
    <Base>
      <>
        <Helmet>
          <title>CSR - FormulaIndia</title>
          <meta
            name="description"
            content="About Us - FormulaIndia"
          />
        </Helmet>
        <section class="site-hero overlay justify-content-center align-items-center awards"
        data-stellar-background-ratio="0.5">
        <div class="container">
            <div class="row site-hero-inner justify-content-center align-items-center">
                <div class="col-md-10 text-center" data-aos="fade-up">
                    <h1 class="heading">Awards & Milestone</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb site-breadcrumb fg-breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Home</a><FontAwesomeIcon icon={faAngleDoubleRight}/></li>
                            <li class="breadcrumb-item active" aria-current="page">Awards & Milestone</li>
                        </ol>
                    </nav>
                </div>

                <div class="mouse-down">
                    <div class="chevron"></div>
                    <div class="chevron"></div>
                    <div class="chevron"></div>
                </div>
            </div>
        </div>

        <a class="mouse smoothscroll" href="#next">
            <div class="mouse-icon">
                <span class="mouse-wheel"></span>
            </div>
        </a>
    </section>

    <section class="home-section-alt position-relative">
            <div class="container">
                <div class="heading-section aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                    <h2 class="home-section-title">Awards and Milestone</h2>
                    <p class="text-left p-text mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                        iaculis dui aliquam congue lobortis. Suspendisse nec tristique nunc, ut ornare sapien.
                        Pellentesque ut tincidunt leo. Mauris a semper augue. Proin vel pulvinar neque, et tincidunt
                        leo. Vestibulum convallis est ut turpis fermentum viverra sed quis felis. Aliquam quis tellus
                        at.</p>
                </div>
                <div class="row bod-block">
                    <div class="col-md-12">
                        <div class="award">
                            <div class="timeline">

                                <div class="timeline-item left aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                                    <div class="timeline-text">
                                        <div class="row">
                                            <div class="col-md-4 ">
                                                <img class="img-fluid" src={awards}/>
                                            </div>                                            
                                            <div class="col-md-8 award-text-section-left">
                                                <div class="timeline-date">2004</div>
                                                <div class="award-heading">
                                                    <h2 class="award-title">Services</h2>
                                                    <p class="text-left p-text">Lorem ipsum dolor sit amet elit. Aliquam
                                                        odio dolor, id luctus erat
                                                        sagittis non. Ut blandit semper pretium.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="timeline-item right aos-init aos-animate" data-aos="fade-up"
                                    data-aos-duration="500">
                                    <div class="timeline-text">
                                        <div class="row">
                                            <div class="col-md-8 order-md-1 order-2 award-text-section-right">
                                                <div class="timeline-date">2004</div>
                                                <div class="award-heading">
                                                    <h2 class="award-title">Awards & Milestone</h2>
                                                    <p class="text-left p-text">Lorem ipsum dolor sit amet elit. Aliquam
                                                        odio dolor, id luctus erat
                                                        sagittis non. Ut blandit semper pretium.</p>
                                                </div>
                                            </div>

                                            <div class="col-md-4 order-md-2 order-1">
                                                <img class="img-fluid" src={awards}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="timeline-item left aos-init aos-animate" data-aos="fade-up"
                                    data-aos-duration="500">
                                    <div class="timeline-text">
                                        <div class="row">
                                            <div class="col-md-4 ">
                                                <img class="img-fluid" src={awards}/>
                                            </div>                                            
                                            <div class="col-md-8 award-text-section-left">
                                                <div class="timeline-date">2004</div>
                                                <div class="award-heading">
                                                    <h2 class="award-title">Awards & Milestone</h2>
                                                    <p class="text-left p-text">Lorem ipsum dolor sit amet elit. Aliquam
                                                        odio dolor, id luctus erat
                                                        sagittis non. Ut blandit semper pretium.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="timeline-item right aos-init aos-animate" data-aos="fade-up"
                                    data-aos-duration="500">
                                    <div class="timeline-text">
                                        <div class="row">
                                            <div class="col-md-8 order-md-1 order-2 award-text-section-right">
                                                <div class="timeline-date">2004</div>
                                                <div class="award-heading">
                                                    <h2 class="award-title">Awards & Milestone</h2>
                                                    <p class="text-left p-text">Lorem ipsum dolor sit amet elit. Aliquam
                                                        odio dolor, id luctus erat
                                                        sagittis non. Ut blandit semper pretium.</p>
                                                </div>
                                            </div>

                                            <div class="col-md-4 order-md-2 order-1">
                                                <img class="img-fluid" src={awards}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="timeline-item left aos-init aos-animate" data-aos="fade-up"
                                    data-aos-duration="500">
                                    <div class="timeline-text">
                                        <div class="row">
                                            <div class="col-md-4 ">
                                                <img class="img-fluid" src={awards}/>
                                            </div>                                            
                                            <div class="col-md-8 award-text-section-left">
                                                <div class="timeline-date">2004</div>
                                                <div class="award-heading">
                                                    <h2 class="award-title">Awards & Milestone</h2>
                                                    <p class="text-left p-text">Lorem ipsum dolor sit amet elit. Aliquam
                                                        odio dolor, id luctus erat
                                                        sagittis non. Ut blandit semper pretium.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="timeline-item right aos-init aos-animate" data-aos="fade-up"
                                    data-aos-duration="500">
                                    <div class="timeline-text">
                                        <div class="row">
                                            <div class="col-md-8 order-md-1 order-2 award-text-section-right">
                                                <div class="timeline-date">2004</div>
                                                <div class="award-heading">
                                                    <h2 class="award-title">Awards & Milestone</h2>
                                                    <p class="text-left p-text">Lorem ipsum dolor sit amet elit. Aliquam
                                                        odio dolor, id luctus erat
                                                        sagittis non. Ut blandit semper pretium.</p>
                                                </div>
                                            </div>

                                            <div class="col-md-4 order-md-2 order-1">
                                                <img class="img-fluid" src={awards}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        <section class="career-section-alt">
            <div class="container aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                <div class="heading-section">
                    <h2 class="home-section-title">gallery</h2>
                </div>
                <div class="carousel-gallery">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <a href={party_1} data-fancybox="gallery">
                                    <div class="image party_1">
                                        <div class="overlay">
                                            <em class="mdi mdi-magnify-plus"></em>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href={party_2} data-fancybox="gallery">
                                    <div class="image party_2">
                                        <div class="overlay">
                                            <em class="mdi mdi-magnify-plus"></em>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href={party_3} data-fancybox="gallery">
                                    <div class="image party_3">
                                        <div class="overlay">
                                            <em class="mdi mdi-magnify-plus"></em>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href={party_4} data-fancybox="gallery">
                                    <div class="image party_4">
                                        <div class="overlay">
                                            <em class="mdi mdi-magnify-plus"></em>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href={party_5} data-fancybox="gallery">
                                    <div class="image party_5">
                                        <div class="overlay">
                                            <em class="mdi mdi-magnify-plus"></em>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href={party_6} data-fancybox="gallery">
                                    <div class="image party_6">
                                        <div class="overlay">
                                            <em class="mdi mdi-magnify-plus"></em>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </section>

       
        <section class="home-section-alt1">
            <div class="container">
                <div class="home-section-content">
                    <div class="row bod-block">
                        <div class="col-md-12 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                            <div class="abt-org-col">
                                <div class="abt-org-col-text">
                                    <p className="businessNeed">Not sure which solution fits you
                                        business needs?</p>
                                    <button class="btn btn-primary" type="submit">Contact us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="vl"></div>
        </section>
        </>
    </Base>
  );
};

export default Csr;
