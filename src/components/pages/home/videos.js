import React, { useState } from "react";
import { Link } from "react-router-dom";
import vidoeImage from "../../../assets/images/fornula-video.jpg";
const HomeVideos = (props) => {
  const [index, setIndex] = useState(0);
  return (
    <> <section className="home-section home-section-alt1">
            <div className="container">
                <div className="home-section-content">
                    <div className="row">
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

        <section className="home-section-alt">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 counter-block aos-init aos-animate" data-aos="fade-up"
                    data-aos-duration="500">
                        <div className="video-box text-center">
                            <img className="image img-fluid" src={vidoeImage}/>
                            <a id="play-video" className="video-play-button" href="#">
                                <span></span>
                            </a>                                          
                        </div>
                    </div>
                </div>
            </div>
            <div id="video-overlay" className="video-overlay">
                <a className="video-overlay-close">&times;</a>
            </div>
            <div className="vl"></div>
        </section>
    </>
  );


};

export default HomeVideos;
