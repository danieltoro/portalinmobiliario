import React, {Component} from 'react'
import request from 'axios'

class Banner extends Component {

  render() {

    return (
      <div className="banner">
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img src="img/banner/banner-slider-1.jpg" alt="banner-slider-1"></img>
              <div className="carousel-caption banner-slider-inner banner-top-align">
                <div className="text-center">
                  <h1 data-animation="animated fadeInDown delay-05s">
                    <span>Find your
                    </span>
                    Dream House</h1>
                  <p className="hidden-xs">Lorem ipsum dolor sit amet, conconsectetuer adipiscing elit</p>
                  <a href="index.html#" className="btn button-md button-theme" data-animation="animated fadeInUp delay-05s">Get Started Now</a>
                  <a href="index.html#" className="btn button-md border-button-theme" data-animation="animated fadeInUp delay-05s">Learn More</a>
                </div>
              </div>
            </div>
            <div className="item">
              <img src="img/banner/banner-slider-2.jpg" alt="banner-slider-2"></img>
              <div className="carousel-caption banner-slider-inner banner-top-align">
                <div className="text-right">
                  <h1 data-animation="animated fadeInDown delay-05s">
                    <span>Sweet Home For</span>
                    <br/> Small Family
                  </h1>
                  <a href="index.html#" className="btn button-md button-theme" data-animation="animated fadeInUp delay-05s">Get Started Now</a>
                  <a href="index.html#" className="btn button-md border-button-theme" data-animation="animated fadeInUp delay-05s">Learn More</a>
                </div>
              </div>
            </div>
            <div className="item">
              <img src="img/banner/banner-slider-3.jpg" alt="banner-slider-3"></img>
              <div className="carousel-caption banner-slider-inner banner-top-align">
                <div className="text-left">
                  <h1 data-animation="animated fadeInDown delay-05s">
                    <span>Best Place To</span>
                    <br />
                      Find Home
                  </h1>
                  <a href="index.html#" className="btn button-md button-theme" data-animation="animated fadeInUp delay-05s">Get Started Now</a>
                  <a href="index.html#" className="btn button-md border-button-theme" data-animation="animated fadeInUp delay-05s">Learn More</a>
                </div>
              </div>
            </div>
          </div>

          <a className="left carousel-control" href="index.html#carousel-example-generic" role="button" data-slide="prev">
            <span className="slider-mover-left" aria-hidden="true">
              <i className="fa fa-angle-left"></i>
            </span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="index.html#carousel-example-generic" role="button" data-slide="next">
            <span className="slider-mover-right" aria-hidden="true">
              <i className="fa fa-angle-right"></i>
            </span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

    )
  }
}

export default Banner;
