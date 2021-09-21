import React from "react";
import Logo from "../../assets/images/logo.png";
import Logo2 from "../../assets/images/logo-mbl-light.png";
import country from "../../assets/images/japan-flag.jpg"
import { Link, useHistory, withRouter } from "react-router-dom";
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faTwitter,faInstagram, faLinkedinIn} from "@fortawesome/free-brands-svg-icons"
import AOS from "aos";
import "aos/dist/aos.css";
const currentTabClass = (history, path) => {
  if (history.location.pathname === path) {
    return "active";
  } else {
    return "";
  }
};

const Header = (history) => {
  let history2 = useHistory();
  const closeNav = () => {
    document.getElementById('mySidenav').style.width = "0";
  };
const openNav = () => {
    document.getElementById('mySidenav').style.width = "320px";
  };
  AOS.init();
  return (
    <header className="site-header site-header-alt">
    <div className="main-header">
        <div className="container-fluid">
            <a href="/" className="header-logo">
            <img
                alt="FormulaIndia"
                className="d-lg-block d-none"
                src={Logo}
              />
               <img
                alt="FormulaIndia"
                className="d-lg-none"
                src={Logo2}
              />
             
            </a>
        </div>
    </div>

    <div id="mySidenav" className="sidenav">
    <a href="#javascript" className="closebtn float-left" onClick={() => closeNav()}>&times;</a>
        <a href="/" className="header-logo logo" style={{padding: '65px'}}>
            <img src={Logo} alt="..."/>
        </a>
        <Link to="/">Home</Link>
        
        <button className="dropdown-btn" id="aboutus">This Is Us <FontAwesomeIcon icon={faChevronDown} size='md' /></button>
         <UncontrolledCollapse toggler="#aboutus">
          <div style={{padding: '10px'}}> 
             <Link to="about-us">Mission</Link>
            <Link to="about-us">Who We Are</Link>
            <Link to="about-us">Formula Values</Link>
            <Link to="csr">CSR</Link>
            <Link to="awards-milestone">Awards & Milestone</Link>
           </div>
        </UncontrolledCollapse>
      
        <button className="dropdown-btn" id="services">Our Solutions <FontAwesomeIcon icon={faChevronDown} size='md' /></button>
        <UncontrolledCollapse toggler="#services">
        <div style={{padding: '10px'}}> 
            <a href="services.html">Services</a>
            <a href="single-services.html#relocation">Relocation</a>
            <a href="single-services.html#imigration">Immigration</a>
            <a href="single-services.html#travel">Travel</a>
            <a href="single-services.html#recruitment">Recruitment</a>
            <a href="single-services.html#cultural">Cultural Training Solution</a>
            <a href="single-services.html#corporate">Corporate Housing</a>
            <a href="single-services.html#furniture">Furniture Rental</a>
            <a href="single-services.html#interior">Interior Designing</a>
            <a href="single-services.html#global">Global Mobility</a>
            <a href="single-services.html#property">Property Management</a>
            <a href="single-services.html#sanitization">Sanitization</a>  
            </div>
            </UncontrolledCollapse>
      
        <Link to="/career">Careers</Link>
       <Link to="/clients-speak">Clients Speak</Link>
       <Link to="/">Blog</Link>
       <Link to="/news">News</Link>
       <Link to="/contact-us">Connect</Link>
        <ul className="nav nav-social-links">
            <li><a href="https://www.facebook.com/formulaindia" target="_blank" className="social-icon"><FontAwesomeIcon icon={faFacebook} size='lg'/></a></li>
            <li><a href="https://twitter.com/formulaindia/" target="_blank" className="social-icon"><FontAwesomeIcon icon={faTwitter} size='lg'/></a></li> 
            <li><a href="https://www.instagram.com/formulaindia/" target="_blank" className="social-icon"><FontAwesomeIcon icon={faInstagram} size='lg'/></a></li>
            <li><a href="https://www.linkedin.com/company/formula-group/" target="_blank" className="social-icon"><FontAwesomeIcon icon={faLinkedinIn} size='lg'/></a></li>
        </ul>
    </div>
    <span className="navbar-toggler float-right" onClick={() => openNav()}>&#9776;</span>
    <a href="https://www.formulaindia.co.jp/" target="_blank" className="japan-flag">
        <img src={country} alt="..."/>
    </a>
</header>
  );
};

export default withRouter(Header);
