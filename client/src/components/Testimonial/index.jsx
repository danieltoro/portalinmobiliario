import React, {Component} from 'react'
import request from 'axios'

class Testimonial extends Component {

  render() {

    return (
      <div className="testimonial-section testimonial-2 testimonial-3">
        <div className="testimonial-section-inner">
          <div className="container">
            <div className="main-title"></div>
            <div className="row">
              <div className="col-lg-12">
                <div className="testimonials">
                  <div id="carouse3-example-generic" className="carousel slide" data-ride="carousel">

                    <div className="carousel-inner" role="listbox">
                      <div className="item content clearfix active">
                        <div className="row">
                          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div className="avatar">
                              <img src="img/avatar/avatar-1.jpg" alt="avatar-1" className="img-responsive"></img>
                            </div>
                          </div>
                          <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                            <div className="testimonials-info">
                              <div className="text">
                                <sup>
                                  <i className="fa fa-quote-left"></i>
                                </sup>
                                Aliquam dictum elit vitae mauris facilisis, at dictum urna dignissim. Donec vel lectus vel felis lacinia luctus vitae iaculis arcu. Mauris mattis, massa eu porta ultricies.
                                <sub>
                                  <i className="fa fa-quote-right"></i>
                                </sub>
                              </div>
                              <div className="author-name">
                                John Antony
                              </div>
                              <ul className="rating">
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-half-full"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item content clearfix">
                        <div className="row">
                          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div className="avatar">
                              <img src="img/avatar/avatar-2.jpg" alt="avatar-2" className="img-responsive"></img>
                            </div>
                          </div>
                          <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                            <div className="testimonials-info">
                              <div className="text">
                                <sup>
                                  <i className="fa fa-quote-left"></i>
                                </sup>
                                Aliquam dictum elit vitae mauris facilisis, at dictum urna dignissim. Donec vel lectus vel felis lacinia luctus vitae iaculis arcu. Mauris mattis, massa eu porta ultricies.
                                <sub>
                                  <i className="fa fa-quote-right"></i>
                                </sub>
                              </div>
                              <div className="author-name">
                                John Mery
                              </div>
                              <ul className="rating">
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-half-full"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item content clearfix">
                        <div className="row">
                          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div className="avatar">
                              <img src="img/avatar/avatar-4.jpg" alt="avatar-4" className="img-responsive"></img>
                            </div>
                          </div>
                          <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                            <div className="testimonials-info">
                              <div className="text">
                                <sup>
                                  <i className="fa fa-quote-left"></i>
                                </sup>
                                Aliquam dictum elit vitae mauris facilisis, at dictum urna dignissim. Donec vel lectus vel felis lacinia luctus vitae iaculis arcu. Mauris mattis, massa eu porta ultricies.
                                <sub>
                                  <i className="fa fa-quote-right"></i>
                                </sub>
                              </div>
                              <div className="author-name">
                                John Top
                              </div>
                              <ul className="rating">
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-half-full"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item content clearfix">
                        <div className="row">
                          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div className="avatar">
                              <img src="img/avatar/avatar-3.jpg" alt="avatar-3" className="img-responsive"></img>
                            </div>
                          </div>
                          <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 ">
                            <div className="testimonials-info">
                              <div className="text">
                                <sup>
                                  <i className="fa fa-quote-left"></i>
                                </sup>
                                Aliquam dictum elit vitae mauris facilisis, at dictum urna dignissim. Donec vel lectus vel felis lacinia luctus vitae iaculis arcu. Mauris mattis, massa eu porta ultricies.
                                <sup>
                                  <i className="fa fa-quote-right"></i>
                                </sup>

                              </div>
                              <div className="author-name">
                                John Pitarshon
                              </div>
                              <ul className="rating">
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-half-full"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <a className="left carousel-control" href="index.html#carouse3-example-generic" role="button" data-slide="prev">
                      <span className="slider-mover-left" aria-hidden="true">
                        <i className="fa fa-angle-left"></i>
                      </span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="index.html#carouse3-example-generic" role="button" data-slide="next">
                      <span className="slider-mover-right" aria-hidden="true">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Testimonial;
