import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginRoute from "./helper/LoginRoute";
import NotFound from "./NotFound";
import Login from "../user/login";
import Register from "../user/register";
import ForgotPassword from "../user/forgot-password";
import Home from "../home";
import PrivateRoute from "./helper/PrivateRoute";
import UpdateUserInfo from "../user/update-user-info";
import ContactUs from "../pages/contact/contact-us";
import AboutUs from "../pages/about/about-us";
import Csr from "../pages/csr/index";
import Career from "../pages/career/career";
import testimonials from "../pages/testimonials/testimonials";
import news from "../pages/news/news";
import AwardMilestone from "../pages/csr/awards-milestone";

function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/csr" component={Csr} />
        <Route exact path="/awards-milestone" component={AwardMilestone} />
        
        <Route exact path="/career" component={Career} />
        <Route exact path="/clients-speak" component={testimonials} />
        <Route exact path="/news" component={news} />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routers;
