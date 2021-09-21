import React from "react";
import { Link } from "react-router-dom";
import Base from "../../base";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDoubleRight  } from '@fortawesome/free-solid-svg-icons';
import {faArrowRight  } from '@fortawesome/free-solid-svg-icons';
import team from "../../../assets/images/csr-team.jpg";
import navjyoti from "../../../assets/images/navjyoti-logo.png";
import shikar from "../../../assets/images/shikar-logo.png";
import sapna from "../../../assets/images/sapna-logo.png";
import sood from "../../../assets/images/sood-logo.png";
import tesf from "../../../assets/images/tesf-logo.png";

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
      
    <section class="site-hero overlay justify-content-center align-items-center csrimg"
       data-stellar-background-ratio="0.5">
        <div class="container">
            <div class="row site-hero-inner justify-content-center align-items-center">
                <div class="col-md-10 text-center" data-aos="fade-up">
                    <h1 class="heading">CSR</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb site-breadcrumb fg-breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Home</a><FontAwesomeIcon icon={faAngleDoubleRight}/></li>
                            <li class="breadcrumb-item"><a href="about-us">About Us</a><FontAwesomeIcon icon={faAngleDoubleRight}/></li>
                            <li class="breadcrumb-item active" aria-current="page">CSR</li>
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
                    <div class="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                        <div class="abt-org-col">
                            <div class="abt-org-col-text">
                                <div class="heading-section">
                                    <h2 class="home-section-title">CSR</h2>
                                    <p class="text-left p-text mb-3">Give a man a fish and you feed him for a day. Teach
                                        him
                                        how to fish and you feed him for his lifetime’ is a popular Italian proverb. It
                                        is also the philosophy behind Formula Group’s CSR activities. Our CSR activities
                                        are aimed at the betterment of the environment and the society. Enablement of
                                        the underprivileged is the core pillar of our efforts. This can be seen through
                                        our various engagements with different communities wherein our entire company
                                        actively becomes a part of.
                                    </p>
                                    <p class="text-left p-text mb-3">Empathy, which is one of our core values, is also
                                        highlighted in our CSR efforts. The corporate social responsibility culture at
                                        formula group is one that is inclusive, democratic and participatory. The focus
                                        is not only on the external impact of CSR, on the larger community, but also the
                                        internal impact that pro-social behavior has on each individual team member.
                                        Thus, team member involvement is a major part of Formulas CSR policy. The idea
                                        is to ‘Lead by Example.
                                    </p>
                                    <p class="text-left p-text mb-3">Our team proactively steps forward to help the
                                        needy and
                                        bring smiles on the faces of the children through arts and Crafts, story
                                        -telling and reciting poems. Formula team members volunteer programs enjoy
                                        greater employee satisfaction, higher morale and, as a result, greater
                                        productivity and profitability.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                       <div class="carousel-gallery-csr">
                            <div class="swiper-container mySwiper">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="image csr_ngo">
                                            <div class="overlay">
                                                <em class="mdi mdi-magnify-plus"></em>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="image csr_ngo2">
                                            <div class="overlay">
                                                <em class="mdi mdi-magnify-plus"></em>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="image csr_ngo3">
                                            <div class="overlay">
                                                <em class="mdi mdi-magnify-plus"></em>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="image csr_ngo4">
                                            <div class="overlay">
                                                <em class="mdi mdi-magnify-plus"></em>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="image csr_ngo5">
                                            <div class="overlay">
                                                <em class="mdi mdi-magnify-plus"></em>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="image csr_ngo6">
                                            <div class="overlay">
                                                <em class="mdi mdi-magnify-plus"></em>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-button-next"></div>
                                <div class="swiper-button-prev"></div>
                                <div class="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img class="img-fluid img-csr aos-init aos-animate" data-aos="fade-up" data-aos-duration="500" alt="..."
                src={team}/> */}
        </section>
      
        <section class="about-section-alt csr-section">
            <div class="container">
                <div class="row bod-block">

                    <div class="col-md-3 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                        <div class="abt-org-col">
                            <div class="abt-org-col-text">
                                <div>
                                    <a href="https://www.navjyoti.org.in/" target="_blank">
                                        <img class="img-fluid pad-30" alt="..." src={navjyoti}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-9 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                        <div class="abt-org-col">
                            <div class="abt-org-col-text">
                                <div class="heading-section">
                                    <h2 class="home-section-title">Navjyoti India Foundation</h2>
                                    <p class="text-left p-text">Remedial Education Program to provide children from
                                        weaker
                                        sections, access to education with a focus on quality and retention. We could
                                        make a direct impact on a total of 375 girls who were trained and encouraged to
                                        become self-dependent through this programme with support of Formula Group.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                        <div class="abt-org-col">
                            <div class="abt-org-col-text">
                                <div>
                                    <a href="http://www.shikhar-ngo.org/" target="_blank">
                                        <img class="img-fluid pad-30" alt="..." src={shikar}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
               
                    <div class="col-md-9 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                        <div class="abt-org-col">
                            <div class="abt-org-col-text">
                                <div class="heading-section">
                                    <h2 class="home-section-title">NGO Shikhar</h2>
                                    <p class="text-left p-text">Vocational Training Program for young girls - A
                                        programme to
                                        promote entrepreneurship for self-help groups from economically weaker sections
                                        of society was launched in select districts of South Delhi. This will provide
                                        work so that they become self-dependent / sufficient and also to connect them
                                        with the mainstream. Over the last three years more than 600 women have been
                                        able to utilise the benefit of this program and became self dependent.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                        <div class="abt-org-col">
                            <div class="abt-org-col-text">
                                <div>
                                    <a href="http://www.shikhar-ngo.org/" target="_blank">
                                        <img class="img-fluid pad-30" alt="..." src={sapna}/>
                                    </a>                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-9 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                        <div class="abt-org-col">
                            <div class="abt-org-col-text">
                                <div class="heading-section">
                                    <h2 class="home-section-title">NGO Sapna</h2>
                                    <p class="text-left p-text">Home for Sick and Public Health Care Services - Over the
                                        years
                                        the NGO has treated more than 55,000 disadvantaged people at our institutional
                                        facility in Alwar, provided palliative care to hundreds of chronically sick and
                                        injured-many with permanent sequelae, and sheltered the homeless. Sapna has
                                        provided resources for 630 surgeries and post-surgical procedures at Safdarjung
                                        Hospital, taken care of the needs of people suffering from chronic renal
                                        conditions and facilitated heart-surgeries for 43 children.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                        <div class="abt-org-col">
                            <div class="abt-org-col-text">
                                <div>
                                    <a href="https://soodcharityfoundation.org/" target="_blank">
                                        <img class="img-fluid pad-30" alt="..." src={sood}/>
                                    </a>                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-9 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                        <div class="abt-org-col">
                            <div class="abt-org-col-text">
                                <div class="heading-section">
                                    <h2 class="home-section-title">Sood Charity Foundation</h2>
                                    <p class="text-left p-text">The NGO founded by Actor and Philanthropist, Sonu Sood
                                        has
                                        become a household name and a support system for countless families during the
                                        Pandemic. The Sood Charity Foundation is providing state-of-the-art healthcare,
                                        education, employment, and technology advancements. The NGO is trying to
                                        initiate a movement that encourages people to join hands towards serving
                                        humanity. Sood Charity Foundation has helped thousands of people across the
                                        world. The constant efforts of this organization is to raise awareness and
                                        provide care for those in need.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                        <div class="abt-org-col">
                            <div class="abt-org-col-text">
                                <div>
                                    <a href="https://www.earthsaviours.in/" target="_blank">
                                        <img class="img-fluid pad-30" alt="..." src={tesf}/>
                                    </a>                                     
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-9 mb-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                        <div class="abt-org-col">
                            <div class="abt-org-col-text">
                                <div class="heading-section">
                                    <h2 class="home-section-title">The Earth Saviours Foundation</h2>
                                    <p class="text-left p-text">Founded by Ravi Kalra, also known as the “No Honking Man
                                        of
                                        India”, Earth Saviors NGO goes on roads in search of abandoned senior citizens
                                        and mentally disabled people and brings them to the shelter home where they are
                                        provided with free of charge accommodation, food and medical care. Presently
                                        more than five hundred such less privileged people are living permanently at
                                        Kalra’s shelter home.</p>
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

export default Csr;
