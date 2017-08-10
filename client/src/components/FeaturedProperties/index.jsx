import React, {Component} from 'react'

import PropertyCard from './PropertyCard.jsx'

class FeaturedProperties extends Component {

  render() {

    return (
      <div>
        <div className="content-area featured-properties">
          <div className="container">

            <div className="main-title">
              <h1><span>Featured</span> Properties</h1>
            </div>
            <ul className="list-inline-listing filters filters-listing-navigation">
              <li className="active btn filtr-button filtr" data-filter="all">All</li>
              <li data-filter="1" className="btn btn-inline filtr-button filtr">House</li>
              <li data-filter="2" className="btn btn-inline filtr-button filtr">Office</li>
              <li data-filter="3" className="btn btn-inline filtr-button filtr">Apartment</li>
              <li data-filter="4" className="btn btn-inline filtr-button filtr">Residential</li>
            </ul>
          <PropertyCard />

          </div>
        </div>
      </div>
    )
  }
}

export default FeaturedProperties;
