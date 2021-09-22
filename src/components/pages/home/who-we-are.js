import React, { useState } from "react";
import { Link } from "react-router-dom";
const HomeVideos = (props) => {
  const [index, setIndex] = useState(0);
  return (
      <section className="home-section-alt">
            <div className="container">
                <div className="heading-section aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                    <h2 className="home-section-title">WHO WE ARE</h2>
                    {/* <p className="text-left p-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                        molestie.</p> */}
                </div>
                <div class="home-section-content">
                    <div class="row">
                        <div class="col-md-12 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                            <div class="p-text mb-3 ptext">Formula Group is a provider of integrated corporate mobility services in India, providing mobility services to over 20 Fortune 100 clients for both inbound as well as outbound mobility needs.</div>
                        </div>
                        <div class="col-md-12 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                            <div class="p-text mb-3 ptext">Our wide range of relocation management services are backed by our human-centric technology platform that enables employees and their families transition successfully from their existing location to a new home.</div>
                        </div>
                        <div class="col-md-12 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                            <div class="p-text mb-5 ptext">We truly understand how unnerving it can be to move to a new city, adjust to a new culture and to get children admitted to schools or for spouses to make a new daily routine. . Singles also find it daunting to adjust to a new culture, find safe accommodation etc. But moving to a new city is also filled with opportunities and our dedicated trained consultants help you overcome these obstacles and ensure that all you need to think about is just opportunities. We organize each step of the journey tailored to the needs of relocating employees and their families and are there for them till they are able to call their new house a home.</div>
                        </div>
                    </div>
                </div>
               
            </div>
            <div className="vl"></div>
        </section>
   
  );


};

export default HomeVideos;
