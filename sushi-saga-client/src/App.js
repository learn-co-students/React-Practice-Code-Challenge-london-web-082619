import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import API from './adabters/API';
import SushiWallet from './components/SushiWallet';



class App extends Component {
  state ={
    allSushis: [],
    eatenSushis: [],
    budget: Math.floor(Math.random() * 50 ) + 10,
    cantAfford: false

  }


  componentDidMount() {
    API.getAllSushis()
    .then(allSushis => this.setState({allSushis}))
  }
  
  eatSushi = sushi => {
    if (this.state.eatenSushis.includes(sushi.id)) return;
    if (this.state.budget < sushi.price){
      this.setState({ cantAfford: true })
      return ;
    }
    this.setState({
      eatenSushis: [...this.state.eatenSushis , sushi.id],
      budget: this.state.budget = sushi.price,
      cantAfford: false
    })
  } 

  addFunds = ( funds ) => this.setState((prevState) => {
    return {

      budget: prevState.budget + parseInt(funds) 
    }
  })
  render() {
    const sushis = this.state.allSushis.map(sushi => ({
      // for each sushi return a copy of each sushi and send isEaten props to use it in Sushi component
      ...sushi,
      // this props has array of sushi id's so if this props has a sushi id that is mean this sushi has been eaten
      isEaten: this.state.eatenSushis.includes(sushi.id)
    }))
    // const {sushis, startIndex} = this.state
    // const fourSushis = sushis.slice(startIndex, sushis)

    // const finalSushis = fourSushis.map(sushi => ({...sushi}))
    return (
      <div className="app">
        <SushiContainer 
          sushis={sushis} 
          sushiClickHandler={this.eatSushi}
        />
        <Table plates={this.state.eatenSushis} budget={this.state.budget} showBrokeMessage={this.state.cantAfford} />
        <SushiWallet addFunds={this.addFunds} />
      </div>
    );
  }
}

export default App;