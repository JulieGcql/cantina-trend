import React, { Component } from 'react'
import Home from './Home'
import Footer from './Footer'
import NavBar from './NavBar'

export default class Template extends Component {
  render() {
    return (
      <div>
          <NavBar />
          <Home />
          <Footer />
      </div>
    )
  }
}
