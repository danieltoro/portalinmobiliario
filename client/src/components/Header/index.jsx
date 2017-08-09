import React, {Component} from 'react'
import request from 'axios'

import Menu from './Menu.jsx'
import TopHeader from './TopHeader.jsx'

class Header extends Component {

  render() {

    return (
      <div>
        <TopHeader />
      <Menu />
      </div>


    )
  }
}

export default Header;
