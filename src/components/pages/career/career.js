import React from "react";
import { Link } from "react-router-dom";
import Base from "../../base";
import { Helmet } from "react-helmet";
import careerImg from "../../../assets/images/life-formula.jpg";
import partyImg from "../../../assets/images/Formula Party_1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight,faArrowDown,faMapMarkerAlt,faBriefcase,faCheckCircle} from '@fortawesome/free-solid-svg-icons';

const Career = () => {
  return (
    <Base>
      <>
        <Helmet>
          <title>Career - FormulaIndia</title>
          <meta
            name="description"
            content="Career - FormulaIndia"
          />
        </Helmet>
        <section class="site-hero overlay justify-content-center align-items-center careerImg"
       
        data-stellar-background-ratio="0.5">
        <div class="container">
            <div class="row site-hero-inner justify-content-center align-items-center">
                <div class="col-md-10 text-center" data-aos="fade-up">
                    <h1 class="heading">Career</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb site-breadcrumb fg-breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home</a><i
                                    class="fa fa-angle-double-right mx-2" aria-hidden="true"></i></li>
                            <li class="breadcrumb-item active" aria-current="page">Career</li>
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
                <div class="row bod-block">
                    <div class="col-md-6 aos-init aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                        <div class="abt-org-col">
                            <div class="abt-org-col-text">
                                <div class="heading-section">
                                    <h2 class="home-section-title">Life @ Formula</h2>
                                    <p class="text-left p-text mb-3">All work and no play makes Jack, Sheela, Arun and
                                        David and pretty much anyone dull. We work in a fast paced global environment
                                        but work can’t happen unless our greatest asset, our employees, are happy.
                                    </p>
                                    <p class="text-left p-text mb-3">We swear by our company values that include
                                        teamwork as a core pillar. Our company culture encourages dedication towards
                                        client satisfaction as much towards the happiness of our team. We burn the
                                        midnight oil together, we go to the dance together, and we even serve the
                                        underprivileged together.
                                    </p>
                                    <p class="text-left p-text mb-3">Happy minds are the window to an efficient and
                                        innovative work environment. We foster innovation, push the boundary and deliver
                                        excellence from wherever we are. But as we do that, we never forget to have a
                                        little fun. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img class="img-fluid img-csr aos-init aos-init aos-animate" data-aos="fade-up" data-aos-duration="500"
                alt="..." src={careerImg}/>
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
                                <a href={partyImg} data-fancybox="gallery">
                                    
                                    <div class="image partImg1">
                                        <div class="overlay">
                                            <em class="mdi mdi-magnify-plus"></em>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="img/Formula Party_2.png" data-fancybox="gallery">
                                    <div class="image partImg2">
                                        <div class="overlay">
                                            <em class="mdi mdi-magnify-plus"></em>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="img/Formula Party_3.png" data-fancybox="gallery">
                                    <div class="image partImg3">
                                        <div class="overlay">
                                            <em class="mdi mdi-magnify-plus"></em>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="img/Formula Party_4.png" data-fancybox="gallery">
                                    <div class="image partImg4">
                                        <div class="overlay">
                                            <em class="mdi mdi-magnify-plus"></em>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="img/Formula Party_5.png" data-fancybox="gallery">
                                    <div class="image partImg5">
                                        <div class="overlay">
                                            <em class="mdi mdi-magnify-plus"></em>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="img/Formula Party_6.jpg" data-fancybox="gallery">
                                    <div class="image partImg6">
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

        <section class="career-section">
            <div class="container">
                <div class="row bod-block">
                    <div class="col-md-12 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                        <div class="abt-org-col">
                            <div class="abt-org-col-text">
                                <div class="heading-section">
                                    <h2 class="home-section-title">come, join us! we’ar hiring.</h2>
                                    <p class="text-left mb-3">Are you tired of being in a mundane job? Do you want to
                                        see your skills translate into new possibilities for you? Do you have the zeal
                                        to make a difference to the world around you? Come be a part of one of India's
                                        fastest growing sectors. A work environment filled with young, fresh and dynamic
                                        energy. A place where hardwork and dedication is given precedence over your
                                        equation with the boss. A place where your learning and earning potential is
                                        only defined by your potential.
                                    </p>
                                    <p class="text-left mb-7">If you think you have it in you, come join us at Formula
                                        Corporate Services. We're eagerly waiting for you at <span
                                            class="email-text">enquiry@formulaindia.com</span>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion col-md-12 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                        <div class="accordion-item" id="question1">
                            <a class="accordion-link" href="#question1">
                                <div class="flex">
                                    <h3>BRAND STRATEGIST</h3>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faBriefcase} size='md'/> 8-15 Years</li>
                                        <li><FontAwesomeIcon icon={faMapMarkerAlt} size='md'/> Delhi</li>
                                    </ul>
                                </div>
                                <FontAwesomeIcon icon={faArrowRight} size='md'/>
                                <FontAwesomeIcon icon={faArrowDown} size='md'/>
                            </a>
                            <div class="answer">
                                <h4>Job Responsibilities:</h4>
                                <ul>
                                    <li><FontAwesomeIcon icon={faCheckCircle} size='md'/> &nbsp; &nbsp;Conducting extensive primary
                                        and secondary research.</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} size='md'/> &nbsp; &nbsp;Staying up to date on market
                                        trends.</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} size='md'/> &nbsp; &nbsp;Generate innovative ideas to
                                        promote our services.</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} size='md'/> &nbsp; &nbsp;Strong PR Communications.</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} size='md'/> &nbsp; &nbsp;Handle both online and offline
                                        brand marketing.</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} size='md'/> &nbsp; &nbsp;Expertise in writing </li>
                                </ul>
                                <h4>Skills:</h4>
                                <ul>
                                    <li><FontAwesomeIcon icon={faCheckCircle} size='md'/> &nbsp; &nbsp;Excellent communication and
                                        presentation skills.</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} size='md'/> &nbsp; &nbsp;Creative and strategic
                                        thinker.</li>
                                </ul>
                                <button class="btn btn-primary mb-4" type="submit ">Apply Now</button>
                            </div>
                            <hr/>
                        </div>
                        <div class="accordion-item" id="question2">
                            <a class="accordion-link" href="#question2">
                                <div class="flex">
                                    <h3>CUSTOMER SERVICE OFFICER – JAPAN DESK </h3>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faBriefcase} size='md'/> 0-4 Years</li>
                                        <li><FontAwesomeIcon icon={faMapMarkerAlt} size='md'/> Delhi</li>
                                    </ul>
                                </div>
                                <FontAwesomeIcon icon={faArrowRight} size='md'/>
                                <FontAwesomeIcon icon={faArrowDown} size='md'/>
                            </a>
                            <div class="answer">
                                <h4>Job Responsibilities:</h4>
                                <ul>
                                    <li><FontAwesomeIcon icon={faCheckCircle} size='md'/> &nbsp; &nbsp;To work as an interpreter.</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} size='md'/> &nbsp; &nbsp;Written/verbal communication
                                        with client in Japanese.</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} size='md'/> &nbsp; &nbsp;Follow-up with clients and
                                        concerned department</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} size='md'/> &nbsp; &nbsp;Provide quality customer
                                        service on every call.</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} size='md'/> &nbsp; &nbsp;Communicate clearly and
                                        effectively with Clients</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} size='md'/> &nbsp; &nbsp;Regular interactions with key
                                        clients to know the feedback</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} size='md'/> &nbsp; &nbsp;Manage relationships with
                                        existing clients.</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} size='md'/> &nbsp; &nbsp;Respond to and follow up
                                        enquiries/issue using appropriate methods</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} size='md'/> &nbsp; &nbsp;Supporting
                                        BD/Sales/Operation team as and when necessary with regard to Japanese language
                                    </li>
                                </ul>
                                <h4>Requirement:</h4>
                                <ul>
                                    <li><FontAwesomeIcon icon={faCheckCircle} size='md'/> &nbsp; &nbsp;Must have cleared N3 level</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} size='md'/> &nbsp; &nbsp;Ability to work under pressure.
                                    </li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} size='md'/> &nbsp; &nbsp;Good interpersonal skills to
                                        form effective working relationships with people at all levels.</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} size='md'/> &nbsp; &nbsp;Candidate should have
                                        pleasing personality with good communication skills (Verbal & Written).</li>
                                </ul>
                                <button class="btn btn-primary mb-4" type="submit ">Apply Now</button>
                            </div>
                            <hr/>
                        </div>
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

export default Career;
