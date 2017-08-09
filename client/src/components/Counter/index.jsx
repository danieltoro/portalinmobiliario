import React, {Component} from 'react'
import request from 'axios'

class Counter extends Component {

  render() {

    return (
      <div className="counters">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 bordered-right">
              <div className="counter-box">
                <i className="flaticon-tag"></i>
                <h1 className="counter">967</h1>
                <p>Listings For Sale</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 bordered-right">
              <div className="counter-box">
                <i className="flaticon-symbol-1"></i>
                <h1 className="counter">1276</h1>
                <p>Listings For Rent</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 bordered-right">
              <div className="counter-box">
                <i className="flaticon-people"></i>
                <h1 className="counter">396</h1>
                <p>Agents</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="counter-box">
                <i className="flaticon-people-1"></i>
                <h1 className="counter">177</h1>
                <p>Brokers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Counter;
