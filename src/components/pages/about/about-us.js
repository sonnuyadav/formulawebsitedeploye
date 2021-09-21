import React from "react";
import { Link } from "react-router-dom";
import Base from "../../base";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDoubleRight  } from '@fortawesome/free-solid-svg-icons';
import {faArrowRight  } from '@fortawesome/free-solid-svg-icons';
import mission from "../../../assets/images/mission.jpg";
import whoWeAre from "../../../assets/images/who-we-are.jpg";
import formulaValue from "../../../assets/images/formula-value.jpg";
import csr from "../../../assets/images/csr.jpg";
import awards from "../../../assets/images/awards.jpg";
import mrNarula from "../../../assets/images/mr-narula.jpg";

const AboutUs = () => {
  return (
    <Base>
      <>
        <Helmet>
          <title>About Us - FormulaIndia</title>
          <meta
            name="description"
            content="About Us - FormulaIndia"
          />
        </Helmet>
        <section class="site-hero overlay justify-content-center align-items-center aboutUs"
        data-stellar-background-ratio="0.5">
        <div class="container">
            <div class="row site-hero-inner justify-content-center align-items-center">
                <div class="col-md-10 text-center" data-aos="fade-up">
                    <h1 class="heading">About us</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb site-breadcrumb fg-breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Home</a> <FontAwesomeIcon icon={faAngleDoubleRight} size='md' /></li>
                            <li class="breadcrumb-item active" aria-current="page"> About Us</li>
                        </ol>
                    </nav>
                </div>

                <div class="mouse-down" data-aos="fade-up">
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

        <section class="about-section-alt" id="#mission">
            <div class="row bod-block">
                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 aos-init aos-animate" data-aos="fade-up"
                    data-aos-duration="500">
                    <div class="image-section">
                        <a href="" class="hover_ele" hovertext="Download">
                            <img src={mission} alt="" title=""/>
                        </a>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 aos-init aos-animate" data-aos="fade-up"
                    data-aos-duration="500">
                    <div class="image-content">
                        <div class="heading-section">
                            <h2 class="home-section-title">Mission</h2>
                            <p class="text-left p-text">We build global mobility programs backed by a human-centric
                                technology
                                platform to facilitate seamless transition across locations. We balance our technology
                                and
                                people-first approach to provide reliable, seamless and empathetic service to your
                                relocating employees.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="about-section-alt">
            <div class="row bod-block">
                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 order-md-1 order-2 aos-init aos-animate"
                    data-aos="fade-up" data-aos-duration="500">
                    <div class="image-content">
                        <div class="heading-section ">
                            <h2 class="home-section-title">who we are</h2>
                            <p class="text-left p-text mb-3">Formula Group is a provider of integrated corporate
                                mobility services
                                in India, providing mobility services to over 20 Fortune 100 clients for both inbound as
                                well as outbound mobility needs.
                            </p>
                            <p class="text-left p-text mb-3">Our wide range of relocation management services are backed
                                by our
                                human-centric technology platform that enables employees and their families transition
                                successfully from their existing location to a new home.
                            </p>
                            <p class="text-left p-text mb-3">Our wide range of relocation management services are backed
                                by our
                                human-centric technology platform that enables employees and their families transition
                                successfully from their existing location to a new home.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 order-md-2 order-1 col-md-12 col-sm-12 col-xs-12 aos-init aos-animate"
                    data-aos="fade-up" data-aos-duration="500">
                    <div class="image-section">
                        <a href="" class="hover_ele" hovertext="Download">
                            <img src={whoWeAre} alt="" title=""/>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section class="about-section-alt">
            <div class="row bod-block">
                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 aos-init aos-animate" data-aos="fade-up"
                    data-aos-duration="500">
                    <div class="image-section">
                        <a href="" class="hover_ele" hovertext="Download">
                            <img src={formulaValue} alt="" title=""/>
                        </a>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 aos-init aos-animate" data-aos="fade-up"
                    data-aos-duration="500">
                    <div class="image-content">
                        <div class="heading-section ">
                            <h2 class="home-section-title">FORMULA VALUES</h2>
                            <p class="text-left p-text mb-3">Our core values define who we are. They are extremely
                                significant to
                                us, to the way we work, and how we create value for our clients. Below are the five key
                                pillars of our value system:
                            </p>
                            <p class="text-left heading-p">Trust and reliability:</p>
                            <p class="text-left p-text">Care for the customer and maintain highest quality standards and
                                timelines
                                at every step</p>
                            <p class="text-left heading-p">Empathy:</p>
                            <p class="text-left p-text">Work with the client as a partner, not just as a customer. Be a
                                part of
                                every step of their journe</p>
                            <p class="text-left heading-p">Innovation:</p>
                            <p class="text-left p-text">Innovate using technology to solve business and customer
                                challenges</p>
                            <p class="text-left heading-p">Agility:</p>
                            <p class="text-left p-text">Adapt quickly to evolving customer needs and business
                                environment</p>
                            <p class="text-left heading-p">Teamwork:</p>
                            <p class="text-left p-text mb-3">Build a positive work environment with a philosophy of ‘we’
                                before
                                ‘me’</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="about-section-alt">
            <div class="row bod-block">
                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 order-md-1 order-2 aos-init aos-animate"
                    data-aos="fade-up" data-aos-duration="500">
                    <div class="image-content">
                        <div class="heading-section ">
                            <h2 class="home-section-title">CSR</h2>
                            <p class="text-left p-text mb-3">Give a man a fish and you feed him for a day. Teach him how
                                to fish
                                and you feed him for his lifetime’ is a popular Italian proverb. It is also the
                                philosophy
                                behind Formula Group’s CSR activities. Our CSR activities are aimed at the betterment of
                                the
                                environment and the society. Enablement of the underprivileged is the core pillar of our
                                efforts. This can be seen through our various engagements with different communities
                                wherein
                                our entire company actively becomes a part of.
                            </p>
                            <div class="res-circle abt-org-col">
                                <div class="circle-icon">
                                    <a href="#"><FontAwesomeIcon icon={faArrowRight} size='md' /></a>
                                    <a href="#" class="circle-txt">
                                        <p>Read more</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 order-md-2 order-1 aos-init aos-animate"
                    data-aos="fade-up" data-aos-duration="500">
                    <div class="image-section">
                        <a href="" class="hover_ele" hovertext="Download">
                            <img src={csr} alt="" title=""/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section class="about-section-alt">
            <div class="row bod-block">
                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                    <div class="image-section">
                        <a href="awards-milestone.html" class="hover_ele" hovertext="Download">
                            <img src={awards} alt="" title=""/>
                        </a>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                    <div class="image-content">
                        <div class="heading-section ">
                            <h2 class="home-section-title">Awards and Milestone</h2>
                            <p class="text-left p-text mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Quisque iaculis dui aliquam congue lobortis. Suspendisse nec tristique nunc, ut ornare
                                sapien. Pellentesque ut tincidunt leo. Mauris a semper augue. Proin vel pulvinar neque,
                                et tincidunt leo. Vestibulum convallis est ut turpis fermentum viverra sed quis felis.
                                Aliquam quis tellus at.</p>
                            <div class="res-circle abt-org-col">
                                <div class="circle-icon">
                                    <a href="awards-milestone.html"><FontAwesomeIcon icon={faArrowRight} size='md' /></a>
                                    <a href="awards-milestone.html" class="circle-txt">
                                        <p>Read more</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="home-section-alt">
        <div class="container">
            <div class="heading-section">
                <h2 class="home-section-title">Our Leadership</h2>
            </div>
            <div class="home-section-content">
                <div class="row bod-block">
                <div class="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                        <div class="abt-org-col">
                        <div class="sbc-banner leader-col">
                                <img class="img-fluid" alt="..." src={mrNarula}/>
                                <div class="leader-title">
                                    <h3 class="title-name">Mr. Raman Narula</h3>
                                    <p class="title-desi">Managing Director</p>
                                </div>
                            </div>
                            <div class="sbc-banner-overlay">
                                <h3 class="title-name">Mr. Raman Narula</h3>
                                <p class="title-desi">Managing Director</p>
                                <p class="bio">Raman took over his family travel business in 1996 and pioneered new
                                    travel products in India. In 2004, Raman spearheaded the launch of the Formula
                                    Corporate Solutions, with support from Mitsui India. He has been instrumental in
                                    conceptualizing the “Single Window Solution Model” for Relocation and Corporate
                                    Services catering to MNC’s & RMC’s and has established an organisation with a
                                    strong foundation having Pan India offices and a Talented Team on board.<br></br>
                                    Raman is a people’s person and an avid golfer with over two decades of service
                                    industry experience under his belt. His entrepreneurial ability to identify
                                    long-term business opportunities has equipped Raman with the expertise to
                                    identify key problem areas and strategically build optimal solutions. This
                                    combination of talents has been the key to the success of Formula Group.
                                    <br></br>
                                    Before taking over his family business, Raman worked with the $1.5-billion
                                    French Resort company Club Med as their business head in India. <br></br>
                                    Today, after establishing Formula Group as a well recognised & respected brand
                                    in India, Raman is leading the Company with a clear vision to provide Formula’s
                                    customers the Highest Quality of service. <br></br>
                                </p>
                            </div>

                        </div>
                   </div>

                   <div class="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                        <div class="abt-org-col">
                        <div class="sbc-banner leader-col">
                                <img class="img-fluid" alt="..." src={mrNarula}/>
                                <div class="leader-title">
                                    <h3 class="title-name">Mr. Raman Narula</h3>
                                    <p class="title-desi">Managing Director</p>
                                </div>
                            </div>
                            <div class="sbc-banner-overlay">
                                <h3 class="title-name">Mr. Raman Narula</h3>
                                <p class="title-desi">Managing Director</p>
                                <p class="bio">Raman took over his family travel business in 1996 and pioneered new
                                    travel products in India. In 2004, Raman spearheaded the launch of the Formula
                                    Corporate Solutions, with support from Mitsui India. He has been instrumental in
                                    conceptualizing the “Single Window Solution Model” for Relocation and Corporate
                                    Services catering to MNC’s & RMC’s and has established an organisation with a
                                    strong foundation having Pan India offices and a Talented Team on board.<br></br>
                                    Raman is a people’s person and an avid golfer with over two decades of service
                                    industry experience under his belt. His entrepreneurial ability to identify
                                    long-term business opportunities has equipped Raman with the expertise to
                                    identify key problem areas and strategically build optimal solutions. This
                                    combination of talents has been the key to the success of Formula Group.
                                    <br></br>
                                    Before taking over his family business, Raman worked with the $1.5-billion
                                    French Resort company Club Med as their business head in India. <br></br>
                                    Today, after establishing Formula Group as a well recognised & respected brand
                                    in India, Raman is leading the Company with a clear vision to provide Formula’s
                                    customers the Highest Quality of service. <br></br>
                                </p>
                            </div>

                        </div>
                   </div>

                   <div class="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                        <div class="abt-org-col">
                        <div class="sbc-banner leader-col">
                                <img class="img-fluid" alt="..." src={mrNarula}/>
                                <div class="leader-title">
                                    <h3 class="title-name">Mr. Raman Narula</h3>
                                    <p class="title-desi">Managing Director</p>
                                </div>
                            </div>
                            <div class="sbc-banner-overlay">
                                <h3 class="title-name">Mr. Raman Narula</h3>
                                <p class="title-desi">Managing Director</p>
                                <p class="bio">Raman took over his family travel business in 1996 and pioneered new
                                    travel products in India. In 2004, Raman spearheaded the launch of the Formula
                                    Corporate Solutions, with support from Mitsui India. He has been instrumental in
                                    conceptualizing the “Single Window Solution Model” for Relocation and Corporate
                                    Services catering to MNC’s & RMC’s and has established an organisation with a
                                    strong foundation having Pan India offices and a Talented Team on board.<br></br>
                                    Raman is a people’s person and an avid golfer with over two decades of service
                                    industry experience under his belt. His entrepreneurial ability to identify
                                    long-term business opportunities has equipped Raman with the expertise to
                                    identify key problem areas and strategically build optimal solutions. This
                                    combination of talents has been the key to the success of Formula Group.
                                    <br></br>
                                    Before taking over his family business, Raman worked with the $1.5-billion
                                    French Resort company Club Med as their business head in India. <br></br>
                                    Today, after establishing Formula Group as a well recognised & respected brand
                                    in India, Raman is leading the Company with a clear vision to provide Formula’s
                                    customers the Highest Quality of service. <br></br>
                                </p>
                            </div>

                        </div>
                   </div>

                   <div class="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                        <div class="abt-org-col">
                        <div class="sbc-banner leader-col">
                                <img class="img-fluid" alt="..." src={mrNarula}/>
                                <div class="leader-title">
                                    <h3 class="title-name">Mr. Raman Narula</h3>
                                    <p class="title-desi">Managing Director</p>
                                </div>
                            </div>
                            <div class="sbc-banner-overlay">
                                <h3 class="title-name">Mr. Raman Narula</h3>
                                <p class="title-desi">Managing Director</p>
                                <p class="bio">Raman took over his family travel business in 1996 and pioneered new
                                    travel products in India. In 2004, Raman spearheaded the launch of the Formula
                                    Corporate Solutions, with support from Mitsui India. He has been instrumental in
                                    conceptualizing the “Single Window Solution Model” for Relocation and Corporate
                                    Services catering to MNC’s & RMC’s and has established an organisation with a
                                    strong foundation having Pan India offices and a Talented Team on board.<br></br>
                                    Raman is a people’s person and an avid golfer with over two decades of service
                                    industry experience under his belt. His entrepreneurial ability to identify
                                    long-term business opportunities has equipped Raman with the expertise to
                                    identify key problem areas and strategically build optimal solutions. This
                                    combination of talents has been the key to the success of Formula Group.
                                    <br></br>
                                    Before taking over his family business, Raman worked with the $1.5-billion
                                    French Resort company Club Med as their business head in India. <br></br>
                                    Today, after establishing Formula Group as a well recognised & respected brand
                                    in India, Raman is leading the Company with a clear vision to provide Formula’s
                                    customers the Highest Quality of service. <br></br>
                                </p>
                            </div>

                        </div>
                   </div>

                   <div class="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                        <div class="abt-org-col">
                        <div class="sbc-banner leader-col">
                                <img class="img-fluid" alt="..." src={mrNarula}/>
                                <div class="leader-title">
                                    <h3 class="title-name">Mr. Raman Narula</h3>
                                    <p class="title-desi">Managing Director</p>
                                </div>
                            </div>
                            <div class="sbc-banner-overlay">
                                <h3 class="title-name">Mr. Raman Narula</h3>
                                <p class="title-desi">Managing Director</p>
                                <p class="bio">Raman took over his family travel business in 1996 and pioneered new
                                    travel products in India. In 2004, Raman spearheaded the launch of the Formula
                                    Corporate Solutions, with support from Mitsui India. He has been instrumental in
                                    conceptualizing the “Single Window Solution Model” for Relocation and Corporate
                                    Services catering to MNC’s & RMC’s and has established an organisation with a
                                    strong foundation having Pan India offices and a Talented Team on board.<br></br>
                                    Raman is a people’s person and an avid golfer with over two decades of service
                                    industry experience under his belt. His entrepreneurial ability to identify
                                    long-term business opportunities has equipped Raman with the expertise to
                                    identify key problem areas and strategically build optimal solutions. This
                                    combination of talents has been the key to the success of Formula Group.
                                    <br></br>
                                    Before taking over his family business, Raman worked with the $1.5-billion
                                    French Resort company Club Med as their business head in India. <br></br>
                                    Today, after establishing Formula Group as a well recognised & respected brand
                                    in India, Raman is leading the Company with a clear vision to provide Formula’s
                                    customers the Highest Quality of service. <br></br>
                                </p>
                            </div>

                        </div>
                   </div>

                   <div class="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                        <div class="abt-org-col">
                        <div class="sbc-banner leader-col">
                                <img class="img-fluid" alt="..." src={mrNarula}/>
                                <div class="leader-title">
                                    <h3 class="title-name">Mr. Raman Narula</h3>
                                    <p class="title-desi">Managing Director</p>
                                </div>
                            </div>
                            <div class="sbc-banner-overlay">
                                <h3 class="title-name">Mr. Raman Narula</h3>
                                <p class="title-desi">Managing Director</p>
                                <p class="bio">Raman took over his family travel business in 1996 and pioneered new
                                    travel products in India. In 2004, Raman spearheaded the launch of the Formula
                                    Corporate Solutions, with support from Mitsui India. He has been instrumental in
                                    conceptualizing the “Single Window Solution Model” for Relocation and Corporate
                                    Services catering to MNC’s & RMC’s and has established an organisation with a
                                    strong foundation having Pan India offices and a Talented Team on board.<br></br>
                                    Raman is a people’s person and an avid golfer with over two decades of service
                                    industry experience under his belt. His entrepreneurial ability to identify
                                    long-term business opportunities has equipped Raman with the expertise to
                                    identify key problem areas and strategically build optimal solutions. This
                                    combination of talents has been the key to the success of Formula Group.
                                    <br></br>
                                    Before taking over his family business, Raman worked with the $1.5-billion
                                    French Resort company Club Med as their business head in India. <br></br>
                                    Today, after establishing Formula Group as a well recognised & respected brand
                                    in India, Raman is leading the Company with a clear vision to provide Formula’s
                                    customers the Highest Quality of service. <br></br>
                                </p>
                            </div>

                        </div>
                   </div>

                   <div class="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                        <div class="abt-org-col">
                        <div class="sbc-banner leader-col">
                                <img class="img-fluid" alt="..." src={mrNarula}/>
                                <div class="leader-title">
                                    <h3 class="title-name">Mr. Raman Narula</h3>
                                    <p class="title-desi">Managing Director</p>
                                </div>
                            </div>
                            <div class="sbc-banner-overlay">
                                <h3 class="title-name">Mr. Raman Narula</h3>
                                <p class="title-desi">Managing Director</p>
                                <p class="bio">Raman took over his family travel business in 1996 and pioneered new
                                    travel products in India. In 2004, Raman spearheaded the launch of the Formula
                                    Corporate Solutions, with support from Mitsui India. He has been instrumental in
                                    conceptualizing the “Single Window Solution Model” for Relocation and Corporate
                                    Services catering to MNC’s & RMC’s and has established an organisation with a
                                    strong foundation having Pan India offices and a Talented Team on board.<br></br>
                                    Raman is a people’s person and an avid golfer with over two decades of service
                                    industry experience under his belt. His entrepreneurial ability to identify
                                    long-term business opportunities has equipped Raman with the expertise to
                                    identify key problem areas and strategically build optimal solutions. This
                                    combination of talents has been the key to the success of Formula Group.
                                    <br></br>
                                    Before taking over his family business, Raman worked with the $1.5-billion
                                    French Resort company Club Med as their business head in India. <br></br>
                                    Today, after establishing Formula Group as a well recognised & respected brand
                                    in India, Raman is leading the Company with a clear vision to provide Formula’s
                                    customers the Highest Quality of service. <br></br>
                                </p>
                            </div>

                        </div>
                   </div>

                   <div class="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                        <div class="abt-org-col">
                        <div class="sbc-banner leader-col">
                                <img class="img-fluid" alt="..." src={mrNarula}/>
                                <div class="leader-title">
                                    <h3 class="title-name">Mr. Raman Narula</h3>
                                    <p class="title-desi">Managing Director</p>
                                </div>
                            </div>
                            <div class="sbc-banner-overlay">
                                <h3 class="title-name">Mr. Raman Narula</h3>
                                <p class="title-desi">Managing Director</p>
                                <p class="bio">Raman took over his family travel business in 1996 and pioneered new
                                    travel products in India. In 2004, Raman spearheaded the launch of the Formula
                                    Corporate Solutions, with support from Mitsui India. He has been instrumental in
                                    conceptualizing the “Single Window Solution Model” for Relocation and Corporate
                                    Services catering to MNC’s & RMC’s and has established an organisation with a
                                    strong foundation having Pan India offices and a Talented Team on board.<br></br>
                                    Raman is a people’s person and an avid golfer with over two decades of service
                                    industry experience under his belt. His entrepreneurial ability to identify
                                    long-term business opportunities has equipped Raman with the expertise to
                                    identify key problem areas and strategically build optimal solutions. This
                                    combination of talents has been the key to the success of Formula Group.
                                    <br></br>
                                    Before taking over his family business, Raman worked with the $1.5-billion
                                    French Resort company Club Med as their business head in India. <br></br>
                                    Today, after establishing Formula Group as a well recognised & respected brand
                                    in India, Raman is leading the Company with a clear vision to provide Formula’s
                                    customers the Highest Quality of service. <br></br>
                                </p>
                            </div>

                        </div>
                   </div>
                   <div class="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                        <div class="abt-org-col">
                        <div class="sbc-banner leader-col">
                                <img class="img-fluid" alt="..." src={mrNarula}/>
                                <div class="leader-title">
                                    <h3 class="title-name">Mr. Raman Narula</h3>
                                    <p class="title-desi">Managing Director</p>
                                </div>
                            </div>
                            <div class="sbc-banner-overlay">
                                <h3 class="title-name">Mr. Raman Narula</h3>
                                <p class="title-desi">Managing Director</p>
                                <p class="bio">Raman took over his family travel business in 1996 and pioneered new
                                    travel products in India. In 2004, Raman spearheaded the launch of the Formula
                                    Corporate Solutions, with support from Mitsui India. He has been instrumental in
                                    conceptualizing the “Single Window Solution Model” for Relocation and Corporate
                                    Services catering to MNC’s & RMC’s and has established an organisation with a
                                    strong foundation having Pan India offices and a Talented Team on board.<br></br>
                                    Raman is a people’s person and an avid golfer with over two decades of service
                                    industry experience under his belt. His entrepreneurial ability to identify
                                    long-term business opportunities has equipped Raman with the expertise to
                                    identify key problem areas and strategically build optimal solutions. This
                                    combination of talents has been the key to the success of Formula Group.
                                    <br></br>
                                    Before taking over his family business, Raman worked with the $1.5-billion
                                    French Resort company Club Med as their business head in India. <br></br>
                                    Today, after establishing Formula Group as a well recognised & respected brand
                                    in India, Raman is leading the Company with a clear vision to provide Formula’s
                                    customers the Highest Quality of service. <br></br>
                                </p>
                            </div>

                        </div>
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

export default AboutUs;
