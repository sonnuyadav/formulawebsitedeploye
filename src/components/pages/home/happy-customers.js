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
                        <p className="display-3 count-box text-dark"><span className="counter">2000</span><span>+</span></p>
                        <p className="h5 text-box text-gray">Happy Clients</p>
                    </div>
                    <div className="col-md-4 mb-4 counter-block text-center aos-init aos-animate" data-aos="fade-up"
                        data-aos-duration="500">
                        <p className="display-3 count-box text-dark"><span className="counter">9</span><span>+</span></p>
                        <p className="h5 text-box text-gray">Office Location</p>
                    </div>
                    <div className="col-md-4 mb-4 counter-block text-center aos-init aos-animate" data-aos="fade-up"
                        data-aos-duration="500">
                        <p className="display-3 count-box text-dark"><span className="counter">500</span><span>+</span></p>
                        <p className="h5 text-box text-gray">Office Staff</p>
                    </div>
                </div>
            </div>
            <div className="vl"></div>
        </section>
    </>
  );


};

export default Happycustomers;
