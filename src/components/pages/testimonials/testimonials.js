import React from "react";
import Base from "../../base";
import { Helmet } from "react-helmet";
import ClientBox from './ClientsBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuoteLeft, faQuoteRight,faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';
const Testimonials = () => {
  return (
    <Base>
      <>
        <Helmet>
          <title>Testimonials - FormulaIndia</title>
          <meta
            name="description"
            content="Career - FormulaIndia"
          />
        </Helmet>
        <section className="site-hero overlay justify-content-center align-items-center testimonials"
         data-stellar-background-ratio="0.5">
        <div className="container">
            <div className="row site-hero-inner justify-content-center align-items-center">
                <div className="col-md-10 text-center" data-aos="fade-up">
                    <h1 className="heading">Clients Speak</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb site-breadcrumb fg-breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a><FontAwesomeIcon icon={faAngleDoubleRight} size='md' /></li>
                            <li className="breadcrumb-item active" aria-current="page">Clients Speak</li>
                        </ol>
                    </nav>
                </div>

                <div className="mouse-down">
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                </div>
            </div>
        </div>

        <a className="mouse smoothscroll" href="#next">
            <div className="mouse-icon">
                <span className="mouse-wheel"></span>
            </div>
        </a>
    </section>
    <ClientBox/>

        <section className="home-section-alt1">
            <div className="container">
                <div className="home-section-content">
                    <div className="row bod-block">
                        <div className="col-md-12 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                            <div className="abt-org-col">
                                <div className="abt-org-col-text">
                                    <p className="businessNeed">Not sure which solution fits you
                                        business needs?</p>
                                    <button className="btn btn-primary" type="submit">Contact us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="vl"></div>
        </section>
        </>
    </Base>
  );
};
export default Testimonials;