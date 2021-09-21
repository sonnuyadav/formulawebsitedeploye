import React, { useState } from "react";
import { Link } from "react-router-dom";
import blogImage from "../../../assets/images/IMMIGRATION.jpg";
const Testimonials = (props) => {
  const [index, setIndex] = useState(0);
  return (
    <>
     <section className="home-section home-section-alt">
            <div className="container">
                <div className="home-section-content">
                    <div className="row">
                        <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                            <div className="abt-org-col">
                                <div className="heading-section">
                                    <h2 className="home-section-title">Clients Speak</h2>
                                    <p className="text-left p-text">“ Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Nullam vel volutpat diam. Integer dapibus id leo quis finibus. In tempor
                                        tristique leo, et vehicula lacus sagittis non. Duis consectetur lectus a
                                        dignissim
                                        pellentesque. Vivamus eget. Integer dapibus id leo quis finibus. In tempor
                                        tristique leo. Duis consectetur lectus a
                                        dignissim pellentesque. Vivamus eget.”
                                    </p>
                                    <p className="text-left">- Kapil Dev</p>
                                </div>
                            </div>
                            <p><a href="#News" className="link-view-ltne link-view-ltne-news">View All »</a></p>
                        </div>

                        <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                            <div className="abt-org-col">
                                <div className="heading-section">
                                    <h2 className="home-section-title">Blog</h2>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="sbc-banner">
                                                <a href="#">
                                                    <img className="img-fluid img-rounded" alt="..."
                                                        src={blogImage}/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <p className="text-left">3, Jul, 2021</p>
                                            <h3 className="text-left blog-text">Lorem ipsum dolor sit amet, consectetur
                                                adipiscing.</h3>
                                            <p className="text-left p-text">Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit. Nullam vel volutpat diam. Integer dapibus id leo quis
                                                finibus.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p><a href="#News" className="link-view-ltne link-view-ltne-news">View All »</a></p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="vl"></div>
        </section>
    
    </>
  );


};

export default Testimonials;
