import React from "react";
import { Link } from "react-router-dom";
import Base from "../../base";
import { Helmet } from "react-helmet";
import formulaApp from "../../../assets/images/formula-map.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDoubleRight  } from '@fortawesome/free-solid-svg-icons';
class ContactUs extends React.Component {
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
        <>
          <Helmet>
            <title>Contact Us - EGamz</title>
            <meta name="description" content="You can contact us from here" />
          </Helmet>
          <section class="site-hero overlay justify-content-center align-items-center contactUsImg"
        
        data-stellar-background-ratio="0.5">
        <div class="container">
            <div class="row site-hero-inner justify-content-center align-items-center">
                <div class="col-md-10 text-center" data-aos="fade-up">
                    <h1 class="heading">contact us</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb site-breadcrumb fg-breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Home</a> <FontAwesomeIcon icon={faAngleDoubleRight} size='md' /> </li>
                            <li class="breadcrumb-item active" aria-current="page"> Contact Us</li>
                        </ol>
                    </nav>
                </div>

                <div class="mouse-down">
                    <div class="chevron"></div>
                    <div class="chevron"></div>
                    <div class="chevron"></div>
                </div>
            </div>
        </div>

        <a class="mouse smoothscroll" href="#next">
            <div class="mouse-icon">
                <span class="mouse-wheel"></span>
            </div>
        </a>
    </section>
    <section class="home-section-alt">
            <div class="container">
                <div class="heading-section aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                    <h2 class="home-section-title">Get in touch</h2>
                </div>
                <div class="row">
                    <div class="col-md-7 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                        <div class="contact-form">
                            <form class="contact-us-form form-contact comment_form" action="#" id="commentForm">
                                <div class="row">

                                    <div class="col-sm-6 mb-2 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                                        <div class="form-group">
                                            <label for="firstname">First Name<span
                                                    >*</span></label>
                                            <input class="form-control" name="firstname" id="firstname" type="text"
                                                placeholder="First Name"/>
                                        </div>
                                    </div>

                                    <div class="col-sm-6 mb-2 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                                        <div class="form-group">
                                            <label for="lastname">Last Name<span >*</span></label>
                                            <input class="form-control" name="lastname" id="lastname" type="text"
                                                placeholder="Last Name"/>
                                        </div>
                                    </div>

                                    <div class="col-sm-6 mb-2 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                                        <div class="form-group">
                                            <label for="number">Mobile Number<span
                                                    >*</span></label>
                                            <input class="form-control" name="number" id="number" type="text"
                                                placeholder="Mobile Number"/>
                                        </div>
                                    </div>

                                    <div class="col-sm-6 mb-2 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                                        <div class="form-group">
                                            <label for="email">Email address<span
                                                    >*</span></label>
                                            <input class="form-control" name="email" id="email" type="email"
                                                placeholder="Email address"/>
                                        </div>
                                    </div>

                                    <div class="col-12 mb-2 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                                        <div class="form-group">
                                            <label for="subject">Subject<span >*</span></label>
                                            <input class="form-control" name="subject" id="subject" type="text"
                                                placeholder="Subject"/>
                                        </div>
                                    </div>

                                    <div class="col-12 mb-2 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                                        <div class="form-group">
                                            <label for="message">Message<span>*</span></label>
                                            <textarea class="form-control w-100" name="message" id="message" cols="30"
                                                rows="9" placeholder="Write message"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                                    <button type="submit" class="button button-contactForm btn_1 boxed-btn">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="col-md-5 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                        <div class="feature-img">
                            <img class="img-fluid" src={formulaApp} alt=""/>
                        </div>
                    </div>

                </div>

                <hr class="hr-margin"/>

                <ul class="nav nav-tabs aos-init aos-animate" data-aos="fade-up" data-aos-duration="500" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">New Delhi</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Chennai</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Bengaluru</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#tabs-4" role="tab">Ahmedabad</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#tabs-5" role="tab">Mumbai</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#tabs-6" role="tab">Pune</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#tabs-7" role="tab">Hyderabad</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active" id="tabs-1" role="tabpanel">
                        <div class="row">
                            <div class="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                                <div>
                                    <h2 class="address-title">Corporate Office - New Delhi</h2>
                                    <ul class="list-inline address-links-list footer-links-git">
                                        <li><a href="https://goo.gl/maps/StmqCt1bMxfywa2b9">27, Community Centre, East
                                                of Kailash, New Delhi: 110065, India</a></li>
                                        <li><span>Call: </span><a href="tel:+91-9650003642 ">+91-9650003642</a></li>
                                        <li><span>Whatsapp: </span><a href="tel:+91-11-4502-8318 ">+91-11-4502-8318</a>
                                        </li>
                                        <li><span>Mail: </span><a
                                                href="mailto:enquiry@formulaindia.com ">enquiry@formulaindia.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28036.88309509977!2d77.25682957165525!3d28.55142830567991!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02ec3ca89953%3A0x1a22cf81401fc857!2sFormula%20Group!5e0!3m2!1sen!2sin!4v1630732381296!5m2!1sen!2sin"
                                    width="100%" height="275" allowfullscreen=""
                                    loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="tabs-2" role="tabpanel">
                        <div class="row">
                            <div class="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                                <div>
                                    <h2 class="address-title">Branch Office - Chennai</h2>
                                    <ul class="list-inline address-links-list footer-links-git">
                                        <li><a href="https://goo.gl/maps/k5XoTuibPZweK8LX9">No:1, 3rd Main Road, R.A.
                                                Puram, Mandaveli, Chennai - 600028, India</a></li>
                                        <li><span>Call: </span><a href="tel:+91-9650003642 ">+91-9650003642</a></li>
                                        <li><span>Whatsapp: </span><a href="tel:+91-11-4502-8318 ">+91-11-4502-8318</a>
                                        </li>
                                        <li><span>Mail: </span><a
                                                href="mailto:enquiry@formulaindia.com ">enquiry@formulaindia.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7774.294703089859!2d80.259545!3d13.026287!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xed78e73cdd2691ec!2sFormula%20Group!5e0!3m2!1sen!2sus!4v1630734546962!5m2!1sen!2sus"
                                    width="100%" height="275" allowfullscreen=""
                                    loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="tabs-3" role="tabpanel">
                        <div class="row">
                            <div class="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                                <div>
                                    <h2 class="address-title">Branch Office - Bengaluru</h2>
                                    <ul class="list-inline address-links-list footer-links-git">
                                        <li><a href="https://goo.gl/maps/9LDb4xQHSo9xNBju5">162, 2nd Floor, 4th Main, 2
                                                'A' Cross Domlur II Stage, Domlur, Bangalore, Karnataka - 560071,
                                                India</a></li>
                                        <li><span>Call: </span><a href="tel:+91-9650003642 ">+91-9650003642</a></li>
                                        <li><span>Whatsapp: </span><a href="tel:+91-11-4502-8318 ">+91-11-4502-8318</a>
                                        </li>
                                        <li><span>Mail: </span><a
                                                href="mailto:enquiry@formulaindia.com ">enquiry@formulaindia.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7776.254383015976!2d77.638549!3d12.963712!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb863ddf639b98376!2sFormula%20Group!5e0!3m2!1sen!2sus!4v1630734699925!5m2!1sen!2sus"
                                    width="100%" height="275"  allowfullscreen=""
                                    loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="tabs-4" role="tabpanel">
                        <div class="row">
                            <div class="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                                <div>
                                    <h2 class="address-title">Branch Office - Ahmedabad</h2>
                                    <ul class="list-inline address-links-list footer-links-git">
                                        <li><a href="https://goo.gl/maps/ub7gsdg1bW7k4kxr8">A-26, Shreeji Co. Op.
                                                Housing Society, Opp. Old Narol Court, Narolgam, Ahmedabad - 382405,
                                                Gujarat, India</a></li>
                                        <li><span>Call: </span><a href="tel:+91-9650003642 ">+91-9650003642</a></li>
                                        <li><span>Whatsapp: </span><a href="tel:+91-11-4502-8318 ">+91-11-4502-8318</a>
                                        </li>
                                        <li><span>Mail: </span><a
                                                href="mailto:enquiry@formulaindia.com ">enquiry@formulaindia.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7345.001621357281!2d72.508831!3d23.005377!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7d732a54379f659e!2sFormula%20Group!5e0!3m2!1sen!2sus!4v1630734830166!5m2!1sen!2sus"
                                    width="100%" height="275"  allowfullscreen=""
                                    loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="tabs-5" role="tabpanel">
                        <div class="row">
                            <div class="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                                <div>
                                    <h2 class="address-title">Branch Office - Mumbai</h2>
                                    <ul class="list-inline address-links-list footer-links-git">
                                        <li><a href="https://goo.gl/maps/7FzBZmvpLeApT5cFA">7th & 8th Floor, Times
                                                Square building, Western Express Highway, Andheri East, Mumbai - 400069,
                                                India</a></li>
                                        <li><span>Call: </span><a href="tel:+91-9650003642 ">+91-9650003642</a></li>
                                        <li><span>Whatsapp: </span><a href="tel:+91-11-4502-8318 ">+91-11-4502-8318</a>
                                        </li>
                                        <li><span>Mail: </span><a
                                                href="mailto:enquiry@formulaindia.com ">enquiry@formulaindia.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7538.51155333569!2d72.833604!3d19.140278!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3c079416afe4777e!2sFormula%20Group!5e0!3m2!1sen!2sus!4v1630734938438!5m2!1sen!2sus"
                                    width="100%" height="275" allowfullscreen=""
                                    loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="tabs-6" role="tabpanel">
                        <div class="row">
                            <div class="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                                <div>
                                    <h2 class="address-title">Branch Office - Pune</h2>
                                    <ul class="list-inline address-links-list footer-links-git">
                                        <li><a href="https://goo.gl/maps/SkicwQLDLv6AY8V5A">G-20, Sacred World Mall,
                                                Wanowrie, Pune - 411040, India</a></li>
                                        <li><span>Call: </span><a href="tel:+91-9650003642 ">+91-9650003642</a></li>
                                        <li><span>Whatsapp: </span><a href="tel:+91-11-4502-8318 ">+91-11-4502-8318</a>
                                        </li>
                                        <li><span>Mail: </span><a
                                                href="mailto:enquiry@formulaindia.com ">enquiry@formulaindia.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7568.033962292839!2d73.901683!3d18.48289!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x47088b17280daef6!2sFormula%20Group!5e0!3m2!1sen!2sus!4v1630735023981!5m2!1sen!2sus"
                                    width="100%" height="275" allowfullscreen=""
                                    loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="tabs-7" role="tabpanel">
                        <div class="row">
                            <div class="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                                <div>
                                    <h2 class="address-title">Branch Office - Hyderabad</h2>
                                    <ul class="list-inline address-links-list footer-links-git">
                                        <li><a href="https://goo.gl/maps/x1yhGHkkDskYJhUd6">60, Banjara Orchid, R.K.
                                                Puram, Secunderabad, Hyderabad- 500056</a></li>
                                        <li><span>Call: </span><a href="tel:+91-9650003642 ">+91-9650003642</a></li>
                                        <li><span>Whatsapp: </span><a href="tel:+91-11-4502-8318 ">+91-11-4502-8318</a>
                                        </li>
                                        <li><span>Mail: </span><a
                                                href="mailto:enquiry@formulaindia.com ">enquiry@formulaindia.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10536.652031769781!2d78.454968054213!3d17.41937331569103!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e7a29ec99c734e9!2sFormula%20Group!5e0!3m2!1sen!2sus!4v1630735127164!5m2!1sen!2sus"
                                    width="100%" height="275" allowfullscreen=""
                                    loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

          <section class="home-section-alt1">
            <div class="container">
                <div class="home-section-content">
                    <div class="row bod-block">
                        <div class="col-md-12 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                            <div class="abt-org-col">
                                <div class="abt-org-col-text">
                                    <p className="businessNeed">Not sure which solution fits you
                                        business needs?</p>
                                    <button class="btn btn-primary" type="submit">Contact us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="vl"></div>
        </section>
        </>
      </Base>
    );
  }
}

export default ContactUs;
