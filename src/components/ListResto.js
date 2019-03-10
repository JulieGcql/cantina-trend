import React, { Component } from 'react'
import plus from '../assets/Plus.svg'

export default class ListResto extends Component {
  state = {
      on: true,
  }

  collapse = () => {
      this.setState({on:!this.state.on})
  }


  render() {
    const change = this.state.on ? "hiddenInfos" : "showInfos";
    return (
      <div class="containerCards">
        <div class="col-xl-8 col-lg-8 col-md-10 col-sm-12 col-12">
          <div class="cardResto">
            <div className="headerResto">
              <p className="nameResto">{this.props.name}</p>
              <img className="logoResto" src={this.props.logo} alt={this.props.name}/>
            </div>
            <div className="showInfos">
              <div className="containerBtn">
                  <img src={plus} alt="Cliquez" className="showBtn hoverable" onClick={()=>this.collapse()}/>
              </div>
              <div className={change} collapse={()=>this.collapse()}>
                <p className="description">{this.props.description}</p>
                <div className="note">Avis : {this.props.note}/5</div>
              </div>
              <button className="btnResto hoverable">LET'S GO !</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
