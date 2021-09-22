import React, { useState } from "react";
import { Link } from "react-router-dom";
const Happycustomers = (props) => {
  const [index, setIndex] = useState(0);
 
  return (
    <>
           <section className="home-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 counter-block text-center aos-init aos-animate" data-aos="fade-up"
                        data-aos-duration="500">
                        <p className="display-3 count-box text-dark"><span className="counter">2000</span></p>
                        <p className="h5 text-box text-gray">Happy Clients</p>
                    </div>
                    <div className="col-md-4 mb-4 counter-block text-center aos-init aos-animate" data-aos="fade-up"
                        data-aos-duration="500">
                        <p className="display-3 count-box text-dark"><span className="counter">25</span></p>
                        <p className="h5 text-box text-gray">Cities</p>
                    </div>
                    <div className="col-md-4 mb-4 counter-block text-center aos-init aos-animate" data-aos="fade-up"
                        data-aos-duration="500">
                        <p className="display-3 count-box text-dark"><span className="counter">2004</span></p>
                        <p className="h5 text-box text-gray">Since</p>
                    </div>
                </div>
            </div>
            <div className="vl"></div>
        </section>
    </>
  );


};

export default Happycustomers;
