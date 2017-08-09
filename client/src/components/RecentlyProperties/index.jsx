import React, {Component} from 'react'
import request from 'axios'


class RecentlyProperties extends Component {

  render() {

    return (

      <div className="mrg-btm-70 recently-properties chevron-icon">
          <div className="container">

              <div className="main-title">
                  <h1><span>Recently</span> Properties</h1>
              </div>
              <div className="row">
                  <div className="carousel our-partners slide" id="ourPartners2">
                      <div className="col-lg-12 mrg-btm-30">
                          <a className="right carousel-control" href="index.html#ourPartners2" data-slide="prev"><i className="fa fa-chevron-left icon-prev"></i></a>
                          <a className="right carousel-control" href="index.html#ourPartners2" data-slide="next"><i className="fa fa-chevron-right icon-next"></i></a>
                      </div>
                      <div className="carousel-inner">
                          <div className="item active">
                              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

                                  <div className="property">

                                      <a href="properties-details.html" className="property-img">
                                          <img src="img/properties/properties-3.jpg" alt="properties-3" className="img-responsive"></img>
                                      </a>

                                      <div className="property-content">

                                          <h1 className="title">
                                              <a href="properties-details.html">Modern Family Home</a>
                                          </h1>
                                          <h3 className="property-address">
                                              <a href="properties-details.html">
                                                  <i className="fa fa-map-marker"></i>123 Kathal St. Tampa City,
                                              </a>
                                          </h3>

                                          <ul className="facilities-list clearfix">
                                              <li>
                                                  <i className="flaticon-square-layouting-with-black-square-in-east-area"></i>
                                                  <span>4800 sq ft</span>
                                              </li>
                                              <li>
                                                  <i className="flaticon-bed"></i>
                                                  <span>3 Beds</span>
                                              </li>
                                              <li>
                                                  <i className="flaticon-holidays"></i>
                                                  <span> 2 Baths</span>
                                              </li>
                                              <li>
                                                  <i className="flaticon-vehicle"></i>
                                                  <span>1 Garage</span>
                                              </li>
                                          </ul>

                                          <div className="property-footer">
                                              <span className="left"><i className="fa fa-calendar-o icon"></i> 5 days ago</span>
                                              <span className="right">
                                                   <a href="index.html#"><i className="fa fa-heart-o icon"></i></a>
                                                   <a href="index.html#"><i className="fa fa-share-alt"></i></a>
                                              </span>
                                          </div>
                                      </div>
                                  </div>

                              </div>
                          </div>
                          <div className="item">
                              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

                                  <div className="property">

                                      <a href="properties-details.html" className="property-img">
                                          <img src="img/properties/properties-1.jpg" alt="properties-1" className="img-responsive"></img>
                                      </a>

                                      <div className="property-content">

                                          <h1 className="title">
                                              <a href="properties-details.htmll.html">Beautiful Single Home</a>
                                          </h1>

                                          <h3 className="property-address">
                                              <a href="properties-details.html">
                                                  <i className="fa fa-map-marker"></i>123 Kathal St. Tampa City,
                                              </a>
                                          </h3>

                                          <ul className="facilities-list clearfix">
                                              <li>
                                                  <i className="flaticon-square-layouting-with-black-square-in-east-area"></i>
                                                  <span>4800 sq ft</span>
                                              </li>
                                              <li>
                                                  <i className="flaticon-bed"></i>
                                                  <span>3 Beds</span>
                                              </li>
                                              <li>
                                                  <i className="flaticon-holidays"></i>
                                                  <span> 2 Baths</span>
                                              </li>
                                              <li>
                                                  <i className="flaticon-vehicle"></i>
                                                  <span>1 Garage</span>
                                              </li>
                                          </ul>

                                          <div className="property-footer">
                                              <span className="left"><i className="fa fa-calendar-o icon"></i> 5 days ago</span>
                                              <span className="right">
                                                   <a href="index.html#"><i className="fa fa-heart-o icon"></i></a>
                                                   <a href="index.html#"><i className="fa fa-share-alt"></i></a>
                                              </span>
                                          </div>
                                      </div>
                                  </div>

                              </div>
                          </div>
                          <div className="item">
                              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

                                  <div className="property">

                                      <a href="properties-details.html" className="property-img">
                                          <img src="img/properties/properties-6.jpg" alt="properties-6" className="img-responsive"></img>
                                      </a>

                                      <div className="property-content">

                                          <h1 className="title">
                                              <a href="properties-details.html">Park Avenue</a>
                                          </h1>

                                          <h3 className="property-address">
                                              <a href="properties-details.html">
                                                  <i className="fa fa-map-marker"></i>123 Kathal St. Tampa City,
                                              </a>
                                          </h3>

                                          <ul className="facilities-list clearfix">
                                              <li>
                                                  <i className="flaticon-square-layouting-with-black-square-in-east-area"></i>
                                                  <span>4800 sq ft</span>
                                              </li>
                                              <li>
                                                  <i className="flaticon-bed"></i>
                                                  <span>3 Beds</span>
                                              </li>
                                              <li>
                                                  <i className="flaticon-holidays"></i>
                                                  <span> 2 Baths</span>
                                              </li>
                                              <li>
                                                  <i className="flaticon-vehicle"></i>
                                                  <span>1 Garage</span>
                                              </li>
                                          </ul>

                                          <div className="property-footer">
                                              <span className="left"><i className="fa fa-calendar-o icon"></i> 5 days ago</span>
                                              <span className="right">
                                                   <a href="index.html#"><i className="fa fa-heart-o icon"></i></a>
                                                   <a href="index.html#"><i className="fa fa-share-alt"></i></a>
                                              </span>
                                          </div>
                                      </div>
                                  </div>

                              </div>
                          </div>
                          <div className="item">
                              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

                                  <div className="property">

                                      <a href="properties-details.html" className="property-img">
                                          <img src="img/properties/properties-2.jpg" alt="properties-2" className="img-responsive"></img>
                                      </a>

                                      <div className="property-content">

                                          <h1 className="title">
                                              <a href="properties-details.html">Sweet Family Home</a>
                                          </h1>

                                          <h3 className="property-address">
                                              <a href="properties-details.html">
                                                  <i className="fa fa-map-marker"></i>123 Kathal St. Tampa City,
                                              </a>
                                          </h3>

                                          <ul className="facilities-list clearfix">
                                              <li>
                                                  <i className="flaticon-square-layouting-with-black-square-in-east-area"></i>
                                                  <span>4800 sq ft</span>
                                              </li>
                                              <li>
                                                  <i className="flaticon-bed"></i>
                                                  <span>3 Beds</span>
                                              </li>
                                              <li>
                                                  <i className="flaticon-holidays"></i>
                                                  <span> 2 Baths</span>
                                              </li>
                                              <li>
                                                  <i className="flaticon-vehicle"></i>
                                                  <span>1 Garage</span>
                                              </li>
                                          </ul>

                                          <div className="property-footer">
                                              <span className="left"><i className="fa fa-calendar-o icon"></i> 5 days ago</span>
                                              <span className="right">
                                                   <a href="index.html#"><i className="fa fa-heart-o icon"></i></a>
                                                   <a href="index.html#"><i className="fa fa-share-alt"></i></a>
                                              </span>
                                          </div>
                                      </div>
                                  </div>

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

export default RecentlyProperties;
