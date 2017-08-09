import React, {Component} from 'react'
import request from 'axios'

class Services extends Component {

  render() {

    return (
      <div className="mrg-btm-100 our-service">
        <div className="container">

          <div className="main-title">
            <h1>
              <span>What are you</span>
              looking for?</h1>
          </div>

          <div className="row mgn-btm wow">
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 wow fadeInLeft delay-04s">
              <div className="content">
                <i className="flaticon-apartment"></i>
                <h4>Apartments</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 wow fadeInLeft delay-04s">
              <div className="content">
                <i className="flaticon-internet"></i>
                <h4>Houses</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 wow fadeInRight delay-04s">
              <div className="content">
                <i className="flaticon-vehicle"></i>
                <h4>Garages</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 wow fadeInRight delay-04s">
              <div className="content">
                <i className="flaticon-symbol"></i>
                <h4>Commercial</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
              </div>
            </div>
          </div>
          <a href="index.html#" className="btn button-md button-theme">Read More</a>
        </div>
      </div>

    )
  }
}

export default Services;
