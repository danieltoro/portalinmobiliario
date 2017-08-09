import React, {Component} from 'react'
import request from 'axios'


class PopularPlaces extends Component {

  render() {

    return (
      <div className="categories">
          <div className="container">

              <div className="main-title">
                  <h1><span>Popular</span> Places</h1>
              </div>
              <div className="clearfix"></div>
              <div className="row wow">
                  <div className="col-lg-7 col-md-7 col-sm-12">
                      <div className="row">
                          <div className="col-sm-6 col-pad wow fadeInLeft delay-04s">
                              <div className="category">
                                  <div className="category_bg_box cat-1-bg">
                                      <div className="category-overlay">
                                          <span className="category-content">
                                              <span className="category-title">Florida</span>
                                              <br />
                                              <span className="category-subtitle">14 Properties</span>
                                              <br />
                                              <a href="index.html#" className="btn button-sm button-theme">View All</a>
                                          </span>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="col-sm-6 col-pad wow fadeInLeft delay-04s">
                              <div className="category">
                                  <div className="category_bg_box cat-2-bg">
                                      <div className="category-overlay">
                                          <span className="category-content">
                                              <span className="category-title">California</span>
                                              <br />
                                              <span className="category-subtitle">14 Properties</span>
                                              <br />
                                               <a href="index.html#" className="btn button-sm button-theme ">View All</a>
                                          </span>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="col-sm-12 col-pad wow fadeInUp delay-04s">
                              <div className="category">
                                  <div className="category_bg_box cat-3-bg">
                                      <div className="category-overlay">
                                          <span className="category-content">
                                              <span className="category-title">New York</span>
                                              <br />
                                              <span className="category-subtitle">27 Properties</span>
                                              <br />
                                              <a href="index.html#" className="btn button-sm button-theme ">View All</a>
                                          </span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="col-lg-5 col-md-5 col-sm-12 col-pad wow fadeInRight delay-04s">
                      <div className="category">
                          <div className="category_bg_box category_long_bg cat-4-bg">
                              <div className="category-overlay">
                                  <span className="category-content">
                                      <span className="category-title">San Francisco</span>
                                      <br />
                                      <span className="category-subtitle">14 Properties</span>
                                      <br />
                                       <a href="index.html#" className="btn button-sm button-theme ">View All</a>
                                  </span>
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

export default PopularPlaces;
