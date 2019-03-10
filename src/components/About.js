import React, { Component } from 'react'
import NavBar from './NavBar';
import Footer from './Footer';
import './Styles.scss'
import lunch from '../assets/lunch.png'

export default class About extends Component {
  render() {
    return (
      <div>
				<NavBar />
				<div className="containerAbout">
					<div className="textAbout">
					<span class="importantAbout">Cantina Trend</span> met en relation les restaurants se trouvant à proximité des utilisateurs afin de vous proposer une liste d'établissements qui puissent satisfaire votre estomac à tout moment, peu importe où vous vous situez.
					</div>
					<div className="textAbout">
					Nous recessons tous les restaurateurs de toutes spécialités confondues afin que vous puissiez combler toutes vos envies.
					</div>
					<div className="textAbout">
					N'hésitez pas à retrouver toute la communauté <span class="importantAbout">Cantina Trend</span> sur nos réseaux sociaux !
					</div>
					<img src={lunch} className="picAbout" alt="repas"/>
				</div>
				<Footer/>
      </div>
    )
  }
}
