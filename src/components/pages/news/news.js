import React from "react";
import Base from "../../base";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuoteLeft, faQuoteRight,faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faTwitter,faInstagram, faLinkedinIn} from "@fortawesome/free-brands-svg-icons"
export default class News extends React.Component {
    // state = {
    //     testimonials: []
    //   }
    //  componentDidMount() {
    //     axios.get(CONFIG.SERVER_URL+'getTestimonials')
    //       .then(res => {
    //        this.setState({ testimonials: JSON.parse(res.data.data)});
    //       })
    //     }
    render() {
   return (
    <Base>
      <>
        <Helmet>
          <title>News - FormulaIndia</title>
          <meta
            name="description"
            content="Career - FormulaIndia"
          />
        </Helmet>
        <section class="site-hero overlay justify-content-center align-items-center newsimg"
        data-stellar-background-ratio="0.5">
        <div class="container">
            <div class="row site-hero-inner justify-content-center align-items-center">
                <div class="col-md-10 text-center" data-aos="fade-up">
                    <h1 class="heading">News</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb site-breadcrumb fg-breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Home</a><FontAwesomeIcon icon={faAngleDoubleRight}/></li>
                            <li class="breadcrumb-item active" aria-current="page">News</li>
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

    <section class="blog_area single-post-area section-padding">
            <div class="container">
                    <div class="filters mb-5">
                        <div class="filters__wrapper generalForm">
                            <div class="filters__leftPart">
                                <div class="filters__byYear">
                                    <label for="year_72">Year</label>
                                    <select id="year_72" name="year" class="generalForm__selectArea"
                                        autocomplete="off">
                                        <option value="0" selected="">All</option>
                                        <option value="2021">2021</option>
                                        <option value="2020">2020</option>
                                        <option value="2019">2019</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2016">2016</option>
                                        <option value="2015">2015</option>
                                    </select>
                                </div>
                                <div class="filters__byCategory">
                                    <label for="category_72">Category</label>
                                    <select id="category_72" name="category" class="generalForm__selectArea"
                                        autocomplete="off">
                                        <option value="0" selected="">All</option>
                                        <option value="1">Lorem ipsum dolor sit amet</option>
                                        <option value="2">Lorem ipsum dolor sit amet</option>
                                        <option value="3">Lorem ipsum dolor sit amet</option>
                                        <option value="4">Lorem ipsum dolor sit amet</option>
                                        <option value="5">Lorem ipsum dolor sit amet</option>
                                        <option value="6">Lorem ipsum dolor sit amet</option>
                                        <option value="7">Lorem ipsum dolor sit amet</option>
                                    </select>
                                </div>
                            </div>
                            <div class="filters__rightPart">
                                <label for="limit_72">Display</label>
                                <select id="limit_72" name="limit" class="generalForm__selectArea"
                                    autocomplete="off">
                                    <option value="12" selected="">12</option>
                                    <option value="24">24</option>
                                    <option value="48">48</option>
                                </select>
                            </div>
                        </div>
                    </div>
                <div class="row">
                    <div class="col-lg-8 mb-5 posts-list">
                        <div class="mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                            <div class="news-timeline">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="sbc-banner">
                                            <a href="single-news.html">
                                                <img class="img-fluid" alt="..." src="img/news-img.jpg"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-md-8 news-text">
                                        <p class="text-left p-text datepadding">31 Mar, 2021</p>
                                        <a href="single-news.html"><h3 class="text-left blog-text">Lorem ipsum dolor sit amet</h3></a>
                                        <p class="text-left p-text">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                            aliquam erat volutpat. Ut wisi </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                            <div class="news-timeline">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="sbc-banner">
                                            <a href="single-news.html">
                                                <img class="img-fluid" alt="..." src="img/news-img.jpg"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-md-8 news-text">
                                        <p class="text-left p-text datepadding">31 Mar, 2021</p>
                                        <a href="single-news.html"><h3 class="text-left blog-text">Lorem ipsum dolor sit amet</h3></a>
                                        <p class="text-left p-text">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                            aliquam erat volutpat. Ut wisi </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                            <div class="news-timeline">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="sbc-banner">
                                            <a href="single-news.html">
                                                <img class="img-fluid" alt="..." src="img/news-img.jpg"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-md-8 news-text">
                                        <p class="text-left p-text datepadding">31 Mar, 2021</p>
                                        <a href="single-news.html"><h3 class="text-left blog-text">Lorem ipsum dolor sit amet</h3></a>
                                        <p class="text-left p-text">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                            aliquam erat volutpat. Ut wisi </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                            <div class="news-timeline">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="sbc-banner">
                                            <a href="single-news.html">
                                                <img class="img-fluid" alt="..." src="img/news-img.jpg"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-md-8 news-text">
                                        <p class="text-left p-text datepadding" >31 Mar, 2021</p>
                                        <a href="single-news.html"><h3 class="text-left blog-text">Lorem ipsum dolor sit amet</h3></a>
                                        <p class="text-left p-text">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                            aliquam erat volutpat. Ut wisi </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                            <div class="news-timeline">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="sbc-banner">
                                            <a href="single-news.html">
                                                <img class="img-fluid" alt="..." src="img/news-img.jpg"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-md-8 news-text">
                                        <p class="text-left p-text datepadding">31 Mar, 2021</p>
                                        <a href="single-news.html"><h3 class="text-left blog-text">Lorem ipsum dolor sit amet</h3></a>
                                        <p class="text-left p-text">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                            aliquam erat volutpat. Ut wisi </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                            <div class="news-timeline">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="sbc-banner">
                                            <a href="single-news.html">
                                                <img class="img-fluid" alt="..." src="img/news-img.jpg"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-md-8 news-text">
                                        <p class="text-left p-text datepadding">31 Mar, 2021</p>
                                        <a href="single-news.html"><h3 class="text-left blog-text">Lorem ipsum dolor sit amet</h3></a>
                                        <p class="text-left p-text">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                            aliquam erat volutpat. Ut wisi </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                            <div class="news-timeline">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="sbc-banner">
                                            <a href="single-news.html">
                                                <img class="img-fluid" alt="..." src="img/news-img.jpg"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-md-8 news-text">
                                        <p class="text-left p-text">31 Mar, 2021</p>
                                        <a href="single-news.html"><h3 class="text-left blog-text">Lorem ipsum dolor sit amet</h3></a>
                                        <p class="text-left p-text">Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                            aliquam erat volutpat. Ut wisi </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <nav class="blog-pagination justify-content-center d-flex">
                            <ul class="pagination">
                                <li class="page-item">
                                    <a href="#" class="page-link page-link-arrow" aria-label="Previous">
                                        <i class="fas fa-long-arrow-alt-left"></i>
                                    </a>
                                </li>
                                <li class="page-item">
                                    <a href="#" class="page-link">1</a>
                                </li>
                                <li class="page-item active">
                                    <a href="#" class="page-link">2</a>
                                </li>
                                <li class="page-item">
                                    <a href="#" class="page-link">3</a>
                                </li>
                                <li class="page-item">
                                    <a href="#" class="page-link">4</a>
                                </li>
                                <li class="page-item">
                                    <a href="#" class="page-link" aria-label="Next">
                                        <i class="fas fa-long-arrow-alt-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                    </div>
                    <div class="col-lg-4">
                        <div class="blog_right_sidebar">

                            <aside class="single_sidebar_widget popular_post_widget aos-init aos-animate"
                                data-aos="fade-up" data-aos-duration="500">
                                <h3 class="widget_title">Recent News</h3>
                                <div class="media post_item">
                                    <img src="img/recent-post.jpg" alt="post"/>
                                    <div class="media-body">
                                        <a href="single-blog.html">
                                            <h3>Lorem ipsum dolor sit...</h3>
                                        </a>
                                        <p>August 27, 2021</p>
                                    </div>
                                </div>
                                <div class="media post_item">
                                    <img src="img/recent-post.jpg" alt="post"/>
                                    <div class="media-body">
                                        <a href="single-blog.html">
                                            <h3>Lorem ipsum dolor sit...</h3>
                                        </a>
                                        <p>02 Hours ago</p>
                                    </div>
                                </div>
                                <div class="media post_item">
                                    <img src="img/recent-post.jpg" alt="post"/>
                                    <div class="media-body">
                                        <a href="single-blog.html">
                                            <h3>Lorem ipsum dolor sit...</h3>
                                        </a>
                                        <p>03 Hours ago</p>
                                    </div>
                                </div>
                                <div class="media post_item">
                                    <img src="img/recent-post.jpg" alt="post"/>
                                    <div class="media-body">
                                        <a href="single-blog.html">
                                            <h3>Lorem ipsum dolor sit...</h3>
                                        </a>
                                        <p>01 Hours ago</p>
                                    </div>
                                </div>
                            </aside>

                            <aside class="single_sidebar_widget newsletter_widget aos-init aos-animate"
                                data-aos="fade-up" data-aos-duration="500">
                                <h4 class="widget_title">Newsletter</h4>

                                <form action="#">
                                    <div class="form-group">
                                        <input type="email" class="form-control" onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = 'Enter email'" placeholder='Enter email'
                                            required/>
                                    </div>
                                    <button class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                        type="submit">Subscribe</button>
                                </form>
                            </aside>

                            <aside class="single_sidebar_widget post_category_widget aos-init aos-animate"
                                data-aos="fade-up" data-aos-duration="500">
                                <h4 class="widget_title">Connect With Us</h4>
                             
                                <ul class="nav blog-social-links">
                            <li><a href="https://www.facebook.com/formulaindia" target="_blank" ><FontAwesomeIcon icon={faFacebook} size='lg'/></a></li>
                            <li><a href="https://twitter.com/formulaindia/" target="_blank" ><FontAwesomeIcon icon={faTwitter} size='lg'/></a></li>
                            <li><a href="https://www.instagram.com/formulaindia/" target="_blank"
                                    ><FontAwesomeIcon icon={faInstagram} size='lg'/></a></li>
                            <li><a href="https://www.linkedin.com/company/formula-group/" target="_blank"
                                    ><FontAwesomeIcon icon={faLinkedinIn} size='lg'/></a></li>
                        </ul>
                            </aside>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="home-section-alt1">
            <div className="container">
                <div className="home-section-content">
                    <div className="row bod-block">
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
        </>
    </Base>
  )
}
}