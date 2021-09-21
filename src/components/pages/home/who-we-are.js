import React, { useState } from "react";
import { Link } from "react-router-dom";
const HomeVideos = (props) => {
  const [index, setIndex] = useState(0);
  return (
      <section className="home-section-alt">
            <div className="container">
                <div className="heading-section aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                    <h2 className="home-section-title">WHO WE ARE</h2>
                    <p className="text-left p-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                        molestie.</p>
                </div>

                <div className="home-section-content">
                    <div className="row">
                        <div className="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                            <div className="abt-org-col">
                                <div className="abt-org-col-text">
                                    <p className="whoweare">Lorem ipsum dolor sit amet</p>
                                    <div className="p-text ptext">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Donec ac rutrum mauris. Vestibulum a molestie ligula. Vivamus
                                        facilisis auctor urna, in ullamcorper nisi scelerisque a.</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                            <div className="abt-org-col">
                                <div className="abt-org-col-text">
                                    <p className="whoweare">Lorem ipsum dolor sit amet</p>
                                    <div className="p-text ptext">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Donec ac rutrum mauris. Vestibulum a molestie ligula. Vivamus
                                        facilisis auctor urna, in ullamcorper nisi scelerisque a.</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                            <div className="abt-org-col">
                                <div className="abt-org-col-text">
                                    <p className="whoweare">Lorem ipsum dolor sit amet</p>
                                    <div className="p-text ptext">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Donec ac rutrum mauris. Vestibulum a molestie ligula. Vivamus
                                        facilisis auctor urna, in ullamcorper nisi scelerisque a.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="vl"></div>
        </section>
   
  );


};

export default HomeVideos;
