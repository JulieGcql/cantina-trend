import React, { Component } from 'react';
import {Route,BrowserRouter, Switch} from 'react-router-dom';
import Template from './Template';
import List from './List'
import About from './About'

export default class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Template}/>
            <Route path="/restaurants" component={List}/>
            <Route path="/apropos" component={About}/>
          </Switch>          
        </div>
      </BrowserRouter>
    )
  }
}
