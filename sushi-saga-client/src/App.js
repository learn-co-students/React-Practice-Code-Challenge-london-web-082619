import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    startIndex: 0,
    money: 85,
    eatenSushis: []
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(json => this.setState({
        sushis: json
      }))
  }

  nextFourSushis = () => {
    let newState = 0
    if (this.state.startIndex <= this.state.sushis.length) {newState = this.state.startIndex + 4}

    this.setState({
      startIndex: newState
    })
  }

  eatSushi = (id, price) => {
    if (this.state.eatenSushis.includes(id)) return
    if (this.state.money < price) return

    this.setState({
      eatenSushis: [
        ...this.state.eatenSushis,
        id
      ],
      money: this.state.money - price
    })
  }

  render() {
    const {sushis, startIndex, eatenSushis} = this.state
    const fourSushis = sushis.slice(startIndex, startIndex + 4)
    return (
      <div className="app">
        <SushiContainer  sushis={fourSushis} nextFourSushis={this.nextFourSushis} eatSushi={this.eatSushi} eatenSushis={eatenSushis}/>
        <Table money={this.state.money}/>
      </div>
    );
  }
}

export default App;