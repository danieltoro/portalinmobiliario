import React, {Component} from 'react'
import request from 'axios'

class Footer extends Component {

  render() {

    return (
      <footer className="main-footer clearfix">
        <div className="container">

          <div className="footer-top">
            <div className="row">
              <div className="col-lg-5 col-md-4 col-sm-3 col-xs-12">
                <div className="logo-2">
                  <a href="index.html">
                    <img src="img/logos/footer-logo.png" alt="footer-logo"></img>
                  </a>
                </div>
              </div>
              <div className="col-lg-4  col-md-4 col-sm-5 col-xs-12">
                <form action="#" method="post">
                  <input type="text" className="form-contact" name="email" placeholder="Enter your email"></input>
                  <button type="submit" name="submitNewsletter" className="btn btn-default button-small">
                    <i className="fa fa-paper-plane"></i>
                  </button>
                </form>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                <ul className="social-list clearfix">
                  <li>
                    <a href="index.html#">
                      <i className="fa fa-rss"></i>
                    </a>
                  </li>
                  <li>
                    <a href="index.html#">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="index.html#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="index.html#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="index.html#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right">
          <div className="container">
            &copy; 2017
            <a href="http://themevessel.com/" target="_blank">Theme Vessel</a>. Trademarks and brands are the property of their respective owners.
          </div>
        </div>
      </footer>



    )
  }
}

export default Footer;
