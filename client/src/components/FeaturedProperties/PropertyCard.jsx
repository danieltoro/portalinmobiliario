import React, {Component} from 'react'
import request from 'axios'

class PropertyCard extends Component {

  constructor() {
    super()
    this.state = {
      properties: []
    }
  }

  componentDidMount() {
    request.get('/api/properties').then((res) => {
      this.setState({properties: res.data.data})
      console.log(this.state.properties);
    }).catch((err) => {
      console.log(err);
    })
  }

  render() {

    var properties = this.state.properties.map((property, i) => {

      return <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12  filtr-item" data-category="1, 2, 3" key={i}>

        <div className="property">

          <a href="properties-details.html" className="property-img">
            <div className="property-tag button alt featured">Destacada</div>
            <div className="property-tag button sale">{property.status}</div>
            <div className="property-price">${property.price}</div>
            <img src="img/properties/properties-1.jpg" alt="properties-1" className="img-responsive"></img>
          </a>

          <div className="property-content">

            <h1 className="title">
              <a href="properties-details.html">{property.title}</a>
            </h1>

            <h3 className="property-address">
              <a href="properties-details.html">
                <i className="fa fa-map-marker"></i>Direccion
              </a>
            </h3>

            <ul className="facilities-list clearfix">
              <li>
                <i className="flaticon-square-layouting-with-black-square-in-east-area"></i>
                <span>{property.size}</span>
              </li>
              <li>
                <i className="flaticon-bed"></i>
                <span>3 Beds</span>
              </li>
              <li>
                <i className="flaticon-monitor"></i>
                <span>TV
                </span>
              </li>
              <li>
                <i className="flaticon-holidays"></i>
                <span>
                  2 Baths</span>
              </li>
              <li>
                <i className="flaticon-vehicle"></i>
                <span>1 Garage</span>
              </li>
              <li>
                <i className="flaticon-building"></i>
                <span>
                  3 Balcony</span>
              </li>
            </ul>

            <div className="property-footer">
              <span className="left">
                <i className="fa fa-calendar-o icon"></i>
                5 days ago</span>
              <span className="right">
                <a href="index.html#">
                  <i className="fa fa-heart-o icon"></i>
                </a>
                <a href="index.html#">
                  <i className="fa fa-share-alt"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    })

    return (

      <div className="row">
        <div className="filtr-container">
          {properties}
        </div>
      </div>

    )
  }
}

export default PropertyCard;
