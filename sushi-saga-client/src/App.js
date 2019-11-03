import React, { Component } from 'react';
import API from "./adapters/API"
import SETTINGS from "./settings"
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

class App extends Component {
  state = {
    allSushi: [],
    currentPage: 0,
    moneyRemaining: 100
  }

  componentDidMount() {
    API.getSushi()
      .then(allSushi => this.setState({ allSushi }))
      .catch(console.error);
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          allSushi={this.state.allSushi}
          currentPage={this.state.currentPage}
          eatDish={this.eatDish}
          incrementCurrentPage={this.incrementCurrentPage}
          moneyRemaining={this.state.moneyRemaining}
        />
        <Table
          dishesEaten={this.countDishesEaten()}
          moneyRemaining={this.state.moneyRemaining}
        />
      </div>
    );
  }

  eatDish = sushi => {
    const eatenSushi = { ...sushi }
    eatenSushi.eaten = true;
    
    this.setState(prevState => {
      return {
        allSushi: prevState.allSushi.map(sushi => {
          return (sushi.id === eatenSushi.id) ? eatenSushi : sushi;
        }),
        moneyRemaining: prevState.moneyRemaining - eatenSushi.price
      }
    });
  }

  countDishesEaten = () => {
    const eatenDishes = this.state.allSushi.filter(sushi => {
      return sushi.eaten;
    });
    return eatenDishes.length;
  }

  incrementCurrentPage = () => {
    if (this.onLastPage()) {
      this.setState({ currentPage: 0 });
    } else {
      this.setState(prevState => {
        return { currentPage: ++prevState.currentPage }
      });
    }
  }

  onLastPage = () => {
    const lastPage = (this.state.allSushi.length / SETTINGS.pageSize) - 1;
    return this.state.currentPage === lastPage; 
  }
}

export default App;