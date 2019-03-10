import React, { Component } from 'react'
import ListResto from './ListResto'
import Spinner from './Spinner'
import NavBar from './NavBar';

let api = 'https://xlmd94l53b.execute-api.eu-west-2.amazonaws.com/api?'
  
export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restoList : [],
      isLoaded: false
    }
    this.fetchRestaurants = this.fetchRestaurants.bind(this)
  }

  fetchRestaurants(api) {
    fetch(api)
    .then(res => res.json())
    .then(data => {
      this.setState({
        isLoaded: true,
        restosList: data.restaurants,
      })
    })
    .catch(error => {
      console.log(error);
    });
  }

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      api += `lat=${position.coords.latitude}&long=${position.coords.longitude}`;
      this.fetchRestaurants(api);
    });
  }
 
  render() {
 
    let {isLoaded} = this.state;
    if (!isLoaded) {
      return (
        <div className="spinnerStyle" style={{height:'100vh'}}>
          <div className="waitingText">Patience, nous concoctons votre liste de restaurants !<br />
          Si le temps de chargement est trop long, veuillez rafraichir la page.</div>
          <Spinner />
        </div>
      )
    }
    else if (this.state.restosList !== []) {
      return (
        <div>
          <NavBar />
          <div className="containerList">
            <h3 className="title">Quels sont les restaurants à proximité?</h3>

            {this.state.restosList && this.state.restosList.map((resto, index) => {
              return(
                <ListResto key={index} name={resto.name} logo={resto.logo} note={resto.note} description={resto.description} />
              )
            })}
          </div>
        </div>
      )
    } else {
      this.setState (
        {restosList: null}
      );  
    }
  }
}