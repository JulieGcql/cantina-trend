import React, { Component } from 'react'
import Facebook from '../assets/facebook.png'
import Twitter from '../assets/twitter.png'
import Instagram from '../assets/instagram.png'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footerText">
          <div className="footerTitle">
          Cantina Trend©
          </div>
          <div className="footerItalic">Le site de référence pour toutes vos envies culinaires !</div>
          </div>
        <div className="socialIcons">
          <img src={Facebook} alt='Facebook'/>
          <img src={Twitter} alt='Twitter'/>
          <img src={Instagram} alt='Instagram'/>
        </div>
      </div>
    )
  }
}
