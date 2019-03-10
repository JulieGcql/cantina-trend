import React, { Component } from 'react'
import logo from '../assets/logo.png'
import './Styles.scss'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="containerHeader">
          <div className="row justify-content-center">
          <img src={logo} className="logo" alt="logo" />
          </div>
          <div class="textHome">
            <h3 className="titleHome">Cantina Trend</h3>
            <div className="descriptionHome">
              <p className="textHeader">Besoin d'organiser au plus vite un repas entre collègues mais vous manquez d'inspiration ?</p>
              <p className="textHeader">Retrouvez les restaurants situés le plus proche de votre emplacement à tout moment !</p>
              <p className="textHeader">Pour cela rien de plus simple : autorisez votre navigateur à connaître votre position et à table !</p>
            </div>
            <div>
              <a className="btnResto hoverable" href="/restaurants">LET'S GO !</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
