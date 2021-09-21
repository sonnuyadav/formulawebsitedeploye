import React, { useState } from "react";
import { Link } from "react-router-dom";
const HomeTopSlider = (props) => {
 return (
    <>
   <section className="site-hero overlay justify-content-center align-items-center backgroundimage"
        data-stellar-background-ratio="0.5">
        <div className="container">
            <div className="row site-hero-inner justify-content-center align-items-center">
                {/* <div className="col-md-10 text-center" data-aos="fade-up">
                    <h1 className="heading">Service elevated, experience unparalleled</h1>
                    <span className="custom-caption text-white d-block  mb-3">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Aliquam molestie, mi at pharetra aliquet, purus massa dictum nibh, quis laoreet
                        lorem lectus eu arcu. Curabitur.
                        </span>
                </div> */}

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
  
   
     </>
  );
};

export default HomeTopSlider;
