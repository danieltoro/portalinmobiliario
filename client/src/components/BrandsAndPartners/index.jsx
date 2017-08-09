import React, {Component} from 'react'
import request from 'axios'

class BrandsAndPartners extends Component {

  render() {

    return (
      <div className="partners-block">
        <div className="container">
          <h3>Brands & Partners</h3>
          <div className="row">
            <div className="col-md-12">
              <div className="carousel our-partners slide" id="ourPartners">
                <div className="carousel-inner">
                  <div className="item active">
                    <div className="col-xs-12 col-sm-6 col-md-3">
                      <a href="index.html#">
                        <img src="img/brand/audiojungle.png" alt="audiojungle"></img>
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="col-xs-12 col-sm-6 col-md-3">
                      <a href="index.html#">
                        <img src="img/brand/themeforest.png" alt="themeforest"></img>
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="col-xs-12 col-sm-6 col-md-3">
                      <a href="index.html#">
                        <img src="img/brand/tuts.png" alt="tuts"></img>
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="col-xs-12 col-sm-6 col-md-3">
                      <a href="index.html#">
                        <img src="img/brand/graphicriver.png" alt="graphicriver"></img>
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="col-xs-12 col-sm-6 col-md-3">
                      <a href="index.html#">
                        <img src="img/brand/codecanyon.png" alt="codecanyon"></img>
                      </a>
                    </div>
                  </div>
                </div>
                <a className="left carousel-control" href="index.html#ourPartners" data-slide="prev">
                  <i className="fa fa-chevron-left icon-prev"></i>
                </a>
                <a className="right carousel-control" href="index.html#ourPartners" data-slide="next">
                  <i className="fa fa-chevron-right icon-next"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default BrandsAndPartners;
