import React, {Component} from 'react'
import request from 'axios'

class SearchArea extends Component {

  render() {

    return (
      <div className="search-area">
        <div className="container">
          <div className="search-area-inner">
            <div className="search-contents ">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                  <div className="form-group">
                    <select className="selectpicker search-fields" data-live-search="true" data-live-search-placeholder="Search value">
                      <option>Area From</option>
                      <option>1000</option>
                      <option>800</option>
                      <option>600</option>
                      <option>400</option>
                      <option>200</option>
                      <option>100</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                  <div className="form-group">
                    <select className="selectpicker search-fields" data-live-search="true" data-live-search-placeholder="Search value">
                      <option>Property Status</option>
                      <option>For Sale</option>
                      <option>For Rent</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                  <div className="form-group">
                    <select className="selectpicker search-fields" data-live-search="true" data-live-search-placeholder="Search value">
                      <option>Location</option>
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>American Samoa</option>
                      <option>Belgium</option>
                      <option>Cameroon</option>
                      <option>Canada</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                  <div className="form-group">
                    <select className="selectpicker search-fields" data-live-search="true" data-live-search-placeholder="Search value">
                      <option>Property Types</option>
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Land</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                  <div className="form-group">
                    <select className="selectpicker search-fields" data-live-search="true" data-live-search-placeholder="Search value">
                      <option>Bedrooms</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                  <div className="form-group">
                    <select className="selectpicker search-fields" data-live-search="true" data-live-search-placeholder="Search value">
                      <option>Bathrooms</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                  <div className="form-group">
                    <div className="range-slider">
                      <div data-min="0" data-max="150000" data-unit="USD" className="range-slider-ui ui-slider" aria-disabled="false"></div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 ">
                  <div className="form-group">
                    <button className="search-button">Search</button>
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

export default SearchArea;
