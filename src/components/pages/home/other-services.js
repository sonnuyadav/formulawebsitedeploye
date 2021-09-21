import React, { useState } from "react";
import { Link } from "react-router-dom";
import Suraksha from "../../../assets/images/Suraksha.jpg";
import rental from "../../../assets/images/Formula-Car-Rental.jpg";
import Travel from "../../../assets/images/The-Travel-Formula.jpg";
import Apartment from "../../../assets/images/Formula-Serviced-Apartment.jpg";
import Holiday from "../../../assets/images/Holiday-Representations.jpg";
const Otherservices = (props) => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <section className="home-section">
            <div className="container">
                <div className="heading-section">
                    <h2 className="home-section-title mb-3">Other Services</h2>
                    <div className="row">
                        <div className="d-flex flex-wrap aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">

                            <div className="w-lg-20 box-pad">
                                <a href="https://www.suraksha4u.com/" target="_blank">
                                    <div className="service-overlay text-center">
                                        <img className="image img-fluid img-rounded" src={Suraksha}/>
                                        <h3 className="text">Suraksha</h3>
                                    </div>
                                </a>
                            </div>

                            <div className="w-lg-20 box-pad">
                                <a href="https://www.formulacarrental.com/" target="_blank">
                                    <div className="service-overlay text-center">
                                        <img className="image img-fluid img-rounded" src={rental}/>
                                        <h3 className="text">Formula <br/> Car Rental</h3>
                                    </div>
                                </a>
                            </div>

                            <div className="w-lg-20 box-pad">
                                <a href="https://www.thetravelformula.com/" target="_blank">
                                    <div className="service-overlay text-center">
                                        <img className="image img-fluid img-rounded" src={Travel}/>
                                        <h3 className="text">The <br/> Travel Formula</h3>
                                    </div>
                                </a>
                            </div>

                            <div className="w-lg-20 box-pad">
                                <a href="https://www.formulaservicedapartment.com/" target="_blank">
                                    <div className="service-overlay text-center">
                                        <img className="image img-fluid img-rounded"
                                            src={Apartment}/>
                                        <h3 className="text">Formula <br/> Serviced Apartment</h3>
                                    </div>
                                </a>
                            </div>

                            <div className="w-lg-20 box-pad">
                                <a href="https://www.holidayrepresentations.com/" target="_blank">
                                    <div className="service-overlay text-center">
                                        <img className="image img-fluid img-rounded" src={Holiday}/>
                                        <h3 className="text">Holiday <br/> Representations</h3>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="vl-1"></div>
            </div>
        </section>
    </>
  );


};

export default Otherservices;
