import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuoteLeft, faQuoteRight} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import CONFIG from "../../../config.json";
export default class ClientsBox extends React.Component {
    state = {
        testimonials: []
      }
     componentDidMount() {
        axios.get(CONFIG.SERVER_URL+'getTestimonials')
          .then(res => {
           this.setState({ testimonials: JSON.parse(res.data.data)});
          })
        }
    render() {
   return (
        <section className="home-section-alt">
        <div className="container">
        {this.state.testimonials && this.state.testimonials.length > 0 &&
            <div className="row">
            {
            this.state.testimonials.map(testimonial =>(
                <div className="col-md-6 mb-6 col-md-offset-2 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                <FontAwesomeIcon icon={faQuoteLeft} size='md'/>
                    <div className="testimonial-bg">
                        <div  id="testimonial-slider">
                            <div className="testimonial">
                                <p className="description">
                                {//testimonial.testimonials.substring(0, 250)
                                testimonial.testimonials.slice(0, 250) + (testimonial.testimonials.length > 250 ? "..." : "")
                                }
                                </p>
                                <h3 className="title">{testimonial.name},</h3>
                                <span className="post">{testimonial.degination}</span>
                            </div>
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faQuoteRight} size='md'/>
                </div>
                ))}
            </div>
          } 
        </div>
        </section>
        )
      }
    }