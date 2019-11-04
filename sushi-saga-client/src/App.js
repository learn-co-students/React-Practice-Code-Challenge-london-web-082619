import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const SUSHI_URL = "http://localhost:3000/sushis";
let numberOfSushiServed = 0;

class App extends Component {

  state = {
    sushi: [],
    sushiBeingServed: [],
    numberOfSushiServed: 0,
    eatenSushi: [],
    moneyRemaining: 100
  }

  componentDidMount(){
    this.getSushi().then(this.updateStateWithSushi)
  }

  getSushi = () => {
    return fetch(SUSHI_URL).then(resp => resp.json())
  }

  updateStateWithSushi = (sushi) => {
    this.setState({
      ...this.state,
      sushi: sushi,
      sushiBeingServed: sushi.slice(0,4),
      numberOfSushiServed: 4
    })
    console.log('The state is now...', this.state)
  }

  serveMoreSushi = () => {
    let start = this.state.numberOfSushiServed
    let end = start + 4

    this.setState({
      ...this.state,
      sushiBeingServed: this.state.sushi.slice(start, end),
      numberOfSushiServed: this.state.numberOfSushiServed + 4
    })
    console.log(this.state)
  }

  eatSushi = (sushi) => {

    if (this.state.moneyRemaining < sushi.price){
      alert("You don't have enough money to buy this sushi!")
      return false
    } else {
      this.setState({
        ...this.state,
        moneyRemaining: this.state.moneyRemaining - sushi.price,
        eatenSushi: [
          ...this.state.eatenSushi,
          sushi
        ]
      })
      return true
    }
  }

    

  addSushiToEatenSushi = sushi => {

  }
  
  // when sushi is eaten...
    // image disapears 
    // money is reduced by sushi price
    // plate is added to table 

  render() {
    return (
      <div className="app">
        < SushiContainer 
          sushi={this.state.sushiBeingServed}
          serveMoreSushi={this.serveMoreSushi}
          eatSushi={this.eatSushi}
        />
        < Table 
          eatenSushi={this.state.eatenSushi}
          moneyRemaining={this.state.moneyRemaining}
        />
      </div>
    );
  }
}

export default App;