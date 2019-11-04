import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import MoneyMachine from './components/MoneyMachine'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state={
    sushis: [],
    startIndex: 0,
    budget: 100,
    sushisEaten: []
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => this.setState({sushis: sushis}))
  }

  moreSushiFunction = () => {
    this.setState({
      startIndex: this.state.startIndex+4
    })
  }

  eatSushi = (id, price) => {
    if(this.state.sushisEaten.includes(id) || price > this.state.budget){alert('This does not work')}
    else{
    this.setState({
      budget: this.state.budget-price,
      sushisEaten: [...this.state.sushisEaten, id] 
    })
  }
  }

  addMoney = (event) => {
    event.preventDefault()
    this.setState({
      budget: this.state.budget+parseInt(event.target[0].value)
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.sushis}
          startIndex={this.state.startIndex}
          moreSushiFunction={this.moreSushiFunction}
          eatSushi={this.eatSushi}
          sushisEaten={this.state.sushisEaten}
          />
        <Table budget={this.state.budget} sushisEaten={this.state.sushisEaten}/>
        <MoneyMachine addMoney={this.addMoney}/>
      </div>
    );
  }
}

export default App;