import React, { useState } from "react";
import Base from "./base";
import { Link } from "react-router-dom";
import Testimonials from "./pages/home/testimonials";
import Otherservices from "./pages/home/other-services";
import Services from "./pages/home/services";
import HappyCustomers from "./pages/home/happy-customers";
import Videos from "./pages/home/videos";
import WhoWeAre from "./pages/home/who-we-are";

import HomeTopSlider from "./pages/home/home-top-slider";
import { Helmet } from "react-helmet";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {},
      errors: {},
      success: {},
      error: "",
    };
  }

  render() {
    return (
      <Base>
        <Helmet>
          <title>Formula India</title>
          <meta
            name="description"
            content="We provide world's Best Child Games on our website"
          />
        </Helmet>
        <HomeTopSlider />
        <WhoWeAre/>
        <Services/>
        <Videos/>
        <HappyCustomers />
        <Testimonials />
        {/* <Otherservices /> */}
      </Base>
    );

    return (
      <>
        {" "}
     
        
      </>
    );
  }
}

export default Home;
