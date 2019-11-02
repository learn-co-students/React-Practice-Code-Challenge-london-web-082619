import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    displayIndex: 0,
    eaten: [],
    funds: 100
  }

  getSushi = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(sushis => this.setState({ sushis }))
  }

  chooseFourSushis = () => {
    return this.state.sushis.slice(this.state.displayIndex, this.state.displayIndex + 4)
  }

  eat = (sushiID) => {
    const eaten = this.state.sushis.find(sushi => sushi.id === sushiID)
    const newFunds = this.state.funds - eaten.price

    this.state.funds > 0 && !this.state.eaten.includes(sushiID) && this.state.funds > eaten.price ?
      this.setState({ funds: newFunds, eaten: [...this.state.eaten, sushiID] }) : null

  }

  more = (event) => {
    let newDisplayIndex = this.state.displayIndex + 4

    //bonus
    if (newDisplayIndex >= this.state.sushis.length) {
      newDisplayIndex = 0
    }

    this.setState({
      displayIndex: newDisplayIndex
    })
  }



  render() {
    return (
      <div className="app">
        <SushiContainer
          sushi={this.chooseFourSushis()}
          more={this.more}
          eat={this.eat}
          eaten={this.state.eaten}

        />
        <Table funds={this.state.funds} eaten={this.state.eaten} />
      </div>
    );
  }

  componentDidMount() {
    this.getSushi()
  }
}

export default App;