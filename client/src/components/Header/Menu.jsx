import React, {Component} from 'react'
import request from 'axios'

class Menu extends Component {

  render() {

    return (
      <header className="main-header">
          <div className="container">
              <nav className="navbar navbar-default">
                  <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navigation" aria-expanded="false">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                      </button>
                      <a href="index.html" className="logo">
                          <img src="img/logos/logo.png" alt="logo"></img>
                      </a>
                  </div>

                  <div className="navbar-collapse collapse" role="navigation" aria-expanded="true" id="app-navigation">
                      <ul className="nav navbar-nav">
                          <li className="dropdown active">
                              <a tabindex="0" data-toggle="dropdown" data-submenu="" aria-expanded="false">
                                  Home<span className="caret"></span>
                              </a>
                              <ul className="dropdown-menu">
                                  <li><a href="index.html">Home 1</a></li>
                                  <li><a href="index-2.html">Home 2</a></li>
                                  <li><a href="index-3.html">Home 3</a></li>
                                  <li><a href="index-4.html">Home 4</a></li>
                                  <li><a href="index-5.html">Home 5</a></li>
                              </ul>
                          </li>
                          <li className="dropdown">
                              <a tabindex="0" data-toggle="dropdown" data-submenu="" aria-expanded="false">
                                  Properties<span className="caret"></span>
                              </a>
                              <ul className="dropdown-menu">
                                  <li className="dropdown-submenu">
                                      <a tabindex="0">Properties List</a>
                                      <ul className="dropdown-menu">
                                          <li><a href="properties-list-rightside.html">Properties List Right Sidebar</a></li>
                                          <li><a href="properties-list-leftside.html">Properties List Left Sidebar</a></li>
                                          <li><a href="properties-list-fullwidth.html">Properties Full Width</a></li>
                                      </ul>
                                  </li>
                                  <li className="dropdown-submenu">
                                      <a tabindex="0">Properties Grid</a>
                                      <ul className="dropdown-menu">
                                          <li><a href="properties-grid-rightside.html">Properties Grid Right Sidebar</a></li>
                                          <li><a href="properties-grid-leftside.html">Properties Grid Left Sidebar</a></li>
                                          <li><a href="properties-grid-fullwidth.html">Properties Grid Full Width</a></li>
                                      </ul>
                                  </li>
                                  <li className="dropdown-submenu">
                                      <a tabindex="0">Map View</a>
                                      <ul className="dropdown-menu">
                                          <li><a href="properties-map-leftside-list.html">Map Left Sidebar List</a></li>
                                          <li><a href="properties-map-rightside-list.html">Map Right Sidebar List</a></li>
                                          <li><a href="properties-map-leftside-grid.html">Map Left Sidebar Grid</a></li>
                                          <li><a href="properties-map-rightside-grid.html">Map Right Sidebar Grid</a></li>
                                          <li><a href="properties-map-full.html">Map Full Width</a></li>
                                      </ul>
                                  </li>
                                  <li className="dropdown-submenu">
                                      <a tabindex="0">Property Detail</a>
                                      <ul className="dropdown-menu">
                                          <li><a href="properties-details.html">Property Detail 1</a></li>
                                          <li><a href="properties-details-2.html">Property Detail 2</a></li>
                                          <li><a href="properties-details-3.html">Property Detail 3</a></li>
                                      </ul>
                                  </li>
                              </ul>
                          </li>
                          <li className="dropdown">
                              <a tabindex="0" data-toggle="dropdown" data-submenu="" aria-expanded="false">
                                  Agents<span className="caret"></span>
                              </a>
                              <ul className="dropdown-menu">
                                  <li><a href="agent-listing-grid.html">Agent grid</a></li>
                                  <li><a href="agent-listing-grid-sidebar.html">Agent Grid sidebarbar</a></li>
                                  <li><a href="agent-listing-row.html">Agent list</a></li>
                                  <li><a href="agent-listing-row-sidebar.html">Agent List Sidebarbar</a></li>
                                  <li><a href="agent-single.html">Agent Detail</a></li>
                              </ul>
                          </li>
                          <li className="dropdown">
                              <a tabindex="0" data-toggle="dropdown" data-submenu="" aria-expanded="false">
                                  Blog<span className="caret"></span>
                              </a>
                              <ul className="dropdown-menu">
                                  <li><a href="blog-right-sidebar.html">Blog right sidebar</a></li>
                                  <li><a href="blog-left-sidebar.html">Blog left sidebar</a></li>
                                  <li><a href="blog-full-width.html">Blog full width</a></li>
                                  <li><a href="blog-creative.html">Blog creative</a></li>
                                  <li><a href="blog-single.html">Blog Detail</a></li>
                              </ul>
                          </li>
                          <li className="dropdown">
                              <a tabindex="0" data-toggle="dropdown" data-submenu="" aria-expanded="false">
                                  Pages<span className="caret"></span>
                              </a>
                              <ul className="dropdown-menu">
                                  <li className="dropdown-submenu">
                                      <a tabindex="0">Extras</a>
                                      <ul className="dropdown-menu">
                                          <li><a href="typography.html">Typography</a></li>
                                          <li><a href="pricing-tables.html">Pricing Tables</a></li>
                                          <li><a href="elements.html">Elements</a></li>
                                          <li><a href="icon.html">icon</a></li>
                                      </ul>
                                  </li>
                                  <li className="dropdown-submenu">
                                      <a tabindex="0">User Profile</a>
                                      <ul className="dropdown-menu">
                                          <li><a href="user-profile.html">User profile</a></li>
                                          <li><a href="my-properties.html">My Properties</a></li>
                                          <li><a href="favorited-properties.html">Favorited Properties</a></li>
                                          <li><a href="submit-property.html">Submit Property</a></li>
                                      </ul>
                                  </li>
                                  <li className="dropdown-submenu">
                                      <a tabindex="0">Contact</a>
                                      <ul className="dropdown-menu">
                                          <li><a href="contact.html">Contact</a></li>
                                          <li><a href="contact-2.html">Contact 2</a></li>
                                      </ul>
                                  </li>
                                  <li><a href="about.html">About Us</a></li>
                                  <li><a href="faq.html">Faq</a></li>
                                  <li><a href="login.html">Login</a></li>
                                  <li><a href="signup.html">Signup</a></li>
                                  <li><a href="forgot-password.html">Forgot Password</a></li>
                                  <li><a href="404.html">404 Error</a></li>
                              </ul>
                          </li>
                      </ul>
                      <ul className="nav navbar-nav navbar-right rightside-navbar">
                          <li>
                              <a href="submit-property.html" className="button">
                                  Submit Property
                              </a>
                          </li>
                      </ul>
                  </div>


              </nav>
          </div>
      </header>


    )
  }
}

export default Menu;
